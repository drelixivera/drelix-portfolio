import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { notes } from "../../lib/notes"
import { Container } from "../ui/Container"
import { SectionLabel } from "../ui/SectionLabel"
import { Reveal } from "../ui/Reveal"
import { NoteRow } from "../ui/NoteRow"

export function Notes() {
  if (notes.length === 0) return null

  const featured = notes.slice(0, 3)

  return (
    <section id="notes" className="py-32 md:py-40 border-t border-border">
      <Container>
        <Reveal>
          <SectionLabel>notes</SectionLabel>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <Reveal delay={0.05} className="lg:col-span-7">
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Short thoughts.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5 lg:pt-3">
            <p className="text-text-muted">
              Things I'm learning, noticing, or figuring out. Longer than a
              tweet, shorter than a blog post.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20">
          {featured.map((note, i) => (
            <Reveal key={note.slug} delay={i * 0.05}>
              <NoteRow note={note} />
            </Reveal>
          ))}

          {/* Bottom border to close the list */}
          <div className="border-t border-border" />

          {/* View all — only if there are more than 3 */}
          {notes.length > 3 && (
            <Reveal>
              <div className="pt-8">
                <Link
                  to="/notes"
                  className="group inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
                >
                  All {notes.length} notes
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  )
}