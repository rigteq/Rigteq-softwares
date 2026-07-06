"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full px-4 py-1.5 glass text-sm font-medium border text-primary"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
            Agentic AI Experts
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight font-heading leading-tight"
          >
            AI &amp; Web Development <br className="hidden md:block" />
            <span className="text-gradient">Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Transform your business with expert AI development, Agentic AI solutions, and modern web applications. Trusted by leading companies worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base shadow-lg shadow-primary/25 rounded-full group" asChild>
              <Link href="/contact">
                Get started in 60 days
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform inline-block" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" className="w-full sm:w-auto h-14 px-8 text-base rounded-full group">
              <Play className="mr-2 w-5 h-5 group-hover:text-primary transition-colors" />
              Watch Video
            </Button>
          </motion.div>
        </div>

        {/* Dashboard Preview / Abstract UI Graphic */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 mx-auto max-w-5xl relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 bottom-0 h-40" />
          <div className="rounded-2xl md:rounded-t-[40px] border border-b-0 glass-card bg-white/40 dark:bg-black/40 overflow-hidden shadow-2xl backdrop-blur-2xl p-2 md:p-4">
            <div className="bg-muted rounded-xl md:rounded-t-3xl h-[300px] md:h-[500px] w-full overflow-hidden border flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </div>
                  <p className="font-heading font-medium text-muted-foreground">Interactive Demo</p>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
