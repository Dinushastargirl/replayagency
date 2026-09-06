"use client";
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const SERVICES_OPTIONS = ["Strategy", "Brand", "Creative", "Digital", "Growth", "Not sure yet"];

export function FinalCTA() {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggle = (s: string) =>
    setSelected((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);

  if (submitted) {
    return (
      <section id="contact" className="relative w-full bg-[#1F2B1E] flex items-center justify-center min-h-[50vh]">
        <div className="text-center py-32 px-6">
          <div className="font-mono text-[11px] text-[#5A7055] tracking-[0.3em] uppercase mb-6">FORM SUCCESS</div>
          <div className="font-display font-bold text-5xl sm:text-7xl text-[#D7D9CE] tracking-[-0.04em] mb-6">MESSAGE RECEIVED.</div>
          <p className="font-mono text-sm text-[#5A7055]">Thanks for reaching out. We'll be in touch soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative w-full bg-[#1F2B1E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">

        {/* Header */}
        <div className="mb-20">
          <div className="font-mono text-[11px] text-[#5A7055] tracking-[0.3em] uppercase mb-6">
            CONTACT — START A CONVERSATION
          </div>
          <h2 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-[#D7D9CE] tracking-[-0.04em] leading-[1.0] max-w-3xl mb-6">
            READY FOR THE NEXT VERSION?
          </h2>
          <p className="text-lg text-[#D7D9CE]/50 max-w-md leading-relaxed">
            Tell us what's working. Tell us what's not.<br />We'll figure out what happens next.
          </p>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Left: Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <div>
              <div className="font-mono text-[11px] text-[#5A7055] tracking-[0.3em] uppercase mb-4">CONTACT</div>
              <a href="mailto:replayagency.info@gmail.com" className="block text-[#D7D9CE]/70 hover:text-white transition-colors font-mono text-sm mb-2">
                replayagency.info@gmail.com
              </a>
              <a href="tel:+94722346167" className="block text-[#D7D9CE]/70 hover:text-white transition-colors font-mono text-sm">
                +94 72 234 6167
              </a>
            </div>
            <div className="pt-8 border-t border-[#D7D9CE]/10">
              <div className="font-mono text-[11px] text-[#5A7055] tracking-[0.3em] uppercase mb-4">SOCIAL</div>
              <div className="flex flex-col gap-2">
                {["LinkedIn", "Instagram"].map((s) => (
                  <a key={s} href="#" className="font-mono text-sm text-[#D7D9CE]/50 hover:text-white transition-colors flex items-center gap-2">
                    {s} <ArrowUpRight className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="space-y-7"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { id: "form-name",    label: "NAME",    placeholder: "Your name",       type: "text"  },
                  { id: "form-email",   label: "EMAIL",   placeholder: "you@company.com", type: "email" },
                  { id: "form-company", label: "COMPANY", placeholder: "Your company",    type: "text"  },
                  { id: "form-website", label: "WEBSITE", placeholder: "yourwebsite.com", type: "text"  },
                ].map(({ id, label, placeholder, type }) => (
                  <div key={id} className="flex flex-col gap-2">
                    <label htmlFor={id} className="font-mono text-[10px] text-[#5A7055] tracking-widest uppercase">{label}</label>
                    <input
                      id={id} type={type} placeholder={placeholder}
                      className="bg-transparent border-b border-[#D7D9CE]/15 focus:border-[#D7D9CE]/50 outline-none text-[#D7D9CE] placeholder-[#5A7055]/60 text-sm py-3 transition-colors duration-200"
                    />
                  </div>
                ))}
              </div>

              <div>
                <div className="font-mono text-[10px] text-[#5A7055] tracking-widest uppercase mb-3">WHAT DO YOU NEED HELP WITH?</div>
                <div className="flex flex-wrap gap-2">
                  {SERVICES_OPTIONS.map((s) => (
                    <button
                      key={s} type="button"
                      id={`service-option-${s.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={() => toggle(s)}
                      className={`px-4 py-2 border rounded-full font-mono text-xs tracking-wide transition-all duration-200 ${
                        selected.includes(s)
                          ? "bg-[#D7D9CE] text-[#1F2B1E] border-[#D7D9CE]"
                          : "bg-transparent text-[#D7D9CE]/50 border-[#D7D9CE]/15 hover:border-[#D7D9CE]/40"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="form-message" className="font-mono text-[10px] text-[#5A7055] tracking-widest uppercase">MESSAGE</label>
                <textarea
                  id="form-message" rows={5}
                  placeholder="Tell us what you're working on, what's not working, or where you want to go."
                  className="bg-[#253D22]/40 border border-[#D7D9CE]/10 focus:border-[#D7D9CE]/30 outline-none text-[#D7D9CE] placeholder-[#5A7055]/60 text-sm p-4 resize-none transition-colors duration-200 rounded-xl"
                />
              </div>

              <button
                id="form-submit" type="submit"
                className="inline-flex items-center gap-3 bg-[#E0533C] hover:bg-[#c94530] text-white px-8 py-4 rounded-full font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:scale-105 shadow-lg"
              >
                START THE CONVERSATION <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
