import { Container } from "../ui/Container"

const socials = [
  { label: "GitHub", href: "https://github.com/YOUR_USERNAME" },
  { label: "LinkedIn", href: "https://linkedin.com/in/YOUR_USERNAME" },
  { label: "Email", href: "mailto:you@example.com" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border mt-32">
      <Container>
        <div className="py-12 flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="font-display text-2xl">Drelix Ivera</p>
            <p className="text-sm text-text-muted mt-2">
              Frontend developer, still learning, always building.
            </p>
          </div>

          <ul className="flex gap-6">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted hover:text-accent transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-border py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-text-muted font-mono">
          <p>© {year} Drelix Ivera</p>
          <p>Built with React, TypeScript & Tailwind</p>
        </div>
      </Container>
    </footer>
  )
}