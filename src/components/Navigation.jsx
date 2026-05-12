"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, Moon, Sun, Lock, LogOut, LayoutDashboard } from "lucide-react"
import { useTheme } from "../hooks/useTheme"
import { useAdmin } from "../context/AdminContext"

const navItems = [


  { name: "Inicio",      href: "#hero",       page: "home" },
  { name: "Sobre mí",    href: "#about",      page: "home" },
  { name: "Proyectos",   href: "#projects",   page: "projects" },
  { name: "Experiencia", href: "#experience", page: "home" },
  { name: "Habilidades", href: "#skills",     page: "home" },
  { name: "Certificaciones", href: "#certifications",   page: "home" },
  { name: "Contacto",    href: "#contact",    page: "home" },
]

export function Navigation({ onNavigate, currentPage }) {
  const [isScrolled, setIsScrolled]       = useState(false)
  const [isMobileMenuOpen, setMobileOpen] = useState(false)
  const [showAvatarMenu, setShowAvatarMenu] = useState(false)
  const avatarRef = useRef(null)
  const { theme, toggleTheme }            = useTheme()
  const { isAuthenticated, setShowLogin, logout } = useAdmin()

  // Close avatar menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (avatarRef.current && !avatarRef.current.contains(e.target)) {
        setShowAvatarMenu(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNavClick = (e, item) => {
    if (item.page === "projects") {
      e.preventDefault()
      onNavigate("projects")
      setMobileOpen(false)
    } else if (currentPage === "projects" || currentPage === "admin") {
      e.preventDefault()
      onNavigate("home")
      setMobileOpen(false)
      setTimeout(() => {
        document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    } else {
      e.preventDefault()
      setMobileOpen(false)
      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        isScrolled
          ? {
              background: "hsl(var(--background)/0.85)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              borderBottom: "1px solid hsl(var(--fire)/0.2)",
            }
          : { background: "transparent" }
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              if (currentPage !== "home") { e.preventDefault(); onNavigate("home") }
            }}
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
          >
            <img
              src="/logo-icon.png"
              alt="IgniStack logo"
              className="w-24 h-13 object-contain"
              loading="lazy"
            />
            <span
              className="hidden sm:block font-black text-sm tracking-[0.2em] uppercase"
              style={{ color: "hsl(var(--foreground))" }}
            >
              IgniStack
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-xs font-bold tracking-widest uppercase transition-colors hover:text-primary"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                {item.name}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 rounded transition-colors hover:bg-accent"
              aria-label="Cambiar tema"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Avatar with dropdown */}
            <div ref={avatarRef} className="relative">
              <button
                onClick={() => setShowAvatarMenu((v) => !v)}
                aria-label="Menú de usuario"
                className="relative w-8 h-8 rounded-full overflow-hidden ring-2 transition-all duration-200 focus:outline-none hover:scale-105"
                style={{
                  ringColor: isAuthenticated
                    ? "hsl(var(--fire)/0.7)"
                    : "hsl(var(--border))",
                  boxShadow: isAuthenticated
                    ? "0 0 0 2px hsl(var(--fire)/0.6)"
                    : "0 0 0 2px hsl(var(--border))",
                }}
              >
                <img
                  src="/img/avatar.png"
                  alt="Perfil"
                  className="w-full h-full object-cover"
                />
                {isAuthenticated && (
                  <span
                    className="absolute bottom-0 right-0 w-2 h-2 rounded-full border border-background"
                    style={{ background: "hsl(var(--fire))" }}
                  />
                )}
              </button>

              {/* Floating dropdown */}
              {showAvatarMenu && (
                <div
                  className="absolute right-0 mt-2 w-52 rounded-xl border shadow-xl overflow-hidden z-50"
                  style={{
                    background: "hsl(var(--background)/0.96)",
                    backdropFilter: "blur(12px)",
                    borderColor: "hsl(var(--fire)/0.2)",
                  }}
                >
                  {/* Header del dropdown */}
                  <div
                    className="px-4 py-3 border-b"
                    style={{ borderColor: "hsl(var(--fire)/0.15)" }}
                  >
                    <p
                      className="text-xs font-bold tracking-widest uppercase"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    >
                      {isAuthenticated ? "Sesión activa" : "Panel privado"}
                    </p>
                  </div>

                  {/* Opciones */}
                  <div className="py-1.5">
                    {isAuthenticated ? (
                      <>
                        <button
                          onClick={() => { onNavigate("admin"); setShowAvatarMenu(false) }}
                          className="flex items-center gap-2.5 w-full px-4 py-2.5 text-xs font-bold tracking-widest uppercase transition-colors hover:bg-accent"
                          style={{ color: "hsl(var(--fire))" }}
                        >
                          <LayoutDashboard className="w-3.5 h-3.5" />
                          Panel de administración
                        </button>
                        <button
                          onClick={() => { logout(); onNavigate("home"); setShowAvatarMenu(false) }}
                          className="flex items-center gap-2.5 w-full px-4 py-2.5 text-xs font-bold tracking-widest uppercase transition-colors hover:bg-red-500/10"
                          style={{ color: "hsl(var(--muted-foreground))" }}
                        >
                          <LogOut className="w-3.5 h-3.5" />
                          Cerrar sesión
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => { setShowLogin(true); setShowAvatarMenu(false) }}
                        className="flex items-center gap-2.5 w-full px-4 py-2.5 text-xs font-bold tracking-widest uppercase transition-colors hover:bg-accent"
                        style={{ color: "hsl(var(--muted-foreground))" }}
                      >
                        <Lock className="w-3.5 h-3.5" />
                        Login
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded transition-colors hover:bg-accent"
              aria-label="Cambiar tema"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(!isMobileMenuOpen)}
              aria-label="Abrir menú"
              style={{ color: "hsl(var(--foreground))" }}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden border-b"
          style={{
            background: "hsl(var(--background)/0.96)",
            borderColor: "hsl(var(--fire)/0.2)",
          }}
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="block text-xs font-bold tracking-widest uppercase transition-colors hover:text-primary"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 border-t" style={{ borderColor: "hsl(var(--fire)/0.15)" }}>
              {isAuthenticated ? (
                <>
                  <button
                    onClick={() => { onNavigate("admin"); setMobileOpen(false) }}
                    className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase w-full"
                    style={{ color: "hsl(var(--fire))" }}
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    Panel de Administración
                  </button>
                  <button
                    onClick={() => { logout(); onNavigate("home"); setMobileOpen(false) }}
                    className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-red-500 mt-3"
                  >
                    <LogOut className="w-4 h-4" />
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <button
                  onClick={() => { setShowLogin(true); setMobileOpen(false) }}
                  className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase w-full"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  <Lock className="w-4 h-4" />
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
