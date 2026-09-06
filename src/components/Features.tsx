"use client";

import React from "react";

const features = [
  {
    icon: "fa-solid fa-location-dot",
    title: "HR & Geofence Attendance",
    description:
      "Employees clock in via mobile with GPS verification and live photo selfies. Enforces branch radius, shifts, and holiday policies.",
  },
  {
    icon: "fa-solid fa-car",
    title: "Car Dealership & Containers",
    description:
      "Track container shipments, VIN chassis details, vehicle inspection sheets, sale letters, and sales team commissions.",
  },
  {
    icon: "fa-solid fa-calendar-days",
    title: "Leave Management",
    description:
      "Accrued annual, sick, and special leave balances automatically deduct upon supervisor approval. Fully synced with attendance.",
  },
  {
    icon: "fa-solid fa-cash-register",
    title: "Point of Sale (POS)",
    description:
      "Quick checkout for auto spare parts and accessories. Supports cash, Bakong KHQR, thermal receipt printing, and credit accounts.",
  },
  {
    icon: "fa-solid fa-file-contract",
    title: "Commissions & Contracts",
    description:
      "Transparent commission calculations for sales consultants and vehicle inspectors. Contract expiration alerts and employee files.",
  },
  {
    icon: "fa-solid fa-shield",
    title: "Multi-Tenant Isolation",
    description:
      "Multi-company support with role-based permissions, comprehensive audit logs, and complete data isolation.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-base-200/40 border-b border-base-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-base-content mb-3">
            Core Business Modules
          </h2>
          <p className="text-sm sm:text-base text-base-content/70">
            A cohesive suite designed for operational clarity and speed without unnecessary complexity.
          </p>
        </div>

        {/* Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-base-100 p-6 rounded-xl border border-base-200 shadow-xs hover:border-primary/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-base mb-4 font-bold">
                <i className={item.icon}></i>
              </div>
              <h3 className="text-base font-bold text-base-content mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-base-content/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
