"use client"

import { AlertTriangle, TrendingUp, Zap } from "lucide-react"

export default function Problem() {
  const problems = [
    {
      stat: "Scam victims often do not know what to do first",
      description: "After losing money, it can be hard to figure out what information matters and where to begin.",
      icon: TrendingUp,
    },
    {
      stat: "Important case details are easy to miss or lose",
      description: "Messages, payment records, screenshots, and timelines often stay scattered when they are needed most.",
      icon: AlertTriangle,
    },
    {
      stat: "Reporting feels confusing and overwhelming",
      description: "Without structured guidance, many people struggle to prepare a clear report and understand their next steps.",
      icon: Zap,
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow animate-hero-fade-up">
            Losing Money to a Scam Is Stressful Enough
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto animate-hero-fade-up animation-delay-150">
            You should not have to guess how to organize your case, document the facts, or prepare for reporting.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div
                key={index}
                className={`p-8 rounded-xl glassmorphism glow-border hover:border-accent transition duration-300 group hover:-translate-y-2 animate-hero-fade-up ${
                  index === 0 ? "animation-delay-150" : index === 1 ? "animation-delay-300" : "animation-delay-450"
                }`}
              >
                <Icon className="w-8 h-8 text-primary group-hover:text-accent transition mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-2">{problem.stat}</h3>
                <p className="text-slate-400">{problem.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
