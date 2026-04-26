"use client"

import { Star } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export default function Testimonials() {
  const testimonials = [
    {
      quote: "I did not know how to organize everything after the scam. RecoveryAssist helped me put the details into a clear case file.",
      author: "Sarah M.",
      role: "Scam Victim",
      stats: "Clearer case documentation",
    },
    {
      quote: "The reporting guidance made the process feel less overwhelming. I finally understood what information I needed to prepare.",
      author: "James R.",
      role: "Case Submitter",
      stats: "Better reporting preparation",
    },
    {
      quote: "Having the timeline, screenshots, and payment details organized in one place saved me a lot of stress.",
      author: "Nadia T.",
      role: "RecoveryAssist User",
      stats: "More organized evidence",
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">
              Trusted by People Seeking Clarity After a Scam
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              See how RecoveryAssist helps users organize their case and prepare for the next steps
            </p>
          </ScrollReveal>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="p-8 rounded-xl glassmorphism glow-border hover:neon-glow transition duration-300 hover:-translate-y-2">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-slate-300 mb-6 italic">{testimonial.quote}</p>

                <div className="border-t border-slate-700/50 pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-slate-400 mb-2">{testimonial.role}</p>
                  <p className="text-sm text-primary font-semibold">{testimonial.stats}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
