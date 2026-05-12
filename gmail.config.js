/**
 * gmail.config.js
 * ============================================================
 * Configuracion de cuentas Gmail para el sistema de contacto.
 *
 * SENDER  → La cuenta que ENVIA el correo (necesita App Password).
 *           Ejemplo: dajico12345@gmail.com
 *
 * RECIPIENT → La cuenta que RECIBE los mensajes del portafolio.
 *             Ejemplo: lynkrookie@gmail.com
 *
 * Para obtener la App Password del SENDER:
 *   1. Ingresa a https://myaccount.google.com/apppasswords
 *   2. Selecciona "Otra (nombre personalizado)" → "Portafolio"
 *   3. Copia los 16 caracteres generados y pegalos en GMAIL_PASS
 *
 * IMPORTANTE: Este archivo es leido por el servidor.
 *             Agregar a .gitignore si contiene credenciales reales.
 * ============================================================
 */

const gmailConfig = {
  // Cuenta que ENVIA el correo (y genera la App Password)
  GMAIL_USER: "lynkrookie@gmail.com",

  // App Password de 16 caracteres de la cuenta SENDER
  GMAIL_PASS: "uukfajpwwbsqockn",

  // Cuenta que RECIBE los mensajes del formulario de contacto
  GMAIL_RECIPIENT: "lynkrookie@gmail.com",
}

module.exports = gmailConfig
