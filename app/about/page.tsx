"use client"

import { FileText, Search, Users, ShieldAlert } from "lucide-react"
import Footer from "@/components/sections/footer"
import ScrollReveal from "@/components/scroll-reveal"

export default function About() {
  const stats = [
    { label: "Case Organization", value: "Clear" },
    { label: "Reporting Guidance", value: "Step-by-Step" },
    { label: "Documentation Support", value: "Structured" },
    { label: "Focus", value: "Scam Cases" },
  ]

  const values = [
    {
      icon: FileText,
      title: "Clarity First",
      description: "We help turn scattered scam details into a case summary that is easier to understand and use.",
    },
    {
      icon: Users,
      title: "User Focused",
      description: "We build for people who need calm, practical guidance after a stressful financial scam.",
    },
    {
      icon: Search,
      title: "Structured Guidance",
      description: "Our goal is to make documentation, timelines, and reporting steps feel more manageable.",
    },
    {
      icon: ShieldAlert,
      title: "Honest Support",
      description: "We do not guarantee recovery of funds. We help users prepare their case and understand next steps.",
    },
  ]

  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h1 className="text-5xl md:text-6xl font-semibold mb-6 neon-text-glow">
                About <span className="text-accent">RecoveryAssist</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                RecoveryAssist helps people organize scam case details, prepare documentation, and better understand reporting-related next steps.
              </p>
            </ScrollReveal>
          </div>

          {/* Mission Statement */}
          <div className="mb-10 ">
            <ScrollReveal>
              <h2 className="text-3xl font-semibold  mb-6">Our Mission</h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="text-lg text-foreground leading-relaxed">
                Our mission is to give scam victims a clearer way to document what happened, organize the evidence they have, and move forward with practical guidance. We believe people facing a stressful loss should not also have to struggle with confusion, scattered information, and unclear reporting steps.
              </p>
            </ScrollReveal>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, idx) => (
              <ScrollReveal key={idx} delay={idx * 120}>
                <div className="bg-card/50 border-2 border-accent/30 rounded-xl p-8 text-center hover:border-accent transition duration-300 hover:-translate-y-2">
                  <div className="text-2xl font-semibold text-accent mb-2">{stat.value}</div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Values Section */}
          <ScrollReveal>
            <h2 className="text-3xl font-semibold mb-8">Our Values</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <ScrollReveal key={idx} delay={idx * 150}>
                  <div className="bg-card/50 border-2 border-primary/30 rounded-xl p-8 hover:border-accent transition duration-300 hover:-translate-y-2">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center  flex-shrink-0">
                        <Icon className="w-6 h-6 text-background" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
