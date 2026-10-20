import { useEffect, useState } from "react"

type Theme = "dark" | "light"

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark"

  try {
    const stored = localStorage.getItem("theme")
    if (stored === "light" || stored === "dark") return stored
  } catch {
    // fallback if localStorage is inaccessible
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark"
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    try {
      localStorage.setItem("theme", theme)
    } catch {
      // ignore
    }
  }, [theme])

  function toggleTheme() {
    setTheme((t) => (t === "dark" ? "light" : "dark"))
  }

  return { theme, toggleTheme }
}
