"use client"

import { FileText, Zap, Eye, BarChart3 } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export default function Solution() {
  const features = [
    {
      title: "Clear Case Review",
      description: "Understand what happened with a structured view of the key facts, timeline, and supporting details.",
      icon: Eye,
    },
    {
      title: "Guided Reporting Steps",
      description: "Follow a simpler process for preparing the information commonly needed for reporting and follow-up.",
      icon: Zap,
    },
    {
      title: "Organized Documentation",
      description: "Keep screenshots, payment details, messages, and notes together in one place instead of scattered across devices.",
      icon: FileText,
    },
    {
      title: "Next-Step Visibility",
      description: "See what to prepare next and keep your case information ready for future updates and actions.",
      icon: BarChart3,
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">
              One Place to Document, Organize, and Move Forward
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              RecoveryAssist helps turn scattered scam details into a clearer case with practical reporting guidance.
            </p>
          </ScrollReveal>
        </div>

        {/* Solution Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="bg-primary/10 p-8 rounded-xl glassmorphism border border-primary/20 hover:border-accent transition duration-300 group hover:-translate-y-2">
                  <Icon className="w-10 h-10 text-primary group-hover:text-accent transition mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
