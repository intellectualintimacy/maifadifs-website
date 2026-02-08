"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Globe, Zap, Users, ShieldCheck, ArrowRight } from "lucide-react";

const strategies = [
  {
    id: "01",
    title: "Corporate Pedigree",
    desc: "We bring 16 years of elite corporate experience to the SMME landscape. We don't just do accounting; we provide the same high-level precision used by South Africa's biggest firms.",
    icon: <ShieldCheck className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200", // Strategic Image Slot
  },
  {
    id: "02",
    title: "Global Standards",
    desc: "By applying international best practices to local business challenges, we bridge the gap between small business agility and corporate-standard precision.",
    icon: <Globe className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
  },
  {
    id: "03",
    title: "High-Velocity",
    desc: "Our systems are optimized for speed. We provide quick, decisive financial data designed for fast-moving entrepreneurs who need to save time and money.",
    icon: <Zap className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
  },
  {
    id: "04",
    title: "Community Value",
    desc: "Our vision goes beyond the balance sheet. We are dedicated to community impact and becoming a preferred training office for the next generation of finance graduates.",
    icon: <Users className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200",
  }
];

export default function Strategy() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll for the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative bg-mfs-navy">
      
      {/* 🖥️ DESKTOP VERSION (Sticky Cinematic Split) */}
      <div className="hidden md:block">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-2 gap-20">
            
            {/* Left side: Sticky Heading */}
            <div className="py-20 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="max-w-md"
              >
                <span className="text-mfs-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">
                  The MFS Advantage
                </span>
                <h2 className="text-8xl font-black text-white tracking-tighter leading-[0.85] mb-12">
                  Architecting <br />
                  <span className="text-mfs-gold italic">Success.</span>
                </h2>
                
                {/* Visual Progress Line */}
                <div className="w-full h-[1px] bg-white/10 relative">
                  <motion.div 
                    style={{ scaleX: scrollYProgress }}
                    className="absolute top-0 left-0 h-full bg-mfs-gold origin-left w-full"
                  />
                </div>
              </motion.div>
            </div>

            {/* Right side: Fading Content Panels */}
            <div className="relative h-[60vh] flex items-center">
              {strategies.map((item, i) => (
                <DesktopPanel key={i} item={item} index={i} progress={scrollYProgress} />
              ))}
            </div>
          </div>
        </div>
        {/* Adds scroll depth to drive the sticky effect */}
        <div className="h-[300vh]" /> 
      </div>

      {/* 📱 MOBILE VERSION (Vertical Focus Cards) */}
      <div className="md:hidden py-24 px-6 space-y-12">
        <div className="mb-16">
          <span className="text-mfs-gold font-black uppercase tracking-[0.4em] text-[10px] block mb-4">The Strategy</span>
          <h2 className="text-5xl font-black text-white tracking-tighter leading-[1]">Strategic <br />Growth.</h2>
        </div>

        {strategies.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0.4, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ margin: "-25% 0px -25% 0px" }}
            className="bg-white/5 border border-white/10 p-8 rounded-sm relative overflow-hidden"
          >
            <div className="text-mfs-gold mb-6">{item.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-slate-400 font-light text-sm leading-relaxed mb-6">{item.desc}</p>
            <div className="flex items-center gap-2 text-mfs-gold text-[10px] font-black uppercase tracking-widest">
              Insight <ArrowRight size={14} />
            </div>
            {/* Faded ID number in corner */}
            <span className="absolute bottom-4 right-4 text-4xl font-black text-white/5">{item.id}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Sub-component for the Desktop Side
function DesktopPanel({ item, index, progress }: { item: any; index: number; progress: any }) {
  // Logic to show/hide panels based on scroll position
  const start = index * 0.25;
  const end = (index + 1) * 0.25;
  
  const opacity = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
  const y = useTransform(progress, [start, start + 0.05, end - 0.05, end], [20, 0, 0, -20]);

  return (
    <motion.div 
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <div className="aspect-video w-full bg-slate-800 rounded-sm mb-10 overflow-hidden shadow-2xl border border-white/10">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center gap-4 mb-6">
        <div className="text-mfs-gold">{item.icon}</div>
        <span className="text-white/20 font-black text-2xl">{item.id}</span>
      </div>
      <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">{item.title}</h3>
      <p className="text-slate-400 text-xl font-light leading-relaxed max-w-lg">{item.desc}</p>
    </motion.div>
  );
}