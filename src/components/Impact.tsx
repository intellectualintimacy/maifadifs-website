"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MoveRight, Zap, Target, Heart, TrendingUp } from "lucide-react";

const impactCards = [
  {
    title: "Operational Transformation",
    desc: "We fix your finance operations using the best modern software and systems.",
    stat: "100%",
    label: "Digital Integration",
    icon: <Zap className="text-mfs-gold" />,
    color: "bg-mfs-navy"
  },
  {
    title: "Strategic Alignment",
    desc: "We use 16 years of corporate experience to solve your unique business problems.",
    stat: "16yrs",
    label: "Industry Expertise",
    icon: <Target className="text-mfs-gold" />,
    color: "bg-mfs-blue"
  },
  {
    title: "Community Growth",
    desc: "We give back by helping South African communities and finance graduates thrive.",
    stat: "Social",
    label: "Investment",
    icon: <Heart className="text-mfs-gold" />,
    color: "bg-mfs-navy"
  },
  {
    title: "Scaling Your Future",
    desc: "We build partnerships that add real value to your business for the long term.",
    stat: "Elite",
    label: "Standards",
    icon: <TrendingUp className="text-mfs-gold" />,
    color: "bg-mfs-blue"
  }
];

export default function Impact() {
  const desktopRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: desktopRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 25 });
  
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-70%"]);
  const textX = useTransform(smoothProgress, [0, 1], ["0%", "-30%"]);

  return (
    /* We add vertical margin (my-20/40) and padding (py-20/40) 
       to ensure the section is separated from the ones above and below. */
    <section className="bg-white my-20 md:my-40">
      
      {/* 🖥️ DESKTOP VERSION (Cinematic Scroll-Jack) */}
      <div className="hidden md:block">
        {/* We use h-[400vh] for the scroll length, but the parent section provides the spacing */}
        <div ref={desktopRef} className="h-[400vh] relative">
          <div className="sticky top-0 h-screen flex items-center overflow-hidden">
            
            {/* Massive Parallax Background Text */}
            <div className="absolute top-10 left-0 whitespace-nowrap pointer-events-none select-none">
              <motion.h2 
                style={{ x: textX }}
                className="text-[20vw] font-black text-slate-50 uppercase leading-none"
              >
                Transformation Impact Momentum
              </motion.h2>
            </div>

            <div className="relative w-full">
              {/* Header with improved top padding */}
              <div className="px-20 mb-16 relative z-10">
                <span className="text-mfs-gold font-black uppercase tracking-[0.4em] text-xs">The Result of Precision</span>
                <h2 className="text-8xl font-black text-mfs-navy tracking-tighter leading-[0.85] mt-4">
                  Beyond the <br />
                  <span className="italic text-mfs-gold">Balance Sheet.</span>
                </h2>
              </div>

              {/* Horizontal Reel */}
              <motion.div style={{ x }} className="flex gap-12 px-20">
                {impactCards.map((card, i) => (
                  <div 
                    key={i} 
                    className={`flex-shrink-0 w-[500px] h-[600px] ${card.color} p-16 flex flex-col justify-between group relative overflow-hidden rounded-sm`}
                  >
                    <div className="relative z-10">
                      <div className="mb-12 group-hover:scale-110 transition-transform duration-500 origin-left text-mfs-gold">{card.icon}</div>
                      <h3 className="text-4xl font-bold text-white mb-6 tracking-tighter leading-tight">{card.title}</h3>
                      <p className="text-white/50 text-xl font-light leading-relaxed">{card.desc}</p>
                    </div>
                    <div className="relative z-10">
                      <div className="text-8xl font-black text-mfs-gold mb-2 tracking-tighter italic">{card.stat}</div>
                      <div className="text-white/30 text-xs font-bold uppercase tracking-widest">{card.label}</div>
                    </div>
                  </div>
                ))}

                {/* Closing Card */}
                <div className="flex-shrink-0 w-[700px] h-[600px] bg-mfs-gold flex flex-col items-center justify-center p-12 text-center rounded-sm shadow-2xl">
                   <h3 className="text-7xl font-black text-mfs-navy tracking-tighter mb-8 leading-[0.85]">
                     Secure Your <br /> Future.
                   </h3>
                   <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 rounded-full border-2 border-mfs-navy flex items-center justify-center animate-bounce">
                        <MoveRight className="rotate-90 text-mfs-navy" size={24} />
                      </div>
                      <span className="text-[10px] font-black text-mfs-navy uppercase tracking-widest">Scroll for Inquiry Form</span>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* 📱 MOBILE VERSION (Tactile Swipe Gallery) */}
      <div className="md:hidden py-32 bg-white overflow-hidden border-t border-slate-100">
        <div className="px-6 mb-16">
          <span className="text-mfs-gold font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Vision & Impact</span>
          <h2 className="text-5xl font-black text-mfs-navy tracking-tighter leading-[1]">The MFS <br /><span className="text-mfs-gold italic text-6xl">Signature.</span></h2>
        </div>

        {/* Horizontal Scroll with Snap */}
        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar px-6 gap-6 pb-12">
          {impactCards.map((card, i) => (
            <div 
              key={i} 
              className={`flex-shrink-0 w-[85vw] snap-center p-10 h-[520px] ${card.color} rounded-sm flex flex-col justify-between shadow-xl`}
            >
              <div>
                <div className="mb-8 text-mfs-gold">{card.icon}</div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tighter leading-none">{card.title}</h3>
                <p className="text-white/60 text-base font-light leading-relaxed">{card.desc}</p>
              </div>
              <div>
                <div className="text-6xl font-black text-mfs-gold mb-1 tracking-tighter italic">{card.stat}</div>
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">{card.label}</p>
              </div>
            </div>
          ))}
          {/* Mobile Closing Card */}
          <div className="flex-shrink-0 w-[85vw] snap-center p-10 h-[520px] bg-mfs-gold rounded-sm flex flex-col items-center justify-center text-center shadow-xl">
            <h3 className="text-4xl font-black text-mfs-navy tracking-tighter mb-6">Ready to <br /> Scale?</h3>
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-mfs-navy flex items-center justify-center animate-bounce">
                    <MoveRight className="rotate-90 text-mfs-navy" size={20} />
                </div>
                <p className="text-mfs-navy/60 text-[10px] font-black uppercase tracking-widest">Continue Scrolling</p>
            </div>
          </div>
        </div>

        {/* Mobile Progress Bar */}
        <div className="px-10 flex flex-col items-center gap-4">
           <div className="w-full max-w-[150px] h-[1px] bg-slate-200 relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-mfs-gold"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              />
           </div>
           <span className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-300">Swipe Through Impact</span>
        </div>
      </div>
    </section>
  );
}