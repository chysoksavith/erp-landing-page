"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-16 md:py-24 bg-base-100 border-b border-base-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Simple Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Enterprise Resource Planning & Automotive Management
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-base-content leading-tight mb-6">
          Simple, reliable operations for your <span className="text-primary">entire business</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-base-content/70 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          Manage attendance, leave balances, car dealership inventory, inspections, and POS in one unified system with seamless mobile clock-ins.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <a
            href="#contact"
            className="btn btn-primary btn-md px-6 rounded-lg font-semibold w-full sm:w-auto shadow-sm"
          >
            Get Started
            <i className="fa-solid fa-arrow-right text-xs ml-2"></i>
          </a>
          <a
            href="#system-tour"
            className="btn btn-outline border-base-300 hover:border-base-400 btn-md px-6 rounded-lg font-medium w-full sm:w-auto"
          >
            Explore System Tour
          </a>
        </div>

        {/* Dashboard Preview - Real System Screenshot inside macOS-style browser shell */}
        <div className="rounded-2xl border border-base-300 bg-base-100 shadow-2xl overflow-hidden text-left transition-all hover:shadow-primary/5">
          {/* Topbar bar */}
          <div className="bg-base-200/90 px-4 py-3 border-b border-base-200 flex items-center justify-between text-xs text-base-content/60">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
              <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
            </div>
            <div className="font-mono text-[11px] sm:text-xs bg-base-100 px-4 py-1 rounded-md border border-base-200 text-base-content/70 flex items-center gap-2">
              <i className="fa-solid fa-lock text-[10px] text-success"></i>
              <span>admin.yourapp.com/admin</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="badge badge-primary badge-sm font-semibold">Live System</span>
            </div>
          </div>

          {/* Real System Image */}
          <div className="relative w-full aspect-[16/10] bg-base-200">
            <Image
              src="/screenshots/admin_dashboard.png"
              alt="OmniERP Executive Dashboard"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
