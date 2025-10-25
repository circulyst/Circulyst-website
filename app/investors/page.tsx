import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Target, Zap, Globe, Users, BarChart3, Rocket, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function InvestorsPage() {
  const advantages = [
    {
      icon: Zap,
      title: "Proprietary Technology",
      description: "Our digital platform creates efficiency and transparency from the first mile.",
    },
    {
      icon: Target,
      title: "Scalable Operations",
      description: "A proven hyperlocal model for rapid, profitable expansion across India.",
    },
    {
      icon: BarChart3,
      title: "Vertical Integration",
      description: "Capturing maximum value by controlling aggregation, logistics, and advanced processing.",
    },
    {
      icon: Globe,
      title: "Massive Market Potential",
      description: "Addressing a multi-billion dollar problem with high barriers to entry.",
    },
    {
      icon: Users,
      title: "Experienced Leadership",
      description: "A team with the vision and execution capabilities to build a market leader.",
    },
  ]

  const milestones = [
    {
      status: "completed",
      title: "Company Formation & Vision",
      description: "Established Circulyst with a clear mission to transform India's waste management ecosystem.",
    },
    {
      status: "current",
      title: "Platform Development",
      description: "Actively developing our integrated platform and finalizing launch preparations in Kanpur.",
    },
    {
      status: "upcoming",
      title: "Kanpur Launch",
      description: "App launch in Kanpur, onboarding initial household and business clients.",
    },
    {
      status: "upcoming",
      title: "Processing Partnerships",
      description: "Securing key processing partnerships and establishing material recovery facilities.",
    },
    {
      status: "future",
      title: "Multi-City Expansion",
      description: "Scaling operations to additional tier-1 and tier-2 cities across India.",
    },
  ]

  const marketStats = [
    { value: "₹1.3L Cr", label: "Market Size", sublabel: "Indian waste management market" },
    { value: "62M", label: "Annual Waste", sublabel: "Tons generated in India" },
    { value: "15%", label: "Current Recycling", sublabel: "Massive improvement opportunity" },
    { value: "20%", label: "CAGR", sublabel: "Expected market growth" },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 text-primary border-primary/20">
              Investment Opportunity
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Invest in India's <span className="text-primary">Circular Future</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              The Indian waste management market is poised for unprecedented growth and transformation. Driven by
              increasing urbanization, rising consumption, and stringent environmental regulations, the need for
              efficient, sustainable, and scalable solutions is urgent and immense.
            </p>
            <p className="text-lg text-foreground font-medium">
              Circulyst stands at the epicenter of this opportunity. We are building a defensible, vertically integrated
              business model that leverages technology to organize the fragmented waste ecosystem and industrial
              infrastructure to unlock significant value.
            </p>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              A <span className="text-primary">Multi-Billion Dollar</span> Opportunity
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              India's waste management sector represents one of the largest untapped markets in the world, with massive
              potential for value creation and environmental impact.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {marketStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Why Now?</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Regulatory Push</p>
                    <p className="text-muted-foreground text-sm">Stricter EPR regulations driving corporate demand</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Digital Adoption</p>
                    <p className="text-muted-foreground text-sm">
                      Rapid smartphone penetration enabling tech solutions
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">ESG Focus</p>
                    <p className="text-muted-foreground text-sm">
                      Growing investor and corporate focus on sustainability
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Urban Growth</p>
                    <p className="text-muted-foreground text-sm">Rapid urbanization creating massive waste volumes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-24 w-24 text-primary mx-auto mb-4" />
                  <h4 className="text-2xl font-bold mb-2">Exponential Growth</h4>
                  <p className="text-muted-foreground">
                    Positioned at the intersection of technology, sustainability, and massive market demand
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              A Foundation for <span className="text-primary">Dominance</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Circulyst combines the agility of a tech startup with the robust vision of an industrial powerhouse:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <advantage.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Traction & Milestones */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Building Momentum, <span className="text-primary">One City at a Time</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-4 h-4 rounded-full ${milestone.status === "completed"
                        ? "bg-primary"
                        : milestone.status === "current"
                          ? "bg-secondary"
                          : "bg-muted-foreground/30"
                        }`}
                    ></div>
                    {index < milestones.length - 1 && <div className="w-px h-16 bg-border mt-2"></div>}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold">{milestone.title}</h3>
                      <Badge
                        variant={
                          milestone.status === "completed"
                            ? "default"
                            : milestone.status === "current"
                              ? "secondary"
                              : "outline"
                        }
                        className="text-xs"
                      >
                        {milestone.status === "completed"
                          ? "Completed"
                          : milestone.status === "current"
                            ? "In Progress"
                            : milestone.status === "upcoming"
                              ? "Upcoming"
                              : "Future"}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <Rocket className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Partner with the Future of <span className="text-primary">Sustainability</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                We are currently engaging with strategic investors who share our vision for a sustainable and prosperous
                India. For a detailed investor deck and to learn more about our opportunities, please connect with us.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">Pre-Seed</div>
                  <div className="text-muted-foreground">Current Round</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">₹30 Lakh - ₹1 Cr</div>
                  <div className="text-muted-foreground">Target Raise</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">100 Tons Monthly</div>
                  <div className="text-muted-foreground">18-Month Goal</div>
                </CardContent>
              </Card>
            </div>

            <Link href="/contact#message" className="cursor-pointer">
              <Button size="lg" className="w-auto sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                Connect with Our Team
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
