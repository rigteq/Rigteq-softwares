"use client"

import React from "react"
import { PageHero } from "@/components/ui/PageHero"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MessageSquare, Clock, CheckSquare, Bell, CalendarClock } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function BookingAgentPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-primary/10 text-sm font-medium text-primary mb-6">
              AI Booking Agent
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
              Automate <span className="text-primary">85%</span> of Your Bookings
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              AI booking agents that handle scheduling 24/7, reduce no-shows by 60%, and increase booking efficiency by 200% while saving 8 hours per week.
            </p>
            <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:scale-105 transition-transform group bg-primary text-primary-foreground" asChild>
              <Link href="/contact">
                Start Automating Bookings Today
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-foreground mb-12">
            Booking Results in <span className="text-primary">First Week</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "85%", title: "Automated Bookings", desc: "Without human intervention" },
              { stat: "60%", title: "Reduced No-shows", desc: "With smart reminders" },
              { stat: "200%", title: "Efficiency Increase", desc: "In booking processes" },
              { stat: "8h", title: "Time Saved", desc: "Per week per staff" }
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Smart Booking Intelligence</h2>
            <p className="text-xl text-muted-foreground">Advanced AI that understands scheduling complexities and customer preferences</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Calendar, title: "Intelligent Scheduling", desc: "AI optimizes booking slots considering availability, preferences, and resource allocation.", metric: "98% Optimal Scheduling" },
              { icon: MessageSquare, title: "Natural Conversations", desc: "Handles complex booking requests with human-like understanding and responses.", metric: "95% Conversation Success" },
              { icon: Clock, title: "24/7 Availability", desc: "Never miss a booking opportunity with round-the-clock scheduling service.", metric: "100% Available Always" },
              { icon: CheckSquare, title: "Multi-Resource Management", desc: "Manages complex bookings across multiple resources, rooms, and staff members.", metric: "50+ Resource Types" },
              { icon: Bell, title: "Smart Confirmations", desc: "Automated confirmations, reminders, and rescheduling with personalized messaging.", metric: "40% Fewer Cancellations" },
              { icon: CalendarClock, title: "Calendar Integration", desc: "Seamlessly integrates with Google Calendar, Outlook, and 20+ scheduling platforms.", metric: "20+ Integrations" }
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

      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Ready to Never Miss a Booking?</h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Join 200+ businesses automating their booking processes with AI
          </p>
          <Button size="lg" variant="secondary" className="h-14 px-10 text-lg rounded-full shadow-2xl hover:scale-105 transition-transform" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
