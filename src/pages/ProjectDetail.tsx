import { Link, useParams } from "react-router-dom"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Container } from "../components/ui/Container"
import { SectionLabel } from "../components/ui/SectionLabel"
import { Reveal } from "../components/ui/Reveal"
import { getProjectBySlug, getNextProject } from "../lib/projects"
import NotFound from "./NotFound"

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()

  if (!slug) return <NotFound />

  const project = getProjectBySlug(slug)
  if (!project) return <NotFound />

  const next = getNextProject(slug)

  return (
    <article className="pt-12 md:pt-20 pb-32">
      <Container>
        {/* Back link */}
        <Reveal>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors"
          >
            <ArrowLeft size={14} />
            Back to work
          </Link>
        </Reveal>

        {/* Header */}
        <header className="mt-12 md:mt-16">
          <Reveal delay={0.05}>
            <div className="flex items-center gap-4 font-mono text-xs text-text-muted">
              <span>{project.index}</span>
              <span className="h-px w-8 bg-border" />
              <span>{project.year}</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
              {project.title}
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 text-lg md:text-xl text-text-muted max-w-2xl">
              {project.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-accent text-accent-ink font-medium px-5 py-2.5 rounded-full hover:bg-accent-hover transition-colors"
              >
                Live site
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-full hover:border-text transition-colors"
              >
                GitHub
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </Reveal>
        </header>

        {/* Hero image */}
        <Reveal delay={0.25} className="mt-16 md:mt-20">
          <div className="rounded-2xl border border-border overflow-hidden bg-surface">
            <img
              src={project.image}
              alt={`${project.title} — full preview`}
              className="w-full h-auto"
            />
          </div>
        </Reveal>

        {/* Overview */}
        <section className="mt-24 md:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <SectionLabel>overview</SectionLabel>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8">
            <p className="text-lg md:text-xl leading-relaxed text-text-muted">
              {project.description}
            </p>
          </Reveal>
        </section>

        {/* Details grid */}
        <section className="mt-20 md:mt-28 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <SectionLabel>details</SectionLabel>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8">
            <dl className="divide-y divide-border border-y border-border">
              <div className="grid grid-cols-3 py-5 gap-4">
                <dt className="font-mono text-xs uppercase tracking-widest text-text-muted">
                  Client
                </dt>
                <dd className="col-span-2">{project.client}</dd>
              </div>
              <div className="grid grid-cols-3 py-5 gap-4">
                <dt className="font-mono text-xs uppercase tracking-widest text-text-muted">
                  Year
                </dt>
                <dd className="col-span-2">{project.year}</dd>
              </div>
              <div className="grid grid-cols-3 py-5 gap-4">
                <dt className="font-mono text-xs uppercase tracking-widest text-text-muted">
                  Role
                </dt>
                <dd className="col-span-2">{project.role}</dd>
              </div>
              <div className="grid grid-cols-3 py-5 gap-4">
                <dt className="font-mono text-xs uppercase tracking-widest text-text-muted">
                  Stack
                </dt>
                <dd className="col-span-2 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono border border-border rounded-full px-3 py-1 text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
        </section>
      </Container>

      {/* Next project */}
      {next && (
        <section className="mt-32 md:mt-40 border-t border-border">
          <Container>
            <Reveal>
              <Link
                to={`/work/${next.slug}`}
                className="group flex flex-col md:flex-row md:items-end justify-between gap-6 py-12 md:py-16"
              >
                <div>
                  <p className="font-mono text-xs text-text-muted mb-4">
                    <span className="text-accent">//</span> next project
                  </p>
                  <p className="font-display text-4xl md:text-6xl leading-none transition-colors group-hover:text-accent">
                    {next.title}
                  </p>
                </div>
                <ArrowUpRight
                  size={32}
                  className="text-text-muted transition-all duration-500 ease-out-expo group-hover:text-accent group-hover:translate-x-2 group-hover:-translate-y-2"
                />
              </Link>
            </Reveal>
          </Container>
        </section>
      )}
    </article>
  )
}