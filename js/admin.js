(function () {
  'use strict';
  var MYA = window.MYA, D = MYA.datos;
  var $ = function (s) { return document.querySelector(s); };
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  }
  function norm(s) { return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function linea(id) { return MYA.lineas.filter(function (l) { return l.id === id; })[0]; }

  var productos = [];
  var filas = $('#filas'), guardado = $('#guardado');
  var SIN_FOTO = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#eef0f5"/><path d="M30 84l20-24 14 16 10-12 16 20z" fill="#c9cedb"/><circle cx="82" cy="42" r="8" fill="#c9cedb"/></svg>');

  /* ---------- Guardado (en serie, con aviso) ---------- */
  var cola = Promise.resolve(), pendientes = 0;
  function guardar() {
    pendientes++;
    guardado.textContent = 'Guardando…';
    guardado.className = '';
    var copia = productos.slice();
    cola = cola.then(function () { return D.guardar(copia); }).then(function () {
      if (--pendientes === 0) { guardado.textContent = 'Cambios guardados ✓'; guardado.className = 'ok'; }
    }, function (e) {
      pendientes--;
      guardado.textContent = 'No se pudo guardar: ' + mensajeError(e);
      guardado.className = 'mal';
    });
    return cola;
  }
  function mensajeError(e) {
    var c = (e && (e.code || e.message)) || '';
    if (/permission-denied/.test(c)) return 'esta cuenta no tiene permiso de edición.';
    if (/invalid-credential|wrong-password|user-not-found|invalid-email/.test(c)) return 'correo o contraseña incorrectos.';
    if (/too-many-requests/.test(c)) return 'demasiados intentos; espere unos minutos.';
    if (/network|Failed to fetch|unavailable/.test(c)) return 'sin conexión a internet.';
    return c || 'error desconocido.';
  }
  window.addEventListener('beforeunload', function (e) { if (pendientes > 0) { e.preventDefault(); e.returnValue = ''; } });

  /* ---------- Listado ---------- */
  function visibles() {
    var t = norm($('#a-buscar').value.trim()), l = $('#a-linea').value, e = $('#a-estado').value;
    return productos.filter(function (p) {
      if (l && p.linea !== l) return false;
      if (e === 'sinprecio' && p.precio !== null) return false;
      if (e === 'agotado' && !p.agotado) return false;
      if (e === 'oculto' && !p.oculto) return false;
      return !t || norm(p.nombre + ' ' + p.grupo).indexOf(t) !== -1;
    });
  }
  function pintar() {
    var lista = visibles();
    $('#a-cuenta').textContent = lista.length + ' de ' + productos.length + ' productos';
    $('#a-vacio').hidden = lista.length > 0;
    filas.innerHTML = lista.map(function (p) {
      var l = linea(p.linea), src = D.fotoSync(p);
      return '<div class="adm-fila' + (p.oculto ? ' es-oculto' : '') + '" data-id="' + esc(p.id) + '">' +
        '<span class="c-foto"><img src="' + esc(src || SIN_FOTO) + '" alt=""' + (src ? '' : ' data-pend="1"') + ' loading="lazy"></span>' +
        '<span class="c-nombre"><b>' + esc(p.nombre) + '</b><small>' + esc((l ? l.nombre : p.linea) + ' › ' + p.grupo) + '</small></span>' +
        '<label class="c-precio"><span>Precio</span><input type="number" min="0" step="1" inputmode="numeric" value="' + (p.precio === null ? '' : p.precio) +
        '" placeholder="Por cotización" data-campo="precio" aria-label="Precio de ' + esc(p.nombre) + '"></label>' +
        '<label class="c-check"><input type="checkbox" data-campo="agotado"' + (p.agotado ? ' checked' : '') + '><span>Agotado</span></label>' +
        '<label class="c-check"><input type="checkbox" data-campo="oculto"' + (p.oculto ? ' checked' : '') + '><span>Oculto</span></label>' +
        '<span class="c-acc"><button type="button" data-acc="editar">Editar</button><button type="button" class="peligro" data-acc="borrar">Eliminar</button></span></div>';
    }).join('');
    Array.prototype.forEach.call(filas.querySelectorAll('img[data-pend]'), function (img) {
      var p = porId(img.closest('.adm-fila').getAttribute('data-id'));
      D.foto(p).then(function (src) { if (src) img.src = src; });
    });
  }
  function porId(id) { return productos.filter(function (p) { return p.id === id; })[0]; }

  filas.addEventListener('change', function (e) {
    var campo = e.target.getAttribute('data-campo');
    if (!campo) return;
    var fila = e.target.closest('.adm-fila'), p = porId(fila.getAttribute('data-id'));
    if (campo === 'precio') {
      p.precio = e.target.value === '' ? null : Math.max(0, Math.round(Number(e.target.value)));
      e.target.value = p.precio === null ? '' : p.precio;
    } else {
      p[campo] = e.target.checked;
      if (campo === 'oculto') fila.classList.toggle('es-oculto', p.oculto);
    }
    guardar();
  });
  filas.addEventListener('click', function (e) {
    var acc = e.target.getAttribute('data-acc');
    if (!acc) return;
    var p = porId(e.target.closest('.adm-fila').getAttribute('data-id'));
    if (acc === 'editar') abrirEditor(p);
    if (acc === 'borrar' && window.confirm('¿Eliminar «' + p.nombre + '» del catálogo? Esta acción no se puede deshacer.')) {
      productos.splice(productos.indexOf(p), 1);
      D.borrarFoto(p.foto);
      pintar();
      guardar();
    }
  });
  ['#a-buscar', '#a-linea', '#a-estado'].forEach(function (s) { $(s).addEventListener('input', pintar); });

  /* ---------- Editor ---------- */
  var dlg = $('#editor'), enEdicion = null, fotoNueva = null;
  var selL = $('#e-linea'), selG = $('#e-grupo');
  var opcionesLinea = MYA.lineas.map(function (l) { return '<option value="' + l.id + '">' + esc(l.nombre) + '</option>'; }).join('');
  selL.innerHTML = opcionesLinea;
  $('#a-linea').insertAdjacentHTML('beforeend', opcionesLinea);
  function cargarGrupos(actual) {
    var l = linea(selL.value);
    selG.innerHTML = l.grupos.map(function (g) { return '<option>' + esc(g.nombre) + '</option>'; }).join('');
    if (actual) selG.value = actual;
  }
  selL.addEventListener('change', function () { cargarGrupos(); });

  function abrirEditor(p) {
    enEdicion = p || null;
    fotoNueva = null;
    $('#ed-titulo').textContent = p ? 'Editar producto' : 'Nuevo producto';
    $('#e-nombre').value = p ? p.nombre : '';
    selL.value = p ? p.linea : ($('#a-linea').value || MYA.lineas[0].id);
    cargarGrupos(p && p.grupo);
    $('#e-precio').value = p && p.precio !== null ? p.precio : '';
    $('#e-agotado').checked = !!(p && p.agotado);
    $('#e-oculto').checked = !!(p && p.oculto);
    $('#e-foto').value = '';
    $('#ed-error').hidden = true;
    var vista = $('#e-vista');
    vista.hidden = true;
    if (p) D.foto(p).then(function (src) { if (src && enEdicion === p && !fotoNueva) { vista.src = src; vista.hidden = false; } });
    dlg.showModal();
  }
  $('#nuevo').addEventListener('click', function () { abrirEditor(null); });
  $('#ed-cancelar').addEventListener('click', function () { dlg.close(); });

  /* Reduce la imagen a 600 px y la deja en JPEG sobre fondo blanco */
  function reducir(archivo) {
    return new Promise(function (ok, mal) {
      var url = URL.createObjectURL(archivo), img = new Image();
      img.onload = function () {
        var esc2 = Math.min(1, 600 / Math.max(img.width, img.height));
        var c = document.createElement('canvas');
        c.width = Math.round(img.width * esc2);
        c.height = Math.round(img.height * esc2);
        var x = c.getContext('2d');
        x.fillStyle = '#fff';
        x.fillRect(0, 0, c.width, c.height);
        x.drawImage(img, 0, 0, c.width, c.height);
        URL.revokeObjectURL(url);
        ok(c.toDataURL('image/jpeg', 0.82));
      };
      img.onerror = function () { URL.revokeObjectURL(url); mal(new Error('El archivo no es una imagen válida.')); };
      img.src = url;
    });
  }
  $('#e-foto').addEventListener('change', function (e) {
    var f = e.target.files[0];
    if (!f) return;
    reducir(f).then(function (data) {
      fotoNueva = data;
      $('#e-vista').src = data;
      $('#e-vista').hidden = false;
    }).catch(function (err) { mostrarErrorEd(err.message); e.target.value = ''; });
  });
  function mostrarErrorEd(t) { var el = $('#ed-error'); el.textContent = t; el.hidden = false; }

  $('#form-prod').addEventListener('submit', function (e) {
    e.preventDefault();
    var btn = $('#ed-guardar');
    btn.disabled = true;
    var subir = fotoNueva ? D.subirFoto(fotoNueva) : Promise.resolve(null);
    subir.then(function (ref) {
      var p = enEdicion || { id: 'n' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), foto: '' };
      var fotoVieja = p.foto;
      p.nombre = $('#e-nombre').value.trim();
      p.linea = selL.value;
      p.grupo = selG.value;
      p.precio = $('#e-precio').value === '' ? null : Math.max(0, Math.round(Number($('#e-precio').value)));
      p.agotado = $('#e-agotado').checked;
      p.oculto = $('#e-oculto').checked;
      if (ref) { p.foto = ref; if (fotoVieja && fotoVieja !== ref) D.borrarFoto(fotoVieja); }
      if (!enEdicion) productos.push(p);
      dlg.close();
      pintar();
      return guardar();
    }).catch(function (err) {
      mostrarErrorEd('No se pudo guardar: ' + mensajeError(err));
    }).then(function () { btn.disabled = false; });
  });

  /* ---------- Sesión ---------- */
  function mostrar(que) {
    $('#cargando').hidden = true;
    $('#login').hidden = que !== 'login';
    $('#panel').hidden = que !== 'panel';
    $('#salir').hidden = que !== 'panel' || D.modo === 'demo';
  }
  $('#aviso-demo').hidden = D.modo !== 'demo';
  D.alCambiarSesion(function (usuario, error) {
    if (error) { $('#cargando').textContent = 'No se pudo conectar con Firebase: ' + mensajeError(error); return; }
    if (!usuario) { mostrar('login'); return; }
    D.cargar().then(function (lista) { productos = lista; pintar(); mostrar('panel'); });
  });
  $('#login').addEventListener('submit', function (e) {
    e.preventDefault();
    var err = $('#login-error');
    err.hidden = true;
    D.entrar($('#l-correo').value.trim(), $('#l-clave').value).catch(function (ex) {
      err.textContent = 'No se pudo entrar: ' + mensajeError(ex);
      err.hidden = false;
    });
  });
  $('#salir').addEventListener('click', function () { D.salir(); });
})();
