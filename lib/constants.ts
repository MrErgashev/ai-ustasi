export const STORAGE_KEY = "ai-ustasi-progress"

export const LESSON_TYPE_LABELS: Record<string, string> = {
  nazariy: "Nazariy",
  amaliy: "Amaliy",
  keys: "Keys",
}

export const LESSON_TYPE_COLORS: Record<string, string> = {
  nazariy: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  amaliy: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  keys: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
}

export const MODULE_COLORS = [
  {
    primary: "var(--module-1)",
    name: "blue",
    gradient: "from-blue-500 to-blue-600",
    bg: "bg-blue-500/10",
  },
  {
    primary: "var(--module-2)",
    name: "purple",
    gradient: "from-purple-500 to-purple-600",
    bg: "bg-purple-500/10",
  },
  {
    primary: "var(--module-3)",
    name: "emerald",
    gradient: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-500/10",
  },
  {
    primary: "var(--module-4)",
    name: "amber",
    gradient: "from-amber-500 to-amber-600",
    bg: "bg-amber-500/10",
  },
  {
    primary: "var(--module-5)",
    name: "rose",
    gradient: "from-rose-500 to-rose-600",
    bg: "bg-rose-500/10",
  },
] as const
