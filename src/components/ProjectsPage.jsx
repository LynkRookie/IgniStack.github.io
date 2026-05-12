"use client"

import { useState, useEffect } from "react"
import { ExternalLink, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getPortfolioData, defaultData } from "../lib/portfolioData"

const categories = ["Todos", "Web", "Aplicaciones", "Ciberseguridad"]

export function ProjectsPage({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [projects, setProjects] = useState(() => getPortfolioData().adminProjects || defaultData.adminProjects)

  useEffect(() => {
    const data = getPortfolioData()
    setProjects(data.adminProjects || defaultData.adminProjects)

    const handler = () => {
      const updated = getPortfolioData()
      setProjects(updated.adminProjects)
    }
    window.addEventListener("storage", handler)
    window.addEventListener("portfolio_updated", handler)
    return () => {
      window.removeEventListener("storage", handler)
      window.removeEventListener("portfolio_updated", handler)
    }
  }, [])

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        <div className="mb-8">
          <Button
            variant="outline"
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Volver al inicio
          </Button>
        </div>

        <div className="space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">
            Mis Proyectos
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
          <p className="text-muted-foreground text-lg">
            Una seleccion completa de mis trabajos mas destacados
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg">No hay proyectos en esta categoria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.jpg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-label={`Ver proyecto ${project.title}`}
                    >
                      <div className="bg-primary text-primary-foreground p-4 rounded-full transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <ExternalLink className="w-6 h-6" />
                      </div>
                    </a>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
