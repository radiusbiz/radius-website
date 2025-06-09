import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import React from "react"

interface ProductCardProps {
  title: string
  description: string
  price: string
  priceLabel?: string
  features: string[]
  popular?: boolean
  href: string
  icon: React.ReactNode
}

export function ProductCard({
  title,
  description,
  price,
  priceLabel = "/month",
  features,
  popular = false,
  href,
  icon,
}: ProductCardProps) {
  return (
    <Card className={`flex flex-col ${popular ? "border-primary shadow-lg" : ""}`}>
      <CardHeader>
        <div className="relative flex items-center justify-center h-32 w-full mb-4 rounded-lg overflow-hidden bg-muted">
          {icon && React.isValidElement(icon) && React.cloneElement(icon as React.ReactElement<any>, {
            className: `${(icon as React.ReactElement<any>).props.className || ''} h-16 w-16 text-primary`.trim()
          })}
        </div>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </div>
        </div>
        <div className="mt-4">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-muted-foreground ml-2">{priceLabel}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-4 w-4 mr-2 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" variant="destructive">
          <Link href={href}>Get Started</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
