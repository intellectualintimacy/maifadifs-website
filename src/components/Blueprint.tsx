"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { PieChart, Landmark, Users2, ShieldCheck, Briefcase, TrendingUp } from "lucide-react";

const modules = [
  { title: "Accounting & Bookkeeping", icon: <PieChart />, color: "#C5A059", pos: "top-0 left-0" },
  { title: "Tax Strategy", icon: <Landmark />, color: "#1E3A8A", pos: "top-0 right-0" },
  { title: "Payroll Function", icon: <Users2 />, color: "#0A192F", pos: "bottom-0 left-0" },
  { title: "Compliance Management", icon: <ShieldCheck />, color: "#334155", pos: "bottom-0 right-0" },
];

export default function Blueprint() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 3D Perspective Animation
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const smoothRotateX = useSpring(rotateX, { stiffness: 50, damping: 20 });
  const smoothScale = useSpring(scale, { stiffness: 50, damping: 20 });

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-mfs-slate flex items-center justify-center overflow-hidden py-20">
      
      {/* BACKGROUND GRAPH GRID */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#0A192F 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <motion.div 
        style={{ 
          perspective: "1200px",
          opacity 
        }}
        className="relative z-10 w-full max-w-5xl px-6"
      >
        {/* THE 3D CANVAS */}
        <motion.div
          style={{ 
            rotateX: smoothRotateX,
            rotateZ,
            scale: smoothScale,
            transformStyle: "preserve-3d"
          }}
          className="relative bg-white/40 backdrop-blur-3xl border border-white p-12 md:p-24 rounded-[40px] shadow-2xl shadow-mfs-navy/10"
        >
          {/* CENTRAL CONTENT */}
          <div className="text-center mb-16">
            <motion.span 
               initial={{ opacity: 0 }} 
               whileInView={{ opacity: 1 }}
               className="text-mfs-gold font-black uppercase tracking-[0.5em] text-[10px]"
            >
              The Architecture of Wealth
            </motion.span>
            <h2 className="text-5xl md:text-8xl font-black text-mfs-navy tracking-tighter mt-4">
              Precision <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mfs-navy to-mfs-blue">Engineering.</span>
            </h2>
          </div>

          {/* FLOATING MODULES (Desktop Only) */}
          <div className="hidden md:block">
            {modules.map((m, i) => (
              <motion.div
                key={i}
                style={{ translateZ: "100px" }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, type: "spring" }}
                className={`absolute ${m.pos} w-64 p-6 bg-white shadow-xl border border-slate-100 rounded-2xl group hover:shadow-mfs-gold/20 transition-all`}
              >
                <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-white" style={{ backgroundColor: m.color }}>
                  {m.icon}
                </div>
                <h4 className="font-bold text-mfs-navy text-lg leading-tight group-hover:text-mfs-gold transition-colors">
                  {m.title}
                </h4>
                <div className="mt-4 w-0 group-hover:w-full h-1 bg-mfs-gold transition-all duration-500" />
              </motion.div>
            ))}
          </div>

          {/* MOBILE VIEW MODULES (Swipe-feel scroll) */}
          <div className="md:hidden flex overflow-x-auto gap-4 snap-x snap-mandatory no-scrollbar pb-10">
            {modules.map((m, i) => (
              <div key={i} className="min-w-[85vw] snap-center bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center text-white" style={{ backgroundColor: m.color }}>
                  {m.icon}
                </div>
                <h4 className="text-2xl font-bold text-mfs-navy mb-2">{m.title}</h4>
                <p className="text-slate-500 text-sm">Modular financial systems built for 16 years of corporate excellence.</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* FLOATING PARTICLES */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 45, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 left-10 w-24 h-24 border border-mfs-gold/20 rounded-full flex items-center justify-center"
      >
        <TrendingUp className="text-mfs-gold/30" />
      </motion.div>
    </section>
  );
}