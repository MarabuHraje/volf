"use client"
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface ThemeContextValue {
  theme: 'light' | 'dark'
  toggle: () => void
  setTheme: (t: 'light' | 'dark') => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function getPreferred(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'dark'
  const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
  if (stored) return stored
  const mq = window.matchMedia('(prefers-color-scheme: dark)')
  return mq.matches ? 'dark' : 'light'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<'light' | 'dark'>(() => getPreferred())

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => setThemeState(t => (t === 'dark' ? 'light' : 'dark'))
  const setTheme = (t: 'light' | 'dark') => setThemeState(t)

  return (
    <ThemeContext.Provider value={{ theme, toggle, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
