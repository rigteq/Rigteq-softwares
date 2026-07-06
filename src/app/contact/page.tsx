import React from "react"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Rigteq",
  description: "Get in touch with Rigteq to discuss your next software project, request a quote, or learn more about our enterprise solutions.",
}

export default function ContactPage() {
  return (
    <div className="pt-10 pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
            Let&apos;s Start a <span className="text-gradient">Conversation</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Whether you have a specific project in mind or need strategic technology consulting, our experts are here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="lg:col-span-1 space-y-8">
            <div className="glass-card p-6 rounded-2xl flex items-start">
              <Mail className="w-6 h-6 text-primary mt-1 mr-4" />
              <div>
                <h3 className="font-heading font-semibold text-lg">Email Us</h3>
                <p className="text-muted-foreground text-sm mt-1">sales@rigteq.com</p>
                <p className="text-muted-foreground text-sm">support@rigteq.com</p>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-2xl flex items-start">
              <Phone className="w-6 h-6 text-primary mt-1 mr-4" />
              <div>
                <h3 className="font-heading font-semibold text-lg">Call Us</h3>
                <p className="text-muted-foreground text-sm mt-1">+91 87503 99055 (IN)</p>
                <p className="text-muted-foreground text-sm">+1 3502 008-444 (US)</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-start">
              <MapPin className="w-6 h-6 text-primary mt-1 mr-4" />
              <div>
                <h3 className="font-heading font-semibold text-lg">Headquarters</h3>
                <p className="text-muted-foreground text-sm mt-1">Office no-UGF-74, Signature street<br/>Govindpuram, Ghaziabad, UP 201013</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 glass-card p-8 md:p-10 rounded-3xl">
            <h2 className="text-2xl font-bold font-heading mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                  <input id="firstName" className="w-full h-11 px-4 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:outline-none" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                  <input id="lastName" className="w-full h-11 px-4 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                <input id="email" type="email" className="w-full h-11 px-4 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:outline-none" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Project Details</label>
                <textarea id="message" rows={5} className="w-full p-4 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:outline-none resize-none" placeholder="Tell us about your project requirements..." />
              </div>

              <Button size="lg" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
