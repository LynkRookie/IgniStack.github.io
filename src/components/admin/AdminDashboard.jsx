"use client"

import { useState, useEffect } from "react"
import {
  LayoutDashboard,
  Briefcase,
  Code2,
  Award,
  FolderOpen,
  Mail,
  Lock,
  LogOut,
  Plus,
  Trash2,
  Save,
  Settings,
  Eye,
  EyeOff,
  Menu,
  X,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useAdmin } from "../../context/AdminContext"
import {
  getPortfolioData,
  updatePortfolioSection,
} from "../../lib/portfolioData"
import {
  getGmailConfigClient,
  saveGmailConfigClient,
} from "../../lib/gmailConnector"

const SECTIONS = [
  { id: "services",       label: "Servicios",        icon: LayoutDashboard, description: "Lo que hago" },
  { id: "experiences",    label: "Experiencia",       icon: Briefcase,       description: "Trayectoria laboral" },
  { id: "technologies",   label: "Tecnologias",       icon: Code2,           description: "Stack tecnico" },
  { id: "certifications", label: "Certificaciones",   icon: Award,           description: "Cursos y titulos" },
  { id: "adminProjects",  label: "Proyectos",         icon: FolderOpen,      description: "Portfolio de trabajo" },
  { id: "gmail",          label: "Correo",            icon: Mail,            description: "Gmail Connector" },
  { id: "credentials",    label: "Credenciales",      icon: Lock,            description: "Acceso al panel" },
]

// ---- Services Section ----
function ServicesSection({ data, onSave }) {
  const [items, setItems] = useState(data)
  const update = (id, field, value) =>
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)))
  const add = () => {
    const newId = Math.max(0, ...items.map((i) => i.id)) + 1
    setItems((prev) => [...prev, { id: newId, icon: "Code2", title: "Nuevo Servicio", description: "" }])
  }
  const remove = (id) => setItems((prev) => prev.filter((i) => i.id !== id))

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="p-4 border border-border rounded-xl space-y-3 bg-secondary/20">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-semibold uppercase tracking-widest">Servicio #{item.id}</span>
            <button onClick={() => remove(item.id)} className="p-1.5 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors" aria-label="Eliminar">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground font-medium">Titulo</label>
              <Input value={item.title} onChange={(e) => update(item.id, "title", e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground font-medium">Icono (Lucide)</label>
              <Input value={item.icon} onChange={(e) => update(item.id, "icon", e.target.value)} placeholder="Code2, Database, Smartphone..." />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs text-muted-foreground font-medium">Descripcion</label>
            <Textarea value={item.description} onChange={(e) => update(item.id, "description", e.target.value)} rows={2} />
          </div>
        </div>
      ))}
      <SectionFooter onAdd={add} onSave={() => onSave(items)} addLabel="Agregar servicio" />
    </div>
  )
}

// ---- Experiences Section ----
function ExperiencesSection({ data, onSave }) {
  const [items, setItems] = useState(data)
  const update = (id, field, value) =>
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)))
  const add = () => {
    const newId = Math.max(0, ...items.map((i) => i.id)) + 1
    setItems((prev) => [...prev, { id: newId, period: "", title: "Nuevo cargo", achievement: "" }])
  }
  const remove = (id) => setItems((prev) => prev.filter((i) => i.id !== id))

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="p-4 border border-border rounded-xl space-y-3 bg-secondary/20">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-semibold uppercase tracking-widest">Entrada #{item.id}</span>
            <button onClick={() => remove(item.id)} className="p-1.5 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground font-medium">Periodo</label>
              <Input value={item.period} onChange={(e) => update(item.id, "period", e.target.value)} placeholder="2023 - Presente" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground font-medium">Cargo / Titulo</label>
              <Input value={item.title} onChange={(e) => update(item.id, "title", e.target.value)} />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs text-muted-foreground font-medium">Descripcion / Logros</label>
            <Textarea value={item.achievement} onChange={(e) => update(item.id, "achievement", e.target.value)} rows={2} />
          </div>
        </div>
      ))}
      <SectionFooter onAdd={add} onSave={() => onSave(items)} addLabel="Agregar entrada" />
    </div>
  )
}

