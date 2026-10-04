import { testimonials } from "../../data/testimonials"
import { Container } from "../ui/Container"
import { SectionLabel } from "../ui/SectionLabel"
import { Reveal } from "../ui/Reveal"

export function Testimonials() {
  if (testimonials.length === 0) return null

  return (
    <section className="py-32 md:py-40 border-t border-border">
      <Container>
        <Reveal>
          <SectionLabel>kind words</SectionLabel>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-12 font-display text-4xl md:text-5xl leading-tight max-w-3xl">
            What people say.
          </h2>
        </Reveal>

        <div className="mt-20 space-y-16 md:space-y-20">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <figure className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-2">
                  <span className="font-display text-6xl text-accent leading-none">
                    "
                  </span>
                </div>
                <div className="lg:col-span-10">
                  <blockquote className="font-display text-2xl md:text-3xl leading-snug">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 text-sm">
                    <span className="text-text">{t.name}</span>
                    <span className="h-px w-6 bg-border" />
                    <span className="text-text-muted">{t.role}</span>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}