"use client"

import { useState, useEffect } from "react"
import { getPortfolioData, defaultData } from "../lib/portfolioData"

export function Skills() {
  const [technologies, setTechnologies] = useState(() => getPortfolioData().technologies || defaultData.technologies)

  useEffect(() => {
    const data = getPortfolioData()
    setTechnologies(data.technologies || defaultData.technologies)

    const handler = () => {
      const updated = getPortfolioData()
      setTechnologies(updated.technologies)
    }
    window.addEventListener("storage", handler)
    window.addEventListener("portfolio_updated", handler)
    return () => {
      window.removeEventListener("storage", handler)
      window.removeEventListener("portfolio_updated", handler)
    }
  }, [])

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="space-y-4 mb-14">
          <span className="section-tag">
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ backgroundColor: "hsl(var(--electric))" }}
              aria-hidden="true"
            />
            Stack Técnico
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight uppercase text-balance">
            Tecnologías
          </h2>
          <div
            className="h-0.5 w-16"
            style={{ background: "linear-gradient(to right, hsl(var(--fire)), hsl(var(--electric)))" }}
          />
          <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: "hsl(var(--muted-foreground))" }}>
            Herramientas y lenguajes que domino
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="group relative p-4 border rounded flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{
                background: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "hsl(var(--electric)/0.6)"
                e.currentTarget.style.boxShadow = "0 0 16px hsl(var(--electric)/0.15)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "hsl(var(--border))"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <span className="hud-corner hud-corner-tl" aria-hidden="true" />
              <span className="hud-corner hud-corner-br" aria-hidden="true" />
              <div className="w-10 h-10 relative">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <p className="text-xs font-bold tracking-wide uppercase text-center truncate w-full text-center">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
