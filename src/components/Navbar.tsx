"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <header className="sticky top-0 z-50 bg-base-100 border-b border-base-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-content font-bold text-sm">
              <i className="fa-solid fa-cube"></i>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-bold tracking-tight text-base-content">
                SaaS <span className="text-primary">ERP</span>
              </span>
            </div>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-base-content/70">
            <a href="#features" className="hover:text-primary transition-colors">
              Features
            </a>
            <a href="#mobile-app" className="hover:text-primary transition-colors">
              Mobile App
            </a>
            <a href="#pricing" className="hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-sm btn-square text-base-content/70"
              title="Toggle theme"
            >
              {theme === "light" ? (
                <i className="fa-solid fa-moon text-sm"></i>
              ) : (
                <i className="fa-solid fa-sun text-sm"></i>
              )}
            </button>

            <a
              href="#contact"
              className="btn btn-primary btn-sm px-4 rounded-lg font-semibold"
            >
              Request Demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
