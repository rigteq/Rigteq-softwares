import React from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Rigteq",
  description: "Learn about Rigteq, our mission, values, and the expert team behind our world-class software solutions.",
}

export default function AboutPage() {
  return (
    <div className="pt-10 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
            Agentic AI &amp; Web <span className="text-gradient">Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Transform your business with Rigteq Softwares. We are experts in AI development, Agentic AI solutions, and modern web applications. Trusted by leading companies worldwide, we can help you get started in just 60 days.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-2xl font-bold font-heading mb-4 text-primary">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To empower global businesses by delivering exceptional Agentic AI and tailored digital products that transform operations. We focus on intelligent automation and robust cloud architectures to drive tangible business growth.
            </p>
          </div>
          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-2xl font-bold font-heading mb-4 text-primary">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To be the globally recognized standard for AI and software engineering excellence, driven by an unwavering commitment to quality, innovation, transparency, and long-term client success in both the Indian and US markets.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
