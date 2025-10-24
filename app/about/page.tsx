import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Heart, Lightbulb, Shield, Users, Zap } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously leveraging technology and data to optimize every stage of the waste lifecycle.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Ensuring transparency, fair practices, and ethical operations across our entire value chain.",
    },
    {
      icon: Heart,
      title: "Impact",
      description:
        "Delivering measurable environmental and social benefits, from cleaner cities to dignified livelihoods.",
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "Setting new benchmarks for efficiency, reliability, and quality in every service we provide.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working hand-in-hand with communities, businesses, and governments to achieve shared sustainability goals.",
    },
  ]

  const differentiators = [
    {
      title: "Tech-Driven Aggregation",
      description: "Our intuitive platform makes waste collection seamless and rewarding.",
    },
    {
      title: "Smart Logistics Network",
      description: "Optimized routes and efficient transportation minimize environmental footprint.",
    },
    {
      title: "State-of-the-Art Processing",
      description: "Our Material Recovery Facilities ensure maximum resource recovery and high-quality outputs.",
    },
    {
      title: "Marketplace & Partnerships",
      description: "Connecting recycled materials directly back into the manufacturing supply chain.",
    },
    {
      title: "ESG & Compliance Expertise",
      description: "Guiding businesses and governments towards achieving their sustainability goals.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 text-primary border-primary/20">
              About Circulyst
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Pioneering India's <span className="text-primary">Circular Revolution</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded on the belief that waste is simply a resource in the wrong place, Circulyst was born from a deep
              commitment to environmental stewardship and economic innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Story & Mission</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our journey began by recognizing the colossal inefficiency and environmental toll of India's linear
                  "take-make-dispose" economy. We saw an opportunity to transform this broken system into something
                  revolutionary.
                </p>
                <p>
                  We are building more than a company; we are building an entire ecosystem designed to redefine waste
                  management. Our mission is clear: to establish the definitive operating system for India's circular
                  economy, transforming discarded materials into a perpetual source of value for generations to come.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <Target className="h-24 w-24 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    Establishing the definitive operating system for India's circular economy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Vision: A Waste-Free World, Driven by <span className="text-primary">Value</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We envision a future where environmental responsibility is intrinsically linked with economic prosperity.
              Circulyst is committed to these core values:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Circulyst Difference */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Beyond Recycling: The <span className="text-primary">Full-Stack Circular Partner</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              What sets Circulyst apart is our unique blend of digital intelligence and industrial might. We offer a
              truly integrated solution:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
