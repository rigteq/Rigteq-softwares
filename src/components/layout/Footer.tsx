import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-muted pt-20 pb-10 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center">
              <Image 
                src="/logo.png" 
                alt="Rigteq Logo" 
                width={180} 
                height={48}
                className="h-9 md:h-11 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Empowering businesses through innovative software solutions. Let&apos;s build the future together.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Email:</span>
              <a href="mailto:sales@rigteq.com" className="hover:text-primary transition-colors">sales@rigteq.com</a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-2">
              <span className="font-medium text-foreground">Phone:</span>
              <a href="tel:+918750399055" className="hover:text-primary transition-colors">+91 87503 99055</a>
            </div>
            <div className="flex items-center space-x-4 mt-6">
              <Link href="https://www.linkedin.com/company/rigteq" className="p-2 bg-background rounded-full hover:bg-primary hover:text-white transition-colors">
                <span className="w-5 h-5 flex items-center justify-center font-bold">in</span>
              </Link>
              <Link href="https://twitter.com/rigteq" className="p-2 bg-background rounded-full hover:bg-primary hover:text-white transition-colors">
                <span className="w-5 h-5 flex items-center justify-center font-bold">X</span>
              </Link>
              <Link href="https://www.facebook.com/rigteq" className="p-2 bg-background rounded-full hover:bg-primary hover:text-white transition-colors">
                <span className="w-5 h-5 flex items-center justify-center font-bold">f</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li><Link href="/services/agentic-ai" className="hover:text-primary transition-colors">Agentic AI Solutions</Link></li>
              <li><Link href="/services/generative-ai" className="hover:text-primary transition-colors">Generative AI</Link></li>
              <li><Link href="/services/app-modernisation" className="hover:text-primary transition-colors">App Modernisation</Link></li>
              <li><Link href="/services/predictive-analytics" className="hover:text-primary transition-colors">Predictive Analytics</Link></li>
              <li><Link href="/services/product-development" className="hover:text-primary transition-colors">Product Development</Link></li>
              <li><Link href="/services/cloud-transformation" className="hover:text-primary transition-colors">Cloud Transformation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to get the latest tech insights and company updates.
            </p>
            <div className="flex items-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full h-11 px-4 rounded-l-lg border-y border-l bg-background focus:outline-none focus:ring-1 focus:ring-primary text-sm"
              />
              <Button className="h-11 rounded-l-none px-4 rounded-r-lg">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Rigteq Softwares. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

