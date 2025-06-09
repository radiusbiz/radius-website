"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="container flex items-center justify-center min-h-screen py-10">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-3xl">Coming Soon</CardTitle>
          <CardDescription className="text-lg mt-2">
            Our login system is currently under development
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-lg bg-muted/50">
            <p className="text-muted-foreground">
              We're working hard to bring you a secure and seamless login experience. 
              Check back soon for updates!
            </p>
          </div>
          <Link href="/" className="block">
            <Button className="w-full" variant="outline">
              Return to Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
