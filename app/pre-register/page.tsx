"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { detectDevice, getDeviceDescription } from "@/lib/device-detection"

export default function PreRegisterPage() {
  const [profileType, setProfileType] = useState<string>("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(e.target as HTMLFormElement)
    const supabase = createClient()

    try {
      // Detect device information
      const deviceInfo = detectDevice()
      
      const { error: insertError } = await supabase.from("pre_registrations").insert({
        full_name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        city: formData.get("city") as string,
        pin_code: formData.get("pincode") as string,
        profile_type: profileType,
        household_size: profileType === "individual" ? Number.parseInt(formData.get("household-size") as string) : null,
        waste_estimate: profileType === "business" ? (formData.get("waste-estimate") as string) : null,
        device_info: {
          platform: deviceInfo.platform,
          browser: deviceInfo.browser,
          is_mobile: deviceInfo.isMobile,
          description: getDeviceDescription(deviceInfo),
          user_agent: deviceInfo.userAgent
        },
      })

      if (insertError) throw insertError

      setIsSubmitted(true)
    } catch (err) {
      console.error("Error submitting form:", err)
      setError(err instanceof Error ? err.message : "An error occurred while submitting the form")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="p-8">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p className="text-muted-foreground mb-6">
              Your pre-registration has been submitted successfully. We'll contact you as soon as we launch in your
              area.
            </p>
            <Link href="/" className="cursor-pointer">
              <Button className="w-full">Return to Homepage</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Homepage
          </Link>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-primary">Pre-Register for Early Access</CardTitle>
            <p className="text-muted-foreground">
              Be among the first to experience Circulyst's revolutionary waste management platform in Kanpur.
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Contact Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold border-b pb-2">Basic Contact Information</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone/WhatsApp Number *</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="For updates and notifications" required />
                </div>
              </div>

              {/* Location Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold border-b pb-2">Location</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input id="city" name="city" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pincode">Pin Code / Locality *</Label>
                    <Input id="pincode" name="pincode" required />
                  </div>
                </div>
              </div>

              {/* Profile Specifics */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold border-b pb-2">Profile Specifics</h3>

                <div className="space-y-4">
                  <Label>I am registering as: *</Label>
                  <RadioGroup value={profileType} onValueChange={setProfileType} className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="individual" id="individual" />
                      <Label htmlFor="individual">Individual/Household</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="business" id="business" />
                      <Label htmlFor="business">Business/Institution</Label>
                    </div>
                  </RadioGroup>
                </div>

                {profileType === "individual" && (
                  <div className="space-y-2">
                    <Label htmlFor="household-size">Household Size *</Label>
                    <Select name="household-size" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select household size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1–3 members</SelectItem>
                        <SelectItem value="2">4–6 members</SelectItem>
                        <SelectItem value="3">6+ members</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {profileType === "business" && (
                  <div className="space-y-2">
                    <Label htmlFor="waste-estimate">Monthly Waste Estimate *</Label>
                    <Select name="waste-estimate" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select monthly waste volume" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="<100kg">Less than 100kg</SelectItem>
                        <SelectItem value="100kg-1ton">100kg – 1 ton</SelectItem>
                        <SelectItem value="1-5ton">1 – 5 tons</SelectItem>
                        <SelectItem value="5ton+">5+ tons</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              <div className="pt-6">
                <Button type="submit" size="lg" className="w-full" disabled={!profileType || isLoading}>
                  {isLoading ? "Submitting..." : "Complete Pre-Registration"}
                </Button>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  By submitting this form, you agree to receive updates about Circulyst's launch and services.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
