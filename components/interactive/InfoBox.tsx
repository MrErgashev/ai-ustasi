"use client"

import { Info, AlertTriangle, Lightbulb, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const variants = {
  info: {
    icon: Info,
    className: "border-blue-500/20 bg-blue-500/5 text-blue-700 dark:text-blue-300",
    iconClassName: "text-blue-500",
  },
  warning: {
    icon: AlertTriangle,
    className: "border-amber-500/20 bg-amber-500/5 text-amber-700 dark:text-amber-300",
    iconClassName: "text-amber-500",
  },
  tip: {
    icon: Lightbulb,
    className: "border-emerald-500/20 bg-emerald-500/5 text-emerald-700 dark:text-emerald-300",
    iconClassName: "text-emerald-500",
  },
  important: {
    icon: AlertCircle,
    className: "border-red-500/20 bg-red-500/5 text-red-700 dark:text-red-300",
    iconClassName: "text-red-500",
  },
}

interface InfoBoxProps {
  type: keyof typeof variants
  title?: string
  children: React.ReactNode
}

export function InfoBox({ type, title, children }: InfoBoxProps) {
  const v = variants[type]
  const Icon = v.icon

  return (
    <div className={cn("my-4 rounded-lg border p-4", v.className)}>
      <div className="flex items-start gap-3">
        <Icon className={cn("mt-0.5 h-4 w-4 shrink-0", v.iconClassName)} />
        <div className="text-sm leading-relaxed">
          {title && <p className="mb-1 font-semibold">{title}</p>}
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}
