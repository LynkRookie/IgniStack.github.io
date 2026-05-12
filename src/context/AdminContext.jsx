"use client"

import { createContext, useContext, useState, useEffect, useCallback } from "react"

const ADMIN_KEY = "portfolio_admin_session"
const CREDENTIALS_KEY = "portfolio_admin_credentials"

// Default credentials (can be changed by admin from dashboard)
const DEFAULT_CREDENTIALS = {
  username: "admin",
  password: "Admin2025",
}

const defaultAdminContext = {
  isAuthenticated: false,
  showLogin: false,
  setShowLogin: () => {},
  login: () => ({ success: false, error: "No provider" }),
  logout: () => {},
  changeCredentials: () => {},
  onLoginSuccess: null,
  setOnLoginSuccess: () => {},
  navigateToAdmin: null,
  setNavigateToAdmin: () => {},
}

const AdminContext = createContext(defaultAdminContext)

export function AdminProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [onLoginSuccess, setOnLoginSuccess] = useState(null)
  const [navigateToAdmin, setNavigateToAdmin] = useState(null)

  // Load session on mount
  useEffect(() => {
    const session = sessionStorage.getItem(ADMIN_KEY)
    if (session === "true") {
      setIsAuthenticated(true)
    }
  }, [])

  const getCredentials = () => {
    try {
      const stored = localStorage.getItem(CREDENTIALS_KEY)
      if (stored) return JSON.parse(stored)
    } catch {
      // ignore
    }
    return DEFAULT_CREDENTIALS
  }

  const login = useCallback((username, password) => {
    const creds = getCredentials()
    if (username === creds.username && password === creds.password) {
      sessionStorage.setItem(ADMIN_KEY, "true")
      setIsAuthenticated(true)
      setShowLogin(false)
      // Navigate to admin dashboard after successful login
      setNavigateToAdmin({ trigger: Date.now() })
      return { success: true }
    }
    return { success: false, error: "Usuario o contraseña incorrectos" }
  }, [])

  const logout = useCallback(() => {
    sessionStorage.removeItem(ADMIN_KEY)
    setIsAuthenticated(false)
  }, [])

  const changeCredentials = useCallback((newUsername, newPassword) => {
    localStorage.setItem(
      CREDENTIALS_KEY,
      JSON.stringify({ username: newUsername, password: newPassword })
    )
  }, [])

  return (
    <AdminContext.Provider
      value={{
        isAuthenticated,
        showLogin,
        setShowLogin,
        login,
        logout,
        changeCredentials,
        navigateToAdmin,
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}

export function useAdmin() {
  return useContext(AdminContext)
}
