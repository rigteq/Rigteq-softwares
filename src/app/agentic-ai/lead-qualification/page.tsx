"use client"

import React from "react"
import { PageHero } from "@/components/ui/PageHero"
import { Button } from "@/components/ui/button"
import { Target, MessageSquare, Brain, Filter, Database, BarChart } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function LeadQualificationPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-primary/10 text-sm font-medium text-primary mb-6">
              AI Lead Qualification Agent
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
              Qualify <span className="text-primary">90%</span> More Quality Leads
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              AI lead qualification that scores prospects with 94% accuracy, reduces qualification time by 80%, and increases conversion rates by 250%.
            </p>
            <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:scale-105 transition-transform group bg-primary text-primary-foreground" asChild>
              <Link href="/contact">
                Start Qualifying Better Leads
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-foreground mb-12">
            Lead Quality Results in <span className="text-primary">14 Days</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "94%", title: "Qualification Accuracy", desc: "vs 65% manual process" },
              { stat: "250%", title: "Conversion Increase", desc: "Quality leads to customers" },
              { stat: "80%", title: "Time Reduction", desc: "In qualification process" },
              { stat: "90%", title: "More Quality Leads", desc: "Higher lead scores" }
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Advanced Lead Intelligence</h2>
            <p className="text-xl text-muted-foreground">AI-powered qualification that understands intent, budget, and buying readiness</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Smart Scoring Algorithm", desc: "AI analyzes 75+ data points to create comprehensive lead scores and priorities.", metric: "75+ Scoring Factors" },
              { icon: MessageSquare, title: "Dynamic Questionnaires", desc: "Adaptive questioning based on responses to gather maximum qualification data.", metric: "98% Completion Rate" },
              { icon: Brain, title: "Intent Analysis", desc: "Predicts buying intent and timeline with advanced behavioral analysis.", metric: "91% Intent Accuracy" },
              { icon: Filter, title: "Automated Filtering", desc: "Automatically filters out unqualified leads before they reach your sales team.", metric: "70% Lead Filtering" },
              { icon: Database, title: "CRM Integration", desc: "Seamlessly updates your CRM with qualified lead data and scoring.", metric: "25+ CRM Integrations" },
              { icon: BarChart, title: "Performance Analytics", desc: "Real-time insights on lead quality, conversion rates, and pipeline health.", metric: "12+ Quality Metrics" }
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
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Ready for Higher Quality Leads?</h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Join 150+ sales teams using AI to identify and prioritize their best prospects
          </p>
          <Button size="lg" variant="secondary" className="h-14 px-10 text-lg rounded-full shadow-2xl hover:scale-105 transition-transform" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
