"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import { useProgress } from "@/hooks/useProgress"
import { modules } from "@/content/meta/modules"
import { ScrollArea } from "@/components/ui/scroll-area"

export function LessonSidebar() {
  const pathname = usePathname()
  const { isLessonComplete } = useProgress()

  return (
    <aside className="hidden w-64 shrink-0 border-r lg:block">
      <ScrollArea className="h-[calc(100vh-3.5rem)] py-4">
        <nav className="space-y-6 px-3">
          {modules.map((module) => (
            <div key={module.id}>
              <p className="mb-1.5 px-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                {module.icon} {module.subtitle}
              </p>
              <div className="space-y-0.5">
                {module.lessons.map((lesson) => {
                  const href = `/dars/${lesson.slug}`
                  const isActive = pathname === href
                  const completed = isLessonComplete(lesson.id)
                  return (
                    <Link
                      key={lesson.id}
                      href={href}
                      className={cn(
                        "flex items-center gap-2 rounded-md px-2 py-1.5 text-xs transition-colors",
                        isActive
                          ? "bg-accent text-accent-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      {completed ? (
                        <Check className="h-3 w-3 shrink-0 text-emerald-500" />
                      ) : (
                        <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full border text-[8px] font-mono">
                          {lesson.id}
                        </span>
                      )}
                      <span className="truncate">{lesson.title}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  )
}
