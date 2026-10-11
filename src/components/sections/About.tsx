import { Container } from "../ui/Container"
import { SectionLabel } from "../ui/SectionLabel"
import { Reveal } from "../ui/Reveal"

const learning = ["TypeScript", "Technical Writing", "System design"]

export function About() {
  return (
    <section id="about" className="py-32 md:py-40">
      <Container>
        <Reveal>
          <SectionLabel>about</SectionLabel>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: editorial quote block */}
          <Reveal delay={0.05} className="lg:col-span-5">
            <div className="border-l-2 border-accent pl-6">
              <p className="font-display text-2xl md:text-3xl leading-snug">
                "Design is not just what it looks like and feels like.
                Design is how it works."
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-widest text-text-muted">
                — Steve Jobs
              </p>
            </div>
          </Reveal>

          {/* Right: copy */}
          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="space-y-6 text-base md:text-lg text-text-muted leading-relaxed">
              <p>
                I'm <span className="text-text">Drelix Ivera</span> — a
                Frontend Developer and Automation Engineer who specializes in turning slow, manual processes into fast, user-friendly web products.
              </p>
              <p>
                I use industry standard stacks to engineer standalone tools, browser extensions and web apps that solve real-world problems.
              </p>
              <p>
               Whether it's mapping out data-heavy Chemical Engineering workflows or building daily productivity tools, I focus on shipping software that saves time.
              </p>
            </div>

            {/* Currently learning */}
            <div className="mt-12 pt-8 border-t border-border">
              <Reveal delay={0.25}>
                <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">
                  <span className="text-accent">//</span> currently learning
                </p>
              </Reveal>
              <Reveal delay={0.35}>
                <ul className="flex flex-wrap gap-2">
                  {learning.map((item) => (
                    <li
                      key={item}
                      className="text-sm border border-border rounded-full px-4 py-1.5 text-text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}