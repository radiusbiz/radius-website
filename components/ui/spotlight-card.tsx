"use client"

import { useRef } from "react"
import { cn } from "@/lib/utils"

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlightColor?: string
  children: React.ReactNode
}

const SpotlightCard = ({ 
  children, 
  className = "", 
  spotlightColor = "rgba(255, 255, 255, 0.25)",
  ...props 
}: SpotlightCardProps) => {
  const divRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    divRef.current.style.setProperty("--mouse-x", `${x}px`)
    divRef.current.style.setProperty("--mouse-y", `${y}px`)
    divRef.current.style.setProperty("--spotlight-color", spotlightColor)
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={cn("card-spotlight", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export { SpotlightCard } 