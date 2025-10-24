import { Button } from "@/components/ui/button"
import { ArrowRight, Recycle, Leaf, TrendingUp } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-background py-12 sm:py-16 lg:py-20 xl:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance leading-tight">
                Waste Ends Here. <span className="text-primary">Value Begins.</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-medium">
                Building the Operating System for India's Circular Economy.
              </p>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Circulyst is transforming how India manages waste—from efficient collection to advanced recycling,
              creating a future where resources are perpetually renewed.
            </p>

            <div className="flex flex-col xl:flex-row gap-3 sm:gap-4">
              <Link href="/pre-register" className="cursor-pointer">
                <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                  Join the Movement
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
              <Link href="/contact#message" className="cursor-pointer">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent"
                >
                  For Businesses & Partners
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Recycle className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                <span className="text-xs sm:text-sm font-medium">Circular Economy</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                <span className="text-xs sm:text-sm font-medium">Sustainable Future</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                <span className="text-xs sm:text-sm font-medium">Value Creation</span>
              </div>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero-image.jpeg"
              alt="Circulyst Hero Image"
              className="w-auto rounded-xl sm:rounded-2xl"
              loading="eager"
              style={{ objectFit: 'contain' }}
            />
            
            {/* Overlay with Recycle Icon and Text */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-black/20 to-secondary/30 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center">
              <div className="text-center text-white">
                <Recycle className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 mx-auto mb-3 sm:mb-4 drop-shadow-sm" />
                <p className="text-lg sm:text-xl font-semibold drop-shadow-sm">Transforming Waste</p>
                <p className="text-base sm:text-lg opacity-90 drop-shadow-sm">Into Value</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
