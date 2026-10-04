import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <p className="font-mono text-text-muted text-sm">// 404</p>
      <h1 className="font-display text-6xl">Lost, are we?</h1>
      <Link
        to="/"
        className="text-accent hover:text-accent-hover transition-colors"
      >
        ← Back home
      </Link>
    </div>
  )
}