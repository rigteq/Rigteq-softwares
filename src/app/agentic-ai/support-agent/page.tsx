"use client"

import React from "react"
import { PageHero } from "@/components/ui/PageHero"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, MessageSquare, Clock, ArrowUpRight, Share2, Database, BarChart } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function SupportAgentPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-primary/10 text-sm font-medium text-primary mb-6">
              AI Support Agent
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
              Deliver <span className="text-primary">24/7 Support</span> with <span className="text-primary">95% Accuracy</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform customer support with AI agents that resolve 80% of inquiries instantly, reduce response time by 90%, and increase customer satisfaction by 40%.
            </p>
            <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:scale-105 transition-transform group bg-primary text-primary-foreground" asChild>
              <Link href="/contact">
                Get Started - Save 70% on Support Costs
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-foreground mb-12">
            Measurable Results in <span className="text-primary">30 Days</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "95%", title: "Accuracy Rate", desc: "vs 75% human average" },
              { stat: "80%", title: "Issues Resolved", desc: "Without human intervention" },
              { stat: "90%", title: "Faster Response", desc: "From hours to seconds" },
              { stat: "70%", title: "Cost Reduction", desc: "In support operations" }
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Advanced AI Capabilities</h2>
            <p className="text-xl text-muted-foreground">Powered by cutting-edge AI to deliver human-like support experiences</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: MessageSquare, title: "Natural Language Processing", desc: "Understands context, sentiment, and intent with 98% accuracy across 40+ languages.", metric: "98% Language Understanding" },
              { icon: Clock, title: "24/7 Availability", desc: "Never miss a customer inquiry with round-the-clock support coverage.", metric: "100% Uptime Guarantee" },
              { icon: ArrowUpRight, title: "Smart Escalation", desc: "Automatically routes complex issues to human agents with full context.", metric: "85% Proper Routing" },
              { icon: Share2, title: "Multi-Channel Support", desc: "Seamless support across chat, email, social media, and voice channels.", metric: "5+ Channels Integrated" },
              { icon: Database, title: "Knowledge Base Integration", desc: "Instantly accesses your entire knowledge base for accurate responses.", metric: "1000+ Documents Processed" },
              { icon: BarChart, title: "Performance Analytics", desc: "Real-time insights and reporting on support metrics and customer satisfaction.", metric: "15+ KPI Metrics" }
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
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Ready to Transform Your Support?</h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Join 500+ companies already using AI Support Agents to deliver exceptional customer experiences
          </p>
          <Button size="lg" variant="secondary" className="h-14 px-10 text-lg rounded-full shadow-2xl hover:scale-105 transition-transform" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
