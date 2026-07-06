"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Services", 
    href: "/services",
    megaMenu: [
      { name: "Agentic AI Solutions", href: "/services/agentic-ai" },
      { name: "Generative AI", href: "/services/generative-ai" },
      { name: "App Modernisation", href: "/services/app-modernisation" },
      { name: "Predictive Analytics", href: "/services/predictive-analytics" },
      { name: "Product Development", href: "/services/product-development" },
      { name: "Cloud Transformation", href: "/services/cloud-transformation" },
    ]
  },
  { name: "Technologies", href: "/technologies" },
  { name: "Portfolio", href: "/portfolio" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Rigteq Logo" 
              width={180} 
              height={48}
              className="h-9 md:h-11 lg:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => link.megaMenu && setActiveMegaMenu(link.name)}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <Link 
                  href={link.href}
                  className="flex items-center text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.name}
                  {link.megaMenu && <ChevronDown className="ml-1 w-4 h-4" />}
                </Link>

                {/* Mega Menu Dropdown */}
                {link.megaMenu && (
                  <AnimatePresence>
                    {activeMegaMenu === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[400px] glass-card rounded-2xl p-4 grid grid-cols-2 gap-2"
                      >
                        {link.megaMenu.map((subLink) => (
                          <Link
                            key={subLink.name}
                            href={subLink.href}
                            className="p-3 rounded-lg hover:bg-primary/5 transition-colors text-sm font-medium text-foreground/80 hover:text-primary"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="gradient">Get in Touch</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-foreground/80 hover:text-primary px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t flex flex-col space-y-4">
                <Button variant="gradient" className="w-full">Get in Touch</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
