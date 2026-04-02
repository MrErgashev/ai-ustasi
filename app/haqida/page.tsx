import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Haqida — AI Ustasi",
  description: "AI Ustasi loyihasi haqida",
}

export default function HaqidaPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-4 py-12">
          <h1 className="font-heading text-2xl font-bold tracking-tight">
            Loyiha haqida
          </h1>

          <Separator className="my-6" />

          <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">AI Ustasi</strong> —
              O&apos;zbek tilida birinchi to&apos;liq interaktiv sun&apos;iy intellekt
              o&apos;quv platformasi.
            </p>
            <p>
              Platformaning maqsadi — AI asoslarini oddiy tilda tushuntirish,
              amaliy ko&apos;nikmalar hosil qilish, real biznes muammolarini hal
              qilish va AI xizmatlarini sotish orqali daromad olishni
              o&apos;rgatish.
            </p>

            <h2 className="font-heading text-base font-semibold text-foreground">
              Asosiy tamoyillar
            </h2>
            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong className="text-foreground">Bepul va ochiq</strong> —
                hech qanday ro&apos;yxatdan o&apos;tish talab qilinmaydi
              </li>
              <li>
                <strong className="text-foreground">
                  To&apos;liq o&apos;zbek tilida
                </strong>{" "}
                — inglizcha atamalar yonida o&apos;zbekcha tarjima bilan
              </li>
              <li>
                <strong className="text-foreground">
                  Amaliy yo&apos;naltirilgan
                </strong>{" "}
                — har bir darsda interaktiv mashqlar va real misollar
              </li>
              <li>
                <strong className="text-foreground">30 dars, 5 modul</strong> —
                noldan professional darajagacha
              </li>
            </ul>

            <h2 className="font-heading text-base font-semibold text-foreground">
              Texnologiyalar
            </h2>
            <p>
              Platforma Next.js, TypeScript, Tailwind CSS, va shadcn/ui
              asosida qurilgan. Barcha progress brauzerda (localStorage)
              saqlanadi.
            </p>

            <h2 className="font-heading text-base font-semibold text-foreground">
              Muallif
            </h2>
            <p>MrErgashev tomonidan yaratilgan.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
