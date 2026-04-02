import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { RoadmapModule } from "@/components/roadmap/RoadmapModule"
import { modules } from "@/content/meta/modules"

export const metadata: Metadata = {
  title: "Roadmap — AI Ustasi",
  description: "5 modul, 30 dars — AI ni noldan o'rganing",
}

export default function RoadmapPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <h1 className="text-2xl font-bold tracking-tight">Kurs roadmapi</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            5 modul, 30 dars — har bir modulni ketma-ket o&apos;tib, AI bo&apos;yicha
            professional bo&apos;ling.
          </p>

          <div className="mt-10 space-y-8">
            {modules.map((module, i) => (
              <RoadmapModule key={module.id} module={module} index={i} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
