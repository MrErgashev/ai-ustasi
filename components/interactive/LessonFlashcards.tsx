"use client"

import { FlashcardDeck } from "./Flashcard"
import { flashcards } from "@/content/meta/interactive-data"

export function LessonFlashcards({ id }: { id: string }) {
  const cards = flashcards[id]
  if (!cards) return null
  return <FlashcardDeck cards={cards} />
}
