"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-base-100 border-t border-base-200 py-10 text-xs text-base-content/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary text-primary-content flex items-center justify-center font-bold text-xs">
              <i className="fa-solid fa-cube text-[10px]"></i>
            </div>
            <span className="font-bold text-sm text-base-content">
              SaaS <span className="text-primary">ERP</span>
            </span>
            <span className="text-base-content/40">•</span>
            <span>Enterprise Resource Planning</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#mobile-app" className="hover:text-primary transition-colors">Mobile App</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-base-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-base-content/50">
          <div>© {new Date().getFullYear()} SaaS ERP. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success"></span>
            <span>Static Deployment Ready for Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
