"use client";
import React, { useState, useTransition } from "react";
import Navbar from "@/components/layout/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ArrowUpRight, Loader2, CheckCircle2 } from "lucide-react";
import { sendEmail } from "@/app/actions";

export default function ContactPage() {
  const [activeService, setActiveService] = useState("Accounting");
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);

  async function clientAction(formData: FormData) {
    formData.append("service", activeService);
    
    startTransition(async () => {
      const result = await sendEmail(formData);
      if (result.success) {
        setIsSuccess(true);
      } else {
        alert("System busy. Please try again.");
      }
    });
  }

  return (
    <main className="bg-white min-h-screen selection:bg-mfs-gold selection:text-mfs-navy">
      <Navbar />

      {/* 1. CINEMATIC HERO */}
      <section className="relative pt-40 pb-20 md:pt-60 md:pb-40 px-6 bg-mfs-navy overflow-hidden">
        {/* Architectural Grid Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#C5A059 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-mfs-gold font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">
              Inquiry Architecture
            </span>
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.85] mb-12">
              Start the <br />
              <span className="text-mfs-gold italic">Conversation.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. DIRECT ACCESS (CLEAN & SHARP) */}
      <section className="py-12 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          <ContactCard 
            title="Direct Line" 
            value="081 771 1835" 
            label="Mon - Fri | 08:00 - 17:00" 
            href="tel:0817711835" 
          />
          <ContactCard 
            title="Email Portal" 
            value="info@maifadifs.co.za" 
            label="Verified Domain | 24hr Response" 
            href="mailto:info@maifadifs.co.za" 
          />
        </div>
      </section>

      {/* 3. INTAKE ENGINE (MINIMALIST) */}
      <section className="py-24 px-6 bg-mfs-slate">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 md:gap-24">
          
          {/* Header Area */}
          <div className="lg:col-span-4">
            <h2 className="text-5xl md:text-7xl font-black text-mfs-navy tracking-tighter uppercase leading-[0.9] mb-8">
              Technical <br /> Briefing.
            </h2>
            <p className="text-slate-500 font-light text-lg leading-relaxed mb-12">
              Provide a summary of your requirements. Our internal team will review the brief and contact you within 24 hours.
            </p>
            <div className="hidden lg:block space-y-8">
               <div className="flex flex-col border-l-2 border-mfs-gold pl-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-mfs-navy">Priority</span>
                  <span className="text-sm font-light text-slate-500">Internal Team Review</span>
               </div>
               <div className="flex flex-col border-l-2 border-mfs-gold pl-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-mfs-navy">Security</span>
                  <span className="text-sm font-light text-slate-500">Confidential Data Handling</span>
               </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-8">
            <div className="bg-white p-8 md:p-16 rounded-sm shadow-2xl border border-slate-100 flex flex-col min-h-[600px]">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="m-auto text-center py-20"
                  >
                    <CheckCircle2 size={64} className="text-mfs-gold mx-auto mb-6" />
                    <h3 className="text-4xl font-black text-mfs-navy mb-4 italic tracking-tighter">Brief Received.</h3>
                    <p className="text-slate-500 mb-10 font-light">An internal specialist is reviewing your data.</p>
                    <button 
                        onClick={() => setIsSuccess(false)}
                        className="text-mfs-gold font-bold uppercase text-[10px] tracking-[0.4em] hover:text-mfs-navy transition-colors"
                    >
                        Open New Brief
                    </button>
                  </motion.div>
                ) : (
                  <form action={clientAction} className="space-y-12">
                    
                    {/* Category Selector */}
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 block">Service Category</label>
                      <div className="flex flex-wrap gap-2">
                        {["Accounting", "Tax", "Advisory", "Compliance", "Payroll"].map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => setActiveService(s)}
                            className={`px-6 py-3 rounded-sm text-[10px] font-black uppercase tracking-widest transition-all border ${
                              activeService === s 
                              ? "bg-mfs-navy text-white border-mfs-navy shadow-xl" 
                              : "bg-slate-50 text-slate-400 border-slate-100 hover:border-mfs-gold"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Inputs - No Icons, Minimalist Lines */}
                    <div className="grid md:grid-cols-2 gap-10">
                      <InputField label="Contact Name" name="name" placeholder="Full Name" />
                      <InputField label="Work Email" name="email" placeholder="email@company.co.za" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                      <InputField label="Registered Company" name="company" placeholder="Entity Name" />
                      <InputField label="Industry Sector" name="sector" placeholder="E.g. Construction" />
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Project Description</label>
                      <textarea 
                        name="message"
                        required
                        placeholder="Describe your current business challenges..."
                        className="w-full py-4 border-b border-slate-200 outline-none focus:border-mfs-gold transition-all bg-transparent text-sm min-h-[150px] resize-none"
                      />
                    </div>

                    <button 
                      disabled={isPending}
                      className="group w-full bg-mfs-navy text-white py-6 text-[10px] font-black uppercase tracking-[0.5em] flex items-center justify-center gap-4 hover:bg-mfs-gold hover:text-mfs-navy transition-all shadow-xl"
                    >
                      {isPending ? <Loader2 className="animate-spin" /> : <>Initiate Briefing <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 bg-white border-t border-slate-50 text-center">
         <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">
            © {new Date().getFullYear()} Maifadi Financial Solutions • Pretoria & Johannesburg
         </p>
      </footer>
    </main>
  );
}

function ContactCard({ title, value, label, href }: any) {
  return (
    <a href={href} className="p-10 md:p-16 bg-white border border-slate-100 rounded-sm hover:border-mfs-gold hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between">
      <div>
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">{title}</h3>
        <p className="text-3xl md:text-5xl font-black text-mfs-navy tracking-tighter leading-none group-hover:text-mfs-gold transition-colors">{value}</p>
      </div>
      <div className="mt-12 flex justify-between items-center border-t border-slate-50 pt-6">
        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{label}</span>
        <ArrowUpRight size={20} className="text-mfs-gold opacity-0 group-hover:opacity-100 transition-all" />
      </div>
    </a>
  );
}

function InputField({ label, name, placeholder }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{label}</label>
      <input 
        name={name}
        required
        type="text" 
        placeholder={placeholder}
        className="w-full py-4 border-b border-slate-200 outline-none focus:border-mfs-gold transition-all bg-transparent text-sm placeholder:text-slate-200"
      />
    </div>
  );
}