// ---- Technologies Section ----
function TechnologiesSection({ data, onSave }) {
  const [items, setItems] = useState(data)
  const update = (id, field, value) =>
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)))
  const add = () => {
    const newId = Math.max(0, ...items.map((i) => i.id)) + 1
    setItems((prev) => [...prev, { id: newId, name: "Nueva tecnologia", icon: "" }])
  }
  const remove = (id) => setItems((prev) => prev.filter((i) => i.id !== id))

  return (
    <div className="space-y-4">
      <p className="text-xs text-muted-foreground">
        Iconos SVG disponibles en{" "}
        <a href="https://devicon.dev" target="_blank" rel="noopener noreferrer" className="text-primary underline">
          devicon.dev
        </a>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item) => (
          <div key={item.id} className="p-4 border border-border rounded-xl space-y-2 bg-secondary/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {item.icon && <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />}
                <span className="text-sm font-medium truncate">{item.name}</span>
              </div>
              <button onClick={() => remove(item.id)} className="p-1.5 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
            <Input value={item.name} onChange={(e) => update(item.id, "name", e.target.value)} placeholder="Nombre" className="h-8 text-xs" />
            <Input value={item.icon} onChange={(e) => update(item.id, "icon", e.target.value)} placeholder="URL del icono SVG" className="h-8 text-xs" />
          </div>
        ))}
      </div>
      <SectionFooter onAdd={add} onSave={() => onSave(items)} addLabel="Agregar tecnologia" />
    </div>
  )
}

// ---- Certifications Section ----
function CertificationsSection({ data, onSave }) {
  const [items, setItems] = useState(data)
  const updateField = (id, field, value) =>
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)))
  const updateSkills = (id, value) => {
    const skills = value.split(",").map((s) => s.trim()).filter(Boolean)
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, skills } : item)))
  }
  const add = () => {
    const newId = Math.max(0, ...items.map((i) => i.id)) + 1
    setItems((prev) => [...prev, { id: newId, title: "Nueva certificacion", institution: "", year: new Date().getFullYear().toString(), description: "", image: "", skills: [] }])
  }
  const remove = (id) => setItems((prev) => prev.filter((i) => i.id !== id))

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="p-4 border border-border rounded-xl space-y-3 bg-secondary/20">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-semibold uppercase tracking-widest">Certificacion #{item.id}</span>
            <button onClick={() => remove(item.id)} className="p-1.5 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2 space-y-1.5">
              <label className="text-xs text-muted-foreground font-medium">Titulo</label>
              <Input value={item.title} onChange={(e) => updateField(item.id, "title", e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground font-medium">Año</label>
              <Input value={item.year} onChange={(e) => updateField(item.id, "year", e.target.value)} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground font-medium">Institucion</label>
              <Input value={item.institution} onChange={(e) => updateField(item.id, "institution", e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground font-medium">URL imagen</label>
              <Input value={item.image} onChange={(e) => updateField(item.id, "image", e.target.value)} placeholder="/img/cert.jpg" />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs text-muted-foreground font-medium">Descripcion</label>
            <Textarea value={item.description} onChange={(e) => updateField(item.id, "description", e.target.value)} rows={2} />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs text-muted-foreground font-medium">Habilidades (separadas por coma)</label>
            <Input value={item.skills.join(", ")} onChange={(e) => updateSkills(item.id, e.target.value)} placeholder="React, Node.js, CSS3" />
          </div>
        </div>
      ))}
      <SectionFooter onAdd={add} onSave={() => onSave(items)} addLabel="Agregar certificacion" />
    </div>
  )
}

