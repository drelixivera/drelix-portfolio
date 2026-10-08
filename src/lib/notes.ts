import matter from "lite-matter"

export type Note = {
  slug: string
  title: string
  date: string
  tag: string
  summary: string
  content: string
  readingTime: number
}

// Import all markdown files as raw strings at build time
const noteFiles = import.meta.glob("/content/notes/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>

function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / wordsPerMinute))
}

function parseNote(path: string, raw: string): Note {
  const slug = path.split("/").pop()!.replace(/\.md$/, "")
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title ?? "Untitled",
    date: data.date ?? "",
    tag: data.tag ?? "",
    summary: data.summary ?? "",
    content,
    readingTime: calculateReadingTime(content),
  }
}

export const notes: Note[] = Object.entries(noteFiles)
  .map(([path, raw]) => parseNote(path, raw))
  .sort((a, b) => (a.date < b.date ? 1 : -1)) // newest first

export function getNoteBySlug(slug: string): Note | undefined {
  return notes.find((n) => n.slug === slug)
}

export function getAdjacentNotes(slug: string): {
  prev?: Note
  next?: Note
} {
  const index = notes.findIndex((n) => n.slug === slug)
  if (index === -1) return {}
  return {
    prev: notes[index + 1], // older
    next: notes[index - 1], // newer
  }
}