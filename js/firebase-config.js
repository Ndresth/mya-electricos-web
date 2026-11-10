/*
 * Conexión con Firebase (precios y productos editables desde admin.html).
 *
 * Mientras esto sea null el sitio funciona en MODO DEMOSTRACIÓN:
 *   - el catálogo público usa los productos de js/catalogo.js, sin precios;
 *   - admin.html funciona, pero los cambios solo se guardan en ese navegador.
 *
 * Para activarlo, reemplace null por la configuración web del proyecto
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
window.MYA_FIREBASE = null;
