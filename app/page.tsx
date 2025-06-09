import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { HeroSection } from "@/components/hero-section"
import { Features } from "@/components/features"
import { FeatureCards } from "@/components/feature-cards"
import { Gamepad2, Shield } from "lucide-react"

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background">
      {/* Background overlays for seamless effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background/50 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,0,0,0.15),transparent_50%)] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,0,0,0.15),transparent_50%)] z-0" />
      <div className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center">
          <HeroSection />
        </section>

        {/* Products Section (moved up) */}
        <section id="products" className="min-h-screen flex flex-col justify-center py-20">
          <div className="container flex-1 flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Products</h2>
              <p className="mt-4 text-muted-foreground max-w-[700px]">Choose the right solution for your gaming needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ProductCard
                title="Fortnite Public"
                description="Advanced enhancement features specifically designed for Fortnite"
                price="£6.99"
                priceLabel="from"
                features={[
                  "Silent aim assistance",
                  "Player ESP & tracking",
                  "Advanced aimbot",
                  "Instant activation"
                ]}
                href="/products/fortnite-enhancer"
                icon={<Gamepad2 className="h-16 w-16" />}
              />

              <ProductCard
                title="Permanent HWID Spoofer"
                description="Permanent hardware ID modification solution"
                price="£4.99"
                priceLabel="from"
                features={[
                  "Permanent HWID change",
                  "EAC/BE support",
                  "Instant unban",
                  "Lifetime updates"
                ]}
                href="/products/number-changer"
                icon={<Shield className="h-16 w-16" />}
              />
            </div>
          </div>
        </section>

        {/* Why Choose Radius Section */}
        <section className="min-h-screen flex items-center justify-center">
          <Features />
        </section>

        {/* Powerful Features Section */}
        <section className="min-h-screen flex items-center justify-center">
          <FeatureCards />
        </section>
      </div>
    </div>
  )
}
