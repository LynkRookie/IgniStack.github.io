// ============================================================================
// GMAIL CONNECTOR - Configuración de credenciales para Nodemailer
// ============================================================================
// Este archivo almacena las credenciales de Gmail que se usan para enviar
// correos electrónicos desde el formulario de contacto del portafolio.
//
// CÓMO USARLO:
// 1. Ingresa al panel de Administración (botón "Admin" en la navegación)
// 2. Ve a la sección "Configuración de Correo"
// 3. Ingresa tu correo Gmail y tu Contraseña de Aplicación
//    (NO tu contraseña normal, sino la contraseña de 16 dígitos de Google)
//
// OBTENER CONTRASEÑA DE APLICACIÓN DE GMAIL:
// 1. Ve a https://myaccount.google.com/security
// 2. Activa "Verificación en 2 pasos"
// 3. Ve a https://myaccount.google.com/apppasswords
// 4. Selecciona "Correo" → "Otro (nombre personalizado)"
// 5. Escribe "Portafolio Damián" como nombre
// 6. Copia la contraseña de 16 caracteres (sin espacios)
// ============================================================================

const GMAIL_CONFIG_KEY = "portfolio_gmail_config"

/**
 * Lee la configuración de Gmail desde el almacenamiento del servidor.
 * En Next.js, leemos desde variables de entorno o desde el archivo de config.
 * @returns {{ user: string, pass: string }}
 */
export function readGmailConfig() {
  // Primero intentar desde variables de entorno (producción)
  if (process.env.GMAIL_USER && process.env.GMAIL_PASS) {
    return {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    }
  }

  // Fallback: desde la config guardada por el admin panel
  // En servidor Next.js, el admin panel escribe en la env local
  return {
    user: process.env.GMAIL_USER || "",
    pass: process.env.GMAIL_PASS || "",
  }
}

/**
 * Clave de localStorage para la config de Gmail en el cliente.
 * El admin guarda aquí las credenciales para uso en el formulario de contacto.
 */
export { GMAIL_CONFIG_KEY }

/**
 * Obtiene la config de Gmail desde localStorage (solo cliente).
 * @returns {{ user: string, pass: string }}
 */
export function getGmailConfigClient() {
  if (typeof window === "undefined") return { user: "", pass: "" }
  try {
    const raw = localStorage.getItem(GMAIL_CONFIG_KEY)
    if (!raw) return { user: "", pass: "" }
    return JSON.parse(raw)
  } catch {
    return { user: "", pass: "" }
  }
}

/**
 * Guarda la config de Gmail en localStorage (solo cliente/admin panel).
 * @param {{ user: string, pass: string }} config
 */
export function saveGmailConfigClient(config) {
  if (typeof window === "undefined") return
  localStorage.setItem(GMAIL_CONFIG_KEY, JSON.stringify(config))
}
