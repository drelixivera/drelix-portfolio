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
    client: "Adeola Fashion Designer",
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
    slug: "deptpay",
    index: "03",
    title: "DeptPay",
    client: "LAUTECH Chemical Engineering Executives",
    year: "2026",
    role: "Full-Stack Developer & Product Designer",
    tagline: "Streamlining class payments for 120+ students.",
    description:
      "A production-ready payment verification portal built to replace WhatsApp DM chaos and manual handwriting bookkeeping. Features real Supabase authentication, secure role-based access control, client-side image compression, and a one-click PDF export for lecturers.",
    stack: ["React", "TypeScript", "Supabase", "Tailwind CSS", "PostgreSQL", "Vite"],
    liveUrl: "https://deptpay-landing-page.vercel.app/",
    repoUrl: "https://github.com/drelixivera/deptpay",  
    image: "/projects/deptpay.webp",
    featured: true,
  },
]