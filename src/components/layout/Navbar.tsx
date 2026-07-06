"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const navData = [
  { name: "Home", href: "/", type: "link" },
  { 
    name: "Agentic AI", 
    type: "mega-menu",
    cols: 4,
    items: [
      { name: "AI Support Agent", href: "/agentic-ai/support-agent", desc: "Intelligent customer support automation with 24/7 availability and contextual responses." },
      { name: "AI Sales Agent", href: "/agentic-ai/sales-agent", desc: "Automated sales conversations that qualify leads and drive conversions." },
      { name: "AI Booking Agent", href: "/agentic-ai/booking-agent", desc: "Smart scheduling and appointment management with calendar integration." },
      { name: "AI Lead Qualification Agent", href: "/agentic-ai/lead-qualification", desc: "Automated lead scoring and qualification for enhanced sales efficiency." },
      { name: "Smart Agent Chat", href: "/agentic-ai/smart-chat", desc: "Advanced conversational AI with natural language understanding and multi-turn dialogs." },
      { name: "Conversational AI", href: "/agentic-ai/conversational-ai", desc: "Human-like conversation interfaces for enhanced user engagement and support." },
      { name: "Multi-modal Understanding", href: "/agentic-ai/multi-model", desc: "Supports document, audio, and photo analysis, with video integration." },
      { name: "Custom AI", href: "/agentic-ai/custom-ai", desc: "Tailored solutions for your specific business needs, from enterprise automation to quality assurance." },
    ]
  },
  { name: "Voice AI Agent", href: "/voice-ai", type: "link" },
  { 
    name: "What we do", 
    type: "mega-menu",
    cols: 4,
    items: [
      { name: "Generative AI", href: "/services/generative-ai", desc: "Advanced AI content creation and generation solutions." },
      { name: "Agentic AI", href: "/services/agentic-ai", desc: "Autonomous AI agents for business process automation." },
      { name: "Application Modernisation", href: "/services/app-modernisation", desc: "Legacy system transformation and cloud migration." },
      { name: "Predictive Analytics", href: "/services/predictive-analytics", desc: "Data-driven insights and forecasting solutions." },
      { name: "Product Development", href: "/services/product-development", desc: "Full-stack development and product engineering." },
      { name: "Quality Assurance", href: "/services/quality-assurance", desc: "Comprehensive testing and quality management." },
      { name: "Cloud Transformation", href: "/services/cloud-transformation", desc: "Scalable cloud infrastructure and migration services." },
    ]
  },
  { name: "Why Rigteq", href: "/why-rigteq", type: "link" }, // Using "Why Wizzgeeks" as seen in image, linking to rigteq
  { 
    name: "Resources", 
    type: "mega-menu",
    cols: 2,
    items: [
      { name: "Case studies", href: "/resources/case-studies", desc: "Success stories and client testimonials." },
      { name: "Blogs", href: "/resources/blogs", desc: "Latest insights and industry trends." },
    ]
  },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMobileMenuToggle = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(name)
    }
  }

  // Active mega menu data
  const activeMenuData = navData.find(item => item.name === activeDropdown && item.type === 'mega-menu')

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        isScrolled || activeDropdown ? "bg-white border-b border-gray-200 shadow-sm" : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center shrink-0">
            {/* Kept original logo but added text for reference if needed. Assuming logo image handles this */}
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={160} 
              height={40}
              className="h-8 lg:h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-4">
            {navData.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => (item.type === 'mega-menu') && setActiveDropdown(item.name)}
              >
                {item.type === 'link' ? (
                  <Link 
                    href={item.href || '#'}
                    className="flex items-center text-[15px] font-medium text-gray-700 hover:text-primary transition-colors px-3 py-2 rounded-md"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button 
                    className={`flex items-center text-[15px] font-medium transition-colors px-3 py-2 rounded-md ${
                      activeDropdown === item.name 
                        ? 'bg-primary/10 text-primary'
                        : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    {item.name}
                    {activeDropdown === item.name ? (
                      <ChevronUp className="ml-1.5 w-4 h-4" />
                    ) : (
                      <ChevronDown className="ml-1.5 w-4 h-4 text-gray-500" />
                    )}
                  </button>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-6 font-medium h-10">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-gray-700 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mega Menu Dropdown Container - Desktop */}
      <AnimatePresence>
        {activeMenuData && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            onMouseLeave={() => setActiveDropdown(null)}
            className="hidden lg:block absolute top-full left-0 w-full bg-transparent pt-4 pb-8"
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div className="bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 p-8 w-full">
                
                {/* Mega Menu Header */}
                <div className="border-b border-gray-100 pb-4 mb-6">
                  <h2 className="text-lg font-bold text-gray-900">{activeMenuData.name}</h2>
                </div>

                {/* Mega Menu Grid */}
                <div className={`grid gap-x-8 gap-y-10 ${activeMenuData.cols === 4 ? 'grid-cols-4' : 'grid-cols-2 max-w-4xl'}`}>
                  {activeMenuData.items?.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="flex flex-col group/link"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <h3 className="text-[15px] font-semibold text-primary group-hover/link:text-primary/80 transition-colors mb-2">
                        {subItem.name}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {subItem.desc}
                      </p>
                    </Link>
                  ))}
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 max-h-[80vh] overflow-y-auto space-y-1">
              {navData.map((item) => (
                <div key={item.name} className="flex flex-col">
                  {item.type === 'link' ? (
                    <Link
                      href={item.href || '#'}
                      className="text-[15px] font-medium text-gray-700 py-3 border-b border-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <>
                      <button 
                        className={`flex items-center justify-between text-[15px] font-medium py-3 border-b border-gray-50 ${
                          activeDropdown === item.name ? 'text-primary' : 'text-gray-700'
                        }`}
                        onClick={() => handleMobileMenuToggle(item.name)}
                      >
                        {item.name}
                        {activeDropdown === item.name ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col space-y-4 py-4 pl-4 bg-gray-50/50 rounded-b-lg mb-2">
                              {item.items?.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="flex flex-col"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  <span className="text-sm font-semibold text-primary mb-1">
                                    {subItem.name}
                                  </span>
                                  <span className="text-xs text-gray-500 pr-4">
                                    {subItem.desc}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}
              <div className="pt-6 pb-4">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-md h-12 text-[15px] font-medium">
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
