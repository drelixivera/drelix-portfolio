import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import type { Note } from "../../lib/notes"

type NoteRowProps = {
  note: Note
}

function formatDate(iso: string): string {
  const date = new Date(iso)
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

export function NoteRow({ note }: NoteRowProps) {
  return (
    <Link
      to={`/notes/${note.slug}`}
      className="group block border-t border-border py-8 md:py-10"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          {/* Meta row */}
          <div className="flex items-center gap-3 font-mono text-xs text-text-muted">
            <time dateTime={note.date}>{formatDate(note.date)}</time>
            <span className="h-px w-4 bg-border" />
            <span>{note.tag}</span>
          </div>

          {/* Title */}
          <h3 className="mt-3 font-display text-2xl md:text-3xl transition-colors group-hover:text-accent">
            {note.title}
          </h3>

          {/* Summary */}
          <p className="mt-3 text-text-muted max-w-2xl leading-relaxed">
            {note.summary}
          </p>

          {/* Reading time */}
          <p className="mt-4 font-mono text-xs text-text-muted">
            {note.readingTime} min read
          </p>
        </div>

        {/* Arrow */}
        <ArrowUpRight
          size={20}
          className="mt-1 text-text-muted transition-all duration-500 ease-out-expo group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0"
        />
      </div>
    </Link>
  )
}