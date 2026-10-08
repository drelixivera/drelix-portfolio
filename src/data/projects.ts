export type Project = {
  slug: string
  index: string
  title: string
  client: string
  year: string
  role: string
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
    client: "Adeola Fashion Desinger",
    year: "2025",
    role: "Design & frontend",
    tagline: "A refined landing page for a fashion brand.",
    description:
      "A single-page site for a small fashion business — built to look considered, load fast, and convert visitors into inquiries. Focused on typography, image rhythm, and mobile-first layout.",
    stack: ["React", "Tailwindcss", "JavaScript", "HTML", "CSS3"],
    liveUrl: "https://adeola-fashion-designer.vercel.app/",
    repoUrl: "https://github.com/drelixivera/Adeola-Stiches",
    image: "/projects/fashion.webp",
    featured: true,
  },
  {
    slug: "business-landing",
    index: "02",
    title: "Business Landing Page",
    client: "Course mate",
    year: "2025",
    role: "Design & Frontend development",
    tagline: "A clean, conversion-focused landing for a small business.",
    description:
      "A landing page designed around clarity — clear value proposition, clear action, no clutter. Built for someone who needed a professional web presence without the agency price tag.",
    stack: ["React", "Tailwindcss", "JavaScript", "HTML", "CSS3"],
    liveUrl: "https://academic-visibility-pro.vercel.app/",
    repoUrl: "https://github.com/drelixivera/academic-visibility-pro",
    image: "/projects/business.webp",
    featured: true,
  },
  {
    slug: "shopverse",
    index: "03",
    title: "ShopVerse",
    client: "Personal project",
    year: "2025",
    role: "Design, frontend & deployment",
    tagline: "A demo e-commerce experience.",
    description:
      "A frontend-focused e-commerce demo exploring product listings, cart state, and modern React patterns. Built as a learning ground for TypeScript and Tailwind.",
    stack: ["React", "JavaScript", "Tailwind", "CSS3", "HTML"],
    liveUrl: "https://shopverse-tau-two.vercel.app/",
    repoUrl: "https://github.com/drelixivera/shopverse",
    image: "/projects/shopverse.webp",
    featured: true,
  },
]