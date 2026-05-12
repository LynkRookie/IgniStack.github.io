import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { readGmailConfig } from "@/src/lib/gmailConfig.server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      )
    }

    // Lee configuracion desde gmail.config.js o variables de entorno
    const gmailConfig = readGmailConfig()

    if (!gmailConfig.user || !gmailConfig.pass) {
      return NextResponse.json(
        {
          error:
            "Servicio de correo no configurado. Completa el archivo gmail.config.js con las credenciales correctas.",
        },
        { status: 503 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailConfig.user,
        pass: gmailConfig.pass,
      },
    })

    const emailSubject = subject ? subject : "Consulta general"
    const year = new Date().getFullYear()

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
                <p>Recibido el ${new Date().toLocaleString("es-CL", { dateStyle: "full", timeStyle: "short" })}</p>
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
      `,
    })

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
      `,
    })

    return NextResponse.json({ success: true, message: "Mensaje enviado correctamente" })
  } catch (error: unknown) {
    console.error("[Email API] Error:", error)
    const message =
      error instanceof Error ? error.message : "Error al enviar el correo"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
