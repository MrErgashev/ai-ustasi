"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { User, ArrowRight, Trophy } from "lucide-react"
import type { CaseScenario, CaseOption } from "@/lib/types"

interface CaseStudyProps {
  scenario: CaseScenario
  onComplete?: (choices: string[], score: string) => void
}

export function CaseStudy({ scenario, onComplete }: CaseStudyProps) {
  const [stepIndex, setStepIndex] = useState(0)
  const [choices, setChoices] = useState<string[]>([])
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [finished, setFinished] = useState(false)

  const currentStep = scenario.steps[stepIndex]

  function handleSelect(option: CaseOption) {
    if (showFeedback) return
    setSelectedOption(option.id)
    setShowFeedback(true)
    setChoices((prev) => [...prev, option.id])
  }

  function handleNext() {
    if (stepIndex < scenario.steps.length - 1) {
      setStepIndex((prev) => prev + 1)
      setSelectedOption(null)
      setShowFeedback(false)
    } else {
      setFinished(true)
      const goodCount = choices.filter((choiceId) => {
        const step = scenario.steps[choices.indexOf(choiceId)]
        const option = step?.options.find((o) => o.id === choiceId)
        return option?.quality === "yaxshi"
      }).length
      const score =
        goodCount >= scenario.steps.length * 0.7
          ? "Mukammal"
          : goodCount >= scenario.steps.length * 0.4
            ? "Yaxshi"
            : "O'rtacha"
      onComplete?.(choices, score)
    }
  }

  if (finished) {
    return (
      <div className="my-6 rounded-xl border bg-card p-6 text-center">
        <Trophy className="mx-auto h-8 w-8 text-brand-orange" />
        <p className="mt-3 text-lg font-semibold">Keys tugadi!</p>
        <p className="mt-1 text-sm text-muted-foreground">
          &ldquo;{scenario.title}&rdquo; bo&apos;yicha qaroringiz baholandi
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Bu natijani portfolioga qo&apos;shishingiz mumkin
        </p>
      </div>
    )
  }

  return (
    <div className="my-6 rounded-xl border bg-card p-5">
      {/* Scenario header */}
      {stepIndex === 0 && !showFeedback && (
        <div className="mb-5 rounded-lg bg-muted/50 p-4">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <User className="h-4 w-4" />
            {scenario.client}
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            {scenario.problem}
          </p>
          {scenario.context && (
            <p className="mt-1 text-xs text-muted-foreground italic">
              {scenario.context}
            </p>
          )}
        </div>
      )}

      {/* Step */}
      <div className="mb-1 text-xs text-muted-foreground font-mono">
        Bosqich {stepIndex + 1}/{scenario.steps.length}
      </div>
      <p className="mb-4 text-sm font-medium">{currentStep.question}</p>

      {/* Options */}
      <div className="space-y-2">
        {currentStep.options.map((option) => {
          let style = "border hover:bg-muted/50 cursor-pointer"
          if (showFeedback) {
            if (option.id === selectedOption) {
              style =
                option.quality === "yaxshi"
                  ? "border-brand-green/50 bg-brand-green/10"
                  : option.quality === "yomon"
                    ? "border-destructive/50 bg-destructive/10"
                    : "border-brand-amber/50 bg-brand-amber/10"
            } else {
              style = "border opacity-50"
            }
          }
          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option)}
              disabled={showFeedback}
              className={cn(
                "w-full rounded-xl p-3 text-left text-sm transition-colors duration-150",
                style
              )}
            >
              {option.text}
            </button>
          )
        })}
      </div>

      {/* Feedback */}
      {showFeedback && selectedOption && (
        <div className="mt-4 rounded-xl bg-secondary p-3">
          <p className="text-xs text-muted-foreground leading-relaxed">
            {currentStep.feedback[selectedOption]}
          </p>
          <button
            onClick={handleNext}
            className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors duration-150"
          >
            {stepIndex < scenario.steps.length - 1 ? (
              <>
                Keyingi bosqich <ArrowRight className="h-3 w-3" />
              </>
            ) : (
              "Natijani ko'rish"
            )}
          </button>
        </div>
      )}
    </div>
  )
}
