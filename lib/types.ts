// ─── Module & Lesson Types ─────────────────────────────────

export interface ModuleColor {
  primary: string
  name: string
  gradient: string
  bg: string
}

export interface Module {
  id: number
  title: string
  subtitle: string
  icon: string
  description: string
  color: ModuleColor
  lessons: LessonMeta[]
}

export type LessonType = "nazariy" | "amaliy" | "keys"

export interface LessonMeta {
  id: number
  slug: string
  title: string
  description: string
  duration: number
  type: LessonType
  moduleId: number
  objectives: string[]
  prerequisites?: number[]
}

// ─── Interactive Component Types ───────────────────────────

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  difficulty: "oson" | "o'rta" | "qiyin"
}

export interface FlashcardItem {
  front: string
  back: string
  category?: string
}

export interface CaseScenario {
  title: string
  client: string
  problem: string
  context: string
  steps: CaseStep[]
}

export interface CaseStep {
  question: string
  options: CaseOption[]
  feedback: Record<string, string>
}

export interface CaseOption {
  id: string
  text: string
  quality: "yaxshi" | "o'rtacha" | "yomon"
}

export interface StepItem {
  title: string
  content: string
  image?: string
  tip?: string
}

export interface TaskItem {
  text: string
  hint?: string
}

export interface ComparisonFeature {
  name: string
  values: (string | boolean)[]
}

// ─── Progress Types ────────────────────────────────────────

export interface UserProgress {
  completedLessons: number[]
  quizScores: Record<string, number>
  flashcardProgress: Record<string, { known: number; total: number }>
  checklistProgress: Record<string, boolean[]>
  caseStudyResults: Record<string, { choices: string[]; score: string }>
  portfolioItems: PortfolioItem[]
  lastVisitedLesson: number | null
  totalTimeSpent: number
  firstVisit: string
}

export interface PortfolioItem {
  id: string
  lessonId: number
  title: string
  description: string
  date: string
  type: "case-study" | "project"
}
