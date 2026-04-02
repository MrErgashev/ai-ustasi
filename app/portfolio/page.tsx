"use client"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { useProgress } from "@/hooks/useProgress"
import { Briefcase } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function PortfolioPage() {
  const { progress, isLoaded } = useProgress()
  const items = isLoaded ? progress.portfolioItems : []

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <h1 className="font-heading text-2xl font-bold tracking-tight">Portfolio</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Case study lardan hosil qilgan natijalaringiz shu yerda saqlanadi.
          </p>

          {items.length === 0 ? (
            <Card className="mt-10 flex flex-col items-center justify-center p-12 text-center">
              <Briefcase className="h-8 w-8 text-muted-foreground/50" />
              <p className="mt-3 text-sm font-medium">
                Hali portfolio elementlari yo&apos;q
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Modul 4-5 dagi case study larni tugatganingizda, natijalar
                avtomatik shu yerga qo&apos;shiladi.
              </p>
            </Card>
          ) : (
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {items.map((item) => (
                <Card key={item.id} className="p-4">
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-[10px] text-muted-foreground">
                    <span className="font-mono">{item.date}</span>
                    <span>&middot;</span>
                    <span className="capitalize">{item.type}</span>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
