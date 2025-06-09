"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/firebase/authContext"
import { auth } from "@/lib/firebase/config"
import { signOut } from "firebase/auth"
import { useRouter } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/mode-toggle"
import { ShoppingCart, User } from "lucide-react"

export function Navbar() {
  const { user, loading } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await signOut(auth)
      router.push("/") // Redirect to homepage after logout
    } catch (error) {
      console.error("Error signing out: ", error)
      // Optionally, show an error message to the user
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="relative h-12 w-auto">
            <img src="/images/logo.png" alt="Radius Logo" className="h-12 w-auto hidden dark:block" />
            <img src="/images/black.png" alt="Radius Logo Light" className="h-12 w-auto block dark:hidden" />
          </span>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-rose-500 to-red-700 p-6 no-underline outline-none focus:shadow-md"
                        href="#products"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        <div className="mt-4 mb-2 text-lg font-medium text-white">Radius Software</div>
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
                        <div className="text-sm font-medium leading-none">Fortnite</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Advanced enhancement features for Fortnite
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors bg-muted/50 text-muted-foreground cursor-not-allowed">
                      <div className="text-sm font-medium leading-none">Rust</div>
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
                        <div className="text-sm font-medium leading-none">Spoofer</div>
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
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Support</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/status" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Status</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center space-x-2">
          {loading ? (
            <p className="text-sm">Loading...</p>
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
            <Button asChild size="sm">
              <Link href="/login">Login</Link>
            </Button>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
