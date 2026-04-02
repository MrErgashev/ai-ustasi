"use client"

import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-500/10" />
      </div>

      <div className="mx-auto max-w-3xl px-4 text-center">
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border bg-muted/50 px-3 py-1 text-xs text-muted-foreground">
          <Sparkles className="h-3 w-3" />
          <span>Bepul va ochiq platforma</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Sun&apos;iy intellektni{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            o&apos;zbek tilida
          </span>{" "}
          o&apos;rganing
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground leading-relaxed sm:text-base">
          AI asoslaridan tortib real biznes muammolarini hal qilish va
          freelancer sifatida pul ishlashgacha — 30 dars, 5 modul, to&apos;liq
          amaliy kurs.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/dars/ai-nima"
            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          >
            O&apos;rganishni boshlash
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/roadmap"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Roadmap ni ko&apos;rish
          </Link>
        </div>
      </div>
    </section>
  )
}
