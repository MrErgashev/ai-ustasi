import { MDXRemote } from "next-mdx-remote/rsc"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import { Quiz } from "@/components/interactive/Quiz"
import { FlashcardDeck } from "@/components/interactive/Flashcard"
import { VideoEmbed } from "@/components/interactive/VideoEmbed"
import { InfoBox } from "@/components/interactive/InfoBox"
import { StepByStep } from "@/components/interactive/StepByStep"
import { ChecklistTask } from "@/components/interactive/ChecklistTask"
import { ComparisonTable } from "@/components/interactive/ComparisonTable"
import { CodePlayground } from "@/components/interactive/CodePlayground"
import { CaseStudy } from "@/components/interactive/CaseStudy"
import { LessonQuiz } from "@/components/interactive/LessonQuiz"
import { LessonFlashcards } from "@/components/interactive/LessonFlashcards"
import { LessonChecklist } from "@/components/interactive/LessonChecklist"
import { LessonSteps } from "@/components/interactive/LessonSteps"

const components = {
  Quiz,
  FlashcardDeck,
  VideoEmbed,
  InfoBox,
  StepByStep,
  ChecklistTask,
  ComparisonTable,
  CodePlayground,
  CaseStudy,
  LessonQuiz,
  LessonFlashcards,
  LessonChecklist,
  LessonSteps,
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="mt-8 mb-4 font-heading text-xl font-bold tracking-tight" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-8 mb-3 font-heading text-lg font-semibold tracking-tight scroll-mt-20"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mt-6 mb-2 text-base font-semibold scroll-mt-20"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4 text-sm leading-relaxed text-muted-foreground" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-4 ml-4 list-disc space-y-1 text-sm text-muted-foreground" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-4 ml-4 list-decimal space-y-1 text-sm text-muted-foreground" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-primary underline-offset-4 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="mb-4 border-l-2 border-primary pl-4 text-sm italic text-muted-foreground"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="mb-4 overflow-x-auto rounded-lg border bg-muted/50 p-4 text-xs"
      {...props}
    />
  ),
}

interface MdxContentProps {
  source: string
}

export function MdxContent({ source }: MdxContentProps) {
  return (
    <article className="prose-none">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
          },
        }}
      />
    </article>
  )
}
