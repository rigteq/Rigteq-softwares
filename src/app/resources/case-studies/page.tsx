"use client"

import React, { useEffect, useState } from "react"
import { PageHero } from "@/components/ui/PageHero"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

// Using exact structure and API from reference as requested
export default function CaseStudiesPage() {
  const [cases, setCases] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const res = await fetch("https://admin.wizzgeeks.com/case-studies")
        if (!res.ok) throw new Error(`Error: ${res.status}`)
        const data = await res.json()
        setCases(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchCases()
  }, [])

  return (
    <>
      <PageHero 
        title="Case Studies"
        description="Real results from real partnerships. Discover how we've transformed businesses across industries with innovative technology solutions."
        breadcrumbs={[{ label: 'Resources' }, { label: 'Case Studies' }]}
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="space-y-20">
              {cases?.map((caseItem, index) => (
                <motion.div 
                  key={caseItem.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gradient-to-r from-primary/5 via-white to-primary/5 rounded-[2rem] p-8 md:p-12 border border-primary/10"
                >
                  <div className="text-center mb-12">
                    <span className="inline-flex items-center rounded-full px-4 py-1.5 bg-muted text-sm font-medium text-primary mb-4">
                      {caseItem.badge}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                      {caseItem.title}
                    </h2>
                    <p className="text-xl text-primary font-medium mb-6">
                      {caseItem.subtitle}
                    </p>
                    <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                      {caseItem.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white rounded-2xl p-6 border border-border/50 shadow-sm">
                      <h3 className="text-lg font-bold font-heading text-foreground mb-3">Challenge</h3>
                      <p className="text-muted-foreground leading-relaxed">{caseItem.challenge}</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-border/50 shadow-sm">
                      <h3 className="text-lg font-bold font-heading text-foreground mb-3">Solution</h3>
                      <p className="text-muted-foreground leading-relaxed">{caseItem.solution}</p>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h3 className="text-xl font-bold font-heading text-foreground text-center mb-8">
                      Impact & Results
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {caseItem.results?.map((res: any, idx: number) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="text-center bg-white rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
                        >
                          <div className="text-4xl font-bold text-primary mb-2">
                            {res.number}{res.denomination}
                          </div>
                          <div className="text-muted-foreground font-medium text-sm">
                            {res.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border/50">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Industry</h4>
                      <p className="text-muted-foreground">{caseItem.industry}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Timeline</h4>
                      <p className="text-muted-foreground">{caseItem.timeline}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {caseItem.technologies && JSON.parse(caseItem.technologies.replace(/'/g, '"')).map((tech: string, i: number) => (
                          <span key={i} className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-md font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden border-t border-border/40 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join our growing list of successful clients. Let's discuss how we can transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-14 px-10 text-lg rounded-full shadow-lg hover:scale-105 transition-transform group" asChild>
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full shadow-lg hover:scale-105 transition-transform" asChild>
              <Link href="/solutions">
                View Our Solutions
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
