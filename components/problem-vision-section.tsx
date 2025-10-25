import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Target, Trash2, TrendingUp, Recycle, BarChart3 } from "lucide-react"

export function ProblemVisionSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-balance mb-4 sm:mb-6 px-4">
            The Unseen Opportunity: India's Waste Crisis
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <Card className="border-destructive/20 bg-destructive/5">
              <CardContent className="p-4 sm:p-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">The Problem</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      India generates millions of tons of waste daily, overwhelming our landfills and polluting our
                      environment. This isn't just an ecological disaster; it's a monumental economic inefficiency. The
                      current system is fragmented, opaque, and unsustainable.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-4 sm:p-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Our Vision</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      At Circulyst, we see beyond the waste. We see invaluable resources, untapped potential, and the
                      foundation for a thriving circular economy. We're building a future where waste is a forgotten
                      concept.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            {/* COMMENTED OUT - Original simple marketStats boxes implementation
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-destructive/10 p-4 sm:p-6 rounded-lg text-center">
                  <div className="text-xl sm:text-2xl font-bold text-destructive">62M</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Tons of waste generated annually</div>
                </div>
                <div className="bg-primary/10 p-4 sm:p-6 rounded-lg text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">15%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Current recycling rate</div>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
                <div className="bg-secondary/10 p-4 sm:p-6 rounded-lg text-center">
                  <div className="text-xl sm:text-2xl font-bold text-secondary">₹1.3L Cr</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Market opportunity</div>
                </div>
                <div className="bg-primary/10 p-4 sm:p-6 rounded-lg text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">80%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Potential recycling rate</div>
                </div>
              </div>
            </div>
            */}

            {/* ENHANCED MARKET STATS BOXES WITH ICONS AND BETTER UI */}
            <div className="grid grid-cols-2 gap-4 sm:gap-4">
              <div className="space-y-4 sm:space-y-4">
                {/* Waste Generated Stats */}
                <Card className="border-destructive/20 bg-gradient-to-br from-destructive/5 to-destructive/10 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Trash2 className="h-6 w-6 text-destructive" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-destructive mb-2">62M</div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-medium">Tons of waste generated annually</div>
                    <div className="mt-0 text-xs text-destructive/70">Growing at 3.5% yearly</div>
                  </CardContent>
                </Card>

                {/* Current Recycling Rate */}
                <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BarChart3 className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">15%</div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-medium">Current recycling rate</div>
                    <div className="mt-0 text-xs text-orange-600/70">Far below global average</div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4 sm:space-y-4">
                {/* Market Opportunity */}
                <Card className="border-green-200 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">₹1.3L Cr</div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-medium">An underrated market opportunity</div>
                    <div className="mt-0 text-xs text-green-600/70">Untapped potential</div>
                  </CardContent>
                </Card>

                {/* Potential Recycling Rate */}
                <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Recycle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">80%</div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-medium">Potential recycling rate</div>
                    <div className="mt-0 text-xs text-primary/70">With proper infrastructure</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
