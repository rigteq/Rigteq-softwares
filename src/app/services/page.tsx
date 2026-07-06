import React from "react"
import { Metadata } from "next"
import { ServicesSection } from "@/components/sections/ServicesSection"

export const metadata: Metadata = {
  title: "Services | Rigteq",
  description: "Explore Rigteq's comprehensive suite of software development, cloud, and AI services tailored for modern enterprises.",
}

export default function ServicesPage() {
  return (
    <div className="pb-24">
      {/* We reuse the ServicesSection from the homepage, but we can wrap it in a page layout */}
      <div className="pt-10 pb-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
            Our <span className="text-gradient">Expertise</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            We offer end-to-end technology solutions to accelerate your digital journey. Discover our core service offerings below.
          </p>
        </div>
      </div>
      
      <ServicesSection />
    </div>
  )
}
