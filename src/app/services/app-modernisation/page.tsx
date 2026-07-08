"use client"

import React from "react"
import { PageHero } from "@/components/ui/PageHero"
import { Button } from "@/components/ui/button"
import { Cloud, LayoutTemplate, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AppModernisationPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-primary/10 text-sm font-medium text-primary mb-6">
              Application Modernisation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
              Transform Legacy Systems for <span className="text-primary">80% Better</span> Performance
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Modernize legacy applications with cloud-native architecture, reducing maintenance costs by 60%, improving performance by 300%, and enabling scalability for future growth.
            </p>
            <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:scale-105 transition-transform group bg-primary text-primary-foreground" asChild>
              <Link href="/contact">
                Start Modernization
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-foreground mb-12">
            Modernization <span className="text-primary">Results</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "300%", title: "Performance Boost", desc: "Application speed improvement" },
              { stat: "60%", title: "Cost Reduction", desc: "Maintenance savings" },
              { stat: "90%", title: "Uptime Improvement", desc: "System reliability" },
              { stat: "6 Months", title: "Migration Timeline", desc: "Complete modernization" }
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Comprehensive Modernization</h2>
            <p className="text-xl text-muted-foreground">End-to-end transformation services for legacy systems</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Cloud, title: "Cloud Migration", desc: "Seamless migration to AWS, Azure, or GCP with zero downtime and improved scalability.", metric: "Zero Downtime Migration" },
              { icon: LayoutTemplate, title: "Architecture Redesign", desc: "Microservices architecture with containerization for better maintainability and scalability.", metric: "Microservices Architecture" },
              { icon: ShieldCheck, title: "Security Enhancement", desc: "Modern security protocols with encryption, authentication, and compliance standards.", metric: "Enterprise Security" }
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

      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Ready to Modernize Your Applications?</h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Join 200+ enterprises who transformed their legacy systems with our expertise
          </p>
          <Button size="lg" variant="secondary" className="h-14 px-10 text-lg rounded-full shadow-2xl hover:scale-105 transition-transform" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
