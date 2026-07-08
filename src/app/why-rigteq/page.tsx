"use client"

import React from "react"
import { PageHero } from "@/components/ui/PageHero"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Users, Target, Globe, Zap, ArrowDown } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const reasons = [
  {
    icon: Users,
    title: "Client Centric Approach",
    description: "We prioritize understanding your goals, challenges, and vision. We collaborate closely to deliver solutions that truly fit your needs.",
    benefits: ["Collaborative planning process", "Regular feedback sessions", "Tailored solution design"]
  },
  {
    icon: Target,
    title: "Proven Experience",
    description: "Over 10 years of industry experience building reliable software and AI solutions. Trusted by startups and enterprises across diverse domains.",
    benefits: ["10+ years experience", "Cross-industry expertise", "Trusted by enterprises"]
  },
  {
    icon: Globe,
    title: "Global Trust",
    description: "Clients across 4+ countries rely on us for high-impact digital solutions. We've consistently delivered across time zones, industries, and project sizes.",
    benefits: ["4+ countries served", "Cross-timezone delivery", "Long-term partnerships"]
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    description: "Agile teams and streamlined workflows ensure quick turnaround times. We consistently meet deadlines while maintaining high quality.",
    benefits: ["Quick turnaround times", "Meet all deadlines", "High quality delivery"]
  }
]

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We dive deep into your business requirements and create a comprehensive roadmap.",
    deliverables: ["Requirements analysis", "Technical architecture", "Project timeline"]
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Creating user-centric designs and interactive prototypes for validation.",
    deliverables: ["UI/UX design", "Interactive prototypes", "User journey mapping"]
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Agile development with continuous testing and quality assurance.",
    deliverables: ["Feature development", "Code review", "Quality testing"]
  },
  {
    step: "04",
    title: "Deployment & Support",
    description: "Seamless deployment with ongoing support and maintenance.",
    deliverables: ["Production deployment", "Performance monitoring", "24/7 support"]
  }
]

const techStack = [
  {
    category: "AI & Machine Learning",
    items: ["OpenAI", "TensorFlow", "PyTorch", "Hugging Face", "LangChain", "Gemini", "LLaMA", "LangGraph"]
  },
  {
    category: "Frontend Development",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"]
  },
  {
    category: "Backend Development",
    items: ["Node.js", "Python", "Express", "FastAPI", "Django", "Go"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "BigQuery", "Qdrant", "Pinecone"]
  },
  {
    category: "Mobile Development",
    items: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"]
  }
]

export default function WhyRigteqPage() {
  return (
    <>
      <PageHero 
        title="Why Rigteq?"
        description="We combine technical excellence with business acumen to deliver solutions that drive real results. Here's what sets us apart."
        breadcrumbs={[{ label: 'Why Rigteq' }]}
      />
      
      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <motion.div 
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 card-hover border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-primary bg-primary/10 rounded-xl p-4 w-fit mb-6">
                  <reason.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold font-heading text-foreground mb-4">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{reason.description}</p>
                <ul className="space-y-3">
                  {reason.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-foreground/80">
                      <CheckCircle2 size={16} className="text-primary mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-6">Our Track Record Speaks</h2>
            <p className="text-xl text-muted-foreground">Numbers that demonstrate our commitment to excellence and client success.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "5", suffix: "+", label: "Countries Served" },
              { number: "20", suffix: "+", label: "Happy Clients" },
              { number: "50", suffix: "+", label: "Projects Delivered" },
              { number: "90", suffix: "%", label: "Client Retention" }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-border rounded-2xl p-8 text-center card-hover group shadow-sm"
              >
                <div className="text-4xl md:text-5xl font-bold font-heading text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-6">Our Proven Process</h2>
            <p className="text-xl text-muted-foreground">A structured approach that ensures successful project delivery every time.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div 
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold z-10 relative">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-12 w-full h-[2px] bg-border/60"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold font-heading text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{step.description}</p>
                <div className="space-y-3">
                  {step.deliverables.map((del, i) => (
                    <div key={i} className="flex items-center text-sm font-medium text-foreground/80">
                      <CheckCircle2 size={14} className="text-primary mr-2 flex-shrink-0" />
                      {del}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-6">Our Technology Stack</h2>
            <p className="text-xl text-muted-foreground">We work with cutting-edge technologies to build robust, scalable solutions.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((stack, index) => (
              <motion.div 
                key={stack.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold font-heading text-foreground mb-6">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item, i) => (
                    <span key={i} className="text-xs font-medium bg-muted text-foreground px-3 py-1.5 rounded-md border">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Ready to Experience the Rigteq Difference?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join our growing list of successful clients and transform your business with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-14 px-10 text-lg rounded-full shadow-lg hover:scale-105 transition-transform group" asChild>
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full shadow-lg hover:scale-105 transition-transform" asChild>
              <Link href="/resources/case-studies">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
