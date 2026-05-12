"use client"

import { useState, useEffect } from "react"
import { BookOpen, Award } from "lucide-react"
import { getPortfolioData, defaultData } from "../lib/portfolioData"

export function Experience() {
  const [certifications, setCertifications] = useState(() => getPortfolioData().certifications || defaultData.certifications)

  useEffect(() => {
    const data = getPortfolioData()
    setCertifications(data.certifications || defaultData.certifications)

    const handler = () => {
      const updated = getPortfolioData()
      setCertifications(updated.certifications)
    }
    window.addEventListener("storage", handler)
    window.addEventListener("portfolio_updated", handler)
    return () => {
      window.removeEventListener("storage", handler)
      window.removeEventListener("portfolio_updated", handler)
    }
  }, [])

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="space-y-4 mb-14">
          <span className="section-tag">
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ backgroundColor: "hsl(var(--bronze))" }}
              aria-hidden="true"
            />
            Formación continua
          </span>
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8" style={{ color: "hsl(var(--bronze))" }} />
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight uppercase text-balance">
              Certificaciones
            </h2>
          </div>
          <div
            className="h-0.5 w-16"
            style={{ background: "linear-gradient(to right, hsl(var(--fire)), hsl(var(--electric)))" }}
          />
          <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: "hsl(var(--muted-foreground))" }}>
            Certificaciones y logros profesionales
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group relative border rounded overflow-hidden flex flex-col sm:flex-row transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "hsl(var(--bronze)/0.6)"
                e.currentTarget.style.boxShadow = "0 0 24px hsl(var(--fire)/0.1)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "hsl(var(--border))"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              {/* HUD corners */}
              <span className="hud-corner hud-corner-tl" aria-hidden="true" />
              <span className="hud-corner hud-corner-br" aria-hidden="true" />

              {/* Image */}
              <div
                className="sm:w-[38%] relative flex items-center justify-center p-4"
                style={{ background: "hsl(var(--muted)/0.5)" }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-auto max-h-36 object-contain group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Year badge */}
                <span
                  className="absolute top-3 right-3 text-xs font-black tracking-widest uppercase px-2.5 py-1 rounded"
                  style={{
                    background: "hsl(var(--fire))",
                    color: "hsl(var(--primary-foreground))",
                  }}
                >
                  {cert.year}
                </span>
              </div>

              {/* Content */}
              <div className="sm:w-[62%] p-5 flex flex-col justify-center gap-3">
                <div>
                  <h3 className="text-base font-black uppercase tracking-wide mb-1 transition-colors group-hover:text-primary">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold tracking-wider flex items-center gap-1.5" style={{ color: "hsl(var(--muted-foreground))" }}>
                    <BookOpen className="w-3 h-3" />
                    {cert.institution}
                  </p>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5 font-bold tracking-wider uppercase rounded"
                      style={{
                        background: "hsl(var(--fire)/0.1)",
                        color: "hsl(var(--fire))",
                        border: "1px solid hsl(var(--fire)/0.25)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
