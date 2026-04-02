"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { RotateCcw, ChevronLeft, ChevronRight } from "lucide-react"
import type { FlashcardItem } from "@/lib/types"

interface FlashcardDeckProps {
  cards: FlashcardItem[]
}

export function FlashcardDeck({ cards }: FlashcardDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [known, setKnown] = useState<Set<number>>(new Set())
  const [finished, setFinished] = useState(false)

  const card = cards[currentIndex]

  function handleFlip() {
    setFlipped((prev) => !prev)
  }

  function handleNext(isKnown: boolean) {
    if (isKnown) {
      setKnown((prev) => new Set(prev).add(currentIndex))
    }
    setFlipped(false)
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      setFinished(true)
    }
  }

  function handleReset() {
    setCurrentIndex(0)
    setFlipped(false)
    setKnown(new Set())
    setFinished(false)
  }

  if (finished) {
    return (
      <div className="my-6 rounded-xl border bg-card p-6 text-center">
        <p className="text-lg font-semibold">Natija</p>
        <p className="mt-2 text-sm text-muted-foreground">
          <span className="text-2xl font-bold font-mono text-foreground">
            {known.size}
          </span>
          /{cards.length} atamani bildingiz
        </p>
        <button
          onClick={handleReset}
          className="mt-4 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm hover:bg-secondary transition-colors duration-150"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Qayta ko&apos;rish
        </button>
      </div>
    )
  }

  return (
    <div className="my-6">
      {/* Progress */}
      <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
        <span className="font-mono">
          {currentIndex + 1}/{cards.length}
        </span>
        {card.category && (
          <span className="rounded-full border px-2 py-0.5 text-[10px]">
            {card.category}
          </span>
        )}
      </div>

      {/* Card */}
      <div className="perspective-1000">
        <button
          onClick={handleFlip}
          className={cn(
            "relative h-48 w-full cursor-pointer rounded-xl border bg-card transition-transform duration-500",
            "flex items-center justify-center p-6 text-center",
            flipped && "[transform:rotateY(180deg)]"
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front */}
          <div
            className={cn(
              "absolute inset-0 flex flex-col items-center justify-center p-6",
              "backface-hidden"
            )}
            style={{ backfaceVisibility: "hidden" }}
          >
            <p className="text-xs text-muted-foreground mb-2">Atama</p>
            <p className="text-lg font-semibold">{card.front}</p>
            <p className="mt-3 text-xs text-muted-foreground">
              Bosing va ta&apos;rifini ko&apos;ring →
            </p>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-6 [transform:rotateY(180deg)]"
            style={{ backfaceVisibility: "hidden" }}
          >
            <p className="text-xs text-muted-foreground mb-2">Ta&apos;rif</p>
            <p className="text-sm leading-relaxed">{card.back}</p>
          </div>
        </button>
      </div>

      {/* Actions */}
      <div className="mt-3 flex items-center justify-center gap-2">
        <button
          onClick={() => handleNext(false)}
          className="flex items-center gap-1 rounded-full border border-destructive/20 bg-destructive/5 px-4 py-2 text-sm text-destructive hover:bg-destructive/10 transition-colors duration-150"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
          Bilmayman
        </button>
        <button
          onClick={() => handleNext(true)}
          className="flex items-center gap-1 rounded-full border border-brand-green/20 bg-brand-green/5 px-4 py-2 text-sm text-brand-green hover:bg-brand-green/10 transition-colors duration-150"
        >
          Bilaman
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
