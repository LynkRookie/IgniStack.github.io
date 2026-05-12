"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle, AlertCircle, Mail, MapPin } from "lucide-react"

const SUBJECT_OPTIONS = [
  "Contratar para un proyecto",
  "Consulta sobre servicios",
  "Reparación y optimización web",
  "Desarrollo de aplicación",
  "Consulta general",
]

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState(null)
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus(null)
    setErrorMsg("")
    try {
      const res  = await fetch("/api/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setStatus(null), 7000)
      } else {
        setStatus("error")
        setErrorMsg(data.error || "Error al enviar el mensaje. Intenta nuevamente.")
      }
    } catch {
      setStatus("error")
      setErrorMsg("Error de conexión. Por favor, intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="space-y-4 mb-14">
          <span className="section-tag">
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ backgroundColor: "hsl(var(--fire))" }}
              aria-hidden="true"
            />
            Hablemos
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight uppercase text-balance">
            Contacto
          </h2>
          <div
            className="h-0.5 w-16"
            style={{ background: "linear-gradient(to right, hsl(var(--fire)), hsl(var(--electric)))" }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Form */}
          <div>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>
              Rellena el formulario y te responderé a la brevedad. También puedes
              contactarme directamente en{" "}
              <a
                href="mailto:lynkrookie@gmail.com"
                className="font-bold underline underline-offset-2 transition-colors hover:text-primary"
                style={{ color: "hsl(var(--fire))" }}
              >
                lynkrookie@gmail.com
              </a>
            </p>

            {status === "success" && (
              <div
                className="mb-6 p-4 rounded flex items-start gap-3 border"
                style={{
                  background: "hsl(142 70% 45%/0.08)",
                  borderColor: "hsl(142 70% 45%/0.3)",
                  color: "hsl(142 70% 38%)",
                }}
              >
                <CheckCircle size={18} className="mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-sm uppercase tracking-wider">Mensaje enviado</p>
                  <p className="text-xs opacity-90 mt-0.5">Te responderé a la brevedad.</p>
                </div>
              </div>
            )}

            {status === "error" && (
              <div
                className="mb-6 p-4 rounded flex items-start gap-3 border"
                style={{
                  background: "hsl(0 84% 60%/0.08)",
                  borderColor: "hsl(0 84% 60%/0.3)",
                  color: "hsl(0 70% 50%)",
                }}
              >
                <AlertCircle size={18} className="mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-sm uppercase tracking-wider">No se pudo enviar</p>
                  <p className="text-xs opacity-90 mt-0.5">{errorMsg}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest" style={{ color: "hsl(var(--muted-foreground))" }}>
                  Nombre completo <span style={{ color: "hsl(var(--fire))" }}>*</span>
                </label>
                <Input
                  id="name" name="name" type="text" required
                  value={formData.name} onChange={handleChange}
                  placeholder="Tu nombre completo"
                  className="rounded-none border-x-0 border-t-0 focus-visible:ring-0 focus-visible:border-b-primary bg-transparent"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest" style={{ color: "hsl(var(--muted-foreground))" }}>
                  Correo electrónico <span style={{ color: "hsl(var(--fire))" }}>*</span>
                </label>
                <Input
                  id="email" name="email" type="email" required
                  value={formData.email} onChange={handleChange}
                  placeholder="tu@gmail.com"
                  className="rounded-none border-x-0 border-t-0 focus-visible:ring-0 bg-transparent"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest" style={{ color: "hsl(var(--muted-foreground))" }}>
                  Motivo de contacto
                </label>
                <select
                  id="subject" name="subject"
                  value={formData.subject} onChange={handleChange}
                  className="w-full h-10 border-b border-t-0 border-x-0 bg-transparent px-0 text-sm text-foreground focus:outline-none dark"
                  style={{ borderColor: "hsl(var(--input))" }}
                >
                  <option  style={{ color: "black" }} value=""  >Selecciona un motivo...</option>
                  {SUBJECT_OPTIONS.map((opt) => (
                    <option  style={{ color: "black" }}  key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest" style={{ color: "hsl(var(--muted-foreground))" }}>
                  Mensaje <span style={{ color: "hsl(var(--fire))" }}>*</span>
                </label>
                <Textarea
                  id="message" name="message" required
                  value={formData.message} onChange={handleChange}
                  placeholder="Describe tu proyecto o consulta..."
                  rows={5}
                  className="rounded-none resize-none bg-transparent"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="gap-2 font-bold tracking-widest uppercase text-xs px-8 rounded"
                style={{
                  background: "hsl(var(--fire))",
                  color: "hsl(var(--primary-foreground))",
                  border: "none",
                }}
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </form>
          </div>

          {/* Map + info */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-5" style={{ color: "hsl(var(--muted-foreground))" }}>
              Ubicación
            </h3>
            <div
              className="rounded overflow-hidden border mb-5"
              style={{ borderColor: "hsl(var(--border))", height: "340px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6791.521239531361!2d-71.21345837073053!3d-30.60150498213289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9687b9c4d3194d7f%3A0xb3995c1e1e7d4d3e!2sOvalle%2C%20Coquimbo!5e0!3m2!1ses!2scl!4v1709747427889!5m2!1ses!2scl"
                width="100%" height="100%"
                style={{ border: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Ovalle, Chile"
              />
            </div>

            <div className="space-y-2">
              {[
                { Icon: Mail,    label: "Correo",    value: "lynkrookie@gmail.com" },
                { Icon: MapPin,  label: "Ubicación", value: "Ovalle, Coquimbo, Chile" },
              ].map(({ Icon, label, value }) => (
                <div
                  key={label}
                  className="relative flex items-center gap-3 p-3 border rounded"
                  style={{ background: "hsl(var(--card))", borderColor: "hsl(var(--border))" }}
                >
                  <span className="hud-corner hud-corner-tl" aria-hidden="true" />
                  <span className="hud-corner hud-corner-br" aria-hidden="true" />
                  <div
                    className="w-8 h-8 rounded flex items-center justify-center shrink-0"
                    style={{ background: "hsl(var(--fire)/0.1)" }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "hsl(var(--fire))" }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "hsl(var(--muted-foreground))" }}>
                      {label}
                    </p>
                    <p className="text-sm font-semibold">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer
          className="mt-20 pt-8 border-t text-center"
          style={{ borderColor: "hsl(var(--fire)/0.15)" }}
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <img src="/logo-icon.png" alt="IgniStack" className="w-6 h-6 object-contain opacity-60" />
            <span className="text-xs font-black tracking-[0.25em] uppercase" style={{ color: "hsl(var(--muted-foreground))" }}>
              IgniStack
            </span>
          </div>
          <p className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
            © {new Date().getFullYear()} Damián Jinel. Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </section>
  )
}
