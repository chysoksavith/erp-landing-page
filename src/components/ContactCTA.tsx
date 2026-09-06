"use client";

import React, { useState } from "react";

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    module: "all",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-base-200/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-base-100 border border-base-300 rounded-2xl p-8 sm:p-12 shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-base-content mb-2">
              Request a System Demonstration
            </h2>
            <p className="text-xs sm:text-sm text-base-content/70">
              Leave your contact details and our team will guide you through the admin web panel and mobile app.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-full bg-success/10 text-success flex items-center justify-center text-xl mx-auto mb-3">
                <i className="fa-solid fa-check"></i>
              </div>
              <h3 className="text-lg font-bold text-base-content mb-1">Inquiry Received</h3>
              <p className="text-xs text-base-content/60 max-w-sm mx-auto">
                Thank you. We will contact you via Phone or Telegram shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn btn-outline btn-xs mt-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-base-content/80 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Chan Vandy"
                    className="input input-bordered input-sm w-full rounded-lg text-xs"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-base-content/80 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Auto City Motors"
                    className="input input-bordered input-sm w-full rounded-lg text-xs"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-base-content/80 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="vandy@company.com"
                    className="input input-bordered input-sm w-full rounded-lg text-xs"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-base-content/80 mb-1">
                    Phone / Telegram
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+855 12 345 678"
                    className="input input-bordered input-sm w-full rounded-lg text-xs"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-base-content/80 mb-1">
                  Primary Interest
                </label>
                <select
                  className="select select-bordered select-sm w-full rounded-lg text-xs"
                  value={form.module}
                  onChange={(e) => setForm({ ...form, module: e.target.value })}
                >
                  <option value="all">Complete ERP Suite (All Modules)</option>
                  <option value="attendance">Mobile Attendance & Leave Management</option>
                  <option value="dealership">Car Dealership, Inspections & Inventory</option>
                  <option value="pos">POS & Spare Parts</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-sm w-full rounded-lg font-semibold text-white mt-2"
              >
                Submit Demo Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
