"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/firebase/authContext"
import { auth } from "@/lib/firebase/config"
import { signOut } from "firebase/auth"
import { useRouter, usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ModeToggle } from "@/components/mode-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { Gamepad2, Shield, User } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogout = async () => {
    if (!auth) return
    try {
      await signOut(auth)
      router.push("/")
    } catch (error) {
      console.error("Error signing out: ", error)
    }
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b" : "bg-background"
      )}
    >
      <div className="container flex h-16 items-center">
        <MobileNav />
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="relative h-10 w-auto">
            <img src="/images/logo.png" alt="Radius Logo" className="h-10 w-auto hidden dark:block" />
            <img src="/images/black.png" alt="Radius Logo Light" className="h-10 w-auto block dark:hidden" />
          </span>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-4">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-red-500 to-red-600 p-6 no-underline outline-none focus:shadow-md overflow-hidden group relative"
                        href="#products"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="mb-2 mt-4 text-lg font-medium text-white">
                          Radius Software
                        </div>
                        <p className="text-sm leading-tight text-white/90">
                          Premium game enhancement solutions for serious gamers
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/products/fortnite-enhancer"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="flex items-center gap-2">
                          <Gamepad2 className="h-4 w-4" />
                          <span className="text-sm font-medium">Fortnite Enhancer</span>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Advanced enhancement features for Fortnite
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors bg-muted/50 text-muted-foreground cursor-not-allowed">
                      <div className="flex items-center gap-2">
                        <Gamepad2 className="h-4 w-4" />
                        <span className="text-sm font-medium">Rust</span>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Coming Soon
                      </p>
                    </div>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/products/number-changer"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4" />
                          <span className="text-sm font-medium">HWID Spoofer</span>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Utility tool for game modifications
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/support" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Support
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/status" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Status
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center gap-2">
          {loading ? (
            <div className="h-9 w-9 animate-pulse rounded-md bg-muted" />
          ) : user ? (
            <>
              <Button variant="ghost" size="icon" asChild>
                <Link href="/dashboard">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Dashboard</span>
                </Link>
              </Button>
              <Button onClick={handleLogout} variant="outline" size="sm">
                Logout
              </Button>
            </>
          ) : (
            <Button
              asChild
              size="sm"
              variant={pathname === "/login" ? "secondary" : "default"}
              className="font-medium"
            >
              <Link href="/login">Login</Link>
            </Button>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
