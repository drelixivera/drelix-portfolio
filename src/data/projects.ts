export type Project = {
  slug: string
  index: string
  title: string
  client: string
  year: string
  tagline: string
  description: string
  stack: string[]
  liveUrl: string
  repoUrl: string
  image: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: "fashion-landing",
    index: "01",
    title: "Fashion Business Landing",
    client: "Client: Mom's fashion business",
    year: "2025",
    tagline: "A refined landing page for a fashion brand.",
    description:
      "Placeholder — we'll write the real copy together later.",
    stack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    repoUrl: "#",
    image: "/projects/fashion.jpg",
    featured: true,
  },
  {
    slug: "business-landing",
    index: "02",
    title: "Business Landing Page",
    client: "Client: Coursemate",
    year: "2025",
    tagline: "A clean, conversion-focused landing for a small business.",
    description:
      "Placeholder — we'll write the real copy together later.",
    stack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    repoUrl: "#",
    image: "/projects/business.jpg",
    featured: true,
  },
  {
    slug: "shopverse",
    index: "03",
    title: "ShopVerse",
    client: "Personal project",
    year: "2025",
    tagline: "A demo e-commerce experience.",
    description:
      "Placeholder — we'll write the real copy together later.",
    stack: ["React", "TypeScript", "Tailwind"],
    liveUrl: "#",
    repoUrl: "#",
    image: "/projects/shopverse.jpg",
    featured: true,
  },
]