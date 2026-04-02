export const STORAGE_KEY = "ai-ustasi-progress"

export const LESSON_TYPE_LABELS: Record<string, string> = {
  nazariy: "Nazariy",
  amaliy: "Amaliy",
  keys: "Keys",
}

export const LESSON_TYPE_COLORS: Record<string, string> = {
  nazariy: "bg-brand-blue/10 text-brand-blue",
  amaliy: "bg-brand-orange/10 text-brand-orange",
  keys: "bg-brand-green/10 text-brand-green",
}

export const MODULE_COLORS = [
  {
    primary: "var(--module-1)",
    name: "orange",
    gradient: "",
    bg: "bg-brand-orange/10",
  },
  {
    primary: "var(--module-2)",
    name: "blue",
    gradient: "",
    bg: "bg-brand-blue/10",
  },
  {
    primary: "var(--module-3)",
    name: "green",
    gradient: "",
    bg: "bg-brand-green/10",
  },
  {
    primary: "var(--module-4)",
    name: "amber",
    gradient: "",
    bg: "bg-brand-amber/10",
  },
  {
    primary: "var(--module-5)",
    name: "mauve",
    gradient: "",
    bg: "bg-brand-mauve/10",
  },
] as const
