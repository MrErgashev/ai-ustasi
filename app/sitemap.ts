import type { MetadataRoute } from "next"
import { getAllLessons } from "@/content/meta/modules"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ai-ustasi.vercel.app"
  const lessons = getAllLessons()

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/roadmap`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/portfolio`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/haqida`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    ...lessons.map((lesson) => ({
      url: `${baseUrl}/dars/${lesson.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ]
}
