"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const isDark = theme === "dark"

  return (
    <Button
      className="bg-transparent shadow-none border-none focus:outline-none focus:ring-0"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      style={{ boxShadow: 'none', background: 'transparent', border: 'none' }}
    >
      {isDark ? (
        <Sun className="h-[1.5rem] w-[1.5rem] text-white" />
      ) : (
        <Moon className="h-[1.5rem] w-[1.5rem] text-black" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
