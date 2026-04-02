"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useProgress } from "@/hooks/useProgress"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "Bosh sahifa" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/haqida", label: "Haqida" },
]

export function Navbar() {
  const pathname = usePathname()
  const { overallProgress, isLoaded } = useProgress()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-base text-brand-orange">✦</span>
          <span className="text-sm tracking-tight">AI Ustasi</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm transition-colors",
                pathname === link.href
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Progress */}
          {isLoaded && overallProgress > 0 && (
            <div className="hidden items-center gap-2 sm:flex">
              <Progress value={overallProgress} className="h-1 w-20" />
              <span className="text-xs tabular-nums text-muted-foreground font-mono">
                {overallProgress}%
              </span>
            </div>
          )}

          <ThemeToggle />

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="inline-flex h-8 w-8 items-center justify-center rounded-lg hover:bg-muted md:hidden">
              <Menu className="h-4 w-4" />
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <nav className="mt-8 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm transition-colors",
                      pathname === link.href
                        ? "text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              {isLoaded && overallProgress > 0 && (
                <div className="mt-6 px-3">
                  <p className="mb-2 text-xs text-muted-foreground">
                    Umumiy progress
                  </p>
                  <Progress value={overallProgress} className="h-2" />
                  <p className="mt-1 text-xs tabular-nums text-muted-foreground font-mono">
                    {overallProgress}% tugallangan
                  </p>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
