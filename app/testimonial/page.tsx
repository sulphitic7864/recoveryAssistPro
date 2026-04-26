"use client"

import { Button } from "@/components/ui/button"
import Footer from "@/components/sections/footer"
import ScrollReveal from "@/components/scroll-reveal"
import Testimonials from "@/components/sections/testimonials"

export default function Services() {
  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-10 pb-20">
        {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h1 className="text-5xl md:text-6xl font-semibold mb-6">
                Client <span className="text-accent">Testimonials</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Hear from people who used RecoveryAssist to organize scam case details and prepare for the next steps.
              </p>
            </ScrollReveal>
          </div>
        </section> */}

        <Testimonials />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30 rounded-2xl p-12 text-center transition duration-300 hover:-translate-y-1">
              <h2 className="text-3xl font-semibold mb-4">Ready to Start Your Case?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                RecoveryAssist helps you document what happened and prepare your information with more clarity.
              </p>
              <Button className="bg-gradient-to-r from-primary to-accent text-background font-semibold rounded-full px-8">
                Start Your Case
              </Button>
            </div>
          </ScrollReveal>
        </section>
      </div>

      <Footer />
    </main>
  )
}
