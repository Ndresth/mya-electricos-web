(function () {
  'use strict';
  var MYA = window.MYA;
  var E = MYA.empresa;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function norm(s) { return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function wa(mensaje) { return 'https://wa.me/' + E.whatsapp + '?text=' + encodeURIComponent(mensaje); }
  function linkWa(mensaje, clase, texto) {
    return '<a class="' + clase + '" target="_blank" rel="noopener" href="' + wa(mensaje) + '">' + texto + '</a>';
  }
  function foto(id) { return 'img/prod/' + id + '.jpg'; }
  function marcasDe(l) {
    var vistos = {}, out = [];
    l.grupos.forEach(function (g) { g.marcas.forEach(function (m) { if (!vistos[m] && m !== 'Importados') { vistos[m] = 1; out.push(m); } }); });
    return out;
  }
  function linea(id) { return MYA.lineas.filter(function (l) { return l.id === id; })[0]; }

  var ICONO_WA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

  /* ---------- Contenido generado en el inicio ---------- */
  var circulos = $('#circulos');
  if (circulos) {
    circulos.innerHTML = MYA.lineas.map(function (l) {
      return '<a class="circulo" href="productos.html#' + l.id + '"><span class="foto"><img src="' + foto(l.portada) +
        '" alt="" loading="lazy"></span>' + esc(l.nombre) + '</a>';
    }).join('');
  }

  var grid = $('#lineas-grid');
  if (grid) {
    grid.innerHTML = MYA.lineas.map(function (l) {
      return '<a class="linea" href="productos.html#' + l.id + '"><div class="cabeza"><h3>' + esc(l.nombre) +
        '</h3><span>Variedad de referencias</span></div><div class="img"><img src="' + foto(l.portada) +
        '" alt="" loading="lazy"></div></a>';
    }).join('');
  }

  var dest = $('#destacados');
  if (dest) {
    dest.innerHTML = MYA.destacados.map(function (d) {
      var l = linea(d.linea);
      return '<div><article class="dest"><div class="arriba"><div class="img"><img src="' + foto(d.foto) + '" alt="' + esc(d.nombre) +
        '" loading="lazy"></div><div class="info"><h3>' + esc(d.nombre) + '</h3>' +
        '<div class="dos"><span>Atención por<br>WhatsApp</span><span>Variedad de<br>referencias</span></div>' +
        linkWa('Hola, quiero cotizar: ' + d.nombre + '.', 'btn btn-rojo', 'Cotizar ahora') + '</div></div>' +
        '<p class="pie-d">' + esc(l.nombre) + '. Productos certificados RETIE. Precio según cantidad y referencia.</p></article></div>';
    }).join('');
  }

  var ml = $('#marcas-linea');
  if (ml) {
    ml.innerHTML = MYA.marcasPorLinea.map(function (m, i) {
      var l = linea(m.linea);
      return '<a class="ml c' + (i % 4 + 1) + '" href="productos.html#' + l.id + '"><div class="img">' +
        m.fotos.map(function (f) { return '<img src="' + foto(f) + '" alt="" loading="lazy">'; }).join('') + '</div>' +
        '<div class="banda"><h3>' + esc(m.titulo) + '</h3><div class="cert"><b>' + esc(m.marcas) +
        '</b><span>Productos<br>certificados</span></div><span class="btn btn-negro">Ver productos</span>' +
        '<p>Referencias seleccionadas. Productos de la mejor calidad.</p></div></a>';
    }).join('');
  }

  var logos = $('#marcas-logos');
  if (logos) {
    logos.innerHTML = MYA.marcasLogos.map(function (m) {
      return '<li><img src="img/marcas/' + m + '.png" alt="' + esc(m.replace(/-/g, ' ')) + '" loading="lazy"></li>';
    }).join('');
  }

  /* ---------- Menú, pie y formulario (ambas páginas) ---------- */
  var panel = $('#menu-panel');
  if (panel) {
    panel.innerHTML = '<a class="solo-movil" href="index.html">Inicio</a>' +
      '<a class="solo-movil" href="productos.html">Todos los productos</a>' +
      MYA.lineas.map(function (l) { return '<a href="productos.html#' + l.id + '">' + esc(l.nombre) + '</a>'; }).join('') +
      '<a class="solo-movil" href="index.html#nosotros">Nosotros</a><a class="solo-movil" href="index.html#contacto">Contacto</a>';
    var mb = $('.menu-btn');
    var cerrar = function () { panel.hidden = true; mb.setAttribute('aria-expanded', 'false'); };
    mb.addEventListener('click', function (e) {
      e.stopPropagation();
      panel.hidden = !panel.hidden;
      mb.setAttribute('aria-expanded', String(!panel.hidden));
    });
    panel.addEventListener('click', function (e) { if (e.target.tagName === 'A') cerrar(); });
    document.addEventListener('click', function (e) { if (!panel.contains(e.target)) cerrar(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') cerrar(); });
  }
  var pieLineas = $('#pie-lineas');
  if (pieLineas) {
    pieLineas.innerHTML = MYA.lineas.map(function (l) {
      return '<li><a href="productos.html#' + l.id + '">' + esc(l.nombre) + '</a></li>';
    }).join('');
  }
  var sel = $('#f-linea');
  if (sel) sel.insertAdjacentHTML('beforeend', MYA.lineas.map(function (l) { return '<option>' + esc(l.nombre) + '</option>'; }).join(''));

  $$('.ico-wa').forEach(function (el) { el.insertAdjacentHTML('afterbegin', ICONO_WA); });
  $$('[data-wa]').forEach(function (a) { a.href = wa(a.getAttribute('data-wa')); a.target = '_blank'; a.rel = 'noopener'; });
  var anio = $('#anio');
  if (anio) anio.textContent = new Date().getFullYear();

  var form = $('#form-cotizar');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var msg = 'Hola, soy ' + d.get('nombre') + '.';
      if (d.get('ciudad')) msg += ' Escribo desde ' + d.get('ciudad') + '.';
      if (d.get('linea')) msg += '\nLínea de interés: ' + d.get('linea') + '.';
      msg += '\n' + d.get('mensaje');
      window.open(wa(msg), '_blank', 'noopener');
    });
  }

  /* ---------- Flotantes ---------- */
  var arriba = $('.flot-arriba');
  if (arriba) {
    arriba.addEventListener('click', function () { window.scrollTo({ top: 0 }); });
    var ver = function () { arriba.hidden = window.scrollY < 500; };
    window.addEventListener('scroll', ver, { passive: true });
    ver();
  }
  var comp = $('.flot-compartir');
  if (comp) {
    comp.addEventListener('click', function () {
      var datos = { title: document.title, url: location.href };
      if (navigator.share) navigator.share(datos).catch(function () {});
      else window.open(wa(document.title + ' ' + location.href), '_blank', 'noopener');
    });
  }

  /* ---------- Carruseles ---------- */
  $$('.carrusel').forEach(function (c) {
    var pista = $('.pista', c);
    var puntos = $('.puntos', c);
    var auto = Number(c.getAttribute('data-auto')) || 0;
    var paginas = function () { return Math.max(1, Math.round((pista.scrollWidth - pista.clientWidth) / pista.clientWidth) + 1); };
    var actual = function () { return Math.round(pista.scrollLeft / pista.clientWidth); };
    var ir = function (i) {
      var n = paginas();
      pista.scrollTo({ left: ((i % n) + n) % n * pista.clientWidth });
    };
    var pintar = function () {
      if (!puntos) return;
      var n = paginas();
      if (puntos.children.length !== n) {
        puntos.innerHTML = '';
        for (var i = 0; i < n; i++) {
          var b = document.createElement('button');
          b.type = 'button';
          b.setAttribute('aria-label', 'Ir a la página ' + (i + 1));
          (function (k) { b.addEventListener('click', function () { ir(k); }); })(i);
          puntos.appendChild(b);
        }
      }
      var a = Math.min(actual(), n - 1);
      for (var j = 0; j < n; j++) puntos.children[j].setAttribute('aria-current', String(j === a));
    };
    var ant = $('.ant', c), sig = $('.sig', c);
    if (ant) ant.addEventListener('click', function () { ir(actual() - 1); });
    if (sig) sig.addEventListener('click', function () { ir(actual() + 1); });
    pista.addEventListener('scroll', function () { window.requestAnimationFrame(pintar); }, { passive: true });
    window.addEventListener('resize', pintar);
    pintar();
    if (auto && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      var pausa = false;
      c.addEventListener('pointerenter', function () { pausa = true; });
      c.addEventListener('pointerleave', function () { pausa = false; });
      c.addEventListener('focusin', function () { pausa = true; });
      c.addEventListener('focusout', function () { pausa = false; });
      setInterval(function () { if (!pausa && !document.hidden) ir(actual() + 1); }, auto);
    }
  });

  /* ---------- Catálogo (productos.html) ---------- */
  var cat = $('#catalogo');
  if (cat) {
    var lista = $('#cat-lista'), grid = $('#prods'), cuenta = $('#cuenta'), titulo = $('#cat-titulo'),
      refs = $('#refs'), orden = $('#orden'), campo = $('.buscador input'), catBtn = $('.cat-btn');
    var est = { linea: null, grupo: null, q: new URLSearchParams(location.search).get('q') || '', vista: 'grid' };

    lista.innerHTML = '<li><a href="#todos" data-l="">Todos los productos</a></li>' + MYA.lineas.map(function (l) {
      var sub = l.grupos.length > 1 ? '<ul>' + l.grupos.map(function (g, k) {
        return '<li><a href="#' + l.id + '/' + k + '" data-l="' + l.id + '" data-g="' + k + '">' + esc(g.nombre) + '</a></li>';
      }).join('') + '</ul>' : '';
      return '<li><a href="#' + l.id + '" data-l="' + l.id + '">' + esc(l.nombre) + '</a>' + sub + '</li>';
    }).join('');

    var leerHash = function () {
      var h = decodeURIComponent(location.hash.slice(1)).split('/');
      var l = linea(h[0]);
      est.linea = l ? l.id : null;
      est.grupo = l && h[1] !== undefined && l.grupos[Number(h[1])] ? Number(h[1]) : null;
    };

    var pintar = function () {
      var t = norm(est.q.trim());
      var items = [], bloques = [];
      MYA.lineas.forEach(function (l) {
        if (!t && est.linea && l.id !== est.linea) return;
        l.grupos.forEach(function (g, k) {
          if (!t && est.grupo !== null && k !== est.grupo) return;
          var base = norm(l.nombre + ' ' + g.nombre + ' ' + g.marcas.join(' ') + ' ' + g.items.join(' '));
          var grupoOk = !t || base.indexOf(t) !== -1;
          var n = 0;
          g.fotos.forEach(function (f) {
            if (grupoOk || norm(f[1]).indexOf(t) !== -1) { items.push({ id: f[0], nombre: f[1], grupo: g.nombre }); n++; }
          });
          if (n) bloques.push(g);
        });
      });
      if (orden.value === 'az' || orden.value === 'za') {
        items.sort(function (a, b) { return a.nombre.localeCompare(b.nombre, 'es'); });
        if (orden.value === 'za') items.reverse();
      }

      var l = est.linea && linea(est.linea);
      titulo.textContent = t ? 'Resultados para “' + est.q.trim() + '”'
        : !l ? 'Todos los productos'
        : est.grupo !== null ? l.grupos[est.grupo].nombre : l.nombre;
      cuenta.textContent = items.length ? 'Mostrando 1-' + items.length + ' de ' + items.length + ' resultados' : 'Sin resultados';

      grid.className = 'prods' + (est.vista === 'lista' ? ' en-lista' : '');
      grid.innerHTML = items.map(function (it) {
        return '<article class="prod"><div class="img"><img src="' + foto(it.id) + '" alt="' + esc(it.nombre) + '" loading="lazy"></div>' +
          '<div class="datos"><h3>' + esc(it.nombre) + '</h3><p class="disp">' + esc(it.grupo) + ' · precio por cotización</p>' +
          linkWa('Hola, quiero cotizar: ' + it.nombre + ' (' + it.grupo + ').', 'btn btn-wa', ICONO_WA + 'WhatsApp') + '</div></article>';
      }).join('');
      $('#sin-resultados').hidden = items.length > 0;

      var conRefs = (est.linea || t) ? bloques : [];
      refs.innerHTML = conRefs.map(function (g) {
        return '<div class="refs"><h3>' + esc(g.nombre) + ': referencias que manejamos</h3>' +
          (g.marcas.length ? '<p class="marcas"><b>Marcas:</b> ' + esc(g.marcas.join(', ')) + '</p>' : '') +
          '<ul>' + g.items.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>';
      }).join('');

      $$('a', lista).forEach(function (a) {
        var al = a.getAttribute('data-l'), ag = a.getAttribute('data-g');
        var activo = !t && (al || null) === est.linea && (ag === null ? est.grupo === null : Number(ag) === est.grupo);
        a.classList.toggle('activo', activo);
        if (ag === null) a.parentNode.classList.toggle('abierto', !t && !!al && al === est.linea);
      });
      $$('.vista button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-v') === est.vista)); });
    };

    lista.addEventListener('click', function (e) {
      if (e.target.tagName !== 'A') return;
      est.q = ''; campo.value = '';
      if (history.replaceState && location.search) history.replaceState(null, '', 'productos.html' + e.target.getAttribute('href'));
      if (window.matchMedia('(max-width: 900px)').matches) { lista.hidden = true; catBtn.setAttribute('aria-expanded', 'false'); }
      if (e.target.getAttribute('href') === location.hash) { leerHash(); pintar(); }
    });
    window.addEventListener('hashchange', function () {
      leerHash(); pintar();
      $('.resultados').scrollIntoView();
    });
    catBtn.addEventListener('click', function () {
      lista.hidden = !lista.hidden;
      catBtn.setAttribute('aria-expanded', String(!lista.hidden));
    });
    if (window.matchMedia('(max-width: 900px)').matches) { lista.hidden = true; catBtn.setAttribute('aria-expanded', 'false'); }
    orden.addEventListener('change', pintar);
    $$('.vista button').forEach(function (b) {
      b.addEventListener('click', function () { est.vista = b.getAttribute('data-v'); pintar(); });
    });
    campo.value = est.q;
    campo.addEventListener('input', function () { est.q = campo.value; pintar(); });
    campo.form.addEventListener('submit', function (e) { e.preventDefault(); est.q = campo.value; pintar(); $('.resultados').scrollIntoView(); });

    leerHash();
    pintar();
  }
})();
