"use client"

import React from "react"

import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/sections/footer"
import { useState } from "react"
import ScrollReveal from "@/components/scroll-reveal"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    caseType: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `New contact request:
Name: ${formData.name}
Email: ${formData.email}
Scam Type: ${formData.caseType || "Not provided"}
Message: ${formData.message}`

    const url = `https://wa.me/61485841484?text=${encodeURIComponent(text)}`
    window.open(url, "_blank", "noopener,noreferrer")

    setFormData({ name: "", email: "", caseType: "", message: "" })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "support@recoveryassistpro.com",
      link: "mailto:support@recoveryassistpro.com",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+61 485 841 484",
      link: "https://wa.me/61485841484",
    },
    {
      icon: MapPin,
      label: "Support Hours",
      value: "Monday - Saturday, 9 AM - 6 PM",
      link: "#",
    },
  ]

  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h1 className="text-5xl md:text-6xl font-semibold mb-6 neon-text-glow">
                Get in <span className="text-accent">Touch</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have questions about documenting a scam case or understanding the next steps? Our team is here to help.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon
              return (
                <ScrollReveal key={idx} delay={idx * 120}>
                  <a
                    href={info.link}
                    className="block bg-card/50 border-2 border-primary/30 rounded-xl p-8 text-center hover:border-accent transition duration-300 hover:-translate-y-2 group"
                  >
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-background" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{info.label}</h3>
                    <p className="text-accent hover:text-primary transition-colors">{info.value}</p>
                  </a>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="bg-card/50 border-2 border-primary/30 rounded-2xl p-8 transition duration-300 hover:-translate-y-1">
                <h2 className="text-2xl font-semibold mb-8 text-center">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm  text-foreground mb-2 ">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm  text-foreground mb-2 ">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="caseType" className="block text-sm  text-foreground mb-2 ">
                      Scam Type
                    </label>
                    <input
                      type="text"
                      id="caseType"
                      name="caseType"
                      value={formData.caseType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="Crypto, investment, romance, phishing..."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm  text-foreground mb-2 ">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Tell us what happened and what kind of guidance you need..."
                    ></textarea>
                  </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent text-background font-semibold  rounded-full py-3  hover:shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  Send via WhatsApp
                </Button>
              </form>
            </div>
            </ScrollReveal>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
