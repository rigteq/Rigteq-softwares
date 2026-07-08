"use client"

import React from "react"
import { PageHero } from "@/components/ui/PageHero"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Users, TrendingUp, Share2, DollarSign, BarChart } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function SalesAgentPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-primary/10 text-sm font-medium text-primary mb-6">
              AI Sales Agent
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
              Increase Sales by <span className="text-primary">300%</span> with AI Agents
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              AI sales agents that qualify leads 24/7, convert 45% more prospects, and close deals 60% faster while reducing sales costs by 50%.
            </p>
            <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:scale-105 transition-transform group bg-primary text-primary-foreground" asChild>
              <Link href="/contact">
                Start Converting More Leads Today
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-foreground mb-12">
            Proven Sales Results in <span className="text-primary">60 Days</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "300%", title: "Sales Increase", desc: "Average client results" },
              { stat: "45%", title: "Higher Conversion", desc: "Lead to customer rate" },
              { stat: "60%", title: "Faster Deal Closure", desc: "Reduced sales cycle" },
              { stat: "50%", title: "Cost Reduction", desc: "In sales operations" }
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">AI-Powered Sales Excellence</h2>
            <p className="text-xl text-muted-foreground">Advanced AI capabilities that outperform human sales teams</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Smart Lead Qualification", desc: "AI analyzes 50+ data points to score and prioritize leads with 92% accuracy.", metric: "92% Lead Scoring Accuracy" },
              { icon: Users, title: "Personalized Conversations", desc: "Dynamic conversations tailored to each prospect's needs and buying stage.", metric: "100% Personalized Outreach" },
              { icon: TrendingUp, title: "Predictive Analytics", desc: "Predicts buying intent and optimal follow-up timing with 88% accuracy.", metric: "88% Intent Prediction" },
              { icon: Share2, title: "Multi-Channel Engagement", desc: "Engages prospects across email, chat, social media, and phone calls.", metric: "6+ Channel Integration" },
              { icon: DollarSign, title: "Revenue Optimization", desc: "AI identifies upsell opportunities and optimizes pricing strategies.", metric: "25% Revenue Uplift" },
              { icon: BarChart, title: "Real-time Insights", desc: "Live dashboards track performance and provide actionable insights.", metric: "20+ Sales Metrics" }
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
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Ready to 3x Your Sales?</h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Join 300+ sales teams using AI Sales Agents to crush their revenue targets
          </p>
          <Button size="lg" variant="secondary" className="h-14 px-10 text-lg rounded-full shadow-2xl hover:scale-105 transition-transform" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
