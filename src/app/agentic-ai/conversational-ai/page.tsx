"use client"

import React from "react"
import { PageHero } from "@/components/ui/PageHero"
import { Button } from "@/components/ui/button"
import { Brain, Mic, Heart, RefreshCw, LayoutGrid, TrendingUp } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ConversationalAIPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-primary/10 text-sm font-medium text-primary mb-6">
              Conversational AI
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
              <span className="text-primary">97% Human-like</span> Conversations
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Advanced conversational AI interfaces that increase user engagement by 400%, reduce support costs by 75%, and deliver seamless customer experiences across all channels.
            </p>
            <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:scale-105 transition-transform group bg-primary text-primary-foreground" asChild>
              <Link href="/contact">
                Deploy Conversational AI
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-foreground mb-12">
            Conversation Results in <span className="text-primary">48 Hours</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "97%", title: "Human-like Quality", desc: "User satisfaction rating" },
              { stat: "400%", title: "Engagement Increase", desc: "User interaction time" },
              { stat: "75%", title: "Cost Reduction", desc: "Support operations" },
              { stat: "50+", title: "Languages", desc: "Multi-language support" }
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Advanced Conversation Intelligence</h2>
            <p className="text-xl text-muted-foreground">AI that understands context, emotion, and intent for truly natural conversations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "Natural Language Processing", desc: "Advanced NLP that understands context, nuance, and intent with 96% accuracy.", metric: "96% Understanding Accuracy" },
              { icon: Mic, title: "Voice Integration", desc: "Seamless voice conversation capabilities with speech-to-text and text-to-speech.", metric: "Voice + Text Channels" },
              { icon: Heart, title: "Emotional Intelligence", desc: "Detects and responds to user emotions for empathetic conversations.", metric: "94% Emotion Detection" },
              { icon: RefreshCw, title: "Multi-Turn Dialogues", desc: "Maintains context across complex, multi-turn conversations seamlessly.", metric: "20+ Turn Conversations" },
              { icon: LayoutGrid, title: "Omnichannel Deployment", desc: "Deploy across web, mobile, social media, and messaging platforms.", metric: "15+ Platform Support" },
              { icon: TrendingUp, title: "Adaptive Learning", desc: "Continuously improves from interactions and user feedback.", metric: "Self-Improving AI" }
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
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Ready for Natural Conversations?</h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Join 800+ companies using Conversational AI to create exceptional user experiences
          </p>
          <Button size="lg" variant="secondary" className="h-14 px-10 text-lg rounded-full shadow-2xl hover:scale-105 transition-transform" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
