"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Check, X, RotateCcw } from "lucide-react"
import type { QuizQuestion } from "@/lib/types"

interface QuizProps {
  questions: QuizQuestion[]
  onComplete?: (score: number) => void
}

export function Quiz({ questions, onComplete }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [finished, setFinished] = useState(false)

  const current = questions[currentIndex]
  const isCorrect = selectedOption === current?.correctIndex

  function handleSelect(optionIndex: number) {
    if (showResult) return
    setSelectedOption(optionIndex)
    setShowResult(true)
    if (optionIndex === current.correctIndex) {
      setCorrectCount((prev) => prev + 1)
    }
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      setSelectedOption(null)
      setShowResult(false)
    } else {
      setFinished(true)
      const score = Math.round(
        ((correctCount + (isCorrect ? 0 : 0)) / questions.length) * 100
      )
      onComplete?.(score)
    }
  }

  function handleReset() {
    setCurrentIndex(0)
    setSelectedOption(null)
    setShowResult(false)
    setCorrectCount(0)
    setFinished(false)
  }

  if (finished) {
    const finalScore = Math.round((correctCount / questions.length) * 100)
    return (
      <div className="my-6 rounded-lg border bg-card p-6 text-center">
        <p className="text-lg font-semibold">Natija</p>
        <p className="mt-2 text-3xl font-bold font-mono">
          {correctCount}/{questions.length}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">{finalScore}% to&apos;g&apos;ri</p>
        <button
          onClick={handleReset}
          className="mt-4 inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm hover:bg-muted transition-colors"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Qayta urinish
        </button>
      </div>
    )
  }

  return (
    <div className="my-6 rounded-lg border bg-card p-5">
      {/* Progress */}
      <div className="mb-4 flex items-center justify-between text-xs text-muted-foreground">
        <span className="font-mono">
          {currentIndex + 1}/{questions.length}
        </span>
        {current.difficulty && (
          <span className="rounded-full border px-2 py-0.5 text-[10px] uppercase font-mono">
            {current.difficulty}
          </span>
        )}
      </div>

      {/* Question */}
      <p className="mb-4 text-sm font-medium">{current.question}</p>

      {/* Options */}
      <div className="space-y-2">
        {current.options.map((option, i) => {
          let optionStyle = "border hover:bg-muted/50 cursor-pointer"
          if (showResult) {
            if (i === current.correctIndex) {
              optionStyle =
                "border-emerald-500/50 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
            } else if (i === selectedOption && !isCorrect) {
              optionStyle =
                "border-red-500/50 bg-red-500/10 text-red-700 dark:text-red-300"
            } else {
              optionStyle = "border opacity-50"
            }
          } else if (i === selectedOption) {
            optionStyle = "border-foreground/20 bg-muted"
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={showResult}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg p-3 text-left text-sm transition-all",
                optionStyle
              )}
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-mono">
                {showResult && i === current.correctIndex ? (
                  <Check className="h-3 w-3" />
                ) : showResult && i === selectedOption && !isCorrect ? (
                  <X className="h-3 w-3" />
                ) : (
                  String.fromCharCode(65 + i)
                )}
              </span>
              <span>{option}</span>
            </button>
          )
        })}
      </div>

      {/* Explanation */}
      {showResult && (
        <div className="mt-4 rounded-lg bg-muted/50 p-3">
          <p className="text-xs text-muted-foreground leading-relaxed">
            {current.explanation}
          </p>
          <button
            onClick={handleNext}
            className="mt-3 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {currentIndex < questions.length - 1
              ? "Keyingi savol →"
              : "Natijani ko'rish"}
          </button>
        </div>
      )}
    </div>
  )
}
