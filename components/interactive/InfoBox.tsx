"use client"

import { Info, AlertTriangle, Lightbulb, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const variants = {
  info: {
    icon: Info,
    className: "border-brand-blue/20 bg-brand-blue/5 text-brand-blue",
    iconClassName: "text-brand-blue",
  },
  warning: {
    icon: AlertTriangle,
    className: "border-brand-amber/20 bg-brand-amber/5 text-brand-amber",
    iconClassName: "text-brand-amber",
  },
  tip: {
    icon: Lightbulb,
    className: "border-brand-green/20 bg-brand-green/5 text-brand-green",
    iconClassName: "text-brand-green",
  },
  important: {
    icon: AlertCircle,
    className: "border-destructive/20 bg-destructive/5 text-destructive",
    iconClassName: "text-destructive",
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
