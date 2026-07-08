"use client"

import React from "react"
import { PageHero } from "@/components/ui/PageHero"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Brain, Bot, Globe, Layout, Smartphone, Cloud, Database } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const solutions = [
  {
    title: "Generative AI",
    description: "Custom AI models and intelligent content generation systems that transform how businesses create and process information.",
    icon: Brain,
    features: ["Custom Large Language Models", "Natural Language Processing", "Computer Vision Solutions", "AI-Powered Content Generation", "Intelligent Document Processing", "Conversational AI Systems"],
    technologies: ["OpenAI", "Anthropic", "Hugging Face", "TensorFlow", "PyTorch"]
  },
  {
    title: "Agentic AI",
    description: "Autonomous AI systems that can make decisions, take actions, and manage complex workflows without human intervention.",
    icon: Bot,
    features: ["Intelligent Automation Workflows", "Decision Making Systems", "Multi-Agent Orchestration", "Autonomous Task Execution", "Smart Process Optimization", "Predictive Analytics"],
    technologies: ["LangChain", "AutoGPT", "CrewAI", "Microsoft Autogen", "Custom Frameworks"]
  },
  {
    title: "Web Development",
    description: "Modern, scalable web applications built with cutting-edge technologies and best practices.",
    icon: Globe,
    features: ["React & Next.js Applications", "Progressive Web Apps (PWA)", "Real-time Applications", "API Development & Integration", "Performance Optimization", "SEO & Analytics Integration"],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "GraphQL"]
  },
  {
    title: "Enterprise CMS",
    description: "Powerful content management solutions that streamline digital content creation, management, and delivery across all channels.",
    icon: Layout,
    features: ["Headless CMS Architecture", "Multi-channel Content Delivery", "Enterprise Security & Compliance", "API-First Content Management", "Scalable Digital Asset Management"],
    technologies: ["Drupal", "Strapi", "Contentful", "Sitecore", "Adobe AEM"]
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile applications that deliver native performance and user experience.",
    icon: Smartphone,
    features: ["Cross-Platform Development", "Native iOS & Android Apps", "React Native Solutions", "Mobile-First Design", "Offline Functionality", "Push Notifications & Analytics"],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"]
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and DevOps solutions for modern application deployment.",
    icon: Cloud,
    features: ["Cloud Architecture Design", "Containerization & Orchestration", "CI/CD Pipeline Setup", "Infrastructure as Code", "Monitoring & Logging", "Security & Compliance"],
    technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform"]
  },
  {
    title: "Data Engineering",
    description: "Robust data pipelines and analytics platforms that turn raw data into actionable insights.",
    icon: Database,
    features: ["Data Pipeline Development", "ETL/ELT Processes", "Data Warehouse Design", "Real-time Analytics", "Business Intelligence", "Data Visualization"],
    technologies: ["Apache Spark", "Airflow", "dbt", "Snowflake", "BigQuery"]
  }
]

export default function SolutionsPage() {
  return (
    <>
      <PageHero 
        title="Our Solutions"
        description="From AI-powered applications to enterprise-grade web solutions, we deliver cutting-edge technology that drives business growth."
        breadcrumbs={[{ label: 'Solutions' }]}
      />
      
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {solutions.map((solution, index) => (
              <motion.div 
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-[20px] p-8 relative overflow-hidden group border border-primary/10 hover:border-primary/30 transition-all hover:-translate-y-1 bg-card"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <solution.icon className="w-32 h-32" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 flex-shrink-0">
                      <solution.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-heading mb-2">{solution.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {solution.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-border/50 pt-4">
                    <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.technologies.map((tech, i) => (
                        <span key={i} className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden border-t border-border/40">
        <div className="absolute inset-0 bg-primary/5 -z-20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how our solutions can accelerate your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:scale-105 transition-transform group" asChild>
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full shadow-lg hover:scale-105 transition-transform" asChild>
              <Link href="/resources/case-studies">
                View Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
