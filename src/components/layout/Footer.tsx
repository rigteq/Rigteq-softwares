import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-zinc-300 pt-16 pb-8 border-t border-zinc-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-flex items-center">
            </Link>
            <p className="text-zinc-400 text-base leading-relaxed max-w-sm">
              Transforming businesses through innovative AI, Agentic workflows, and modern web solutions. We build software that scales.
            </p>
            <div className="flex items-center space-x-5">
              <Link href="https://www.linkedin.com/company/rigteq" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-zinc-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
              <Link href="https://twitter.com/rigteq" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-zinc-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </Link>
              <Link href="https://www.facebook.com/rigteq" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-zinc-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
              <Link href="https://www.instagram.com/rigteq" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-zinc-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-white text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><Link href="/services/agentic-ai" className="hover:text-primary transition-colors">Agentic AI Solutions</Link></li>
              <li><Link href="/services/generative-ai" className="hover:text-primary transition-colors">Generative AI</Link></li>
              <li><Link href="/services/app-modernisation" className="hover:text-primary transition-colors">App Modernisation</Link></li>
              <li><Link href="/services/predictive-analytics" className="hover:text-primary transition-colors">Predictive Analytics</Link></li>
              <li><Link href="/services/product-development" className="hover:text-primary transition-colors">Product Development</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-white text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-heading font-semibold text-white text-lg mb-6">Contact Us</h4>
            <div className="space-y-4 text-sm text-zinc-400">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a href="mailto:sales@rigteq.com" className="hover:text-primary transition-colors">sales@rigteq.com</a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-2">
                  <a href="tel:+918750399055" className="hover:text-primary transition-colors">🇮🇳 +91 87503 99055</a>
                  <a href="tel:+13502008444" className="hover:text-primary transition-colors">🇺🇸 +1 3502 008-444</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-4">
                  <span>
                    <strong className="text-white font-medium">Ghaziabad Office</strong><br/>
                    Office no-UGF-74, Signature street, Govindpuram,<br/>
                    Ghaziabad, Uttar Pradesh, India 201013
                  </span>
                  <span>
                    <strong className="text-white font-medium">Houston Office</strong><br/>
                    3 Greenway Plz,<br/>
                    Houston, TX 77046, United States
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800/80 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Rigteq Softwares. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
