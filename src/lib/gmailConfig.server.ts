/**
 * gmailConfig.server.ts
 * Solo servidor — lee credenciales Gmail desde gmail.config.js
 * con fallback a variables de entorno (GMAIL_USER, GMAIL_PASS, GMAIL_RECIPIENT).
 * NO importar en componentes del cliente.
 */

let fileConfig: { GMAIL_USER?: string; GMAIL_PASS?: string; GMAIL_RECIPIENT?: string } = {}

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  fileConfig = require("../../gmail.config.js")
} catch {
  // Si no existe el archivo, usa solo las variables de entorno
}

export function readGmailConfig(): {
  user: string
  pass: string
  recipient: string
} {
  return {
    user: fileConfig.GMAIL_USER || process.env.GMAIL_USER || "",
    pass: fileConfig.GMAIL_PASS || process.env.GMAIL_PASS || "",
    recipient: fileConfig.GMAIL_RECIPIENT || process.env.GMAIL_RECIPIENT || fileConfig.GMAIL_USER || process.env.GMAIL_USER || "",
  }
}
