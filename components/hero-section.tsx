"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Volume2, VolumeX, Maximize } from "lucide-react"
import React, { useRef, useState } from "react"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(false)

  const handleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  const handleLoadedMetadata = () => {
    const video = videoRef.current
    if (!video) return
    setIsMuted(video.muted)
  }

  return (
    <section className="relative min-h-screen flex items-center py-20 md:py-32">
      <div className="container relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
          <div className="flex flex-col space-y-6 justify-center">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 w-fit">
              New Release: Radius v4.2 is here
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Elevate Your <span className="text-primary">Gaming</span> Experience
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-[600px]">
              Radius provides cutting-edge enhancement software that gives you the competitive edge you need to dominate
              in your favorite games.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/products">
                  Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black shadow-lg">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls={false}
                muted={true}
                loop={true}
                autoPlay={true}
                playsInline={true}
                poster="/images/demo-video-poster.png"
                onLoadedMetadata={handleLoadedMetadata}
              >
                <source src="/demo-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Audio and fullscreen buttons at top right */}
              <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
                <button onClick={handleMute} aria-label={isMuted ? "Unmute" : "Mute"} className="bg-black/80 text-white p-2 rounded-lg hover:bg-black/90 transition">
                  {isMuted ? (
                    <VolumeX className="h-5 w-5" />
                  ) : (
                    <Volume2 className="h-5 w-5" />
                  )}
                </button>
                <button
                  className="bg-black/80 text-white p-2 rounded-lg hover:bg-black/90 transition"
                  aria-label="Fullscreen"
                  onClick={() => {
                    const video = videoRef.current;
                    if (video) {
                      if (video.requestFullscreen) video.requestFullscreen();
                      else if ((video as any).webkitRequestFullscreen) (video as any).webkitRequestFullscreen();
                      else if ((video as any).msRequestFullscreen) (video as any).msRequestFullscreen();
                    }
                  }}
                >
                  <Maximize className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
