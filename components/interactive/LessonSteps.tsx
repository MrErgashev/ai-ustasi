"use client"

import { StepByStep } from "./StepByStep"
import { stepGuides } from "@/content/meta/interactive-data"

export function LessonSteps({ id }: { id: string }) {
  const steps = stepGuides[id]
  if (!steps) return null
  return <StepByStep steps={steps} />
}
