"use client"

import React from "react"
import { motion } from "framer-motion"
import { Code2, Bot, Cloud, Cpu, Server, LineChart, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"

const services = [
  {
    title: "Agentic AI Solutions",
    description: "Intelligent support, sales, and booking agents that work autonomously to scale your operations 24/7.",
    icon: Bot,
    href: "/services/agentic-ai",
  },
  {
    title: "Generative AI",
    description: "Custom conversational models and multi-modal AI systems designed for enterprise-grade automation.",
    icon: Cpu,
    href: "/services/generative-ai",
  },
  {
    title: "App Modernisation",
    description: "Upgrade legacy systems to modern, scalable architectures with seamless web and mobile development.",
    icon: Code2,
    href: "/services/app-modernisation",
  },
  {
    title: "Predictive Analytics",
    description: "Data-driven insights and AI models designed to forecast trends and accelerate business growth.",
    icon: LineChart,
    href: "/services/predictive-analytics",
  },
  {
    title: "Product Development",
    description: "End-to-end software engineering from ideation to deployment, tailored to your unique requirements.",
    icon: Server,
    href: "/services/product-development",
  },
  {
    title: "Cloud Transformation",
    description: "Robust cloud architectures focused on zero-downtime deployments, auto-scaling, and top-tier security.",
    icon: Cloud,
    href: "/services/cloud-transformation",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold font-heading mb-6"
          >
            Agentic AI &amp; Web <span className="text-primary">Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            From AI Support Agents to predictive analytics and custom web solutions, Rigteq builds intelligent systems that transform businesses.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.href} className="block group h-full">
                  <Card className="h-full glass-card hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                      <Icon className="w-24 h-24" />
                    </div>
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6 text-primary group-hover:text-white" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-6">{service.description}</CardDescription>
                      <div className="flex items-center text-sm font-medium text-primary group-hover:translate-x-2 transition-transform">
                        Explore Service <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
