"use client"

import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown, Check, Clock } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useProgress } from "@/hooks/useProgress"
import { LESSON_TYPE_LABELS, LESSON_TYPE_COLORS } from "@/lib/constants"
import type { Module } from "@/lib/types"

interface RoadmapModuleProps {
  module: Module
  index: number
}

export function RoadmapModule({ module, index }: RoadmapModuleProps) {
  const [open, setOpen] = useState(index === 0)
  const { isLessonComplete, getModuleProgress, isLoaded } = useProgress()
  const lessonIds = module.lessons.map((l) => l.id)
  const progress = isLoaded ? getModuleProgress(lessonIds) : 0

  return (
    <div className="relative">
      {/* Timeline dot */}
      <div className="absolute -left-8 top-4 hidden h-3 w-3 rounded-full border-2 border-background sm:block"
        style={{ backgroundColor: module.color.primary }}
      />

      <div className="rounded-lg border">
        {/* Header */}
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between p-4 text-left"
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">{module.icon}</span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase text-muted-foreground">
                  Modul {module.id}
                </span>
                {isLoaded && progress === 100 && (
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                )}
              </div>
              <p className="text-sm font-semibold">{module.title}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {isLoaded && progress > 0 && (
              <div className="hidden items-center gap-2 sm:flex">
                <Progress value={progress} className="h-1 w-16" />
                <span className="text-[10px] font-mono text-muted-foreground">
                  {progress}%
                </span>
              </div>
            )}
            <ChevronDown
              className={cn(
                "h-4 w-4 text-muted-foreground transition-transform",
                open && "rotate-180"
              )}
            />
          </div>
        </button>

        {/* Lessons list */}
        {open && (
          <div className="border-t px-4 py-3 space-y-1">
            {module.lessons.map((lesson) => {
              const completed = isLessonComplete(lesson.id)
              return (
                <Link
                  key={lesson.id}
                  href={`/dars/${lesson.slug}`}
                  className="flex items-center gap-3 rounded-md px-2 py-2 text-sm hover:bg-muted/50 transition-colors"
                >
                  {completed ? (
                    <Check className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                  ) : (
                    <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border text-[8px] font-mono">
                      {lesson.id}
                    </span>
                  )}
                  <span
                    className={cn(
                      "flex-1 truncate",
                      completed && "text-muted-foreground"
                    )}
                  >
                    {lesson.title}
                  </span>
                  <Badge
                    className={cn(
                      "hidden text-[9px] font-mono sm:inline-flex",
                      LESSON_TYPE_COLORS[lesson.type]
                    )}
                  >
                    {LESSON_TYPE_LABELS[lesson.type]}
                  </Badge>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground">
                    <Clock className="h-2.5 w-2.5" />
                    {lesson.duration}m
                  </span>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
