"use client";

import React from "react";

export default function MobileAppShowcase() {
  return (
    <section id="mobile-app" className="py-16 md:py-24 bg-base-100 border-b border-base-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="md:col-span-6">
            <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
              Mobile Companion
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-base-content mb-4">
              Attendance & Leave Management on Android & iOS
            </h2>
            <p className="text-sm text-base-content/70 leading-relaxed mb-6">
              Employees can check in and out securely from their smartphones within designated branch boundaries. No external biometric machine required.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-base-content/80 mb-8">
              <li className="flex items-center gap-2.5">
                <i className="fa-solid fa-check text-primary"></i>
                <span><strong>GPS Geofencing:</strong> Clock-in only allowed inside allowed branch radius</span>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fa-solid fa-check text-primary"></i>
                <span><strong>Selfie Verification:</strong> Live camera capture prevents buddy punching</span>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fa-solid fa-check text-primary"></i>
                <span><strong>Live Leave Balances:</strong> Check entitlement and apply for leave on the go</span>
              </li>
            </ul>

            <div className="flex items-center gap-3">
              <div className="px-3.5 py-2 rounded-lg border border-base-300 bg-base-100 flex items-center gap-2 text-xs font-semibold">
                <i className="fa-brands fa-apple text-base"></i>
                <span>iOS App</span>
              </div>
              <div className="px-3.5 py-2 rounded-lg border border-base-300 bg-base-100 flex items-center gap-2 text-xs font-semibold">
                <i className="fa-brands fa-android text-base text-success"></i>
                <span>Android APK</span>
              </div>
            </div>
          </div>

          {/* Right Mobile Phone View */}
          <div className="md:col-span-6 flex justify-center">
            <div className="w-full max-w-[300px] rounded-3xl border-2 border-base-300 bg-base-100 p-4 shadow-sm">
              {/* Phone Status bar */}
              <div className="flex items-center justify-between text-[11px] text-base-content/50 mb-3 px-1">
                <span>08:02</span>
                <div className="flex items-center gap-1.5">
                  <i className="fa-solid fa-signal text-[10px]"></i>
                  <i className="fa-solid fa-wifi text-[10px]"></i>
                  <i className="fa-solid fa-battery-full text-[10px]"></i>
                </div>
              </div>

              {/* App User Info */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-base-200">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-content font-bold text-xs flex items-center justify-center">
                    SK
                  </div>
                  <div>
                    <div className="text-xs font-bold text-base-content">Sokha Kim</div>
                    <div className="text-[10px] text-base-content/60">Sales Consultant</div>
                  </div>
                </div>
                <span className="badge badge-success badge-xs font-medium">In Range</span>
              </div>

              {/* Time display */}
              <div className="bg-base-200/60 p-4 rounded-xl text-center mb-3">
                <div className="text-[10px] text-base-content/60 font-medium uppercase tracking-wider mb-1">Current Time</div>
                <div className="text-2xl font-bold font-mono text-base-content">08:02:15 AM</div>
                <div className="text-[11px] text-primary mt-1 flex items-center justify-center gap-1">
                  <i className="fa-solid fa-location-dot"></i> Phnom Penh HQ (35m)
                </div>
              </div>

              {/* Button */}
              <button className="btn btn-primary btn-sm w-full rounded-lg font-semibold text-white mb-4">
                <i className="fa-solid fa-camera mr-1 text-xs"></i>
                Clock In with Selfie
              </button>

              {/* Balances */}
              <div className="text-[11px] font-semibold text-base-content/70 mb-2">Leave Balances</div>
              <div className="grid grid-cols-3 gap-1.5 text-center text-xs">
                <div className="p-2 rounded-lg bg-base-200/50">
                  <div className="font-bold text-primary">12.5</div>
                  <div className="text-[10px] text-base-content/60">Annual</div>
                </div>
                <div className="p-2 rounded-lg bg-base-200/50">
                  <div className="font-bold text-base-content">5.0</div>
                  <div className="text-[10px] text-base-content/60">Sick</div>
                </div>
                <div className="p-2 rounded-lg bg-base-200/50">
                  <div className="font-bold text-base-content">3.0</div>
                  <div className="text-[10px] text-base-content/60">Special</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
