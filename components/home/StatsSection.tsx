import { BookOpen, Layers, BriefcaseBusiness, Banknote } from "lucide-react"

const stats = [
  { icon: BookOpen, value: "30", label: "Dars", color: "text-brand-orange" },
  { icon: Layers, value: "5", label: "Modul", color: "text-brand-blue" },
  {
    icon: BriefcaseBusiness,
    value: "20+",
    label: "Keys",
    color: "text-brand-green",
  },
  { icon: Banknote, value: "Bepul", label: "Narxi", color: "text-brand-amber" },
]

export function StatsSection() {
  return (
    <section className="border-y bg-muted/30 py-8">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 px-4 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1.5">
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
            <span className="text-xl font-bold font-mono">{stat.value}</span>
            <span className="text-xs text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
