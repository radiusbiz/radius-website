"use client";

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Youtube } from "lucide-react"
import { FaDiscord } from "react-icons/fa"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      // TODO: Implement newsletter subscription
      console.log('Newsletter subscription submitted:', email)
      setEmail("")
    } catch (error) {
      console.error('Failed to subscribe:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="border-t bg-background relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background pointer-events-none" />
      
      <div className="container py-12 relative">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center group">
              <span className="relative h-12 w-auto transition-transform duration-300 group-hover:scale-105">
                <img src="/images/logo.png" alt="Radius Logo" className="h-12 w-auto hidden dark:block" />
                <img src="/images/black.png" alt="Radius Logo Light" className="h-12 w-auto block dark:hidden" />
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">Premium game enhancement software for serious gamers.</p>
            
            {/* Newsletter subscription */}
            
          </div>

          {/* Products section */}
          <div className="space-y-4">
            <h3 className="text-base font-medium">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/products/hwid-spoofer" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  HWID Spoofer
                </Link>
              </li>
              <li>
                <Link 
                  href="/products/rust-enhancer" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Rust
                </Link>
              </li>
              <li>
                <Link 
                  href="/products/fortnite-enhancer" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Fortnite
                </Link>
              </li>
            </ul>
          </div>

          {/* Support section */}
          <div className="space-y-4">
            <h3 className="text-base font-medium">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/support" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal section */}
          <div className="space-y-4">
            <h3 className="text-base font-medium">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/terms" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/refund" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with social links and copyright */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
             
              <Link 
                href="https://discord.gg/radius" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <FaDiscord className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </Link>
              <Link 
                href="https://youtube.com/@RadiusSoftware" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
           
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Radius Software. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
