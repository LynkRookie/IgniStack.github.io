module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[project]/gmail.config.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
 */ const gmailConfig = {
    // Cuenta que ENVIA el correo (y genera la App Password)
    GMAIL_USER: "lynkrookie@gmail.com",
    // App Password de 16 caracteres de la cuenta SENDER
    GMAIL_PASS: "uukfajpwwbsqockn",
    // Cuenta que RECIBE los mensajes del formulario de contacto
    GMAIL_RECIPIENT: "lynkrookie@gmail.com"
};
module.exports = gmailConfig;
}),
"[project]/src/lib/gmailConfig.server.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readGmailConfig",
    ()=>readGmailConfig
]);
/**
 * gmailConfig.server.ts
 * Solo servidor — lee credenciales Gmail desde gmail.config.js
 * con fallback a variables de entorno (GMAIL_USER, GMAIL_PASS, GMAIL_RECIPIENT).
 * NO importar en componentes del cliente.
 */ let fileConfig = {};
try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    fileConfig = __turbopack_context__.r("[project]/gmail.config.js [app-route] (ecmascript)");
} catch  {
// Si no existe el archivo, usa solo las variables de entorno
}
function readGmailConfig() {
    return {
        user: fileConfig.GMAIL_USER || process.env.GMAIL_USER || "",
        pass: fileConfig.GMAIL_PASS || process.env.GMAIL_PASS || "",
        recipient: fileConfig.GMAIL_RECIPIENT || process.env.GMAIL_RECIPIENT || fileConfig.GMAIL_USER || process.env.GMAIL_USER || ""
    };
}
}),
"[project]/app/api/email/send/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nodemailer/lib/nodemailer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gmailConfig$2e$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/gmailConfig.server.ts [app-route] (ecmascript)");
;
;
;
async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;
        if (!name || !email || !message) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Todos los campos son requeridos"
            }, {
                status: 400
            });
        }
        // Lee configuracion desde gmail.config.js o variables de entorno
        const gmailConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gmailConfig$2e$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readGmailConfig"])();
        if (!gmailConfig.user || !gmailConfig.pass) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Servicio de correo no configurado. Completa el archivo gmail.config.js con las credenciales correctas."
            }, {
                status: 503
            });
        }
        const transporter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].createTransport({
            service: "gmail",
            auth: {
                user: gmailConfig.user,
                pass: gmailConfig.pass
            }
        });
        const emailSubject = subject ? subject : "Consulta general";
        const year = new Date().getFullYear();
        // ─── Correo al dueno del portafolio (lynkrookie@gmail.com) ───
        await transporter.sendMail({
            from: `"Portafolio | ${name}" <${gmailConfig.user}>`,
            to: gmailConfig.recipient,
            replyTo: email,
            subject: `[Portafolio] ${emailSubject} — ${name}`,
            html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <style>
            body { font-family: Arial, sans-serif; color: #333; margin: 0; padding: 0; background: #f4f4f4; }
            .wrap { max-width: 600px; margin: 32px auto; }
            .container { background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,.08); }
            .header { background: #3b82f6; padding: 28px 32px; }
            .header h1 { margin: 0; font-size: 18px; color: #fff; }
            .header p { margin: 6px 0 0; font-size: 13px; color: rgba(255,255,255,.8); }
            .body { padding: 32px; }
            .field { margin-bottom: 20px; }
            .label { font-size: 11px; font-weight: 700; color: #888; text-transform: uppercase; letter-spacing: .6px; margin-bottom: 4px; }
            .value { font-size: 15px; color: #111; }
            .tag { display: inline-block; background: #eff6ff; color: #3b82f6; border: 1px solid #bfdbfe; border-radius: 4px; padding: 2px 8px; font-size: 13px; }
            .message-box { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #374151; }
            .footer { padding: 16px 32px; background: #f9fafb; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af; text-align: center; }
            .reply-btn { display: inline-block; margin-top: 20px; background: #3b82f6; color: #fff; text-decoration: none; padding: 10px 24px; border-radius: 6px; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="wrap">
            <div class="container">
              <div class="header">
                <h1>Nuevo mensaje desde tu Portafolio</h1>
                <p>Recibido el ${new Date().toLocaleString("es-CL", {
                dateStyle: "full",
                timeStyle: "short"
            })}</p>
              </div>
              <div class="body">
                <div class="field">
                  <div class="label">Nombre</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Correo del remitente</div>
                  <div class="value"><a href="mailto:${email}" style="color:#3b82f6">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Asunto / Motivo</div>
                  <div class="value"><span class="tag">${emailSubject}</span></div>
                </div>
                <div class="field">
                  <div class="label">Mensaje</div>
                  <div class="message-box">${message}</div>
                </div>
                <a href="mailto:${email}" class="reply-btn">Responder a ${name}</a>
              </div>
              <div class="footer">
                Enviado desde el formulario de contacto &mdash; Damián Jinel | Portafolio &copy; ${year}
              </div>
            </div>
          </div>
        </body>
        </html>
      `
        });
        // ─── Respuesta automática al visitante ───
        await transporter.sendMail({
            from: `"Damián Jinel | Dev" <${gmailConfig.user}>`,
            to: email,
            subject: `Re: ${emailSubject} — Gracias por escribirme, ${name}`,
            html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <style>
            body { font-family: Arial, sans-serif; color: #333; margin: 0; padding: 0; background: #f4f4f4; }
            .wrap { max-width: 600px; margin: 32px auto; }
            .container { background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,.08); }
            .header { background: #3b82f6; padding: 28px 32px; }
            .header h1 { margin: 0; font-size: 18px; color: #fff; }
            .body { padding: 32px; font-size: 15px; line-height: 1.7; color: #374151; }
            .quote { border-left: 3px solid #3b82f6; padding-left: 14px; color: #6b7280; font-style: italic; margin: 16px 0; }
            .signature { margin-top: 28px; border-top: 1px solid #e5e7eb; padding-top: 16px; font-size: 13px; color: #6b7280; }
            .footer { padding: 16px 32px; background: #f9fafb; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af; text-align: center; }
          </style>
        </head>
        <body>
          <div class="wrap">
            <div class="container">
              <div class="header">
                <h1>Hola ${name}, recibí tu mensaje</h1>
              </div>
              <div class="body">
                <p>Gracias por comunicarte conmigo a través de mi portafolio.</p>
                <p>He recibido tu mensaje con el asunto <strong>"${emailSubject}"</strong> y me pondré en contacto contigo a la brevedad posible.</p>
                <p><strong>Tu mensaje:</strong></p>
                <div class="quote">${message}</div>
                <div class="signature">
                  Saludos cordiales,<br/>
                  <strong>Damián Jinel</strong><br/>
                  Desarrollador Web Full Stack<br/>
                  Ovalle, Coquimbo, Chile
                </div>
              </div>
              <div class="footer">
                Portafolio Profesional &mdash; technocraftovalle.netlify.app &copy; ${year}
              </div>
            </div>
          </div>
        </body>
        </html>
      `
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: "Mensaje enviado correctamente"
        });
    } catch (error) {
        console.error("[Email API] Error:", error);
        const message = error instanceof Error ? error.message : "Error al enviar el correo";
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__02m0icm._.js.map