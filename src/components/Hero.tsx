"use client";
import Link from "next/link"; // Added Link for professional routing
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, TrendingUp, Briefcase } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-mfs-navy overflow-hidden">
      {/* BACKGROUND DEPTH LAYERS */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900/50 skew-x-12 translate-x-32 z-0" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-mfs-blue/20 rounded-full blur-[120px] z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-20">
        
        {/* LEFT COLUMN: CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter mb-8">
            Effective <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mfs-gold via-yellow-200 to-mfs-gold">
              Financial
            </span> <br />
            Solutions.
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed mb-10 font-light">
            Tailor-made accounting, tax, and advisory services for South Africa’s 
            ambitious SMMEs and Government Public Entities.
          </p>

          <div className="flex flex-wrap gap-5">
            {/* PRIMARY CTA: Consult an Expert */}
            <Link 
              href="/contact" 
              className="group relative bg-mfs-gold text-mfs-navy px-8 py-4 font-bold overflow-hidden transition-all rounded-sm flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2 uppercase text-[11px] tracking-widest">
                Consult an Expert <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              {/* This div creates the hover slide effect */}
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>

            {/* SECONDARY CTA: Our Services */}
            <Link 
              href="/services" 
              className="px-8 py-4 text-white font-bold border border-white/20 hover:bg-white/5 transition-all rounded-sm uppercase text-[11px] tracking-widest"
            >
              Our Services
            </Link>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: VISUAL TRUST INDICATORS */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <TrustCard icon={<ShieldCheck className="text-mfs-gold" />} title="Compliance" desc="SARS & CIPC Ready" />
              <TrustCard icon={<TrendingUp className="text-mfs-gold" />} title="Growth" desc="Tailored Advisory" />
            </div>
            <div className="space-y-4">
              <TrustCard icon={<Briefcase className="text-mfs-gold" />} title="Experience" desc="16 Years Corporate" />
              <div className="bg-mfs-gold p-8 h-48 flex flex-col justify-end rounded-sm">
                <span className="text-4xl font-black text-mfs-navy italic leading-none">"Precise."</span>
              </div>
            </div>
          </div>
          {/* Decorative architectural frame */}
          <div className="absolute -z-10 top-0 left-0 w-full h-full border border-mfs-gold/20 translate-x-4 translate-y-4" />
        </motion.div>
      </div>
    </section>
  );
}

function TrustCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:border-mfs-gold/50 transition-colors group rounded-sm">
      <div className="mb-4">{icon}</div>
      <h3 className="text-white font-bold text-lg mb-1 tracking-tight">{title}</h3>
      <p className="text-slate-400 text-sm font-light">{desc}</p>
    </div>
  );
}