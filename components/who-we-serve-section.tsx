"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Building, MapPin, ArrowRight, Link } from "lucide-react"
import { useRouter } from "next/navigation"

export function WhoWeServeSection() {
  const router = useRouter()
  
  const audiences = [
    {
      icon: Home,
      title: "For Households",
      description:
        "Experience hassle-free, transparent scrap collection with fair prices right from your doorstep. Make a real difference, effortlessly.",
      cta: "Get Started",
      href: "/pre-register",
    },
    {
      icon: Building,
      title: "For Businesses",
      description:
        "Streamline your waste management, ensure compliance, and unlock new value from your discards with our comprehensive B2B solutions.",
      cta: "Explore Business Solutions",
      href: "/contact#message",
    },
    {
      icon: MapPin,
      title: "For Partners & Governments",
      description:
        "Collaborate to build sustainable cities. We offer integrated waste infrastructure, digital platforms, and expertise to achieve your environmental goals.",
      cta: "Partner With Us",
      href: "/contact#message",
    },
  ]

  // Function to handle button click and redirect to pre-register page
  const handleRedirect = (href: string) => {
    router.push(href)
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance mb-6">
            A Circular Future for <span className="text-primary">Everyone</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <audience.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{audience.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{audience.description}</p>
                <Button 
                  className="w-full group" 
                  onClick={() => handleRedirect(audience.href)}
                >
                  {audience.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
