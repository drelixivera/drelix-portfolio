import { useState } from "react"
import type { FormEvent } from "react"
import { ArrowUpRight } from "lucide-react"
import { Container } from "../ui/Container"
import { SectionLabel } from "../ui/SectionLabel"
import { Reveal } from "../ui/Reveal"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnjqykgo"

const links = [
  {
    label: "Email",
    value: "drelixivera@gmail.com",
    href: "mailto:drelixivera@gmail.com",
  },
  {
    label: "X",
    value: "Drelix Ivera",
    href: "https://x.com/he_is_him_01",
  },
  {
    label: "GitHub",
    value: "@drelixivera",
    href: "https://github.com/drelixivera",
  },
]

type Status = "idle" | "submitting" | "success" | "error"

export function Contact() {
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })

      if (res.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-32 md:py-40 border-t border-border">
      <Container>
        <Reveal>
          <SectionLabel>let's talk</SectionLabel>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-12 font-display text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            Have something in mind?{" "}
            <span className="text-accent">Let's build it.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono text-xs uppercase tracking-widest text-text-muted mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono text-xs uppercase tracking-widest text-text-muted mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-xs uppercase tracking-widest text-text-muted mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 transition-colors resize-none"
                />
              </div>

              {/* Honeypot — hidden from humans, bots fill it, Formspree rejects */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="flex items-center gap-6">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group inline-flex items-center gap-2 bg-accent text-accent-ink font-medium px-6 py-3 rounded-full hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending..." : "Send message"}
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>

                {status === "success" && (
                  <p className="text-sm text-accent">
                    Thanks — I'll reply soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Try email instead.
                  </p>
                )}
              </div>
            </form>
          </Reveal>

          {/* Direct links */}
          <Reveal delay={0.15} className="lg:col-span-5">
            <ul className="space-y-6">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-baseline justify-between gap-4 border-b border-border pb-4 hover:border-accent transition-colors"
                  >
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-2">
                        {link.label}
                      </p>
                      <p className="text-lg">{link.value}</p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-text-muted transition-all duration-500 ease-out-expo group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}