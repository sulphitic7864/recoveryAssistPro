"use client"

import { ShieldAlert } from "lucide-react"
import { Button } from "@/components/ui/button"
import DashboardPreview from "@/components/dashboard-preview"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0015] via-[#1a0a2e] to-[#0a0015]"></div>

      {/* Decorative glow orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none animate-hero-orb"></div>
      <div className="absolute bottom-40 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl pointer-events-none animate-hero-orb animation-delay-300"></div>

      <div className="relative z-20 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Decorative sparkle */}
            <div className="inline-flex items-center gap-2 text-accent/80 animate-hero-fade-up">
              <ShieldAlert className="w-5 h-5" />
              <span className="text-sm font-medium">Scam reporting guidance and structured case support</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl lg:text-6xl font-semibold text-balance leading-tight neon-text-glow animate-hero-fade-up animation-delay-150">
                <span className="text-primary">Lost Money to a Scam?</span>
              </h1>
             
              <p className="text-xl text-muted-foreground leading-relaxed animate-hero-fade-up animation-delay-300">
                RecoveryAssist guides you through documenting your case, clarifies what steps to take next, and helps you organize all the necessary information for reporting and follow-ups—so the right authorities can handle your case effectively and efficiently.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-hero-fade-up animation-delay-450">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 font-semibold rounded-full px-8 transition-transform duration-300 hover:-translate-y-1"
              >
                Start Your Case
              </Button>
              <Button
                size="lg"
              
                className="border-2 border-accent bg-transparent rounded-full px-8 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm disabled:pointer-events-none disabled:opacity-50 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-10 has-[>svg]:px-4 bg-gradient-to-r from-primary to-accent text-background font-semibold hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
              >
                How We Help
              </Button>
            </div>

            <div className="text-sm text-muted-foreground animate-hero-fade-up animation-delay-600">
              We do not guarantee recovery of funds. We provide documentation and reporting guidance.
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center gap-8 animate-hero-fade-up animation-delay-300">
            {/* Shield Icon Card */}
          

            {/* Dashboard Preview with enhanced glow */}
            <div className="w-full animate-hero-float animate-hero-glow">
              <DashboardPreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
