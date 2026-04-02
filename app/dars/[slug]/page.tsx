import { notFound } from "next/navigation"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { LessonHeader } from "@/components/lesson/LessonHeader"
import { LessonNav } from "@/components/lesson/LessonNav"
import { LessonSidebar } from "@/components/lesson/LessonSidebar"
import { MdxContent } from "@/components/lesson/MdxContent"
import {
  getAllLessons,
  getLessonBySlug,
  getModuleByLessonId,
  getAdjacentLessons,
} from "@/content/meta/modules"
import { getLessonSource } from "@/lib/mdx"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllLessons().map((lesson) => ({ slug: lesson.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const lesson = getLessonBySlug(slug)
  if (!lesson) return { title: "Dars topilmadi" }
  return {
    title: `${lesson.title} — AI Ustasi`,
    description: lesson.description,
  }
}

export default async function LessonPage({ params }: PageProps) {
  const { slug } = await params
  const lesson = getLessonBySlug(slug)
  if (!lesson) notFound()

  const module = getModuleByLessonId(lesson.id)
  if (!module) notFound()

  const { prev, next } = getAdjacentLessons(lesson.id)
  const source = getLessonSource(slug)

  return (
    <>
      <Navbar />
      <div className="flex flex-1">
        <LessonSidebar />
        <main className="flex-1 overflow-auto">
          <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
            <LessonHeader
              lesson={lesson}
              moduleName={module.title}
              moduleColor={module.color.primary}
            />

            {source ? (
              <MdxContent source={source.content} />
            ) : (
              <div className="rounded-lg border bg-muted/30 p-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Bu dars kontenti tez orada qo&apos;shiladi.
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Hozircha boshqa darslarni ko&apos;rib chiqing.
                </p>
              </div>
            )}

            <LessonNav prev={prev} next={next} />
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
