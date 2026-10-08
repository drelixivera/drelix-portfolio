import { Link, useParams } from "react-router-dom"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Container } from "../components/ui/Container"
import { Reveal } from "../components/ui/Reveal"
import { getNoteBySlug, getAdjacentNotes } from "../lib/notes"
import NotFound from "./NotFound"

function formatDate(iso: string): string {
  const date = new Date(iso)
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

export default function NoteDetail() {
  const { slug } = useParams<{ slug: string }>()

  if (!slug) return <NotFound />

  const note = getNoteBySlug(slug)
  if (!note) return <NotFound />

  const { prev, next } = getAdjacentNotes(slug)

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
            Back
          </Link>
        </Reveal>

        {/* Header */}
        <header className="mt-12 md:mt-16 max-w-3xl">
          <Reveal delay={0.05}>
            <div className="flex items-center gap-3 font-mono text-xs text-text-muted">
              <time dateTime={note.date}>{formatDate(note.date)}</time>
              <span className="h-px w-4 bg-border" />
              <span>{note.tag}</span>
              <span className="h-px w-4 bg-border" />
              <span>{note.readingTime} min read</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
              {note.title}
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 text-lg md:text-xl text-text-muted leading-relaxed">
              {note.summary}
            </p>
          </Reveal>
        </header>

        {/* Body */}
        <Reveal delay={0.2} className="mt-16 md:mt-20">
          <div className="max-w-2xl prose-custom">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => (
                  <h2 className="mt-14 mb-5 font-display text-3xl md:text-4xl leading-tight">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mt-12 mb-4 font-display text-2xl md:text-3xl leading-tight">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="my-5 text-lg leading-relaxed text-text-muted">
                    {children}
                  </p>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text underline decoration-border underline-offset-4 hover:decoration-accent transition-colors"
                  >
                    {children}
                  </a>
                ),
                strong: ({ children }) => (
                  <strong className="text-text font-medium">{children}</strong>
                ),
                em: ({ children }) => (
                  <em className="italic text-text">{children}</em>
                ),
                ul: ({ children }) => (
                  <ul className="my-6 space-y-3 list-none">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="my-6 space-y-3 list-decimal list-inside">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-lg leading-relaxed text-text-muted pl-6 relative before:content-['—_'] before:absolute before:left-0 before:text-accent">
                    {children}
                  </li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="my-8 border-l-2 border-accent pl-6 italic font-display text-xl md:text-2xl text-text leading-snug">
                    {children}
                  </blockquote>
                ),
                code: ({ children }) => (
                  <code className="font-mono text-sm bg-surface border border-border rounded px-1.5 py-0.5 text-text">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="my-6 bg-surface border border-border rounded-lg p-5 overflow-x-auto text-sm font-mono">
                    {children}
                  </pre>
                ),
                hr: () => <hr className="my-12 border-border" />,
              }}
            >
              {note.content}
            </ReactMarkdown>
          </div>
        </Reveal>
      </Container>

      {/* Prev / Next navigation */}
      {(prev || next) && (
        <section className="mt-32 md:mt-40 border-t border-border">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 md:py-16">
              {prev ? (
                <Link
                  to={`/notes/${prev.slug}`}
                  className="group flex flex-col gap-3"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
                    <span className="text-accent">//</span> older
                  </span>
                  <span className="font-display text-2xl md:text-3xl transition-colors group-hover:text-accent">
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}

              {next ? (
                <Link
                  to={`/notes/${next.slug}`}
                  className="group flex flex-col gap-3 md:items-end md:text-right"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
                    <span className="text-accent">//</span> newer
                  </span>
                  <span className="font-display text-2xl md:text-3xl transition-colors group-hover:text-accent">
                    {next.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </Container>
        </section>
      )}
    </article>
  )
}