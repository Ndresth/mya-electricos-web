# Sitio web — M&A Eléctricos e Ingeniería S.A.S.

Sitio estático (HTML + CSS + JS, sin build) construido a partir del brochure de la empresa.

## Estructura

- `index.html` — inicio: carruseles, líneas de productos, marcas, nosotros, contacto y sedes.
- `productos.html` — catálogo con panel de categorías: al abrir una categoría (`#linea` o `#linea/subcategoría`) se listan sus productos con foto, nombre y botón de WhatsApp; admite `?q=` para buscar, orden por nombre y vista de lista o cuadrícula.
- `js/catalogo.js` — **datos del catálogo** (líneas, subcategorías, marcas, referencias, fotos con nombre, destacados). Para agregar o cambiar productos solo se edita este archivo.
- `js/app.js` — pinta el catálogo, menú móvil, buscador y enlaces de WhatsApp.
- `css/styles.css` — estilos (colores de marca en las variables de `:root`).
- `img/prod/` — fotos de producto tomadas del brochure; `img/marcas/` — logos de marcas.

## Ver en local

Abrir `index.html` en el navegador, o servir la carpeta: `npx serve .`.

## Publicar

Es una carpeta estática: se puede subir tal cual a Netlify, Render (static site), GitHub Pages o cualquier hosting.
En Netlify basta conectar el repositorio: `netlify.toml` ya publica la raíz sin comando de build.

## Datos de contacto usados

- WhatsApp (único número del sitio; todas las cotizaciones llegan ahí): 301 870 4924. Se cambia en `js/catalogo.js` → `empresa.whatsapp`, y en el texto visible de `index.html` y `productos.html`.
- Principal: Cr 45 # 99C - 84, Barranquilla — Sucursal: Calle 5 # 10 - 01, barrio 10 de Marzo, Guamal (Magdalena)

El sitio es solo catálogo: no muestra precios ni tiene carrito.
