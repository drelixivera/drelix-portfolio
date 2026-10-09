import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { CommandPalette } from "../ui/CommandPalette"

type CommandPaletteMountProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CommandPaletteMount({
  open,
  onOpenChange,
}: CommandPaletteMountProps) {
  const location = useLocation()

  // Global keyboard shortcut
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        onOpenChange(!open)
      }
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [open, onOpenChange])

  // Close on route change
  useEffect(() => {
    onOpenChange(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  return <CommandPalette open={open} onOpenChange={onOpenChange} />
}