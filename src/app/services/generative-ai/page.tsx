"use client"

import React from "react"
import { PageHero } from "@/components/ui/PageHero"
import { Button } from "@/components/ui/button"
import { Target, Settings, Link as LinkIcon, BarChart, ShieldCheck, Users, HeartPulse, Landmark, ShoppingBag, Factory, GraduationCap, Video } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function GenerativeAIPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-primary/10 text-sm font-medium text-primary mb-6">
              Generative AI Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
              Transform Your Business with <span className="text-primary">Generative AI Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Unlock limitless possibilities with our AI-powered solutions that revolutionize content creation, automate complex workflows, and drive exponential business growth across every industry.
            </p>
            <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:scale-105 transition-transform group bg-primary text-primary-foreground" asChild>
              <Link href="/contact">
                Transform Your Business Today
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-foreground mb-12">
            Why Leading Companies Choose <span className="text-primary">Our Generative AI</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "85%", title: "Cost Reduction", desc: "Operational expenses" },
              { stat: "300%", title: "Revenue Growth", desc: "Business expansion" },
              { stat: "24/7", title: "Automated Operations", desc: "Continuous innovation" },
              { stat: "95%", title: "Client Success Rate", desc: "Transformation results" }
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Comprehensive Generative AI Consulting Services</h2>
            <p className="text-xl text-muted-foreground">End-to-end AI transformation that revolutionizes how your business operates, innovates, and competes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "AI Strategy Development", desc: "Craft comprehensive AI roadmaps that align with your business objectives and drive measurable growth through intelligent automation.", metric: "Custom Business Strategy" },
              { icon: Settings, title: "Custom AI Development", desc: "Build bespoke generative AI solutions tailored to your industry, from content creation to process automation and decision support.", metric: "Industry-Specific Solutions" },
              { icon: LinkIcon, title: "AI Integration Services", desc: "Seamlessly integrate AI capabilities into your existing systems, ensuring smooth operations and maximum business impact.", metric: "Zero Downtime Integration" },
              { icon: BarChart, title: "Performance Optimization", desc: "Fine-tune AI models for peak efficiency, faster processing, and improved accuracy that delivers real business outcomes.", metric: "Continuous Improvement" },
              { icon: ShieldCheck, title: "AI Compliance & Security", desc: "Ensure your AI implementations meet industry standards, regulatory requirements, and ethical AI principles for responsible deployment.", metric: "Enterprise-Grade Security" },
              { icon: Users, title: "Team Training & Support", desc: "Comprehensive training programs and ongoing support to help your team leverage AI technologies for maximum productivity and innovation.", metric: "24/7 Expert Support" }
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Revolutionizing Industries with <span className="text-primary">AI-Powered Innovation</span></h2>
            <p className="text-xl text-muted-foreground">From healthcare to finance, our generative AI solutions are transforming how businesses operate, compete, and thrive in the digital age</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: HeartPulse,
                title: "Healthcare",
                desc: "Revolutionize patient care with AI-powered diagnosis, treatment planning, and personalized medicine that improves outcomes and reduces costs.",
                items: ["Automated medical report generation", "Drug discovery acceleration", "Personalized treatment recommendations"]
              },
              {
                icon: Landmark,
                title: "Financial Services",
                desc: "Transform financial operations with intelligent fraud detection, automated compliance, and personalized investment strategies.",
                items: ["Real-time fraud prevention", "Automated financial reporting", "Risk assessment automation"]
              },
              {
                icon: ShoppingBag,
                title: "eCommerce & Retail",
                desc: "Create hyper-personalized shopping experiences, optimize inventory, and automate customer service for maximum revenue growth.",
                items: ["Dynamic product recommendations", "Automated customer support", "Personalized marketing campaigns"]
              },
              {
                icon: Factory,
                title: "Manufacturing",
                desc: "Optimize production lines, predict maintenance needs, and enhance quality control with intelligent automation systems.",
                items: ["Predictive maintenance alerts", "Quality control automation", "Supply chain optimization"]
              },
              {
                icon: GraduationCap,
                title: "Education",
                desc: "Personalize learning experiences, automate curriculum design, and provide adaptive assessment tools that enhance educational outcomes.",
                items: ["Personalized learning paths", "Automated content generation", "Intelligent tutoring systems"]
              },
              {
                icon: Video,
                title: "Content & Media",
                desc: "Scale content production, automate video editing, and create engaging multimedia experiences that captivate audiences worldwide.",
                items: ["Automated content creation", "Video editing and production", "Multi-language content generation"]
              }
            ].map((industry, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-xl transition-shadow"
              >
                <industry.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-bold font-heading mb-3 text-foreground">{industry.title}</h3>
                <p className="text-muted-foreground mb-4">{industry.desc}</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {industry.items.map((item, j) => (
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
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto">
            Don't let your competitors get ahead. Join industry leaders who are already leveraging generative AI to drive growth, reduce costs, and create unprecedented business value.
          </p>
          <Button size="lg" variant="secondary" className="h-14 px-10 text-lg rounded-full shadow-2xl hover:scale-105 transition-transform" asChild>
            <Link href="/contact">Start Your AI Transformation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
