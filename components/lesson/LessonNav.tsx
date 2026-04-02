"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { LessonMeta } from "@/lib/types"

interface LessonNavProps {
  prev: LessonMeta | null
  next: LessonMeta | null
}

export function LessonNav({ prev, next }: LessonNavProps) {
  return (
    <div className="mt-12 flex items-center justify-between border-t pt-6">
      {prev ? (
        <Link
          href={`/dars/${prev.slug}`}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "rounded-full gap-1.5"
          )}
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">{prev.title}</span>
          <span className="sm:hidden">Oldingi</span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/dars/${next.slug}`}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "rounded-full gap-1.5"
          )}
        >
          <span className="hidden sm:inline">{next.title}</span>
          <span className="sm:hidden">Keyingi</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}
