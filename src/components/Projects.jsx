"use client"

import { useState, useEffect } from "react"
import { Briefcase } from "lucide-react"
import { getPortfolioData } from "../lib/portfolioData"

export function Projects() {
  const [experiences, setExperiences] = useState([])

  useEffect(() => {
    const data = getPortfolioData()
    setExperiences(data.experiences)

    const handler = () => {
      const updated = getPortfolioData()
      setExperiences(updated.experiences)
    }
    window.addEventListener("storage", handler)
    window.addEventListener("portfolio_updated", handler)
    return () => {
      window.removeEventListener("storage", handler)
      window.removeEventListener("portfolio_updated", handler)
    }
  }, [])

  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white text-balance">
            Experiencia laboral
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
          <p className="text-muted-foreground text-lg">
            Una seleccion de mis trabajos destacados
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700" />

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-10">
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-gray-900 dark:bg-white border-4 border-gray-50 dark:border-gray-900" />

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>

                  <ul className="space-y-2">
                    <li className="flex gap-3 text-gray-700 dark:text-gray-300">
                      <span className="text-gray-400 dark:text-gray-500 mt-1.5">
                        •
                      </span>
                      <span className="flex-1">{exp.achievement}</span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
