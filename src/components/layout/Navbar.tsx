import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X, Sun, Moon } from "lucide-react"
import { cn } from "../../lib/cn"
import { Container } from "../ui/Container"
import { useTheme } from "../../hooks/useTheme"

const navLinks = [
  { label: "Work", href: "#work", index: "01" },
  { label: "About", href: "#about", index: "02" },
  { label: "Contact", href: "#contact", index: "03" },
]

const socials = [
  { label: "GitHub", href: "https://github.com/drelixivera" },
  { label: "LinkedIn", href: "https://linkedin.com/in/drelixivera" },
  { label: "Email", href: "mailto:you@example.com" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  // Scroll listener for navbar blur
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  // Close drawer on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-bg/70 backdrop-blur-xl border-b border-border"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <Container>
          <nav className="flex h-16 md:h-20 items-center justify-between">
            {/* LEFT: Logo */}
            <Link
              to="/"
              className="font-display text-xl md:text-2xl tracking-tight"
              onClick={() => setMobileOpen(false)}
            >
              Drelix Ivera
            </Link>

            {/* RIGHT: Nav links + buttons, clustered together */}
            <div className="flex items-center gap-2 md:gap-8">
              {/* Desktop nav links */}
              <ul className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-text-muted hover:text-text transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Buttons group: theme toggle + mobile hamburger */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-surface transition-colors"
                  aria-label={`Switch to ${
                    theme === "dark" ? "light" : "dark"
                  } mode`}
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                <button
                  type="button"
                  className="md:hidden p-2 -mr-2 relative z-[60]"
                  onClick={() => setMobileOpen((v) => !v)}
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  aria-expanded={mobileOpen}
                >
                  {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </nav>
        </Container>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      />

      {/* Side drawer */}
      <aside
        className={cn(
          "fixed top-0 right-0 z-50 h-screen w-[80%] max-w-sm",
          "bg-surface border-l border-border md:hidden",
          "transition-transform duration-500 ease-out-expo",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="flex h-full flex-col p-8 pt-24">
          {/* Numbered nav links */}
          <ul className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-baseline gap-4"
                >
                  <span className="font-mono text-xs text-text-muted">
                    {link.index}
                  </span>
                  <span className="font-display text-4xl transition-colors group-hover:text-accent">
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Socials at bottom */}
          <div className="mt-auto pt-8 border-t border-border">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">
              <span className="text-accent">//</span> elsewhere
            </p>
            <ul className="flex flex-col gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-muted hover:text-text transition-colors"
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  )
}