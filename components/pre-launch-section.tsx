import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Bell, TrendingUp } from "lucide-react"
import Link from "next/link"

export function PreLaunchSection() {
  return (
    <section id="join-movement" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
            Launching Soon in Kanpur!
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-balance mb-4 sm:mb-6 px-4">
            Be Among the First to Experience the <span className="text-primary">Future of Waste Management</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            We're bringing our full suite of services to Kanpur first, with more cities coming soon.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6 sm:p-8 text-center">
              <Bell className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Early Access</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                Be the first to experience our revolutionary waste management platform when we launch in Kanpur.
              </p>
              <Link href="/pre-register" className="cursor-pointer">
                <Button size="lg" className="w-full text-base py-3">
                  Pre-Register for Early Access
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 bg-secondary/5">
            <CardContent className="p-6 sm:p-8 text-center">
              <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Investor Updates</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                Stay informed about our progress, milestones, and investment opportunities in India's circular economy.
              </p>
              <Button variant="outline" size="lg" className="w-full bg-transparent text-base py-3">
                Get Investor Updates
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 lg:mt-16 text-center px-4">
          <p className="text-sm sm:text-base text-muted-foreground">
            Join thousands of forward-thinking individuals and businesses ready to transform waste into value.
          </p>
        </div>
      </div>
    </section>
  )
}
