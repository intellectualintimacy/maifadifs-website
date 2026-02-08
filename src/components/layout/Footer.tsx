"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-mfs-navy text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* COLUMN 1: BRAND IDENTITY */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image 
                  src="/images/mfsLogo.png" 
                  alt="MFS Logo" 
                  fill 
                  className="object-contain brightness-0 invert" 
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black tracking-tighter text-xl">MAIFADI</span>
                <span className="text-[8px] tracking-[0.3em] font-light text-mfs-gold uppercase">Financial Solutions</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm font-light max-w-xs leading-relaxed">
              Engineering financial success through 16 years of corporate pedigree and modern technical precision.
            </p>
          </div>

          {/* COLUMN 2: QUICK NAVIGATION */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-mfs-gold">Company</h4>
            <nav className="flex flex-col gap-4">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <Link 
                  key={item} 
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-sm text-slate-300 hover:text-white transition-colors w-fit"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* COLUMN 3: CONTACT SUMMARY */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-mfs-gold">Inquiries</h4>
            <div className="space-y-4">
              <a href="mailto:info@maifadifs.co.za" className="group block">
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">info@maifadifs.co.za</span>
                <div className="h-[1px] w-0 group-hover:w-40 bg-mfs-gold transition-all duration-500 mt-1" />
              </a>
              <a href="tel:0817711835" className="group block">
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">+27 81 771 1835</span>
                <div className="h-[1px] w-0 group-hover:w-28 bg-mfs-gold transition-all duration-500 mt-1" />
              </a>
            </div>
            
            {/* SOCIAL MINI-BAR */}
            {/* <div className="flex gap-6 pt-4">
              <Link href="#" className="text-slate-400 hover:text-mfs-gold transition-colors"><Instagram size={18} /></Link>
              <Link href="#" className="text-slate-400 hover:text-mfs-gold transition-colors"><Facebook size={18} /></Link>
              <Link href="#" className="text-slate-400 hover:text-mfs-gold transition-colors"><Linkedin size={18} /></Link>
            </div> */}
          </div>
        </div>

        {/* BOTTOM BAR: LEGAL & LOGISTICS */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
            <span>© {currentYear} Maifadi Financial Solutions</span>
            <span className="hidden md:block w-1 h-1 bg-white/10 rounded-full" />
            <span>Pretoria • Johannesburg</span>
            <span className="hidden md:block w-1 h-1 bg-white/10 rounded-full" />
            {/* <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link> */}
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.3em] text-mfs-gold hover:text-white transition-colors"
          >
            Back to Top 
            <div className="w-8 h-8 rounded-sm border border-white/10 flex items-center justify-center group-hover:border-mfs-gold transition-colors">
              <ArrowUpRight size={14} className="-rotate-45" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}