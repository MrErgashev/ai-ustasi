"use client"

import { ChecklistTask } from "./ChecklistTask"
import { checklists } from "@/content/meta/interactive-data"

export function LessonChecklist({ id }: { id: string }) {
  const data = checklists[id]
  if (!data) return null
  return <ChecklistTask title={data.title} tasks={data.tasks} />
}
