const fs = require('fs');
const path = require('path');

const pages = [
  // Agentic AI
  {
    path: 'agentic-ai/support-agent',
    title: 'AI Support Agent',
    description: 'Provide 24/7 intelligent customer support with AI that understands context, resolves issues autonomously, and escalates when necessary.',
    breadcrumbs: [{ label: 'Agentic AI' }, { label: 'Support Agent' }]
  },
  {
    path: 'agentic-ai/sales-agent',
    title: 'AI Sales Agent',
    description: 'Automate your sales pipeline, engage prospects naturally, and close deals faster with our advanced AI Sales Agents.',
    breadcrumbs: [{ label: 'Agentic AI' }, { label: 'Sales Agent' }]
  },
  {
    path: 'agentic-ai/booking-agent',
    title: 'AI Booking Agent',
    description: 'Streamline scheduling and appointments with an AI agent that manages calendars and interacts with clients seamlessly.',
    breadcrumbs: [{ label: 'Agentic AI' }, { label: 'Booking Agent' }]
  },
  {
    path: 'agentic-ai/lead-qualification',
    title: 'AI Lead Qualification Agent',
    description: 'Instantly identify, score, and route high-value leads using intelligent conversational algorithms.',
    breadcrumbs: [{ label: 'Agentic AI' }, { label: 'Lead Qualification' }]
  },
  {
    path: 'agentic-ai/smart-chat',
    title: 'Smart Agent Chat',
    description: 'Deploy context-aware conversational bots that provide accurate, instant answers to your users.',
    breadcrumbs: [{ label: 'Agentic AI' }, { label: 'Smart Chat' }]
  },
  {
    path: 'agentic-ai/conversational-ai',
    title: 'Conversational AI',
    description: 'Enable natural voice and text interactions across all your digital touchpoints.',
    breadcrumbs: [{ label: 'Agentic AI' }, { label: 'Conversational AI' }]
  },
  {
    path: 'agentic-ai/multi-model',
    title: 'Multi-model Understanding',
    description: 'Process and analyze text, image, and audio inputs simultaneously for richer insights.',
    breadcrumbs: [{ label: 'Agentic AI' }, { label: 'Multi-model' }]
  },
  {
    path: 'agentic-ai/custom-ai',
    title: 'Custom AI',
    description: 'Build tailored AI models trained specifically on your proprietary data and business logic.',
    breadcrumbs: [{ label: 'Agentic AI' }, { label: 'Custom AI' }]
  },
  
  // Voice AI
  {
    path: 'voice-ai',
    title: 'Voice AI Agent',
    description: 'Deploy human-like voice agents for customer service, outbound calling, and interactive voice response (IVR) systems.',
    breadcrumbs: [{ label: 'Voice AI Agent' }]
  },

  // What We Do (Services)
  {
    path: 'services/generative-ai',
    title: 'Generative AI',
    description: 'Leverage the power of generative models to create content, write code, and design assets automatically.',
    breadcrumbs: [{ label: 'Services' }, { label: 'Generative AI' }]
  },
  {
    path: 'services/agentic-ai',
    title: 'Agentic AI Solutions',
    description: 'Develop autonomous, goal-driven agents capable of planning and executing complex multi-step tasks.',
    breadcrumbs: [{ label: 'Services' }, { label: 'Agentic AI' }]
  },
  {
    path: 'services/app-modernisation',
    title: 'Application Modernisation',
    description: 'Upgrade your legacy systems to modern cloud-native architectures securely and efficiently.',
    breadcrumbs: [{ label: 'Services' }, { label: 'App Modernisation' }]
  },
  {
    path: 'services/predictive-analytics',
    title: 'Predictive Analytics',
    description: 'Turn your historical data into actionable forecasting models that drive strategic decisions.',
    breadcrumbs: [{ label: 'Services' }, { label: 'Predictive Analytics' }]
  },
  {
    path: 'services/product-development',
    title: 'Product Development',
    description: 'End-to-end software engineering from ideation and prototyping to deployment and scaling.',
    breadcrumbs: [{ label: 'Services' }, { label: 'Product Development' }]
  },
  {
    path: 'services/quality-assurance',
    title: 'Quality Assurance',
    description: 'Comprehensive automated and manual testing to ensure flawless performance and security.',
    breadcrumbs: [{ label: 'Services' }, { label: 'Quality Assurance' }]
  },
  {
    path: 'services/cloud-transformation',
    title: 'Cloud Transformation',
    description: 'Migrate and optimize your infrastructure with scalable, cost-effective cloud solutions.',
    breadcrumbs: [{ label: 'Services' }, { label: 'Cloud Transformation' }]
  },

  // Why Rigteq
  {
    path: 'why-rigteq',
    title: 'Why Rigteq',
    description: 'Discover our approach, core values, and why industry leaders choose Rigteq for digital excellence.',
    breadcrumbs: [{ label: 'Why Rigteq' }]
  },

  // Resources
  {
    path: 'resources/case-studies',
    title: 'Case Studies',
    description: 'Explore how we have transformed businesses across various industries with our cutting-edge solutions.',
    breadcrumbs: [{ label: 'Resources' }, { label: 'Case Studies' }]
  },
  {
    path: 'resources/blogs',
    title: 'Blogs',
    description: 'Stay updated with the latest trends, insights, and news in AI and software development.',
    breadcrumbs: [{ label: 'Resources' }, { label: 'Blogs' }]
  }
];

const generateContent = (page) => {
  return `"use client"

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
        title="${page.title}"
        description="${page.description}"
        breadcrumbs={${JSON.stringify(page.breadcrumbs)}}
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
                Elevate Your Business with <span className="text-gradient">${page.title}</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                ${page.description} Our solutions are designed to scale with your enterprise, offering robust performance, security, and unparalleled innovation.
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
                    <span className="font-heading text-2xl text-muted-foreground z-10 text-center px-4">${page.title} <br/> Visualisation</span>
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
            Let's discuss how we can implement ${page.title} to drive growth for your business.
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
`;
};

const srcDir = path.join(__dirname, 'src', 'app');

pages.forEach(page => {
  const dirPath = path.join(srcDir, page.path);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  const filePath = path.join(dirPath, 'page.tsx');
  fs.writeFileSync(filePath, generateContent(page));
  console.log("Created ", filePath);
});
