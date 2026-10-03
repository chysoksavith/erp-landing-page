"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ShowcaseTab {
  id: string;
  name: string;
  badge: string;
  icon: string;
  title: string;
  description: string;
  image: string;
  bulletPoints: string[];
}

const tabs: ShowcaseTab[] = [
  {
    id: "cars",
    name: "Car Dealership",
    badge: "Automotive",
    icon: "fa-solid fa-car",
    title: "Complete Dealership Inventory & Stock Control",
    description:
      "Manage available, booked, and sold vehicle inventory with full chassis VIN numbers, engine specs, maker/model cascades, and real-time sales status.",
    image: "/screenshots/admin_cars_inventory.png",
    bulletPoints: [
      "Real-time stock counters (In Stock, On the Way, Booked, Sold)",
      "High-res vehicle photo galleries and specifications tracking",
      "Instant filtering by make, model, year, and condition",
    ],
  },
  {
    id: "profit",
    name: "Profit Estimator",
    badge: "Financials",
    icon: "fa-solid fa-calculator",
    title: "Accurate Cost Breakdown & Profit Margin Estimation",
    description:
      "Calculate true vehicle cost structures—factoring in FOB/CIF purchase price, import taxes, international shipping, local transport, and repair costs before setting your selling price.",
    image: "/screenshots/admin_single_car_view.png",
    bulletPoints: [
      "Automatic net margin & ROI calculation",
      "Cost itemization (Customs, CIF, transport, refurbishing)",
      "Instant sale letter generation and contract locking",
    ],
  },
  {
    id: "pos",
    name: "Smart POS",
    badge: "Retail & Parts",
    icon: "fa-solid fa-cash-register",
    title: "Touchscreen Point of Sale for Auto Spare Parts",
    description:
      "Speed up accessory and spare parts counter sales with touchscreen item catalogs, low-stock warnings, barcode scanning, and multi-payment checkout.",
    image: "/screenshots/admin_pos_checkout.png",
    bulletPoints: [
      "Supports Cash and instant Bakong KHQR dynamic QR codes",
      "Filter products by compatible vehicle model or category",
      "Low stock threshold alerts and automatic inventory deduction",
    ],
  },
  {
    id: "attendance",
    name: "HR & Geofence",
    badge: "Operations",
    icon: "fa-solid fa-user-clock",
    title: "Anti-Cheat Biometric GPS Attendance Monitoring",
    description:
      "View live clock-in and clock-out logs from the mobile companion app with GPS geofence validation and selfie photo verification.",
    image: "/screenshots/admin_attendances.png",
    bulletPoints: [
      "Precise distance-to-branch calculation (Inside Geofence)",
      "Automatic late, early leave, and overtime tagging",
      "One-click sync with payroll runs and leave entitlement",
    ],
  },
  {
    id: "inspections",
    name: "Car Inspections",
    badge: "Quality Control",
    icon: "fa-solid fa-clipboard-check",
    title: "Standardized Multi-Point Vehicle Inspections",
    description:
      "Equip mechanics and appraisers with digital inspection sheets to document vehicle condition, defects, body damage, and roadworthiness grades.",
    image: "/screenshots/admin_car_inspections.png",
    bulletPoints: [
      "Pre-delivery and trade-in inspection workflows",
      "Photo attachments for mechanical and cosmetic defects",
      "Commission logs automatically credited to inspectors",
    ],
  },
  {
    id: "showroom",
    name: "Public Showroom",
    badge: "Customer Storefront",
    icon: "fa-solid fa-store",
    title: "Direct Customer Vehicle Storefront with Telegram Chat",
    description:
      "Turn your inventory into an interactive, public-facing car showroom with filterable listings, detailed spec sheets, and direct one-click Telegram chat integration.",
    image: "/screenshots/public_car_showroom.png",
    bulletPoints: [
      "Responsive customer browsing for desktop and mobile",
      "Instant floating Telegram inquiry button in bottom-left",
      "Direct lead generation without maintaining a third-party website",
    ],
  },
];

export default function SystemShowcase() {
  const [activeTabId, setActiveTabId] = useState<string>("cars");
  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <section id="system-tour" className="py-20 md:py-28 bg-base-100 border-b border-base-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
            <i className="fa-solid fa-desktop text-xs"></i>
            Real System Showcase
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-base-content mb-4">
            See the Platform in Action
          </h2>
          <p className="text-sm sm:text-base text-base-content/70 leading-relaxed">
            Every screen is purpose-built for speed, operational control, and automotive retail workflow.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-content shadow-md shadow-primary/25 scale-105"
                    : "bg-base-200/80 hover:bg-base-200 text-base-content/80 hover:text-base-content border border-base-300/60"
                }`}
              >
                <i className={`${tab.icon} text-xs`}></i>
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Content Card */}
        <div className="bg-base-100 rounded-3xl border border-base-300 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Description Column */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-base-200 text-primary text-xs font-bold w-fit mb-3">
                {activeTab.badge}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-base-content mb-3 leading-snug">
                {activeTab.title}
              </h3>
              <p className="text-xs sm:text-sm text-base-content/70 leading-relaxed mb-6">
                {activeTab.description}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-base-content/80 mb-6">
                {activeTab.bulletPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-success/15 text-success flex items-center justify-center shrink-0 mt-0.5 text-[11px]">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="btn btn-primary btn-sm rounded-lg font-semibold gap-2 shadow-xs"
                >
                  Request a Live Demo
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </a>
              </div>
            </div>

            {/* Right Screenshot View Column */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl border border-base-300 bg-base-200/50 shadow-lg overflow-hidden">
                {/* Browser Topbar Frame */}
                <div className="bg-base-200/90 px-4 py-2.5 border-b border-base-200 flex items-center justify-between text-xs text-base-content/60">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
                  </div>
                  <div className="font-mono text-[11px] bg-base-100 px-3 py-0.5 rounded border border-base-300 text-base-content/70 truncate max-w-[260px] sm:max-w-none">
                    app.domain.com/{activeTab.id}
                  </div>
                  <span className="text-[11px] font-medium text-success flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse"></span>
                    Verified
                  </span>
                </div>

                {/* Screenshot Image */}
                <div className="relative aspect-[16/10] w-full bg-base-100 overflow-hidden">
                  <Image
                    key={activeTab.image}
                    src={activeTab.image}
                    alt={activeTab.title}
                    fill
                    priority
                    className="object-cover object-top transition-opacity duration-300"
                    sizes="(max-width: 1024px) 100vw, 800px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
