# Sitio web — M&A Eléctricos e Ingeniería S.A.S.

Sitio estático (HTML + CSS + JS, sin build) construido a partir del brochure de la empresa.

## Estructura

- `index.html` — inicio: carruseles, líneas de productos, marcas, nosotros, y contacto.
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

## Panel de administración (`admin.html`)

Permite, con una sola cuenta compartida: cambiar precios, agregar, editar, ocultar y eliminar productos, cambiar fotos y marcar «agotado». El catálogo público muestra el precio (o «Precio por cotización» si está vacío) y mantiene el botón de WhatsApp; no hay carrito ni pagos.

- `js/datos.js` — capa de datos (Firestore + Auth, o modo demostración).
- `js/admin.js`, `css/admin.css` — el panel.
- `js/firebase-config.js` — configuración del proyecto de Firebase.

Mientras `js/firebase-config.js` esté en `null`, el panel funciona en **modo demostración**: los cambios se guardan solo en el navegador donde se hacen y no se publican.

### Activar Firebase (una sola vez, plan gratuito Spark)

1. En <https://console.firebase.google.com> crear un proyecto (sin Google Analytics).
2. **Authentication → Sign-in method**: habilitar *Correo electrónico/contraseña*. En **Users** agregar el usuario administrador (correo y contraseña de la cuenta compartida).
3. **Firestore Database → Crear base de datos** (modo producción) y en **Reglas** pegar, cambiando el correo por el del administrador:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{db}/documents {
       function esAdmin() {
         return request.auth != null && request.auth.token.email == 'CORREO-DEL-ADMIN@ejemplo.com';
       }
       match /catalogo/{doc} { allow read: if true; allow write: if esAdmin(); }
       match /fotos/{doc}    { allow read: if true; allow write: if esAdmin(); }
     }
   }
   ```

   La regla por correo es necesaria: sin ella, cualquier persona que se registre podría modificar el catálogo.
4. **Configuración del proyecto → Tus apps → Web (`</>`)**: registrar la app y copiar el objeto `firebaseConfig` en `js/firebase-config.js`.
5. **Authentication → Settings → Authorized domains**: agregar el dominio donde se publica el sitio (por ejemplo `ndresth.github.io` o el dominio propio).

La primera vez que se guarde un cambio desde el panel, el catálogo completo (los productos del brochure) queda copiado en Firestore.

### Cómo se guardan los datos

- `catalogo/principal`: un solo documento con todos los productos (1 lectura por visita).
- `fotos/{id}`: una foto subida por documento, reducida a 600 px. No se usa Firebase Storage porque exige plan de pago.
- Las categorías y subcategorías siguen definidas en `js/catalogo.js`.

## Datos de contacto usados

- WhatsApp (único número del sitio; todas las cotizaciones llegan ahí): 301 870 4924. Se cambia en `js/catalogo.js` → `empresa.whatsapp`, y en el texto visible de `index.html` y `productos.html`.

El sitio es catálogo con precios editables; no tiene carrito ni pagos.
