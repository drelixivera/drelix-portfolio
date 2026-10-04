import { useParams } from "react-router-dom"

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="font-mono text-text-muted text-sm mb-4">// project</p>
        <h1 className="font-display text-6xl">{slug}</h1>
      </div>
    </div>
  )
}