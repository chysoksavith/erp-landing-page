"use client";

import React from "react";
import Image from "next/image";

export default function FloatingTelegram() {
  // Placeholder link as requested: "do not fill any link yet just ui first"
  const telegramUrl = "#";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (telegramUrl === "#" || !telegramUrl) {
      e.preventDefault();
    }
  };

  return (
    <aside
      className="fixed bottom-6 left-6 z-40 flex items-center gap-3 select-none pointer-events-auto"
      aria-label="Telegram Support"
    >
      <a
        href={telegramUrl}
        target={telegramUrl !== "#" ? "_blank" : undefined}
        rel={telegramUrl !== "#" ? "noopener noreferrer" : undefined}
        aria-label="Contact us via Telegram"
        className="group relative flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-[#24A1DE]/40 rounded-full"
        onClick={handleClick}
      >
        {/* Single Clean Telegram Floating Button */}
        <div className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg shadow-[#229ED9]/40 hover:shadow-2xl hover:shadow-[#229ED9]/60 transform transition-all duration-300 group-hover:scale-110 active:scale-95">
          {/* Online Pulse Ring Indicator */}
          <span className="absolute top-0 right-0 z-10 flex h-3.5 w-3.5 pointer-events-none">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white shadow-xs"></span>
          </span>

          {/* Telegram Vector Logo (Crisp, Perfectly Centered) */}
          <Image
            src="/telegram.svg"
            alt="Telegram"
            width={56}
            height={56}
            priority
            className="w-full h-full block rounded-full select-none pointer-events-none"
            draggable={false}
          />
        </div>

        {/* Expanding / Hover Tooltip Badge */}
        <div className="hidden sm:flex items-center px-3.5 py-1.5 rounded-full bg-base-100/95 dark:bg-base-200/95 backdrop-blur-md border border-base-200 shadow-md text-xs font-semibold text-base-content opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>
          Chat on Telegram
        </div>
      </a>
    </aside>
  );
}
