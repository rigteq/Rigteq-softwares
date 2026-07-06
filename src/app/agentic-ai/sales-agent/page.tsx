"use client"

import React from "react"
import { PageHero } from "@/components/ui/PageHero"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Page() {
  return (
    <>
      <PageHero 
        title="AI Sales Agent"
        description="Automate your sales pipeline, engage prospects naturally, and close deals faster with our advanced AI Sales Agents."
        breadcrumbs={[{"label":"Agentic AI"},{"label":"Sales Agent"}]}
      />
      
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-5xl font-bold font-heading">
                Elevate Your Business with <span className="text-gradient">AI Sales Agent</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Automate your sales pipeline, engage prospects naturally, and close deals faster with our advanced AI Sales Agents. Our solutions are designed to scale with your enterprise, offering robust performance, security, and unparalleled innovation.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Seamless Integration",
                  "Enterprise-grade Security",
                  "Scalable Architecture",
                  "24/7 Dedicated Support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-foreground">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden glass-card relative z-10 p-2">
                <div className="w-full h-full bg-muted rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    <span className="font-heading text-2xl text-muted-foreground z-10 text-center px-4">AI Sales Agent <br/> Visualisation</span>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-20" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let&apos;s discuss how we can implement AI Sales Agent to drive growth for your business.
          </p>
          <Button size="lg" className="h-14 px-10 text-lg rounded-full shadow-lg hover:scale-105 transition-transform group" asChild>
            <Link href="/contact">
              Talk to an Expert
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
