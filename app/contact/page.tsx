"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Phone, MessageCircle, Send, CheckCircle } from "lucide-react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const supabase = createClient()

    try {
      const { error: insertError } = await supabase.from("contact_submissions").insert({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        inquiryType: formData.inquiryType,
        subject: formData.subject,
        message: formData.message,
      })

      if (insertError) throw insertError

      setIsSubmitted(true)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        inquiryType: "",
        subject: "",
        message: "",
      })
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err) {
      console.error("Error submitting form:", err)
      setError(err instanceof Error ? err.message : "An error occurred while submitting the form")
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "contact@circulyst.in",
      description: "Get in touch for general inquiries",
      href: "mailto:contact@circulyst.in",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Kanpur, Uttar Pradesh",
      description: "Our headquarters and first launch city",
      href: "#",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "Coming Soon",
      description: "Phone support available post-launch",
      href: "#",
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
              Contact Us
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Get in Touch with <span className="text-primary">Circulyst</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're here to help you start your journey towards a greener future. Whether you have a question, a
              business inquiry, or want to explore partnership opportunities, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                  <Link href={info.href} className="flex items-center justify-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    <span className="text-lg font-medium text-primary mb-2 text-center">{info.content}</span>
                  </Link>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="message" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Send Us a <span className="text-primary">Message</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="fullName" className="text-sm font-medium">
                          Full Name *
                        </label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => {
                            // Remove any non-numeric characters except +, -, (, ), and spaces
                            const value = e.target.value.replace(/[^0-9+\-\s\(\)]/g, '');
                            handleInputChange("phone", value);
                          }}
                          placeholder="+91 98765 43210"
                          pattern="[0-9+\-\s\(\)]{10,15}"
                          title="Please enter a valid phone number (10-15 digits)"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="inquiryType" className="text-sm font-medium">
                          I am a... *
                        </label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={(value) => handleInputChange("inquiryType", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="household">Household Customer</SelectItem>
                            <SelectItem value="business">Business</SelectItem>
                            <SelectItem value="government">Government/Municipality</SelectItem>
                            <SelectItem value="partner">Potential Partner</SelectItem>
                            <SelectItem value="investor">Investor</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="Enter the subject of your inquiry"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Your Message *
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        required
                      />
                    </div>

                    {error && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                        <p className="text-red-600 text-sm">{error}</p>
                      </div>
                    )}

                    <Button type="submit" size="lg" className="w-full group" disabled={isLoading}>
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      {isLoading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "When will Circulyst launch in Kanpur?",
                answer:
                  "We're currently in the final stages of development and expect to launch our services in Kanpur within the next few months. Pre-register to be notified of our exact launch date.",
              },
              {
                question: "What types of waste do you collect?",
                answer:
                  "We focus on dry waste including paper, cardboard, plastics, metals, and e-waste. We're developing capabilities for additional waste streams as we scale.",
              },
              {
                question: "How do you ensure fair pricing?",
                answer:
                  "Our platform provides transparent, real-time pricing based on current market rates. You'll always know the value of your waste before scheduling a pickup.",
              },
              {
                question: "Do you serve businesses and governments?",
                answer:
                  "Yes! We offer comprehensive B2B solutions for businesses and partnership opportunities for governments and municipalities. Contact us to learn more about our enterprise services.",
              },
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <MessageCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
