import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { CommandPalette } from "../ui/CommandPalette"

export function CommandPaletteMount() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Global keyboard shortcut
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  // Close on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return <CommandPalette open={open} onOpenChange={setOpen} />
}