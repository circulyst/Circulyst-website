import Link from "next/link"
import { Recycle, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center cursor-pointer">
                <img
                  src="/images/circulyst-transparent-logo.png"
                  alt="Circulyst Logo"
                  width={180}
                  height={50}
                  className="h-8 w-auto sm:h-10 md:h-12"
                />
              </Link>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Building the Operating System for India's Circular Economy. Transforming waste into value for a
              sustainable future.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Navigation</h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="block text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Services
              </Link>
              <Link
                href="/investors"
                className="block text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Investors
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h3>
            <div className="space-y-2">
              <div className="text-sm sm:text-base text-muted-foreground">Household Collection</div>
              <div className="text-sm sm:text-base text-muted-foreground">Business Solutions</div>
              <div className="text-sm sm:text-base text-muted-foreground">Government Partnerships</div>
              <div className="text-sm sm:text-base text-muted-foreground">EPR Compliance</div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h3>
            <div className="space-y-2">
              <Link href="mailto:contact@circulyst.in" className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="break-all">contact@circulyst.in</span>
              </Link>
              <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span>Kanpur, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
            © 2025 Circulyst. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer >
  )
}
