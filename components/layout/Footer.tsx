import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <span className="text-base text-brand-orange">✦</span>
              <span className="text-sm">AI Ustasi</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              O&apos;zbek tilida birinchi to&apos;liq interaktiv AI o&apos;quv
              platformasi. Bepul va ochiq.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Sahifalar
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/roadmap"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Roadmap
              </Link>
              <Link
                href="/portfolio"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/haqida"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Loyiha haqida
              </Link>
            </nav>
          </div>

          {/* Info */}
          <div>
            <h4 className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Ma&apos;lumot
            </h4>
            <p className="text-sm text-muted-foreground">
              30 dars &middot; 5 modul &middot; 20+ keys
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Ro&apos;yxatdan o&apos;tish talab qilinmaydi
            </p>
          </div>
        </div>

        <Separator className="my-6" />

        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} AI Ustasi. Barcha huquqlar
          himoyalangan.
        </p>
      </div>
    </footer>
  )
}
