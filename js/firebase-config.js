/*
 * Conexión con Firebase (precios y productos editables desde admin.html).
 *
 * Si esto se deja en null el sitio funciona en MODO DEMOSTRACIÓN:
 *   - el catálogo público usa los productos de js/catalogo.js, sin precios;
 *   - admin.html funciona, pero los cambios solo se guardan en ese navegador.
 *
 * Para conectarlo a otro proyecto, reemplace el objeto por su configuración web
 * (Consola de Firebase → Configuración del proyecto → Tus apps → SDK → Config).
 * Estos valores son públicos por diseño: la seguridad la dan las reglas de
 * Firestore (ver README.md), no el ocultar esta clave.
 *
 * window.MYA_FIREBASE = {
 *   apiKey: '...',
 *   authDomain: '....firebaseapp.com',
 *   projectId: '...',
 *   appId: '...'
 * };
 */
window.MYA_FIREBASE = {
  apiKey: 'AIzaSyDyGbJS7hs5SpEkzQ12LE54YS1XDkiOqR8',
  authDomain: 'myaelectricos.firebaseapp.com',
  projectId: 'myaelectricos',
  storageBucket: 'myaelectricos.firebasestorage.app',
  messagingSenderId: '1071942768774',
  appId: '1:1071942768774:web:b45cb197cb566f8186d907'
};