// ---- Projects Section ----
function ProjectsSection({ data, onSave }) {
  const [items, setItems] = useState(data)
  const updateField = (id, field, value) =>
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)))
  const updateTech = (id, value) => {
    const tech = value.split(",").map((s) => s.trim()).filter(Boolean)
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, tech } : item)))
  }
  const add = () => {
    const newId = Math.max(0, ...items.map((i) => i.id)) + 1
    setItems((prev) => [...prev, { id: newId, title: "Nuevo Proyecto", category: "Web", description: "", image: "", link: "", tech: [] }])
  }
  const remove = (id) => setItems((prev) => prev.filter((i) => i.id !== id))
  const categories = ["Web", "Aplicaciones", "Ciberseguridad"]

  return (
    <div className="space-y-4">
      <p className="text-xs text-muted-foreground">Los proyectos se reflejan en la pagina de Proyectos (no en la seccion principal del inicio).</p>
      {items.map((item) => (
        <div key={item.id} className="p-4 border border-border rounded-xl space-y-3 bg-secondary/20">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-semibold uppercase tracking-widest">Proyecto #{item.id}</span>
            <button onClick={() => remove(item.id)} className="p-1.5 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground font-medium">Titulo</label>
              <Input value={item.title} onChange={(e) => updateField(item.id, "title", e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground font-medium">Categoria</label>
              <select value={item.category} onChange={(e) => updateField(item.id, "category", e.target.value)} className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm">
                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs text-muted-foreground font-medium">Descripcion</label>
            <Textarea value={item.description} onChange={(e) => updateField(item.id, "description", e.target.value)} rows={2} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground font-medium">URL imagen</label>
              <Input value={item.image} onChange={(e) => updateField(item.id, "image", e.target.value)} placeholder="/img/proyecto.jpg" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground font-medium">Enlace al proyecto</label>
              <Input value={item.link} onChange={(e) => updateField(item.id, "link", e.target.value)} placeholder="https://..." />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs text-muted-foreground font-medium">Tecnologias (separadas por coma)</label>
            <Input value={item.tech.join(", ")} onChange={(e) => updateTech(item.id, e.target.value)} placeholder="React, Node.js, CSS3" />
          </div>
        </div>
      ))}
      <SectionFooter onAdd={add} onSave={() => onSave(items)} addLabel="Agregar proyecto" />
    </div>
  )
}

// ---- Gmail Section ----
function GmailSection() {
  const [gmailUser, setGmailUser] = useState("")
  const [gmailPass, setGmailPass] = useState("")
  const [showPass, setShowPass] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const config = getGmailConfigClient()
    setGmailUser(config.user || "")
    setGmailPass(config.pass || "")
  }, [])

  const handleSave = () => {
    saveGmailConfigClient({ user: gmailUser, pass: gmailPass })
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="space-y-5">
      <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl text-sm space-y-1">
        <p className="font-semibold text-primary">Como obtener la Contrasena de Aplicacion:</p>
        <ol className="list-decimal list-inside space-y-0.5 text-xs text-muted-foreground">
          <li>Ve a myaccount.google.com/security</li>
          <li>Activa "Verificacion en 2 pasos"</li>
          <li>Ve a myaccount.google.com/apppasswords</li>
          <li>Selecciona "Correo" + "Otro (nombre personalizado)"</li>
          <li>Escribe "Portafolio Damian" como nombre</li>
          <li>Copia los 16 caracteres sin espacios</li>
        </ol>
      </div>
      <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-xs text-green-600 dark:text-green-400">
        Las credenciales del servidor estan configuradas via variables de entorno (GMAIL_USER / GMAIL_PASS).
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-medium">Correo Gmail</label>
        <Input type="email" value={gmailUser} onChange={(e) => setGmailUser(e.target.value)} placeholder="tucorreo@gmail.com" />
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-medium">Contrasena de Aplicacion (16 caracteres)</label>
        <div className="relative">
          <Input type={showPass ? "text" : "password"} value={gmailPass} onChange={(e) => setGmailPass(e.target.value)} placeholder="abcdefghijklmnop" className="pr-10" />
          <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground" aria-label={showPass ? "Ocultar" : "Mostrar"}>
            {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        <p className="text-xs text-muted-foreground">Se guarda solo en este navegador.</p>
      </div>
      <Button onClick={handleSave} className="flex items-center gap-2">
        <Save className="w-4 h-4" />
        {saved ? "Guardado correctamente" : "Guardar configuracion"}
      </Button>
    </div>
  )
}

