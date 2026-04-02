import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/home/Hero"
import { StatsSection } from "@/components/home/StatsSection"
import { ModuleCard } from "@/components/home/ModuleCard"
import { FAQ } from "@/components/home/FAQ"
import { modules } from "@/content/meta/modules"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsSection />

        {/* Modullar */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-2 text-center text-lg font-semibold">
              Kurs modullari
            </h2>
            <p className="mb-8 text-center text-sm text-muted-foreground">
              5 modul, 30 dars — noldan professional darajaga
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {modules.map((module) => (
                <ModuleCard key={module.id} module={module} />
              ))}
            </div>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
    </>
  )
}
