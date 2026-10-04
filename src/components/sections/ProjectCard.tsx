import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "../../data/projects"
import { Reveal } from "../ui/Reveal"

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Reveal>
      <Link
        to={`/work/${project.slug}`}
        className="group block"
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-surface">
          <img
            src={project.image}
            alt={`${project.title} — preview`}
            loading="lazy"
            className="w-full h-full object-contain transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
          />

          {/* Hover overlay with arrow */}
          <div className="absolute top-4 right-4 w-11 h-11 rounded-full bg-accent text-accent-ink flex items-center justify-center opacity-0 -translate-y-2 transition-all duration-300 ease-out-expo group-hover:opacity-100 group-hover:translate-y-0">
            <ArrowUpRight size={18} />
          </div>
        </div>

        {/* Meta row */}
        <div className="mt-6 flex items-start justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 font-mono text-xs text-text-muted">
              <span>{project.index}</span>
              <span className="h-px w-8 bg-border" />
              <span>{project.year}</span>
            </div>

            <h3 className="mt-3 font-display text-3xl md:text-4xl transition-colors group-hover:text-accent">
              {project.title}
            </h3>

            <p className="mt-2 text-text-muted max-w-xl">
              {project.tagline}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="text-xs font-mono text-text-muted border border-border rounded-full px-3 py-1"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 h-px w-full bg-border transition-colors group-hover:bg-accent" />
      </Link>
    </Reveal>
  )
}