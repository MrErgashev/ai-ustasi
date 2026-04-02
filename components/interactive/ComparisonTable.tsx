"use client"

import { Check, X } from "lucide-react"
import type { ComparisonFeature } from "@/lib/types"

interface ComparisonTableProps {
  title: string
  items: string[]
  features: ComparisonFeature[]
}

export function ComparisonTable({
  title,
  items,
  features,
}: ComparisonTableProps) {
  return (
    <div className="my-6">
      <p className="mb-3 text-sm font-semibold">{title}</p>
      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="p-3 text-left text-xs font-medium text-muted-foreground">
                Xususiyat
              </th>
              {items.map((item) => (
                <th
                  key={item}
                  className="p-3 text-center text-xs font-medium"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, i) => (
              <tr key={i} className="border-b last:border-0">
                <td className="p-3 text-xs text-muted-foreground">
                  {feature.name}
                </td>
                {feature.values.map((value, j) => (
                  <td key={j} className="p-3 text-center">
                    {typeof value === "boolean" ? (
                      value ? (
                        <Check className="mx-auto h-4 w-4 text-brand-green" />
                      ) : (
                        <X className="mx-auto h-4 w-4 text-destructive" />
                      )
                    ) : (
                      <span className="text-xs">{value}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
