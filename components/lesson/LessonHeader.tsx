"use client"

import { Clock, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useProgress } from "@/hooks/useProgress"
import { LESSON_TYPE_LABELS, LESSON_TYPE_COLORS } from "@/lib/constants"
import type { LessonMeta } from "@/lib/types"

interface LessonHeaderProps {
  lesson: LessonMeta
  moduleName: string
  moduleColor: string
}

export function LessonHeader({
  lesson,
  moduleName,
  moduleColor,
}: LessonHeaderProps) {
  const { isLessonComplete, toggleLesson } = useProgress()
  const completed = isLessonComplete(lesson.id)

  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        <span style={{ color: moduleColor }}>{moduleName}</span>
        <span>&middot;</span>
        <span className="font-mono">Dars {lesson.id}</span>
        <Badge
          className={cn("text-[10px] font-mono", LESSON_TYPE_COLORS[lesson.type])}
        >
          {LESSON_TYPE_LABELS[lesson.type]}
        </Badge>
      </div>

      <h1 className="mt-2 font-heading text-xl font-bold tracking-tight sm:text-2xl">
        {lesson.title}
      </h1>

      <p className="mt-1.5 text-sm text-muted-foreground">
        {lesson.description}
      </p>

      <div className="mt-4 flex items-center gap-4">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5" />
          <span className="font-mono">{lesson.duration} daqiqa</span>
        </div>

        <button
          onClick={() => toggleLesson(lesson.id)}
          className={cn(
            "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-150",
            completed
              ? "bg-brand-green/10 text-brand-green"
              : "border hover:bg-secondary"
          )}
        >
          <Check className="h-3.5 w-3.5" />
          {completed ? "Tugallangan" : "Tugallandi deb belgilash"}
        </button>
      </div>
    </div>
  )
}
