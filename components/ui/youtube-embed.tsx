"use client"

interface YouTubeEmbedProps {
  videoId: string
  className?: string
}

export function YouTubeEmbed({ videoId, className = "" }: YouTubeEmbedProps) {
  return (
    <div className={`relative w-full ${className}`} style={{ paddingBottom: "56.25%" }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full rounded-2xl"
      />
    </div>
  )
} 