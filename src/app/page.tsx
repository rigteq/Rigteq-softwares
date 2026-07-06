import { HeroSection } from "@/components/sections/HeroSection"
import { StatsSection } from "@/components/sections/StatsSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      
      {/* About Preview Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden glass-card relative z-10 p-2">
                <div className="w-full h-full bg-muted rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    <span className="font-heading text-2xl text-muted-foreground z-10">Premium Workspace</span>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -z-10" />
            </div>
            
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-muted text-sm font-medium text-primary">
                About Rigteq
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading">
                We Build Software That Drives Business <span className="text-gradient">Forward</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Transform your business with Rigteq Softwares. We specialize in expert AI development, Agentic AI solutions, and modern web applications. Trusted by leading companies worldwide, we help you get started in just 60 days.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Award-winning development team",
                  "Agile methodology & transparent process",
                  "Enterprise-grade security standards",
                  "24/7 dedicated support & maintenance"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-foreground">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4">
                <Button variant="outline" size="lg" className="rounded-full h-14 px-8 text-base group" asChild>
                  <Link href="/about">
                    More About Us <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary -z-20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px] -z-10" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Let&apos;s discuss how our custom software solutions can help you achieve your strategic goals.
          </p>
          <Button size="lg" variant="secondary" className="h-14 px-10 text-lg rounded-full shadow-2xl hover:scale-105 transition-transform" asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
