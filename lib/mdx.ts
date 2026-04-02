import fs from "fs"
import path from "path"
import matter from "gray-matter"

const LESSONS_DIR = path.join(process.cwd(), "content", "lessons")

export function getLessonSlugs(): string[] {
  if (!fs.existsSync(LESSONS_DIR)) return []
  return fs
    .readdirSync(LESSONS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/^\d+-/, "").replace(/\.mdx$/, ""))
}

export function getLessonSource(slug: string) {
  const files = fs.existsSync(LESSONS_DIR)
    ? fs.readdirSync(LESSONS_DIR)
    : []

  const file = files.find((f) => {
    const nameWithoutNumber = f.replace(/^\d+-/, "").replace(/\.mdx$/, "")
    return nameWithoutNumber === slug
  })

  if (!file) return null

  const filePath = path.join(LESSONS_DIR, file)
  const raw = fs.readFileSync(filePath, "utf-8")
  const { content, data } = matter(raw)

  return { content, frontmatter: data }
}

export function getAllLessonSources() {
  const slugs = getLessonSlugs()
  return slugs
    .map((slug) => {
      const source = getLessonSource(slug)
      if (!source) return null
      return { slug, ...source }
    })
    .filter(Boolean)
}
