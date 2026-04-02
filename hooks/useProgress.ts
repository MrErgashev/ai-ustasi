"use client"

import { useCallback, useMemo } from "react"
import { useLocalStorage } from "./useLocalStorage"
import { STORAGE_KEY } from "@/lib/constants"
import type { UserProgress } from "@/lib/types"

const defaultProgress: UserProgress = {
  completedLessons: [],
  quizScores: {},
  flashcardProgress: {},
  checklistProgress: {},
  caseStudyResults: {},
  portfolioItems: [],
  lastVisitedLesson: null,
  totalTimeSpent: 0,
  firstVisit: new Date().toISOString(),
}

export function useProgress() {
  const [progress, setProgress, isLoaded] = useLocalStorage<UserProgress>(
    STORAGE_KEY,
    defaultProgress
  )

  const toggleLesson = useCallback(
    (lessonId: number) => {
      setProgress((prev) => {
        const completed = prev.completedLessons.includes(lessonId)
          ? prev.completedLessons.filter((id) => id !== lessonId)
          : [...prev.completedLessons, lessonId]
        return { ...prev, completedLessons: completed }
      })
    },
    [setProgress]
  )

  const isLessonComplete = useCallback(
    (lessonId: number) => progress.completedLessons.includes(lessonId),
    [progress.completedLessons]
  )

  const saveQuizScore = useCallback(
    (quizId: string, score: number) => {
      setProgress((prev) => ({
        ...prev,
        quizScores: { ...prev.quizScores, [quizId]: score },
      }))
    },
    [setProgress]
  )

  const getModuleProgress = useCallback(
    (lessonIds: number[]) => {
      if (lessonIds.length === 0) return 0
      const completed = lessonIds.filter((id) =>
        progress.completedLessons.includes(id)
      ).length
      return Math.round((completed / lessonIds.length) * 100)
    },
    [progress.completedLessons]
  )

  const overallProgress = useMemo(() => {
    const total = 30
    return Math.round((progress.completedLessons.length / total) * 100)
  }, [progress.completedLessons])

  return {
    progress,
    setProgress,
    isLoaded,
    toggleLesson,
    isLessonComplete,
    saveQuizScore,
    getModuleProgress,
    overallProgress,
  }
}
