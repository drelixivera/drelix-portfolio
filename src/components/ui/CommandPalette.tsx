import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Command } from "cmdk"
import {
  Home,
  User,
  Briefcase,
  FileText,
  Mail,
  ArrowUpRight,
} from "lucide-react"
import { projects } from "../../data/projects"
import { notes } from "../../lib/notes"

type CommandPaletteProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const navigate = useNavigate()
  const [search, setSearch] = useState("")

  // Reset search when reopening
  useEffect(() => {
    if (open) setSearch("")
  }, [open])

  function runCommand(action: () => void) {
    action()
    onOpenChange(false)
  }

  return (
    <Command.Dialog
      open={open}
      onOpenChange={onOpenChange}
      label="Command palette"
      className="fixed inset-0 z-[100]"
      shouldFilter={true}
    >
      {/* Backdrop — clicking it closes the palette */}
      <div
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* Panel — stopPropagation so clicks inside don't bubble to backdrop */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed top-[15%] left-1/2 -translate-x-1/2 w-[90%] max-w-xl"
      >
        <div className="bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden">
          <Command.Input
            value={search}
            onValueChange={setSearch}
            placeholder="Search pages, projects, notes..."
            className="w-full bg-transparent px-5 py-4 text-text placeholder:text-text-muted outline-none border-b border-border font-sans"
          />

          <Command.List className="max-h-[400px] overflow-y-auto p-2">
            <Command.Empty className="py-12 text-center text-sm text-text-muted">
              No results found.
            </Command.Empty>

            <Command.Group
              heading="Navigation"
              className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-text-muted"
            >
              <PaletteItem
                icon={<Home size={16} />}
                label="Home"
                onSelect={() => runCommand(() => navigate("/"))}
              />
              <PaletteItem
                icon={<Briefcase size={16} />}
                label="Work"
                hint="Scroll to projects"
                onSelect={() =>
                  runCommand(() => {
                    navigate("/")
                    setTimeout(() => {
                      document
                        .getElementById("work")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }, 100)
                  })
                }
              />
              <PaletteItem
                icon={<User size={16} />}
                label="About"
                hint="Scroll to about"
                onSelect={() =>
                  runCommand(() => {
                    navigate("/")
                    setTimeout(() => {
                      document
                        .getElementById("about")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }, 100)
                  })
                }
              />
              <PaletteItem
                icon={<FileText size={16} />}
                label="Notes"
                onSelect={() => runCommand(() => navigate("/notes"))}
              />
              <PaletteItem
                icon={<Mail size={16} />}
                label="Contact"
                hint="Scroll to contact"
                onSelect={() =>
                  runCommand(() => {
                    navigate("/")
                    setTimeout(() => {
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }, 100)
                  })
                }
              />
            </Command.Group>

            <Command.Group
              heading="Projects"
              className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-text-muted"
            >
              {projects.map((project) => (
                <PaletteItem
                  key={project.slug}
                  icon={
                    <span className="font-mono text-xs">{project.index}</span>
                  }
                  label={project.title}
                  hint={project.tagline}
                  onSelect={() =>
                    runCommand(() => navigate(`/work/${project.slug}`))
                  }
                />
              ))}
            </Command.Group>

            {notes.length > 0 && (
              <Command.Group
                heading="Notes"
                className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-text-muted"
              >
                {notes.map((note) => (
                  <PaletteItem
                    key={note.slug}
                    icon={<FileText size={16} />}
                    label={note.title}
                    hint={note.tag}
                    onSelect={() =>
                      runCommand(() => navigate(`/notes/${note.slug}`))
                    }
                  />
                ))}
              </Command.Group>
            )}
          </Command.List>

          {/* Footer hint */}
          <div className="border-t border-border px-5 py-3 flex items-center justify-between text-xs font-mono text-text-muted">
            <div className="flex items-center gap-4">
              <span>
                <kbd className="border border-border rounded px-1.5 py-0.5 mr-1.5">
                  ↑↓
                </kbd>
                navigate
              </span>
              <span>
                <kbd className="border border-border rounded px-1.5 py-0.5 mr-1.5">
                  ↵
                </kbd>
                select
              </span>
            </div>
            <span>
              <kbd className="border border-border rounded px-1.5 py-0.5 mr-1.5">
                esc
              </kbd>
              close
            </span>
          </div>
        </div>
      </div>
    </Command.Dialog>
  )
}

// ---- Small reusable item ----

type PaletteItemProps = {
  icon: React.ReactNode
  label: string
  hint?: string
  onSelect: () => void
}

function PaletteItem({ icon, label, hint, onSelect }: PaletteItemProps) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="group flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors data-[selected=true]:bg-bg text-text"
    >
      <span className="text-text-muted group-data-[selected=true]:text-accent transition-colors flex items-center justify-center w-5 h-5 flex-shrink-0">
        {icon}
      </span>
      <span className="flex-1 min-w-0">
        <span className="block truncate">{label}</span>
        {hint && (
          <span className="block text-xs text-text-muted truncate mt-0.5">
            {hint}
          </span>
        )}
      </span>
      <ArrowUpRight
        size={14}
        className="text-text-muted opacity-0 group-data-[selected=true]:opacity-100 transition-opacity flex-shrink-0"
      />
    </Command.Item>
  )
}