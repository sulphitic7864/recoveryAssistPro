"use client"

import { Heart, Users, Stethoscope, HandHeart, Building2, Phone } from "lucide-react"

export default function UseCases() {
  const useCases = [
    { icon: Heart, title: "Individuals Seeking Help", description: "Clear support when taking the first step toward recovery" },
    { icon: Users, title: "Families and Loved Ones", description: "Guidance for those supporting someone through treatment and healing" },
    { icon: Stethoscope, title: "Counselors and Providers", description: "A better way to coordinate care and stay connected with clients" },
    { icon: HandHeart, title: "Recovery Coaches", description: "Practical tools for follow-ups, encouragement, and ongoing support" },
    { icon: Building2, title: "Treatment Centers", description: "A smoother experience for managing outreach and recovery pathways" },
    { icon: Phone, title: "Support Teams", description: "Stay responsive with organized communication and next-step visibility" },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">Who RecoveryAssist Supports</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Built for the people, families, and care teams involved in recovery
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-3 gap-0 border border-primary/20 rounded-lg overflow-hidden">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <div
                key={index}
                className="p-8  glassmorphism  transition group text-center border-b  md:border-r last:border-0 border-primary/20 "
              >
                <Icon className="w-12 h-12 text-accent group-hover:text-primary transition mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{useCase.title}</h3>
                <p className="text-slate-400 text-sm">{useCase.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
