"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
          Bepul va ochiq platforma
        </div>

        <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Sun&apos;iy intellektni{" "}
          <span className="text-primary">
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
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            O&apos;rganishni boshlash
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/roadmap"
            className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
          >
            Roadmap ni ko&apos;rish
          </Link>
        </div>
      </div>
    </section>
  )
}
