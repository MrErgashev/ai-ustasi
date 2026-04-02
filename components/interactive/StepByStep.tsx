"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Check, Lightbulb } from "lucide-react"
import type { StepItem } from "@/lib/types"

interface StepByStepProps {
  steps: StepItem[]
}

export function StepByStep({ steps }: StepByStepProps) {
  const [completed, setCompleted] = useState<Set<number>>(new Set())

  function toggleStep(index: number) {
    setCompleted((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <div className="my-6 space-y-0">
      {steps.map((step, i) => {
        const isDone = completed.has(i)
        return (
          <div key={i} className="relative flex gap-4 pb-6 last:pb-0">
            {/* Vertical line */}
            {i < steps.length - 1 && (
              <div className="absolute left-3 top-8 h-[calc(100%-16px)] w-px bg-border" />
            )}

            {/* Step circle */}
            <button
              onClick={() => toggleStep(i)}
              className={cn(
                "relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs transition-colors",
                isDone
                  ? "border-brand-green bg-brand-green text-white"
                  : "border-border bg-background hover:border-foreground/30"
              )}
            >
              {isDone ? (
                <Check className="h-3 w-3" />
              ) : (
                <span className="font-mono">{i + 1}</span>
              )}
            </button>

            {/* Content */}
            <div className="flex-1 pt-0.5">
              <p className="text-sm font-medium">{step.title}</p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                {step.content}
              </p>
              {step.tip && (
                <div className="mt-2 flex items-start gap-1.5 rounded-md bg-brand-amber/5 border border-brand-amber/10 p-2">
                  <Lightbulb className="mt-0.5 h-3 w-3 shrink-0 text-brand-amber" />
                  <p className="text-xs text-brand-amber">
                    {step.tip}
                  </p>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
