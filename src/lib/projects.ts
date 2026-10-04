import { projects } from "../data/projects"

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return undefined
  return projects[(index + 1) % projects.length]
}