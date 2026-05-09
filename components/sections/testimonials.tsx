"use client"

import { Star } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export default function Testimonials() {
  const testimonials = [
  {
    quote: "After falling victim to a crypto investment scam, I honestly thought my funds were gone forever. The recovery team helped me organize all my transaction records, wallet details, and communication evidence before connecting me with the appropriate authorities. While no guarantees were made, they helped me recover a significant portion of my lost crypto and guided me through every step professionally. They also helped secure my online accounts and showed me how to protect my personal information from future attacks.",
    author: "Michael R. – Sydney, Australia",
    role: "Scam Recovery Success",
    stats: "Recovered funds and organized case file",
  },
  {
    quote: "I was extremely stressed after losing money to an online trading scam, but the customer support team was incredibly patient and understanding throughout the entire process. They answered all my questions clearly, kept me updated regularly, and never made unrealistic promises. What impressed me most was how seriously they treated my case and how much effort they put into helping me secure my email, banking, and crypto exchange accounts to prevent further fraud attempts.",
    author: "Sandra K. – Toronto, Canada",
    role: "Case Filer",
    stats: "Effective case reporting and recovery",
  },
  {
    quote: "I contacted the recovery agency after being targeted by a fraudulent crypto platform that disappeared with my funds. Their team helped me compile strong evidence, file reports with the relevant authorities, and properly document my case. They were professional, responsive, and very knowledgeable about online scams. In addition to helping with the recovery process, they also assisted me in strengthening my online security by securing compromised accounts and teaching me how to avoid future scams.",
    author: "David M. – London, United Kingdom",
    role: "Successful Recovery User",
    stats: "Stress-free, organized evidence for recovery",
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
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="flex flex-col h-full p-8 rounded-xl glassmorphism glow-border hover:neon-glow transition duration-300 hover:-translate-y-2">
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
