"use client"

import React, { useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/sections/footer"
import ScrollReveal from "@/components/scroll-reveal"

export default function JoinNow() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    scamType: "",
    lossAmount: "",
    incidentDate: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    summary: "",
    documentsReady: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Case submitted:", formData)
    setStep(4)
  }

  const benefits = [
    "Organize your case details",
    "Build a clear scam timeline",
    "Prepare documentation in one place",
    "Understand reporting next steps",
    "Keep important details from getting lost",
    "Move forward with more clarity",
  ]

  return (
    <main className="relative bg-background text-foreground overflow-hidden min-h-screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {step !== 4 && (
            <div className="text-center mb-16">
              <ScrollReveal>
                <h1 className="text-5xl md:text-6xl font-semibold mb-6">
                  Start Your <span className="text-accent">Case</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Share the key details of what happened so RecoveryAssist can help you organize your documentation and next steps.
                </p>
              </ScrollReveal>
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <ScrollReveal>
                <div className="bg-card/50 border-2 border-primary/30 rounded-2xl p-8 sticky top-40 transition duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-foreground mb-6">How We Help</h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            <div className="md:col-span-2">
              {step === 4 ? (
                <ScrollReveal>
                  <div className="bg-card/50 border-2 border-accent rounded-2xl p-12 text-center transition duration-300 hover:-translate-y-1">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
                      <Check className="w-10 h-10 text-background" />
                    </div>
                    <h2 className="text-3xl font-semibold text-accent mb-4">Case Started</h2>
                    <p className="text-muted-foreground mb-8 text-lg">
                      Your information has been recorded. You can now move forward with clearer documentation and reporting guidance.
                    </p>
                    <Button className="bg-gradient-to-r from-primary to-accent text-background font-semibold rounded-full">
                      Review Next Steps
                    </Button>
                  </div>
                </ScrollReveal>
              ) : (
                <ScrollReveal>
                  <form onSubmit={handleSubmit} className="bg-card/50 border-2 border-primary/30 rounded-2xl p-8 transition duration-300 hover:-translate-y-1">
                    <div className="flex gap-2 mb-8">
                      {[1, 2, 3].map((s) => (
                        <div
                          key={s}
                          className={`h-2 flex-1 rounded-full transition-colors ${
                            s <= step ? "bg-accent" : "bg-primary/30"
                          }`}
                        ></div>
                      ))}
                    </div>

                    {step === 1 && (
                      <div className="space-y-6">
                        <h2 className="text-2xl font-semibold text-foreground mb-8">Scam Details</h2>

                        <div>
                          <label htmlFor="scamType" className="block text-sm text-foreground mb-2">
                            Scam Type
                          </label>
                          <select
                            id="scamType"
                            name="scamType"
                            value={formData.scamType}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                          >
                            <option value="">Select Scam Type</option>
                            <option value="crypto">Crypto Scam</option>
                            <option value="investment">Investment Scam</option>
                            <option value="romance">Romance Scam</option>
                            <option value="phishing">Phishing Scam</option>
                            <option value="shopping">Online Shopping Scam</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="lossAmount" className="block text-sm text-foreground mb-2">
                            Estimated Loss Amount
                          </label>
                          <input
                            type="text"
                            id="lossAmount"
                            name="lossAmount"
                            value={formData.lossAmount}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                            placeholder="$5,000"
                          />
                        </div>

                        <div>
                          <label htmlFor="incidentDate" className="block text-sm text-foreground mb-2">
                            Date of Incident
                          </label>
                          <input
                            type="text"
                            id="incidentDate"
                            name="incidentDate"
                            value={formData.incidentDate}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                            placeholder="Month / Day / Year"
                          />
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-6">
                        <h2 className="text-2xl font-semibold text-foreground mb-8">Contact Information</h2>

                        <div>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="firstName" className="block text-sm text-foreground mb-2">
                                First Name
                              </label>
                              <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                                placeholder="John"
                              />
                            </div>
                            <div>
                              <label htmlFor="lastName" className="block text-sm text-foreground mb-2">
                                Last Name
                              </label>
                              <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                                placeholder="Doe"
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm text-foreground mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm text-foreground mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-6">
                        <h2 className="text-2xl font-semibold text-foreground mb-8">Case Summary</h2>

                        <div>
                          <label htmlFor="summary" className="block text-sm text-foreground mb-2">
                            What Happened?
                          </label>
                          <textarea
                            id="summary"
                            name="summary"
                            value={formData.summary}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                            placeholder="Briefly describe the scam, what happened, and any important details..."
                          ></textarea>
                        </div>

                        <div>
                          <label htmlFor="documentsReady" className="block text-sm text-foreground mb-2">
                            Do You Have Supporting Documents?
                          </label>
                          <select
                            id="documentsReady"
                            name="documentsReady"
                            value={formData.documentsReady}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                          >
                            <option value="">Select an Option</option>
                            <option value="yes">Yes, I have screenshots or records</option>
                            <option value="some">I have some information ready</option>
                            <option value="no">No, I still need to gather it</option>
                          </select>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg border border-primary/30">
                          <input type="checkbox" id="terms" required className="w-4 h-4 mt-1" />
                          <label htmlFor="terms" className="text-sm text-muted-foreground">
                            I understand RecoveryAssist provides documentation and reporting guidance and does not guarantee recovery of funds.
                          </label>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-4 mt-8">
                      {step > 1 && (
                        <Button type="button" onClick={handleBack} variant="outline" className="flex-1 bg-transparent">
                          Back
                        </Button>
                      )}
                      {step < 3 ? (
                        <Button
                          type="button"
                          onClick={handleNext}
                          className="flex-1 bg-gradient-to-r from-primary to-accent text-background font-semibold rounded-full"
                        >
                          Next <ArrowRight className="w-4 h-4" />
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          className="flex-1 bg-gradient-to-r from-primary to-accent text-background font-semibold rounded-full"
                        >
                          Submit Case
                        </Button>
                      )}
                    </div>

                    <p className="text-center text-sm text-muted-foreground mt-6">
                      Need help first?{" "}
                      <a href="/contact" className="text-accent hover:text-primary transition-colors font-semibold">
                        Contact our team
                      </a>
                    </p>
                  </form>
                </ScrollReveal>
              )}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
