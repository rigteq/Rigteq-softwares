"use client"

import React from "react"
import { PageHero } from "@/components/ui/PageHero"
import { Button } from "@/components/ui/button"
import { Settings, ShieldCheck, Building, Link as LinkIcon } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CustomAIPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-primary/10 text-sm font-medium text-primary mb-6">
              Custom AI Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
              <span className="text-primary">100% Tailored</span> AI for Your Business
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Custom AI solutions built specifically for your business needs, delivering 350% better performance than generic solutions and 80% faster implementation times.
            </p>
            <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:scale-105 transition-transform group bg-primary text-primary-foreground" asChild>
              <Link href="/contact">
                Build Your Custom AI
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-foreground mb-12">
            Custom AI Results in <span className="text-primary">30 Days</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "100%", title: "Tailored Solutions", desc: "Built for your business" },
              { stat: "350%", title: "Better Performance", desc: "vs generic solutions" },
              { stat: "80%", title: "Faster Implementation", desc: "Reduced development time" },
              { stat: "99%", title: "Business Fit", desc: "Requirements alignment" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-white rounded-2xl p-8 shadow-sm border border-border"
              >
                <div className="text-4xl font-bold font-heading text-primary mb-2">{item.stat}</div>
                <div className="text-foreground font-semibold mb-2">{item.title}</div>
                <div className="text-sm text-muted-foreground">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Custom AI Use Cases</h2>
            <p className="text-xl text-muted-foreground">AI solutions designed specifically for your industry and business challenges</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Settings, title: "Enterprise Automation", desc: "Custom AI agents that automate complex business processes, workflows, and decision-making systems specific to your enterprise operations.", metric: "70% Process Automation" },
              { icon: ShieldCheck, title: "Quality Assurance AI", desc: "AI-powered quality control systems that detect defects, ensure compliance, and maintain standards with 99.5% accuracy.", metric: "99.5% QA Accuracy" },
              { icon: Building, title: "Industry-Specific AI", desc: "Specialized AI solutions for healthcare, finance, manufacturing, retail, and other industries with domain-specific knowledge.", metric: "15+ Industries Served" },
              { icon: LinkIcon, title: "Integration AI", desc: "Custom AI that seamlessly integrates with your existing systems, databases, and workflows without disruption.", metric: "100+ System Integrations" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-bold font-heading mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{feature.desc}</p>
                <div className="text-sm text-primary font-semibold py-2 px-3 bg-primary/10 rounded-md inline-block">
                  {feature.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Our Custom AI Development Process</h2>
            <p className="text-xl text-muted-foreground">Proven methodology for delivering custom AI solutions in record time</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Discovery & Analysis", desc: "Deep dive into your business requirements, challenges, and existing systems to design the perfect AI solution." },
              { step: "2", title: "Custom Development", desc: "Build and train AI models specifically for your use case using your data and business logic." },
              { step: "3", title: "Deploy & Optimize", desc: "Seamless deployment with continuous monitoring and optimization for maximum performance." }
            ].map((process, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-white rounded-2xl p-8 shadow-sm border border-border"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">{process.title}</h3>
                <p className="text-muted-foreground">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Ready for Your Custom AI Solution?</h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Join 100+ enterprises using custom AI solutions to solve their unique business challenges
          </p>
          <Button size="lg" variant="secondary" className="h-14 px-10 text-lg rounded-full shadow-2xl hover:scale-105 transition-transform" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
