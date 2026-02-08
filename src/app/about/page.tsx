"use client";
import React from "react";
import Link from "next/link"; // Added Link
import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Rocket, GraduationCap, ChevronRight, Play } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* 1. CINEMATIC HERO (Video Background) */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-mfs-navy">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-mfs-navy/80 z-10" />
          <video 
            autoPlay muted loop playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/about-hero.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-mfs-gold font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">
              Our Legacy & Journey
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
              Over 16 Years of <br />
              <span className="text-mfs-gold italic font-light">Experience.</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              We started with a clear goal: provide the best financial expertise to the people who need it most. 
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. OUR STORY (Sharp Grid) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-mfs-navy tracking-tighter">
              A Partner You <br /> Can <span className="text-mfs-gold italic">Understand.</span>
            </h2>
            <div className="space-y-6 text-slate-600 text-lg font-light leading-relaxed">
              <p>
                Maifadi Financial Solutions (MFS) is a young firm, but we are built on over 16 years of deep corporate knowledge. 
              </p>
              <p>
                We realized that many business owners feel lost when talking to accountants. We changed that. We use simple English to explain complex money matters. Whether you are a small business (SMME) or a Government entity, we provide solutions that actually work for you.
              </p>
              <p>
                Our team consists of our CEO, an Assistant Accountant, and a network of skilled freelancers. This allows us to handle any project with speed and precision.
              </p>
            </div>
            
            <div className="flex gap-10 pt-4">
              <StatBlock label="Years Pedigree" value="16+" />
              <StatBlock label="Age of Firm" value="3yr" />
              <StatBlock label="Focus" value="SMME" />
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            {/* PHOTO SLOT 1 */}
            <div className="aspect-[4/5] bg-slate-100 rounded-sm overflow-hidden shadow-2xl relative group">
              <img 
                src="/images/ceo.jpg" 
                alt="Leadership" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mfs-navy/60 to-transparent" />
              <div className="absolute bottom-8 left-8 border-l-2 border-mfs-gold pl-6">
                 <p className="text-white text-xl font-light italic">"We engineering financial success, one client at a time."</p>
              </div>
            </div>
            {/* Architectural accent (Sharp) */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-mfs-gold -z-10 rounded-sm" />
          </motion.div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-24 bg-mfs-slate px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-white p-12 rounded-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <Rocket className="text-mfs-gold mb-8" size={32} />
              <h3 className="text-3xl font-bold text-mfs-navy mb-6 uppercase tracking-tighter">Our Mission</h3>
              <p className="text-slate-500 text-lg leading-relaxed font-light mb-8">
                To transform your financial operations. We use modern technology and years of experience to make your accounting simple, fast, and affordable.
              </p>
            </div>
            <div className="flex items-center gap-2 text-mfs-navy font-black text-[10px] uppercase tracking-[0.2em]">
              Efficiency first <ChevronRight size={14} className="text-mfs-gold" />
            </div>
          </div>

          <div className="bg-mfs-navy p-12 rounded-sm flex flex-col justify-between">
            <div>
              <Target className="text-mfs-gold mb-8" size={32} />
              <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-tighter">Our Vision</h3>
              <p className="text-slate-300 text-lg leading-relaxed font-light mb-8">
                To be the most trusted name in South African finance. We aim to be a preferred training office that helps the next generation of graduates grow.
              </p>
            </div>
            <div className="flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-[0.2em]">
              Trusted Partner <ChevronRight size={14} className="text-mfs-gold" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. GRADUATE FOCUS */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-5xl md:text-7xl font-black text-mfs-navy tracking-tighter leading-none mb-10">
              Investing in <br />
              <span className="text-mfs-gold">Tomorrow.</span>
            </h2>
            <div className="space-y-6 max-w-xl text-slate-600 text-lg font-light leading-relaxed">
              <p>
                We believe in the future of South African professionals. Our vision is to become a primary training ground for finance graduates.
              </p>
              <div className="p-8 bg-slate-50 border-l-2 border-mfs-navy rounded-sm">
                <GraduationCap className="text-mfs-gold mb-4" size={32} />
                <p className="italic text-sm text-slate-500">
                  "We want to build a preferred training office where graduates can enter the profession and learn corporate-standard excellence."
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative group cursor-pointer">
            <div className="aspect-square bg-slate-200 rounded-sm overflow-hidden relative shadow-2xl">
               <img 
                 src="/images/team-collab.jpg" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                 alt="Collaboration" 
               />
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CALL TO ACTION (Updated to functional Link) */}
      <section className="py-24 bg-white px-6">
        <motion.div 
          whileHover={{ y: -5 }}
          className="max-w-7xl mx-auto bg-mfs-navy p-12 md:p-24 rounded-sm relative overflow-hidden text-center"
        >
          <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter mb-10">
            Let's <span className="text-mfs-gold">Partner</span> Today.
          </h2>
          
          <Link 
            href="/contact" 
            className="inline-block bg-mfs-gold text-mfs-navy px-12 py-5 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all rounded-sm shadow-xl"
          >
            Contact our CEO
          </Link>
          
          {/* Subtle Decorative Grid */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
        </motion.div>
      </section>
    </main>
  );
}

function StatBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-3xl font-black text-mfs-navy leading-none">{value}</span>
      <span className="text-[9px] uppercase font-black text-slate-400 tracking-widest mt-2">{label}</span>
    </div>
  );
}