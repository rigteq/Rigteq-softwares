"use client"

import React from "react"
import { PageHero } from "@/components/ui/PageHero"
import { Button } from "@/components/ui/button"
import { FileText, Mic, Image as ImageIcon, Video, BrainCircuit, Building2 } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function MultiModalPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-primary/10 text-sm font-medium text-primary mb-6">
              Multi-modal AI Understanding
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
              <span className="text-primary">Understand Everything</span> - Text, Voice, Images & Video
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Advanced multi-modal AI that processes documents, audio, photos, and video content. Analyze 95% of business content types with 99% accuracy across 50+ languages.
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
            Multi-modal AI <span className="text-primary">Capabilities</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "95%", title: "Content Coverage", desc: "Document types supported" },
              { stat: "99%", title: "Analysis Accuracy", desc: "Cross-modal understanding" },
              { stat: "50+", title: "Languages", desc: "Multi-language support" },
              { stat: "Real-time", title: "Processing", desc: "Instant analysis" }
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Complete Multi-modal Intelligence</h2>
            <p className="text-xl text-muted-foreground">AI that understands and processes every type of content your business uses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: "Document Understanding", desc: "Extract insights from PDFs, reports, contracts, and forms with 99% accuracy.", metric: "PDFs, Word, Excel, PowerPoint" },
              { icon: Mic, title: "Audio Analysis", desc: "Transcribe, analyze sentiment, and extract insights from audio recordings.", metric: "50+ Languages, Sentiment Analysis" },
              { icon: ImageIcon, title: "Image Recognition", desc: "Analyze photos, charts, diagrams, and visual content with AI precision.", metric: "OCR, Object Detection, Scene Analysis" },
              { icon: Video, title: "Video Intelligence", desc: "Process video content, extract key moments, and generate summaries automatically.", metric: "Auto-transcription, Key Moments" },
              { icon: BrainCircuit, title: "Cross-modal Reasoning", desc: "Connect insights across text, audio, and visual content for comprehensive understanding.", metric: "Contextual Intelligence" },
              { icon: Building2, title: "Enterprise Integration", desc: "Seamlessly integrate with existing systems and workflows for automated processing.", metric: "API-first, Secure, Scalable" }
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Real-world Applications</h2>
            <p className="text-xl text-muted-foreground">Transform how your business processes and understands content</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Document Processing",
                items: [
                  "Contract analysis and risk assessment",
                  "Invoice processing and data extraction",
                  "Compliance document review",
                  "Research paper summarization"
                ]
              },
              {
                title: "Media Intelligence",
                items: [
                  "Customer call analysis and insights",
                  "Training video content extraction",
                  "Social media monitoring and sentiment",
                  "Product image catalog automation"
                ]
              },
              {
                title: "Quality Assurance",
                items: [
                  "Visual inspection and defect detection",
                  "Process compliance monitoring",
                  "Safety protocol verification",
                  "Performance metric extraction"
                ]
              },
              {
                title: "Knowledge Management",
                items: [
                  "Cross-platform content search",
                  "Automated tagging and categorization",
                  "Expert knowledge extraction",
                  "Training material generation"
                ]
              }
            ].map((app, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-border"
              >
                <h3 className="text-xl font-bold font-heading mb-4">{app.title}</h3>
                <ul className="text-muted-foreground space-y-2">
                  {app.items.map((item, j) => (
                    <li key={j}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Ready for Multi-modal AI?</h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Transform how your business understands and processes content across all formats
          </p>
          <Button size="lg" variant="secondary" className="h-14 px-10 text-lg rounded-full shadow-2xl hover:scale-105 transition-transform" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
