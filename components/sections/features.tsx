"use client"

import { Search, FileText, Clock3, BarChart3, ShieldAlert, MessageCircle } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export default function Features() {
  const features = [
    {
      icon: Search,
      title: "Case Detail Collection",
      description: "Capture the important facts of the scam in a more complete and organized way.",
    },
    {
      icon: FileText,
      title: "Structured Documentation",
      description: "Keep messages, screenshots, payments, and notes together in one case file.",
    },
    {
      icon: Clock3,
      title: "Timeline Organization",
      description: "Lay out what happened and when, so your case is easier to understand and review.",
    },
    {
      icon: BarChart3,
      title: "Next-Step Guidance",
      description: "Get a clearer view of what to prepare and what actions may come next.",
    },
    {
      icon: ShieldAlert,
      title: "Reporting Support",
      description: "Prepare information in a way that makes reporting more straightforward and less stressful.",
    },
    {
      icon: MessageCircle,
      title: "Clear Communication",
      description: "Understand your case better so you can explain it clearly during reporting and follow-up.",
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">Core Features</h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Everything needed to organize your scam case and prepare for the next steps
            </p>
          </ScrollReveal>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <ScrollReveal key={index} delay={index * 120}>
                <div className="p-8 rounded-xl glassmorphism glow-border hover:border-accent transition duration-300 group hover:-translate-y-2">
                  <Icon className="w-10 h-10 text-primary group-hover:text-accent transition mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
