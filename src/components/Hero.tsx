"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="py-16 md:py-24 bg-base-100 border-b border-base-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Simple Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-base-200 text-base-content text-xs font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          Enterprise Resource Planning & Attendance System
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-base-content leading-tight mb-6">
          Simple, reliable operations for your <span className="text-primary">entire business</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-base-content/70 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          Manage attendance, leave balances, car dealership inventory, inspections, and POS in one clean system with seamless mobile clock-ins.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <a
            href="#contact"
            className="btn btn-primary btn-md px-6 rounded-lg font-semibold w-full sm:w-auto"
          >
            Get Started
            <i className="fa-solid fa-arrow-right text-xs ml-2"></i>
          </a>
          <a
            href="#features"
            className="btn btn-outline border-base-300 hover:border-base-400 btn-md px-6 rounded-lg font-medium w-full sm:w-auto"
          >
            View Features
          </a>
        </div>

        {/* Dashboard Preview - Clean Real App Shell */}
        <div className="rounded-xl border border-base-300 bg-base-100 shadow-sm overflow-hidden text-left">
          {/* Topbar bar */}
          <div className="bg-base-200/70 px-4 py-2.5 border-b border-base-200 flex items-center justify-between text-xs text-base-content/60">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-base-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-base-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-base-300"></span>
            </div>
            <div className="font-mono text-[11px] bg-base-100 px-3 py-1 rounded border border-base-200">
              admin.yourapp.com/dashboard
            </div>
            <div>
              <span className="badge badge-primary badge-xs">v3.0</span>
            </div>
          </div>

          {/* Clean Dashboard Stats */}
          <div className="p-6 bg-base-200/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-base-100 p-4 rounded-lg border border-base-200">
                <div className="text-xs font-medium text-base-content/60">Total Sales</div>
                <div className="text-xl font-bold mt-1 text-base-content">$148,290.00</div>
                <div className="text-[11px] text-success mt-1 font-medium">+18% this month</div>
              </div>

              <div className="bg-base-100 p-4 rounded-lg border border-base-200">
                <div className="text-xs font-medium text-base-content/60">Employees On Duty</div>
                <div className="text-xl font-bold mt-1 text-primary">82 / 85</div>
                <div className="text-[11px] text-base-content/50 mt-1">96.8% attendance rate</div>
              </div>

              <div className="bg-base-100 p-4 rounded-lg border border-base-200">
                <div className="text-xs font-medium text-base-content/60">Available Inventory</div>
                <div className="text-xl font-bold mt-1 text-base-content">42 Cars</div>
                <div className="text-[11px] text-base-content/50 mt-1">6 containers in transit</div>
              </div>

              <div className="bg-base-100 p-4 rounded-lg border border-base-200">
                <div className="text-xs font-medium text-base-content/60">Pending Leave</div>
                <div className="text-xl font-bold mt-1 text-warning">3 Requests</div>
                <div className="text-[11px] text-base-content/50 mt-1">Awaiting review</div>
              </div>
            </div>

            {/* Table */}
            <div className="bg-base-100 rounded-lg border border-base-200 overflow-x-auto">
              <table className="table table-sm w-full">
                <thead>
                  <tr className="border-b border-base-200 text-base-content/60 font-medium">
                    <th>Employee / Item</th>
                    <th>Module</th>
                    <th>Location</th>
                    <th>Time</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  <tr className="border-b border-base-200/60">
                    <td className="font-semibold text-base-content">Sokha Kim</td>
                    <td>Attendance</td>
                    <td>Phnom Penh HQ</td>
                    <td>08:02 AM</td>
                    <td><span className="badge badge-success badge-xs font-medium">Clocked In</span></td>
                  </tr>
                  <tr className="border-b border-base-200/60">
                    <td className="font-semibold text-base-content">Lexus RX350 (2024)</td>
                    <td>Sale Letter</td>
                    <td>Sen Sok Showroom</td>
                    <td>Yesterday</td>
                    <td><span className="badge badge-primary badge-xs font-medium">Completed</span></td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-base-content">Dara Vong</td>
                    <td>Leave Request</td>
                    <td>Siem Reap Branch</td>
                    <td>Sep 10 - 11</td>
                    <td><span className="badge badge-warning badge-xs font-medium">Pending</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
