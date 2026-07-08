"use client"

import React from "react"
import { PageHero } from "@/components/ui/PageHero"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mic, Brain, Zap, Globe, Shield, Link as LinkIcon } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function VoiceAIPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-primary/10 text-sm font-medium text-primary mb-6">
              Voice AI Agent
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
              <span className="text-primary">99% Accurate</span> Voice Intelligence
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Revolutionary voice AI that processes 50+ languages, handles 10,000+ calls daily, and reduces response time by 85% with human-like conversation quality.
            </p>
            <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:scale-105 transition-transform group bg-primary text-primary-foreground" asChild>
              <Link href="/contact">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-foreground mb-12">
            Voice AI Results in <span className="text-primary">24 Hours</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "99%", title: "Voice Accuracy", desc: "Speech recognition rate" },
              { stat: "10K+", title: "Daily Calls", desc: "Concurrent processing" },
              { stat: "85%", title: "Faster Response", desc: "Sub-second processing" },
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Advanced Voice Intelligence</h2>
            <p className="text-xl text-muted-foreground">AI-powered voice technology that understands context, emotion, and intent</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Mic, title: "Natural Speech Recognition", desc: "Advanced ASR technology with 99% accuracy across 50+ languages and dialects.", metric: "99% Accuracy Rate" },
              { icon: Brain, title: "Contextual Understanding", desc: "AI that comprehends context, intent, and emotion with human-level understanding.", metric: "Human-Level Context" },
              { icon: Zap, title: "Real-time Processing", desc: "Lightning-fast response generation with sub-second latency for natural conversations.", metric: "0.5s Response Time" },
              { icon: Globe, title: "Multi-language Support", desc: "Support for 50+ languages with native accent handling and cultural context awareness.", metric: "50+ Languages" },
              { icon: Shield, title: "Enterprise Security", desc: "End-to-end encryption with GDPR, HIPAA compliance and on-premise deployment options.", metric: "Enterprise-Grade Security" },
              { icon: LinkIcon, title: "System Integration", desc: "Seamless integration with CRM, ticketing systems, and third-party APIs.", metric: "100+ Integrations" }
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
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Ready for Voice AI Revolution?</h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Join 1000+ companies using Voice AI to revolutionize their customer communications
          </p>
          <Button size="lg" variant="secondary" className="h-14 px-10 text-lg rounded-full shadow-2xl hover:scale-105 transition-transform" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
