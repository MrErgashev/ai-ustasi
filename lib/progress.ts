import { STORAGE_KEY } from "./constants"
import type { UserProgress, PortfolioItem } from "./types"

function getDefaultProgress(): UserProgress {
  return {
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
}

export function getProgress(): UserProgress {
  if (typeof window === "undefined") return getDefaultProgress()
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return getDefaultProgress()
    return { ...getDefaultProgress(), ...JSON.parse(stored) }
  } catch {
    return getDefaultProgress()
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch {
    // localStorage full or unavailable
  }
}

export function markLessonComplete(lessonId: number): void {
  const progress = getProgress()
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId)
  }
  saveProgress(progress)
}

export function toggleLessonComplete(lessonId: number): boolean {
  const progress = getProgress()
  const index = progress.completedLessons.indexOf(lessonId)
  if (index === -1) {
    progress.completedLessons.push(lessonId)
    saveProgress(progress)
    return true
  }
  progress.completedLessons.splice(index, 1)
  saveProgress(progress)
  return false
}

export function saveQuizScore(quizId: string, score: number): void {
  const progress = getProgress()
  progress.quizScores[quizId] = score
  saveProgress(progress)
}

export function saveChecklistProgress(
  taskId: string,
  items: boolean[]
): void {
  const progress = getProgress()
  progress.checklistProgress[taskId] = items
  saveProgress(progress)
}

export function saveCaseStudyResult(
  caseId: string,
  choices: string[],
  score: string
): void {
  const progress = getProgress()
  progress.caseStudyResults[caseId] = { choices, score }
  saveProgress(progress)
}

export function addPortfolioItem(item: PortfolioItem): void {
  const progress = getProgress()
  progress.portfolioItems.push(item)
  saveProgress(progress)
}

export function setLastVisitedLesson(lessonId: number): void {
  const progress = getProgress()
  progress.lastVisitedLesson = lessonId
  saveProgress(progress)
}

export function getOverallProgress(totalLessons: number): number {
  const progress = getProgress()
  if (totalLessons === 0) return 0
  return Math.round((progress.completedLessons.length / totalLessons) * 100)
}

export function getModuleProgress(lessonIds: number[]): number {
  const progress = getProgress()
  if (lessonIds.length === 0) return 0
  const completed = lessonIds.filter((id) =>
    progress.completedLessons.includes(id)
  ).length
  return Math.round((completed / lessonIds.length) * 100)
}
