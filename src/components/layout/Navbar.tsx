"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image"; // Essential for the PNG logo
import { usePathname } from "next/navigation"; 
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Detect pages that have a white background by default
  const isLightPage = pathname === "/about" || pathname === "/services";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Determine text color based on scroll OR the specific page background
  const textColorClass = (scrolled || isLightPage) ? "text-mfs-navy" : "text-white";

  return (
    <>
      <nav 
        className={`fixed w-full z-[100] transition-all duration-500 ease-in-out ${
          scrolled 
            ? "bg-white/90 backdrop-blur-xl py-3 shadow-2xl border-b border-slate-200" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* BRAND LOGO - IMAGE INTEGRATION */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-500 group-hover:scale-105">
               <Image 
                  src="/images/mfsLogo.png" 
                  alt="Maifadi Financial Solutions"
                  fill
                  className={`object-contain transition-all duration-500 ${
                    (scrolled || isLightPage) ? "" : "brightness-0 invert" 
                    /* The line above makes a dark logo white on dark backgrounds. 
                       Remove "brightness-0 invert" if your logo is already white/gold. */
                  }`}
                  priority
               />
            </div>
            <div className={`flex flex-col leading-none transition-colors duration-500 ${textColorClass}`}>
              <span className="font-black tracking-tighter text-lg md:text-xl">MAIFADI</span>
              <span className="text-[7px] md:text-[9px] tracking-[0.3em] font-light opacity-80 uppercase text-mfs-gold">Financial Solutions</span>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div className={`hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] font-bold transition-colors duration-500 ${textColorClass}`}>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="hover:text-mfs-gold transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-mfs-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <div className="flex items-center gap-6">
            <Link href="/contact" className={`hidden md:block px-7 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-sm shadow-xl ${
              (scrolled || isLightPage) 
              ? "bg-mfs-navy text-white hover:bg-mfs-gold hover:text-mfs-navy" 
              : "bg-mfs-gold text-mfs-navy hover:bg-white"
            }`}>
              Get in Touch
            </Link>
            
            <button 
              onClick={() => setIsMenuOpen(true)}
              className={`md:hidden p-2 transition-colors ${textColorClass}`}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE FULL-SCREEN OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-mfs-navy flex flex-col p-8 md:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="relative w-10 h-10">
                <Image src="/images/mfsLogo.png" alt="MFS" fill className="object-contain brightness-0 invert" />
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-5xl font-bold text-white hover:text-mfs-gold transition-colors flex items-center justify-between group"
                  >
                    {link.name} 
                    <ArrowUpRight className="text-mfs-gold opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" size={32} />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto border-t border-white/10 pt-10">
              <div className="grid grid-cols-2 gap-8 text-white">
                <div>
                  <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-2">Inquiries</p>
                  <a href="mailto:info@maifadifs.co.za" className="text-sm font-light">info@maifadifs.co.za</a>
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-2">Location</p>
                  <p className="text-sm font-light">Pretoria, GP</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}