import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  Building,
  MapPin,
  Smartphone,
  DollarSign,
  Shield,
  Truck,
  Recycle,
  FileCheck,
  Target,
  Users,
  BarChart3,
  ArrowRight,
  IndianRupeeIcon,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const householdFeatures = [
    {
      icon: Smartphone,
      title: "Scheduled Pickups",
      description: "Book a pickup at your convenience through our user-friendly app.",
    },
    {
      icon: IndianRupeeIcon,
      title: "Transparent Pricing",
      description: "Know the fair value of your scrap upfront with real-time pricing.",
    },
    {
      icon: Shield,
      title: "Digital Payments",
      description: "Get paid instantly and securely through multiple payment options.",
    },
    {
      icon: BarChart3,
      title: "Traceable Impact",
      description: "See the real-world environmental difference you're making.",
    },
  ]

  const businessFeatures = [
    {
      icon: Truck,
      title: "Commercial & Industrial Waste Collection",
      description: "Efficient and reliable pickup services tailored to your operations.",
    },
    {
      icon: Recycle,
      title: "Customized Recycling Programs",
      description: "Solutions for diverse waste streams (plastics, paper, metals, e-waste, etc.).",
    },
    {
      icon: FileCheck,
      title: "EPR Compliance Support",
      description: "Full traceability and reporting to meet regulatory obligations.",
    },
    // {
    //   icon: Target,
    //   title: "Zero-Waste Consulting",
    //   description: "Expert guidance to optimize your waste footprint and achieve sustainability goals.",
    // },
    {
      icon: Recycle,
      title: "Recycled Material Sourcing",
      description: "Access to high-quality, ethically sourced recycled commodities for production.",
    },
  ]

  const governmentFeatures = [
    {
      icon: Building,
      title: "Integrated MSW Management",
      description: "End-to-end solutions from collection to advanced processing and disposal.",
    },
    {
      icon: Users,
      title: "Digital Citizen Engagement Platforms",
      description: "Enhance public participation and transparency in waste services.",
    },
    {
      icon: Recycle,
      title: "Material Recovery & Waste-to-Value Projects",
      description: "Design, build, and operate state-of-the-art processing infrastructure.",
    },
    {
      icon: FileCheck,
      title: "Policy & Strategic Consulting",
      description: "Expertise to develop and implement effective circular economy strategies.",
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
              Our Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Your Partner in the <span className="text-primary">Circular Economy</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Circulyst provides end-to-end solutions designed to transform waste challenges into sustainable
              opportunities. Whether you're a household, business, or government, we have integrated services to meet
              your needs.
            </p>
          </div>
        </div>
      </section>

      {/* For Households */}
      <section id="households" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold">For Households & Individuals</h2>
              </div>
              <h3 className="text-2xl font-semibold text-primary">Effortless Recycling, Rewarding Impact</h3>
              <p className="text-muted-foreground leading-relaxed">
                Say goodbye to informal scrap dealers and unclear pricing. Our user-friendly app makes selling your dry
                waste convenient, transparent, and financially rewarding.
              </p>
              <Link href="/pre-register" className="cursor-pointer">
                <Button size="lg" className="group">
                  Pre-Register for the Circulyst App
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {householdFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <feature.icon className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-semibold mb-2 text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Businesses */}
      <section id="businesses" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold">For Businesses & Enterprises</h2>
              </div>
              <h3 className="text-2xl font-semibold text-primary">Smart Waste Solutions for Sustainable Growth</h3>
              <p className="text-muted-foreground leading-relaxed">
                Circulyst empowers businesses to achieve their sustainability targets, streamline operations, and
                convert waste liabilities into valuable assets.
              </p>
              <Link href="/contact#message" className="cursor-pointer">
                <Button size="lg" className="group">
                  Request a Business Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {businessFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <feature.icon className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-semibold mb-2 text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Governments */}
      <section id="governments" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold">For Governments & Municipalities</h2>
              </div>
              <h3 className="text-2xl font-semibold text-primary">Building Greener Cities, Together</h3>
              <p className="text-muted-foreground leading-relaxed">
                Circulyst offers comprehensive partnerships to transform urban waste management, enhance public health,
                and accelerate your smart city initiatives.
              </p>
              <Link href="/contact#message" className="cursor-pointer">
                <Button size="lg" className="group">
                  Explore Partnership Opportunities
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {governmentFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <feature.icon className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-semibold mb-2 text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              How <span className="text-primary">Circulyst Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our integrated approach ensures maximum efficiency and value creation at every step of the process.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Collection",
                description: "Smart, convenient waste aggregation from your location",
              },
              {
                step: "02",
                title: "Logistics",
                description: "Optimized transportation with minimal environmental impact",
              },
              { step: "03", title: "Processing", description: "Advanced sorting and recycling at our facilities" },
              { step: "04", title: "Value Return", description: "High-quality materials returned to the supply chain" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-8 h-px bg-border transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your <span className="text-primary">Waste Management?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join the circular economy revolution. Contact us today to learn how Circulyst can help you achieve your
              sustainability goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pre-register" className="cursor-pointer">
                <Button size="lg" className="text-lg px-8 py-6">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/contact#message" className="cursor-pointer">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main >
  )
}