// ---- Credentials Section ----
function CredentialsSection() {
  const { changeCredentials } = useAdmin()
  const [newUser, setNewUser] = useState("")
  const [newPass, setNewPass] = useState("")
  const [confirm, setConfirm] = useState("")
  const [msg, setMsg] = useState("")
  const [isError, setIsError] = useState(false)

  const handleSave = () => {
    if (!newUser || !newPass) { setMsg("Por favor completa todos los campos."); setIsError(true); return }
    if (newPass !== confirm) { setMsg("Las contrasenas no coinciden."); setIsError(true); return }
    changeCredentials(newUser, newPass)
    setMsg("Credenciales actualizadas correctamente.")
    setIsError(false)
    setNewUser(""); setNewPass(""); setConfirm("")
    setTimeout(() => setMsg(""), 4000)
  }

  return (
    <div className="space-y-5">
      <p className="text-sm text-muted-foreground">Cambia el usuario y contrasena de acceso al panel. Los cambios se guardan en este navegador.</p>
      <div className="p-3 bg-card border border-border rounded-xl text-xs text-muted-foreground">
        Credenciales por defecto — usuario: <strong className="text-foreground">admin</strong> / contrasena: <strong className="text-foreground">Admin2025</strong>
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-medium">Nuevo usuario</label>
        <Input value={newUser} onChange={(e) => setNewUser(e.target.value)} placeholder="admin" />
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-medium">Nueva contrasena</label>
        <Input type="password" value={newPass} onChange={(e) => setNewPass(e.target.value)} placeholder="••••••••" />
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-medium">Confirmar contrasena</label>
        <Input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="••••••••" />
      </div>
      {msg && (
        <p className={`text-sm px-3 py-2 rounded-xl border ${isError ? "bg-red-500/10 text-red-600 border-red-500/20" : "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"}`}>
          {msg}
        </p>
      )}
      <Button onClick={handleSave} className="flex items-center gap-2">
        <Save className="w-4 h-4" />
        Actualizar credenciales
      </Button>
    </div>
  )
}

// ---- Shared footer for add/save ----
function SectionFooter({ onAdd, onSave, addLabel }) {
  return (
    <div className="flex items-center gap-3 pt-2">
      <Button variant="outline" size="sm" onClick={onAdd} className="flex items-center gap-2">
        <Plus className="w-4 h-4" />
        {addLabel}
      </Button>
      <Button size="sm" onClick={onSave} className="flex items-center gap-2">
        <Save className="w-4 h-4" />
        Guardar cambios
      </Button>
    </div>
  )
}

