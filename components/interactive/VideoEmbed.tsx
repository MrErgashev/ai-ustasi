"use client"

import { useState } from "react"
import { Play, ExternalLink } from "lucide-react"

interface VideoEmbedProps {
  videoId: string
  title: string
  timestamp?: string
  description?: string
}

export function VideoEmbed({
  videoId,
  title,
  timestamp,
  description,
}: VideoEmbedProps) {
  const [loaded, setLoaded] = useState(false)
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1${
    timestamp ? `&start=${timestamp}` : ""
  }`
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}${
    timestamp ? `&t=${timestamp}` : ""
  }`

  return (
    <div className="my-6">
      {/* Title */}
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm font-medium">{title}</p>
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <ExternalLink className="h-3 w-3" />
          YouTube
        </a>
      </div>
      {description && (
        <p className="mb-3 text-xs text-muted-foreground">{description}</p>
      )}

      {/* Video */}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-muted">
        {loaded ? (
          <iframe
            src={src}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            onClick={() => setLoaded(true)}
            className="group absolute inset-0 flex items-center justify-center"
          >
            {/* Thumbnail */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbnailUrl}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            {/* Play button overlay */}
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-black/70 text-white transition-transform group-hover:scale-110">
              <Play className="h-6 w-6 ml-0.5" fill="currentColor" />
            </div>
          </button>
        )}
      </div>
    </div>
  )
}
