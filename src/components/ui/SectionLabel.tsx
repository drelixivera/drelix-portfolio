import { cn } from "../../lib/cn"

type SectionLabelProps = {
  children: string
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "font-mono text-xs uppercase tracking-widest text-text-muted",
        className
      )}
    >
      <span className="text-accent">//</span> {children}
    </p>
  )
}