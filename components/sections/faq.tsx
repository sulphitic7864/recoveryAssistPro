"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is RecoveryAssist?",
      answer:
        "RecoveryAssist helps people who lost money to a scam organize their case details, prepare documentation, and understand possible reporting next steps.",
    },
    {
      question: "Who is RecoveryAssist for?",
      answer:
        "It is for people who have experienced a scam and need help gathering information, organizing evidence, and preparing a clearer case summary.",
    },
    {
      question: "Can you recover my funds?",
      answer:
        "No. We do not guarantee recovery of funds. Our role is to help you document your case and understand reporting-related next steps.",
    },
    {
      question: "What do you provide?",
      answer:
        "We provide guidance for organizing scam details, creating structured documentation, and preparing information that may help with reporting and follow-up.",
    },
    {
      question: "How does RecoveryAssist help with reporting?",
      answer:
        "RecoveryAssist helps you put your timeline, screenshots, payment details, and notes into a clearer structure so reporting feels less confusing and more manageable.",
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">Common Questions</h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-lg text-slate-400">Quick answers about RecoveryAssist</p>
          </ScrollReveal>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div
                className="rounded-lg glassmorphism glow-border overflow-hidden transition duration-300 hover:-translate-y-1"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/20 transition cursor-pointer">
                  <h3 className="text-lg font-semibold text-foreground text-left">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 border-t border-slate-700/50 text-slate-400 pt-6">{faq.answer}</div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
