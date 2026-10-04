import { Link } from "react-router-dom"
import { Container } from "../ui/Container"

const socials = [
  { label: "GitHub", href: "https://github.com/YOUR_USERNAME" },
  { label: "LinkedIn", href: "https://linkedin.com/in/YOUR_USERNAME" },
  { label: "Email", href: "mailto:you@example.com" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <Container>
        {/* Big sign-off */}
        <div className="py-16 md:py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-6">
            <span className="text-accent">//</span> say hi
          </p>
          <p className="font-display text-3xl md:text-5xl leading-tight max-w-3xl">
            Currently open to freelance work and interesting collaborations.
          </p>
        </div>

        {/* Socials */}
        <div className="border-t border-border py-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <ul className="flex flex-wrap gap-6">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted hover:text-accent transition-colors"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-6 text-sm text-text-muted">
            <Link to="/" className="hover:text-text transition-colors">
              Home
            </Link>
            <a href="#work" className="hover:text-text transition-colors">
              Work
            </a>
            <a href="#about" className="hover:text-text transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-text transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Legal row */}
        <div className="border-t border-border py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-text-muted font-mono">
          <p>© {year} Drelix Ivera</p>
          <p>Designed & built by me</p>
        </div>
      </Container>
    </footer>
  )
}