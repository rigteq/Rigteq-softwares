"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const increment = end / (duration * 60)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          clearInterval(timer)
          setCount(end)
        } else {
          setCount(Math.ceil(start))
        }
      }, 1000 / 60)
      return () => clearInterval(timer)
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref} className="font-heading text-4xl md:text-5xl font-bold text-primary">
      {count}{suffix}
    </span>
  )
}

const stats = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Projects Delivered", value: 200, suffix: "+" },
  { label: "Clients Served", value: 50, suffix: "+" },
  { label: "Countries Served", value: 5, suffix: "+" },
]

export function StatsSection() {
  return (
    <section className="py-16 border-y bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center space-y-2"
            >
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
