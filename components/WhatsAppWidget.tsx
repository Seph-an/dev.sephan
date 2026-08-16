"use client";

import React from "react";
import Image from "next/image";

export default function WhatsAppWidget() {
  const phoneNumber = "254701053934";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed inset-x-0 bottom-[46px] z-[60] pointer-events-none">
      <div className="mx-auto max-w-7xl px-6 md:px-8 flex justify-end">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          data-ga-event="click_whatsapp"
          data-ga-placement="floating_widget"
          className="pointer-events-auto flex flex-col items-end gap-1.5 group"
          aria-label="Contact on WhatsApp"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-all duration-300 group-hover:scale-110 active:scale-95">
            <Image 
              src="/whatsapp.svg" 
              alt="WhatsApp" 
              width={56} 
              height={56}
              className="h-full w-full object-contain"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
          <span className="text-[11px] font-bold tracking-widest text-white/80 drop-shadow-sm transition-colors group-hover:text-[#25D366]">
            Get in touch
          </span>
        </a>
      </div>
    </div>
  );
}
