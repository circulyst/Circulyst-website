"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center cursor-pointer">
              <Image
                src="/images/circulyst-transparent-logo.png"
                alt="Circulyst Logo"
                width={180}
                height={50}
                className="h-8 w-auto sm:h-10 md:h-12"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-6 lg:ml-10 flex items-baseline space-x-4 lg:space-x-8">
              <Link href="/" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors cursor-pointer">
                Home
              </Link>
              <Link href="/about" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors cursor-pointer">
                About Us
              </Link>
              <Link
                href="/services"
                className="text-sm lg:text-base text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Services
              </Link>
              <Link
                href="/investors"
                className="text-sm lg:text-base text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Investors
              </Link>
              <Link
                href="/contact"
                className="text-sm lg:text-base text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Contact
              </Link>
              <Link href="/pre-register" className="cursor-pointer">
                <Button size="sm" className="text-sm lg:text-base px-3 lg:px-4">
                  Join the Movement
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3 bg-background/95 backdrop-blur border-t border-border">
              <Link
                href="/"
                className="block px-3 py-3 text-base text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors cursor-pointer"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-3 text-base text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors cursor-pointer"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="block px-3 py-3 text-base text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors cursor-pointer"
              >
                Services
              </Link>
              <Link
                href="/investors"
                className="block px-3 py-3 text-base text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors cursor-pointer"
              >
                Investors
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-3 text-base text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors cursor-pointer"
              >
                Contact
              </Link>
              <div className="px-3 pt-2">
                <Link href="/pre-register" className="cursor-pointer">
                  <Button className="w-full text-base py-3">Join the Movement</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
