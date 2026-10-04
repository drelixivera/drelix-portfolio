import { projects } from "../../data/projects"
import { Container } from "../ui/Container"
import { SectionLabel } from "../ui/SectionLabel"
import { Reveal } from "../ui/Reveal"
import { ProjectCard } from "./ProjectCard"

export function Work() {
  return (
    <section id="work" className="py-32 md:py-40">
      <Container>
        <Reveal>
          <SectionLabel>work</SectionLabel>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <Reveal delay={0.05} className="lg:col-span-7">
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Selected projects.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5 lg:pt-3">
            <p className="text-text-muted">
              Three shipped projects — two for real clients, one personal.
              More on the way.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 md:mt-28 space-y-24 md:space-y-32">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  )
}