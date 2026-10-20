import { Container } from "../ui/Container"
import { SectionLabel } from "../ui/SectionLabel"
import { Reveal } from "../ui/Reveal"

const coreStack = [
  "React / Next.js",
  "TypeScript",
  "Python / FastAPI",
  "LLM APIs (OpenAI / Gemini / Anthropic)",
  "Vector DBs (Pinecone / pgvector)",
  "Tailwind CSS",
  "Node.js",
]

const exploring = [
  "AI Multi-Agent Systems",
  "Advanced RAG Pipelines",
  "Autonomous Workflows",
  "System Architecture",
]

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
                Fullstack-AI Engineer and Automation Specialist dedicated to turning complex manual processes and modern LLM capabilities into fast, robust, and user-centric products.
              </p>
              <p>
                I architect end-to-end applications bridging modern frontend engineering (React, Next.js, TypeScript) with AI backends, APIs, and data pipelines (Python, FastAPI, LLM integrations, and Vector DBs).
              </p>
              <p>
               Whether it's deploying intelligent agents, mapping out data-heavy Chemical Engineering workflows, or crafting high-performance digital tools, I focus on shipping software that creates tangible leverage.
              </p>
            </div>

            {/* Core Stack & Technologies */}
            <div className="mt-12 pt-8 border-t border-border">
              <Reveal delay={0.25}>
                <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">
                  <span className="text-accent">//</span> core stack & technologies
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <ul className="flex flex-wrap gap-2">
                  {coreStack.map((item) => (
                    <li
                      key={item}
                      className="text-sm border border-border rounded-full px-4 py-1.5 text-text hover:border-accent transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <div className="mt-8">
                <Reveal delay={0.35}>
                  <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">
                    <span className="text-accent">//</span> exploring & deepening
                  </p>
                </Reveal>
                <Reveal delay={0.4}>
                  <ul className="flex flex-wrap gap-2">
                    {exploring.map((item) => (
                      <li
                        key={item}
                        className="text-sm border border-border/70 rounded-full px-4 py-1.5 text-text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
