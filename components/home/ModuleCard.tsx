"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useProgress } from "@/hooks/useProgress"
import type { Module } from "@/lib/types"

export function ModuleCard({ module }: { module: Module }) {
  const { getModuleProgress, isLoaded } = useProgress()
  const lessonIds = module.lessons.map((l) => l.id)
  const progress = isLoaded ? getModuleProgress(lessonIds) : 0

  return (
    <Link href={`/dars/${module.lessons[0].slug}`}>
      <Card className="group relative overflow-hidden border transition-colors duration-150 hover:border-foreground/20 p-5">

        <div className="flex items-start justify-between">
          <span className="text-2xl">{module.icon}</span>
          <Badge variant="outline" className="text-[10px] uppercase font-mono">
            {module.subtitle}
          </Badge>
        </div>

        <h3 className="mt-3 text-sm font-semibold leading-snug group-hover:text-foreground">
          {module.title}
        </h3>

        <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
          {module.description}
        </p>

        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
          <span className="font-mono">{module.lessons.length} dars</span>
          <span>&middot;</span>
          <span className="font-mono">
            {module.lessons.reduce((sum, l) => sum + l.duration, 0)} daq
          </span>
        </div>

        {isLoaded && progress > 0 && (
          <div className="mt-3 flex items-center gap-2">
            <Progress value={progress} className="h-1" />
            <span className="text-[10px] font-mono text-muted-foreground">
              {progress}%
            </span>
          </div>
        )}
      </Card>
    </Link>
  )
}
