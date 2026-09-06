"use client";

import React, { useState } from "react";

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  const tiers = [
    {
      name: "Starter",
      price: annual ? 49 : 59,
      desc: "For small teams and growing dealerships.",
      features: [
        "Up to 25 Employees",
        "Mobile GPS Attendance & Selfies",
        "Standard Leave Management",
        "Car Inventory up to 50 cars",
        "POS Cash Register",
        "Standard Email Support",
      ],
      highlight: false,
    },
    {
      name: "Professional",
      price: annual ? 119 : 139,
      desc: "For dealerships and multi-department companies.",
      features: [
        "Up to 100 Employees",
        "Unlimited GPS Branch Geofences",
        "Car Inspections & Checklists",
        "Sale Letters & Auto Commissions",
        "Container Shipment Tracking",
        "Parts & Barcode Inventory",
        "Priority Support",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: annual ? 249 : 289,
      desc: "For multi-company groups with custom workflows.",
      features: [
        "Unlimited Employees & Branches",
        "Multi-Company Tenant Isolation",
        "Custom Roles & Audit Logs",
        "Dedicated Account Manager",
        "On-premise or Cloud Deploy",
        "SLA Guarantee",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-base-200/40 border-b border-base-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-base-content mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-sm sm:text-base text-base-content/70 mb-6">
            14-day free trial. No setup fees or hidden surprises.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-2 p-1 rounded-lg bg-base-200 border border-base-300 text-xs font-semibold">
            <button
              onClick={() => setAnnual(false)}
              className={`px-3 py-1.5 rounded-md transition-all ${
                !annual ? "bg-base-100 text-base-content shadow-xs" : "text-base-content/60"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-3 py-1.5 rounded-md transition-all ${
                annual ? "bg-primary text-primary-content shadow-xs" : "text-base-content/60"
              }`}
            >
              Annual (Save 20%)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`bg-base-100 rounded-xl p-6 border flex flex-col justify-between ${
                tier.highlight
                  ? "border-primary ring-1 ring-primary shadow-sm"
                  : "border-base-200"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-base-content">{tier.name}</h3>
                  {tier.highlight && (
                    <span className="badge badge-primary badge-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-xs text-base-content/60 mb-4">{tier.desc}</p>

                <div className="flex items-baseline gap-1 mb-6 pb-4 border-b border-base-200">
                  <span className="text-3xl font-bold text-base-content">${tier.price}</span>
                  <span className="text-xs text-base-content/60">/ month</span>
                </div>

                <div className="space-y-2.5 text-xs text-base-content/80 mb-6">
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-primary text-[10px]"></i>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className={`btn btn-sm w-full rounded-lg font-semibold ${
                  tier.highlight
                    ? "btn-primary text-white"
                    : "btn-outline border-base-300 hover:border-base-400"
                }`}
              >
                Choose {tier.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
