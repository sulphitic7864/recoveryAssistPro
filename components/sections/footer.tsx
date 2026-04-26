"use client"

import { CircleHelp, FileText, ShieldAlert } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-xs font-semibold text-primary-foreground">RA</span>
            </div>
            <span className="font-semibold text-foreground">RecoveryAssist</span>
          </div>

          <p className="text-sm text-slate-500 text-center max-w-2xl">
            © 2026 RecoveryAssist. We help users organize scam case details and understand reporting next steps.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-400 hover:text-primary transition" aria-label="Documentation">
              <FileText className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition" aria-label="Reporting Guidance">
              <ShieldAlert className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition" aria-label="Help">
              <CircleHelp className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