// ---- Stat Card ----
function StatCard({ icon: Icon, label, value, color = "text-primary" }) {
  return (
    <div className="bg-card border border-border rounded-xl p-4 flex items-center gap-4">
      <div className={`p-2.5 rounded-lg bg-primary/10 ${color}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-2xl font-bold leading-none">{value}</p>
        <p className="text-xs text-muted-foreground mt-1">{label}</p>
      </div>
    </div>
  )
}

// ---- Overview Panel ----
function OverviewPanel({ data, onNavigate }) {
  const stats = [
    { icon: LayoutDashboard, label: "Servicios",       value: data?.services?.length ?? 0 },
    { icon: Briefcase,       label: "Experiencias",    value: data?.experiences?.length ?? 0 },
    { icon: Code2,           label: "Tecnologias",     value: data?.technologies?.length ?? 0 },
    { icon: Award,           label: "Certificaciones", value: data?.certifications?.length ?? 0 },
    { icon: FolderOpen,      label: "Proyectos",       value: data?.adminProjects?.length ?? 0 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold">Vista general</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Resumen del contenido actual de tu portafolio.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {stats.map((s) => (
          <StatCard key={s.label} icon={s.icon} label={s.label} value={s.value} />
        ))}
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3">Accesos rapidos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {SECTIONS.map((section) => {
            const Icon = section.icon
            return (
              <button
                key={section.id}
                onClick={() => onNavigate(section.id)}
                className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all text-left group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{section.label}</p>
                  <p className="text-xs text-muted-foreground">{section.description}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ---- Main Dashboard ----
export function AdminDashboard({ onClose, onNavigate: onNavigateProp }) {
  const { logout } = useAdmin()
  const [activeSection, setActiveSection] = useState("overview")
  const [data, setData] = useState(null)
  const [savedMsg, setSavedMsg] = useState("")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    setData(getPortfolioData())
  }, [])

  const handleSave = (section, value) => {
    updatePortfolioSection(section, value)
    setData((prev) => ({ ...prev, [section]: value }))
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("portfolio_updated"))
    }
    setSavedMsg("Guardado correctamente")
    setTimeout(() => setSavedMsg(""), 3000)
  }

  const handleLogout = () => {
    logout()
    if (onClose) onClose()
  }

  const currentSection = SECTIONS.find((s) => s.id === activeSection)

  if (!data) return null

  return (
    <div className="fixed inset-0 z-[90] flex flex-col bg-background">
      {/* Top bar */}
      <header className="flex-none flex items-center justify-between px-4 sm:px-6 h-14 bg-card border-b border-border shadow-sm z-10">
        <div className="flex items-center gap-3">
          {/* Mobile sidebar toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-1.5 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Menu"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-primary/10">
              <Settings className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h1 className="font-bold text-sm leading-none">Panel de Administracion</h1>
              <p className="text-xs text-muted-foreground leading-none mt-0.5">Portafolio de Damian Jinel</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {savedMsg && (
            <span className="hidden sm:inline text-xs text-green-600 dark:text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
              {savedMsg}
            </span>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={() => { if (onNavigateProp) onNavigateProp("home"); if (onClose) onClose() }}
            className="flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            <span className="hidden sm:inline">Ver portafolio</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-500 border-red-500/30 hover:bg-red-500/10"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Salir</span>
          </Button>
        </div>
      </header>

      {/* Body: sidebar + content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`
            flex-none w-56 bg-card border-r border-border flex flex-col overflow-y-auto
            transition-transform duration-200
            lg:translate-x-0 lg:relative lg:block
            ${sidebarOpen ? "translate-x-0 absolute inset-y-0 left-0 z-20 shadow-xl" : "-translate-x-full absolute"}
            lg:translate-x-0 lg:relative lg:shadow-none
          `}
          style={{ top: 0 }}
        >
          {/* Overview link */}
          <div className="p-3">
            <button
              onClick={() => { setActiveSection("overview"); setSidebarOpen(false) }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeSection === "overview"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <LayoutDashboard className="w-4 h-4 flex-none" />
              Vista general
            </button>
          </div>

          <div className="px-3 pb-1">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest px-3 mb-1">Secciones</p>
          </div>

          <nav className="px-3 space-y-0.5 flex-1">
            {SECTIONS.map((section) => {
              const Icon = section.icon
              const isActive = activeSection === section.id
              return (
                <button
                  key={section.id}
                  onClick={() => { setActiveSection(section.id); setSidebarOpen(false) }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <Icon className="w-4 h-4 flex-none" />
                  <span className="truncate">{section.label}</span>
                </button>
              )
            })}
          </nav>

          <div className="p-3 mt-auto border-t border-border">
            <p className="text-xs text-muted-foreground text-center">IgniStack v1.0</p>
          </div>
        </aside>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 z-10 bg-background/60 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          {/* Section header */}
          <div className="sticky top-0 z-[5] bg-background/80 backdrop-blur-sm border-b border-border px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {currentSection ? (
                <>
                  <div className="p-1.5 rounded-lg bg-primary/10">
                    <currentSection.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-bold text-base leading-none">{currentSection.label}</h2>
                    <p className="text-xs text-muted-foreground mt-0.5">{currentSection.description}</p>
                  </div>
                </>
              ) : (
                <div>
                  <h2 className="font-bold text-base leading-none">Vista general</h2>
                  <p className="text-xs text-muted-foreground mt-0.5">Resumen del portafolio</p>
                </div>
              )}
            </div>
            {savedMsg && (
              <span className="sm:hidden text-xs text-green-600 dark:text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                {savedMsg}
              </span>
            )}
          </div>

          {/* Section content */}
          <div className="p-6 max-w-3xl">
            {activeSection === "overview" && (
              <OverviewPanel data={data} onNavigate={setActiveSection} />
            )}
            {activeSection === "services" && (
              <ServicesSection data={data.services} onSave={(v) => handleSave("services", v)} />
            )}
            {activeSection === "experiences" && (
              <ExperiencesSection data={data.experiences} onSave={(v) => handleSave("experiences", v)} />
            )}
            {activeSection === "technologies" && (
              <TechnologiesSection data={data.technologies} onSave={(v) => handleSave("technologies", v)} />
            )}
            {activeSection === "certifications" && (
              <CertificationsSection data={data.certifications} onSave={(v) => handleSave("certifications", v)} />
            )}
            {activeSection === "adminProjects" && (
              <ProjectsSection data={data.adminProjects} onSave={(v) => handleSave("adminProjects", v)} />
            )}
            {activeSection === "gmail" && <GmailSection />}
            {activeSection === "credentials" && <CredentialsSection />}
          </div>
        </main>
      </div>
    </div>
  )
}
