"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

interface CodePlaygroundProps {
  language: string
  initialCode: string
  expectedOutput?: string
}

export function CodePlayground({
  language,
  initialCode,
  expectedOutput,
}: CodePlaygroundProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(initialCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-6 rounded-xl border bg-card overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b bg-muted/50 px-4 py-2">
        <span className="text-[10px] font-mono uppercase text-muted-foreground">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" />
              Nusxalandi
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              Nusxalash
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code className="font-mono text-xs">{initialCode}</code>
      </pre>

      {/* Expected output */}
      {expectedOutput && (
        <div className="border-t bg-muted/30 px-4 py-3">
          <p className="mb-1 text-[10px] font-mono uppercase text-muted-foreground">
            Kutilgan natija
          </p>
          <pre className="text-xs font-mono text-brand-green">
            {expectedOutput}
          </pre>
        </div>
      )}

      <div className="border-t px-4 py-2">
        <p className="text-xs text-muted-foreground italic">
          Bu kodni o&apos;zingizning muhitingizda ishga tushiring
        </p>
      </div>
    </div>
  )
}
