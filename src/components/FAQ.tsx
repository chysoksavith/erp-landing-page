"use client";

import React, { useState } from "react";

const faqs = [
  {
    q: "Can this website be hosted for free on Vercel?",
    a: "Yes. This Next.js landing page uses static export (output: 'export'), creating pure HTML/CSS/JS in the out/ folder. Vercel hosts static sites on their free tier with zero ongoing costs.",
  },
  {
    q: "How does the mobile app verify attendance?",
    a: "It uses device GPS location to ensure the user is within the designated branch radius (e.g. 100 meters), plus a real-time camera selfie to confirm identity without needing standalone fingerprint machines.",
  },
  {
    q: "Does the system support Khmer language?",
    a: "Yes. The ERP backend and web panel support complete dual-language translation in Khmer (ភាសាខ្មែរ) and English, including public holiday schedules and currency options (USD and KHR).",
  },
  {
    q: "Can I manage automotive dealership operations?",
    a: "Yes. The platform includes full container shipping tracking, car model/maker catalogs, multi-point vehicle inspection checklists, sale letters, and sales commission calculations.",
  },
  {
    q: "Is multi-branch or multi-company supported?",
    a: "Yes. The backend has built-in multi-tenancy. Multiple branches or companies can operate independently with scoped data, separate employee rosters, and distinct permissions.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-base-100 border-b border-base-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-base-content mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-base-content/70">
            Answers to common questions regarding implementation and features.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-base-200 rounded-lg overflow-hidden bg-base-100"
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full text-left p-4 flex items-center justify-between gap-4 font-semibold text-sm text-base-content hover:text-primary transition-colors"
              >
                <span>{faq.q}</span>
                <i
                  className={`fa-solid fa-chevron-down text-xs transition-transform ${
                    open === idx ? "rotate-180 text-primary" : "text-base-content/40"
                  }`}
                ></i>
              </button>
              {open === idx && (
                <div className="px-4 pb-4 text-xs sm:text-sm text-base-content/70 leading-relaxed border-t border-base-200 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
