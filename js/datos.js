/*
 * Capa de datos del catálogo editable.
 * - Con Firebase configurado: lee y escribe en Firestore (1 documento para todo el
 *   catálogo + 1 documento por foto subida) y usa Firebase Auth para el panel.
 * - Sin configurar: modo demostración con localStorage.
 */
(function () {
  'use strict';
  var MYA = window.MYA;
  var CFG = window.MYA_FIREBASE || null;
  var BASE = 'https://www.gstatic.com/firebasejs/10.14.1/';
  var K_DEMO = 'mya-demo-catalogo', K_FOTO = 'mya-demo-foto-', K_CACHE = 'mya-cache-catalogo';
  var memoFotos = {};
  var conexion = null;

  function leer(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } }
  function escribir(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } }

  /* Productos iniciales: los del brochure definidos en catalogo.js */
  function semilla() {
    var out = [];
    MYA.lineas.forEach(function (l) {
      l.grupos.forEach(function (g) {
        g.fotos.forEach(function (f) {
          out.push({ id: 'p' + f[0], nombre: f[1], linea: l.id, grupo: g.nombre, foto: f[0], precio: null, agotado: false, oculto: false });
        });
      });
    });
    return out;
  }
  function limpiar(p) {
    var precio = p.precio === '' || p.precio === null || p.precio === undefined || isNaN(Number(p.precio)) ? null : Math.max(0, Math.round(Number(p.precio)));
    return { id: String(p.id), nombre: String(p.nombre || '').trim(), linea: String(p.linea || ''), grupo: String(p.grupo || ''),
      foto: String(p.foto || ''), precio: precio, agotado: !!p.agotado, oculto: !!p.oculto };
  }

  function conectar(conAuth) {
    if (!CFG) return Promise.resolve(null);
    if (!conexion) {
      conexion = Promise.all([import(BASE + 'firebase-app.js'), import(BASE + 'firebase-firestore-lite.js')]).then(function (m) {
        var app = m[0].initializeApp(CFG);
        return { app: app, fs: m[1], db: m[1].getFirestore(app) };
      });
    }
    if (!conAuth) return conexion;
    return conexion.then(function (c) {
      if (c.auth) return c;
      return import(BASE + 'firebase-auth.js').then(function (a) { c.A = a; c.auth = a.getAuth(c.app); return c; });
    });
  }

  var datos = {
    modo: CFG ? 'firebase' : 'demo',

    /* Lo que hay disponible al instante (para pintar sin esperar la red) */
    enCache: function () {
      var c = leer(CFG ? K_CACHE : K_DEMO);
      return c && c.length ? c.map(limpiar) : semilla();
    },

    cargar: function () {
      if (!CFG) return Promise.resolve(datos.enCache());
      return conectar().then(function (c) {
        return c.fs.getDoc(c.fs.doc(c.db, 'catalogo', 'principal'));
      }).then(function (snap) {
        var lista = snap.exists() && snap.data().productos;
        if (!lista || !lista.length) return semilla();
        lista = lista.map(limpiar);
        escribir(K_CACHE, lista);
        return lista;
      }).catch(function (e) {
        console.warn('No se pudo leer el catálogo en línea; se usa la copia local.', e);
        return datos.enCache();
      });
    },

    guardar: function (productos) {
      var lista = productos.map(limpiar);
      if (!CFG) {
        return escribir(K_DEMO, lista) ? Promise.resolve() : Promise.reject(new Error('Sin espacio en este navegador.'));
      }
      return conectar(true).then(function (c) {
        return c.fs.setDoc(c.fs.doc(c.db, 'catalogo', 'principal'), { productos: lista, actualizado: Date.now() });
      }).then(function () { escribir(K_CACHE, lista); });
    },

    /* Fotos: "016" → archivo del sitio; "fs:abc" → foto subida desde el panel */
    esSubida: function (p) { return p.foto.indexOf('fs:') === 0; },
    fotoSync: function (p) {
      if (!p.foto) return null;
      if (!datos.esSubida(p)) return 'img/prod/' + p.foto + '.jpg';
      return memoFotos[p.foto] || null;
    },
    foto: function (p) {
      var listo = datos.fotoSync(p);
      if (listo || !p.foto) return Promise.resolve(listo);
      var id = p.foto.slice(3);
      var pr = CFG
        ? conectar().then(function (c) { return c.fs.getDoc(c.fs.doc(c.db, 'fotos', id)); })
          .then(function (s) { return s.exists() ? s.data().data : null; })
        : Promise.resolve(leer(K_FOTO + id));
      return pr.then(function (src) { if (src) memoFotos[p.foto] = src; return src; }).catch(function () { return null; });
    },
    subirFoto: function (dataUrl) {
      var id = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
      var ref = 'fs:' + id;
      var pr = CFG
        ? conectar(true).then(function (c) { return c.fs.setDoc(c.fs.doc(c.db, 'fotos', id), { data: dataUrl }); })
        : (escribir(K_FOTO + id, dataUrl) ? Promise.resolve() : Promise.reject(new Error('Sin espacio en este navegador.')));
      return pr.then(function () { memoFotos[ref] = dataUrl; return ref; });
    },
    borrarFoto: function (ref) {
      if (!ref || ref.indexOf('fs:') !== 0) return Promise.resolve();
      var id = ref.slice(3);
      delete memoFotos[ref];
      if (!CFG) { try { localStorage.removeItem(K_FOTO + id); } catch (e) {} return Promise.resolve(); }
      return conectar(true).then(function (c) { return c.fs.deleteDoc(c.fs.doc(c.db, 'fotos', id)); }).catch(function () {});
    },

    /* Sesión del panel */
    alCambiarSesion: function (cb) {
      if (!CFG) { cb({ demo: true }); return; }
      conectar(true).then(function (c) { c.A.onAuthStateChanged(c.auth, cb); }).catch(function (e) { cb(null, e); });
    },
    entrar: function (correo, clave) {
      return conectar(true).then(function (c) { return c.A.signInWithEmailAndPassword(c.auth, correo, clave); });
    },
    salir: function () {
      if (!CFG) return Promise.resolve();
      return conectar(true).then(function (c) { return c.A.signOut(c.auth); });
    },

    precio: function (n) {
      return n === null || n === undefined ? '' : '$ ' + new Intl.NumberFormat('es-CO').format(n);
    },
    limpiar: limpiar
  };

  MYA.datos = datos;
})();
