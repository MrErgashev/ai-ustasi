"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Check, HelpCircle, PartyPopper } from "lucide-react"
import type { TaskItem } from "@/lib/types"

interface ChecklistTaskProps {
  title: string
  tasks: TaskItem[]
  onComplete?: () => void
}

export function ChecklistTask({ title, tasks, onComplete }: ChecklistTaskProps) {
  const [checked, setChecked] = useState<boolean[]>(
    new Array(tasks.length).fill(false)
  )
  const [showHints, setShowHints] = useState<Set<number>>(new Set())
  const allDone = checked.every(Boolean)

  function toggleTask(index: number) {
    setChecked((prev) => {
      const next = [...prev]
      next[index] = !next[index]
      if (next.every(Boolean)) onComplete?.()
      return next
    })
  }

  function toggleHint(index: number) {
    setShowHints((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <div className="my-6 rounded-xl border bg-card p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">{title}</p>
        <span className="text-xs font-mono text-muted-foreground">
          {checked.filter(Boolean).length}/{tasks.length}
        </span>
      </div>

      <div className="mt-4 space-y-2">
        {tasks.map((task, i) => (
          <div key={i}>
            <div className="flex items-start gap-3">
              <button
                onClick={() => toggleTask(i)}
                className={cn(
                  "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors",
                  checked[i]
                    ? "border-brand-green bg-brand-green text-white"
                    : "border-border hover:border-foreground/30"
                )}
              >
                {checked[i] && <Check className="h-2.5 w-2.5" />}
              </button>
              <span
                className={cn(
                  "text-sm transition-colors",
                  checked[i] && "text-muted-foreground line-through"
                )}
              >
                {task.text}
              </span>
              {task.hint && (
                <button
                  onClick={() => toggleHint(i)}
                  className="ml-auto shrink-0 text-muted-foreground hover:text-foreground"
                >
                  <HelpCircle className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
            {task.hint && showHints.has(i) && (
              <p className="mt-1 ml-7 text-xs text-muted-foreground italic">
                {task.hint}
              </p>
            )}
          </div>
        ))}
      </div>

      {allDone && (
        <div className="mt-4 flex items-center gap-2 rounded-xl bg-brand-green/10 border border-brand-green/20 p-3">
          <PartyPopper className="h-4 w-4 text-brand-green" />
          <p className="text-sm text-brand-green font-medium">
            Barcha vazifalar bajarildi!
          </p>
        </div>
      )}
    </div>
  )
}
