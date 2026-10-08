import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { notes } from "../lib/notes"
import { Container } from "../components/ui/Container"
import { SectionLabel } from "../components/ui/SectionLabel"
import { Reveal } from "../components/ui/Reveal"
import { NoteRow } from "../components/ui/NoteRow"

export default function NotesIndex() {
  return (
    <div className="pt-12 md:pt-20 pb-32">
      <Container>
        {/* Back link */}
        <Reveal>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors"
          >
            <ArrowLeft size={14} />
            Back home
          </Link>
        </Reveal>

        {/* Header */}
        <header className="mt-12 md:mt-16 max-w-3xl">
          <Reveal>
            <SectionLabel>notes</SectionLabel>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-8 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
              All notes.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-text-muted max-w-xl leading-relaxed">
              Things I'm learning, noticing, or figuring out. {notes.length}{" "}
              {notes.length === 1 ? "note" : "notes"} so far.
            </p>
          </Reveal>
        </header>

        {/* All notes */}
        <div className="mt-20 md:mt-24">
          {notes.length === 0 ? (
            <p className="text-text-muted">No notes yet. Check back soon.</p>
          ) : (
            <>
              {notes.map((note, i) => (
                <Reveal key={note.slug} delay={i * 0.03}>
                  <NoteRow note={note} />
                </Reveal>
              ))}
              <div className="border-t border-border" />
            </>
          )}
        </div>
      </Container>
    </div>
  )
}