"use client"

import { useState, useEffect } from "react"
import { Code2, Database, Smartphone, Monitor, Wrench, Cpu, Globe, Shield, Server } from "lucide-react"
import { getPortfolioData } from "../lib/portfolioData"

const ICON_MAP = {
  Code2, Database, Smartphone, Monitor, Wrench, Cpu, Globe, Shield, Server,
}

function SectionHeader({ tag, title }) {
  return (
    <div className="space-y-4 mb-14">
      <span className="section-tag">
        <span
          className="w-1.5 h-1.5 rounded-full inline-block"
          style={{ backgroundColor: "hsl(var(--fire))" }}
          aria-hidden="true"
        />
        {tag}
      </span>
      <h2
        className="text-4xl sm:text-5xl font-black tracking-tight uppercase text-balance"
      >
        {title}
      </h2>
      <div
        className="h-0.5 w-16"
        style={{ background: "linear-gradient(to right, hsl(var(--fire)), hsl(var(--electric)))" }}
      />
    </div>
  )
}

export function About() {
  const [services, setServices] = useState([])

  useEffect(() => {
    const data = getPortfolioData()
    setServices(data.services)

    const handler = () => {
      const updated = getPortfolioData()
      setServices(updated.services)
    }
    window.addEventListener("storage", handler)
    window.addEventListener("portfolio_updated", handler)
    return () => {
      window.removeEventListener("storage", handler)
      window.removeEventListener("portfolio_updated", handler)
    }
  }, [])

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        <SectionHeader tag="Sobre mí" title="Quién soy" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-5 text-base leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
            <p>
              Soy un desarrollador web apasionado por crear experiencias digitales
              excepcionales. Con más de 2 años de experiencia, me especializo en
              construir aplicaciones web modernas y eficientes utilizando las
              últimas tecnologías.
            </p>
            <p>
              Mi enfoque se centra en la creación de soluciones escalables y
              mantenibles, buscando siempre el equilibrio perfecto entre
              funcionalidad y diseño atractivo.
            </p>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "2+", label: "Años de experiencia" },
              { value: "10+", label: "Proyectos entregados" },
              { value: "100%", label: "Dedicación" },
              { value: "CL", label: "Ovalle, Chile" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="relative p-5 border rounded text-center"
                style={{
                  borderColor: "hsl(var(--border))",
                  background: "hsl(var(--card))",
                }}
              >
                {/* HUD corners */}
                <span className="hud-corner hud-corner-tl" aria-hidden="true" />
                <span className="hud-corner hud-corner-tr" aria-hidden="true" />
                <span className="hud-corner hud-corner-bl" aria-hidden="true" />
                <span className="hud-corner hud-corner-br" aria-hidden="true" />
                <p
                  className="text-3xl font-black uppercase"
                  style={{ color: "hsl(var(--fire))" }}
                >
                  {value}
                </p>
                <p className="text-xs font-semibold tracking-wider uppercase mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <SectionHeader tag="Servicios" title="Lo que hago" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || Code2
            return (
              <div
                key={service.id}
                className="group relative p-6 border rounded transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "hsl(var(--card))",
                  borderColor: "hsl(var(--border))",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "hsl(var(--fire)/0.6)"
                  e.currentTarget.style.boxShadow = "0 0 20px hsl(var(--fire)/0.12)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "hsl(var(--border))"
                  e.currentTarget.style.boxShadow = "none"
                }}
              >
                {/* Corner accents */}
                <span className="hud-corner hud-corner-tl" aria-hidden="true" />
                <span className="hud-corner hud-corner-br" aria-hidden="true" />

                <div
                  className="w-10 h-10 rounded flex items-center justify-center mb-4"
                  style={{ background: "hsl(var(--fire)/0.1)" }}
                >
                  <IconComponent
                    className="w-5 h-5"
                    style={{ color: "hsl(var(--fire))" }}
                  />
                </div>
                <h4 className="text-base font-bold uppercase tracking-wide mb-2">
                  {service.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
