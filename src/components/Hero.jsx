"use client"

import { Github, Linkedin, Instagram, Mail, MapPin, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

function HudCorners() {
  return (
    <>
      <span className="hud-corner hud-corner-tl" aria-hidden="true" />
      <span className="hud-corner hud-corner-tr" aria-hidden="true" />
      <span className="hud-corner hud-corner-bl" aria-hidden="true" />
      <span className="hud-corner hud-corner-br" aria-hidden="true" />
    </>
  )
}

export function Hero() {
  const scrollDown = () => {
    const el = document.querySelector("#about")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--fire)/0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--fire)/0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Radial glow behind content */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(var(--fire)/0.1) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto text-center space-y-8 animate-fade-in">

        {/* Logo */}
        <div className="flex justify-center">
          <div className="relative p-2">
            <HudCorners />
            <img
              src="/logo-icon.png"
              alt="IgniStack logo"
              className="w-40 h-24 sm:w-40 sm:h-28 object-contain animate-flicker drop-shadow-[0_0_18px_hsl(var(--fire)/0.6)]"
              loading="eager"
            />
          </div>
        </div>

        {/* Brand tag */}
        <div className="flex justify-center">
          <span className="section-tag">
            <span
              className="w-1.5 h-1.5 rounded-full bg-fire inline-block"
              style={{ backgroundColor: "hsl(var(--fire))" }}
            />
            Primordial Code &amp; Infrastructure
          </span>
        </div>

        {/* Name + title */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
            <span className="gradient-text">Damián</span>{" "}
            <span className="text-foreground">Jinel</span>
          </h1>
          <p
            className="text-sm sm:text-base font-semibold tracking-[0.2em] uppercase"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Desarrollador Web Full Stack
          </p>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
          Construyendo soluciones digitales robustas y escalables con más de 2 años
          de experiencia. Especializado en arquitecturas modernas, eficientes y de alto impacto.
        </p>

        {/* Contact info row */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
          <div className="flex items-center gap-1.5">
            <MapPin size={14} style={{ color: "hsl(var(--fire))" }} />
            <span>Ovalle, Chile</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail size={14} style={{ color: "hsl(var(--fire))" }} />
            <a
              href="mailto:lynkrookie@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              lynkrookie@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <Phone size={14} style={{ color: "hsl(var(--fire))" }} />
            <a
              href="tel:+56933471250"
              className="hover:text-foreground transition-colors"
            >
              +56 9 3347 1250
            </a>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Button
            asChild
            size="lg"
            className="font-bold tracking-widest uppercase text-sm px-8"
            style={{
              background: "hsl(var(--fire))",
              color: "hsl(var(--primary-foreground))",
              border: "none",
            }}
          >
            <a href="#contact">Contactar</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-bold tracking-widest uppercase text-sm px-8"
            style={{
              borderColor: "hsl(var(--bronze)/0.6)",
              color: "hsl(var(--foreground))",
            }}
          >
            <a href="/img/CV_Damian_Eduardo_Jinel_Cortes_informatica .docx" download="CV-Damian-Jinel.pdf">
              Descargar CV
            </a>
          </Button>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-6 pt-2">
          {[
            { href: "https://github.com/LynkRookie", Icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/damian-jinel-cortes-b61b56296/", Icon: Linkedin, label: "LinkedIn" },
            { href: "https://www.instagram.com/lynk_rookie/", Icon: Instagram, label: "Instagram" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="relative p-2 transition-colors group"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              <HudCorners />
              <Icon
                size={20}
                className="transition-colors group-hover:text-primary"
                style={{ "--tw-text-opacity": 1 }}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll down indicator */}
      <button
        onClick={scrollDown}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs font-bold tracking-widest uppercase transition-opacity hover:opacity-70"
        style={{ color: "hsl(var(--muted-foreground))" }}
      >
        <span>Scroll</span>
        <ChevronDown size={16} style={{ color: "hsl(var(--fire))" }} />
      </button>
    </section>
  )
}
