"use client"

import React from "react"
import { PageHero } from "@/components/ui/PageHero"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, Brain, Zap, Settings, LayoutGrid, RefreshCw } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function SmartChatPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-primary/10 text-sm font-medium text-primary mb-6">
              Smart Agent Chat
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
              <span className="text-primary">99% Human-like</span> Conversations
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Advanced conversational AI with natural language understanding that handles multi-turn dialogs, resolves 85% of queries, and engages users 300% longer.
            </p>
            <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:scale-105 transition-transform group bg-primary text-primary-foreground" asChild>
              <Link href="/contact">
                Experience Smart Conversations
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-foreground mb-12">
            Conversation Quality in <span className="text-primary">24 Hours</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "99%", title: "Human-like Quality", desc: "User perception rating" },
              { stat: "85%", title: "Query Resolution", desc: "Without human handoff" },
              { stat: "300%", title: "Longer Engagement", desc: "User interaction time" },
              { stat: "40+", title: "Languages", desc: "Multi-language support" }
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Next-Generation Chat Intelligence</h2>
            <p className="text-xl text-muted-foreground">Advanced AI that understands context, emotion, and intent for truly intelligent conversations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: MessageSquare, title: "Contextual Understanding", desc: "Maintains conversation context across multiple turns with 97% accuracy.", metric: "97% Context Retention" },
              { icon: Brain, title: "Sentiment Analysis", desc: "Detects user emotions and adapts responses for optimal engagement.", metric: "93% Emotion Accuracy" },
              { icon: Zap, title: "Instant Responses", desc: "Lightning-fast responses with average 0.3 second response time.", metric: "0.3s Response Time" },
              { icon: Settings, title: "Personalization Engine", desc: "Learns user preferences and adapts conversation style accordingly.", metric: "100% Personalized" },
              { icon: LayoutGrid, title: "Multi-Platform", desc: "Deploy across websites, mobile apps, messaging platforms, and more.", metric: "10+ Platform Support" },
              { icon: RefreshCw, title: "Continuous Learning", desc: "AI improves over time by learning from interactions and feedback.", metric: "Self-Improving AI" }
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
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Ready for Smarter Conversations?</h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Join 400+ companies using Smart Agent Chat to enhance user engagement
          </p>
          <Button size="lg" variant="secondary" className="h-14 px-10 text-lg rounded-full shadow-2xl hover:scale-105 transition-transform" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
