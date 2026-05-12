"use client"

import { useState, useEffect, useRef } from "react"
import { Navigation } from "./components/Navigation"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Experience } from "./components/Experience"
import { Contact } from "./components/Contact"
import { ProjectsPage } from "./components/ProjectsPage"
import { Login } from "./components/Login"
import { AdminDashboard } from "./components/admin/AdminDashboard"
import { AdminProvider, useAdmin } from "./context/AdminContext"

function AppContent() {
  const [currentPage, setCurrentPage] = useState("home")
  const { isAuthenticated, navigateToAdmin } = useAdmin()
  const prevNavigateToAdmin = useRef(null)

  // Redirect to admin dashboard after successful login
  useEffect(() => {
    if (
      navigateToAdmin &&
      navigateToAdmin !== prevNavigateToAdmin.current &&
      isAuthenticated
    ) {
      prevNavigateToAdmin.current = navigateToAdmin
      setCurrentPage("admin")
      window.scrollTo(0, 0)
    }
  }, [navigateToAdmin, isAuthenticated])

  const navigateToPage = (page) => {
    // Only allow admin page if authenticated
    if (page === "admin" && !isAuthenticated) return
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  // Admin dashboard (full screen overlay)
  if (currentPage === "admin" && isAuthenticated) {
    return (
      <>
        <Navigation onNavigate={navigateToPage} currentPage={currentPage} />
        <AdminDashboard
          onClose={() => navigateToPage("home")}
          onNavigate={navigateToPage}
        />
        <Login />
      </>
    )
  }

  // Projects page
  if (currentPage === "projects") {
    return (
      <main className="min-h-screen">
        <Navigation onNavigate={navigateToPage} currentPage={currentPage} />
        <ProjectsPage onNavigate={navigateToPage} />
        <Login />
      </main>
    )
  }

  // Home page
  return (
    <main className="min-h-screen">
      <Navigation onNavigate={navigateToPage} currentPage={currentPage} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Login />
    </main>
  )
}

function App() {
  return (
    <AdminProvider>
      <AppContent />
    </AdminProvider>
  )
}

export default App
