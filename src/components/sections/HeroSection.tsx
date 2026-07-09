"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, ShieldCheck, Sparkles } from "lucide-react"
import Link from "next/link"

const featureCards = [
  {
    title: "3x Faster",
    subtitle: "Development Timeline",
    icon: Rocket,
  },
  {
    title: "Enterprise Grade",
    subtitle: "Security & Scalability",
    icon: ShieldCheck,
  },
  {
    title: "AI-Powered",
    subtitle: "Intelligent Automation",
    icon: Sparkles,
  },
]

const trustedCompanies = [
  "Stripe", "Vercel", "Scale AI", "Hugging Face", "Cohere", "Anthropic", 
  "Notion", "Linear", "Supabase", "OpenAI", "Figma", "Databricks"
]

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-background">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full px-4 py-1.5 glass text-sm font-medium border text-primary"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
            AI-Powered Solutions • Enterprise Ready
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight font-heading leading-tight"
          >
            Transform Ideas Into <br className="hidden md:block" />
            <span className="text-gradient">Digital Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Expert AI development, web applications, and enterprise software solutions that drive business growth and innovation.
          </motion.p>

          {/* Feature Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 max-w-5xl mx-auto"
          >
            {featureCards.map((card) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -5 }}
                className="glass-card rounded-[20px] p-6 relative overflow-hidden group border border-primary/10 hover:border-primary/30 transition-colors shadow-lg shadow-black/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <card.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-foreground">{card.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium mt-1">{card.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10"
          >
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base shadow-lg shadow-primary/25 rounded-full group" asChild>
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform inline-block" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base rounded-full group relative overflow-hidden hover:text-primary-foreground hover:bg-primary transition-colors border-primary/20" asChild>
              <Link href="/solutions">
                <span className="relative z-10 flex items-center">
                  View Solutions
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform inline-block" />
                </span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Trusted By Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-24 w-full border-t border-border/40 pt-10 relative"
      >
        <div className="text-center mb-8">
          <h4 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-2">Trusted by Leading Companies</h4>
          <p className="text-sm text-muted-foreground/80 max-w-md mx-auto">Delivering innovative AI and software solutions for businesses worldwide.</p>
        </div>
        
        {/* Infinite Carousel */}
        <div className="relative w-full overflow-hidden flex">
          {/* Gradient Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div 
            className="flex space-x-16 items-center whitespace-nowrap px-8 hover:[animation-play-state:paused]"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {/* Double the array for seamless looping */}
            {[...trustedCompanies, ...trustedCompanies].map((company, index) => (
              <div 
                key={`${company}-${index}`}
                className="text-2xl md:text-3xl font-bold font-heading text-muted-foreground/30 hover:text-foreground transition-colors duration-300 cursor-default select-none"
              >
                {company}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
