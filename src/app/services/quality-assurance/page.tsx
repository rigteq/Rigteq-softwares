"use client"

import React from "react"
import { PageHero } from "@/components/ui/PageHero"
import { Button } from "@/components/ui/button"
import { Settings, ShieldCheck, Activity, Link as LinkIcon } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function QualityAssurancePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-primary/10 text-sm font-medium text-primary mb-6">
              Quality Assurance
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
              Achieve <span className="text-primary">99.9%</span> Bug-Free Software
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive QA testing that reduces post-launch bugs by 95%, improves user satisfaction by 80%, and ensures enterprise-grade reliability with automated testing suites.
            </p>
            <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:scale-105 transition-transform group bg-primary text-primary-foreground" asChild>
              <Link href="/contact">
                Secure Quality Excellence
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-foreground mb-12">
            QA <span className="text-primary">Performance</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "99.9%", title: "Bug-Free Rate", desc: "Software reliability" },
              { stat: "95%", title: "Bug Reduction", desc: "Post-launch issues" },
              { stat: "80%", title: "User Satisfaction", desc: "Quality improvement" },
              { stat: "90%", title: "Test Automation", desc: "Coverage rate" }
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Comprehensive QA Testing</h2>
            <p className="text-xl text-muted-foreground">Multi-layered testing approach for bulletproof software quality</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Settings, title: "Automated Testing", desc: "Comprehensive test automation with 90% coverage using Selenium, Cypress, and Jest.", metric: "90% Test Coverage" },
              { icon: Activity, title: "Performance Testing", desc: "Load, stress, and scalability testing to ensure optimal performance under pressure.", metric: "10K+ Concurrent Users" },
              { icon: ShieldCheck, title: "Security Testing", desc: "Vulnerability assessment and penetration testing for enterprise-grade security.", metric: "OWASP Compliance" },
              { icon: LinkIcon, title: "API Testing", desc: "Complete API validation including functional, performance, and security testing.", metric: "REST & GraphQL" }
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Proven QA Process</h2>
            <p className="text-xl text-muted-foreground">Systematic approach to delivering flawless software</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Test Planning", desc: "Comprehensive test strategy and documentation" },
              { step: "2", title: "Test Design", desc: "Test case creation and automation script development" },
              { step: "3", title: "Execution", desc: "Automated and manual testing across environments" },
              { step: "4", title: "Reporting", desc: "Detailed defect tracking and quality metrics" }
            ].map((process, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-white rounded-2xl p-6 shadow-sm border border-border"
              >
                <div className="text-4xl font-bold text-primary mb-4">{process.step}</div>
                <h3 className="text-xl font-bold font-heading mb-2">{process.title}</h3>
                <p className="text-muted-foreground">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Ready for Bulletproof Software Quality?</h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Join 250+ companies who trust our QA expertise for mission-critical applications
          </p>
          <Button size="lg" variant="secondary" className="h-14 px-10 text-lg rounded-full shadow-2xl hover:scale-105 transition-transform" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
