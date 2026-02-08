"use client";
import React from "react";
import { motion } from "framer-motion";

const partnerLogos = [
  { name: "NetCash", src: "/images/NetCash Logo.png" },
  { name: "Sage Cloud", src: "/images/Sage-accounting-business-cloud-logo.jpg" },
  { name: "Sage Business", src: "/images/SageBusiness Logo.png" },
  { name: "SAIPA", src: "/images/SAIPA-New Logo.png" },
  { name: "SAIT", src: "/images/sait-membership-logo_s-white (1).png" },
  { name: "SARS", src: "/images/SARS image.png" },
  { name: "Xero", src: "/images/Xero  Accounting Software.jpeg" },
];

// We double the array to ensure the marquee never has a gap
const duplicatedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

export default function Partners() {
  return (
    <section className="py-20 bg-white overflow-hidden border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-mfs-gold font-black uppercase tracking-[0.4em] text-[10px] mb-3 block">
              Professional Network
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-mfs-navy tracking-tighter uppercase">
              Trusted <span className="italic font-light text-mfs-gold">Affiliations.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-xs font-light leading-relaxed">
            Collaborating with leading financial institutions and regulatory bodies in South Africa.
          </p>
        </div>
      </div>

      <div className="relative flex items-center">
        {/* The Infinite Marquee Track */}
        <motion.div
          className="flex whitespace-nowrap gap-12 md:gap-20 items-center"
          animate={{
            x: [0, -1000], 
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25, 
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 group relative"
            >
              {/* Logo Container with subtle glass effect for visibility */}
              <div className="w-82 md:w-44 h-70 px-6 py-4 bg-slate-50/50 rounded-sm flex items-center justify-center grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:bg-white group-hover:shadow-xl transition-all duration-500">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Cinematic Edge Fades */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}