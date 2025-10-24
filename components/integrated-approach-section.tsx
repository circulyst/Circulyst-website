import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Truck, Factory, RefreshCw } from "lucide-react"

export function IntegratedApproachSection() {
  const approaches = [
    {
      icon: Smartphone,
      title: "Digital-First Collection",
      description: "Empowering households & businesses with convenient, transparent waste aggregation.",
    },
    {
      icon: Truck,
      title: "Smart Logistics",
      description: "Optimizing every route, every pickup, with data and efficiency.",
    },
    {
      icon: Factory,
      title: "Advanced Processing",
      description: "Transforming mixed waste into high-quality, reusable resources.",
    },
    {
      icon: RefreshCw,
      title: "Value Creation",
      description: "Returning renewed materials to industry, completing the loop.",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-balance mb-4 sm:mb-6 px-4">
            Our Integrated Approach: The <span className="text-primary">Circulyst Advantage</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            We're not just a pickup service or a recycling plant. Circulyst is an end-to-end ecosystem. We integrate
            cutting-edge technology with robust logistics and advanced processing infrastructure to create a seamless,
            transparent, and highly efficient circular supply chain.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {approaches.map((approach, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <approach.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">{approach.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{approach.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 bg-muted/50 rounded-full px-4 sm:px-8 py-3 sm:py-4 max-w-full">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium">Collection</span>
            </div>
            <div className="w-4 sm:w-8 h-px bg-border hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-secondary rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium">Transport</span>
            </div>
            <div className="w-4 sm:w-8 h-px bg-border hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium">Processing</span>
            </div>
            <div className="w-4 sm:w-8 h-px bg-border hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-secondary rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium">Return</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
