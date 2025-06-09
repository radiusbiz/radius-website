import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center">
              <span className="relative h-12 w-auto">
                <img src="/images/logo.png" alt="Radius Logo" className="h-12 w-auto hidden dark:block" />
                <img src="/images/black.png" alt="Radius Logo Light" className="h-12 w-auto block dark:hidden" />
              </span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">Premium game enhancement software for serious gamers.</p>
          </div>
          <div>
            <h3 className="font-medium mb-3">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products/rust-enhancer" className="text-muted-foreground hover:text-foreground">
                  Rust
                </Link>
              </li>
              <li>
                <Link href="/products/fortnite-enhancer" className="text-muted-foreground hover:text-foreground">
                  Fortnite
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-foreground">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-muted-foreground hover:text-foreground">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Radius Software. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
