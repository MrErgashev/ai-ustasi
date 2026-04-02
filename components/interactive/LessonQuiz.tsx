"use client"

import { Quiz } from "./Quiz"
import { quizzes } from "@/content/meta/interactive-data"

export function LessonQuiz({ id }: { id: string }) {
  const questions = quizzes[id]
  if (!questions) return null
  return <Quiz questions={questions} />
}
