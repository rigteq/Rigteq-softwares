"use client"

import React from "react"
import { PageHero } from "@/components/ui/PageHero"
import { Button } from "@/components/ui/button"
import { Cloud, FileCode2, ShieldAlert, ArrowUpCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CloudTransformationPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-primary/10 text-sm font-medium text-primary mb-6">
              Cloud Transformation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
              Scale <span className="text-primary">10x</span> with Cloud-Native Architecture
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Complete cloud transformation that reduces infrastructure costs by 65%, improves scalability by 1000%, and ensures 99.99% uptime with enterprise-grade security.
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
            Cloud Transformation <span className="text-primary">Impact</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "65%", title: "Cost Reduction", desc: "Infrastructure savings" },
              { stat: "1000%", title: "Scalability Boost", desc: "Performance improvement" },
              { stat: "99.99%", title: "Uptime", desc: "System availability" },
              { stat: "90 Days", title: "Migration Time", desc: "Complete transformation" }
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Complete Cloud Solutions</h2>
            <p className="text-xl text-muted-foreground">End-to-end cloud transformation and management services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Cloud, title: "Cloud Migration", desc: "Seamless migration to AWS, Azure, or GCP with zero downtime and optimized costs.", metric: "Multi-Cloud Strategy" },
              { icon: FileCode2, title: "Infrastructure as Code", desc: "Automated infrastructure deployment with Terraform and CloudFormation.", metric: "100% Automated Deployment" },
              { icon: ShieldAlert, title: "Cloud Security", desc: "Enterprise-grade security with encryption, IAM, and compliance frameworks.", metric: "SOC 2 & ISO 27001" },
              { icon: ArrowUpCircle, title: "Auto-Scaling", desc: "Dynamic resource scaling based on demand with cost optimization algorithms.", metric: "Smart Cost Optimization" }
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Multi-Cloud Expertise</h2>
            <p className="text-xl text-muted-foreground">Certified experts across all major cloud platforms</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "AWS", desc: "Complete AWS solutions with 50+ certified architects and engineers.", metric: "50+ AWS Certifications" },
              { title: "Azure", desc: "Microsoft Azure expertise with enterprise integration and hybrid solutions.", metric: "30+ Azure Experts" },
              { title: "GCP", desc: "Google Cloud Platform solutions with AI/ML integration and BigQuery analytics.", metric: "20+ GCP Specialists" }
            ].map((cloud, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-white rounded-2xl p-8 shadow-sm border border-border"
              >
                <div className="text-3xl font-bold font-heading text-primary mb-4">{cloud.title}</div>
                <p className="text-muted-foreground mb-6">{cloud.desc}</p>
                <div className="text-sm text-primary font-semibold py-2 px-3 bg-primary/10 rounded-md inline-block">
                  {cloud.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Ready for Cloud Transformation?</h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Join 400+ enterprises who scaled their infrastructure with our cloud expertise
          </p>
          <Button size="lg" variant="secondary" className="h-14 px-10 text-lg rounded-full shadow-2xl hover:scale-105 transition-transform" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
