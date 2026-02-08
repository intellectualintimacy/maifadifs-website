"use client";
import React, { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, ArrowUpRight } from "lucide-react";
import { sendEmail } from "@/app/actions";

const services = ["Accounting", "Tax", "Finance", "Payroll", "CIPC"];

export default function ContactCTA() {
  const [activeService, setActiveService] = useState("Accounting");
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function clientAction(formData: FormData) {
    formData.append("service", activeService);
    startTransition(async () => {
      const result = await sendEmail(formData);
      if (result.success) setStatus("success");
      else setStatus("error");
    });
  }

  return (
    <section className="relative bg-mfs-navy py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* LEFT: MINIMALIST HEADER */}
          <div className="lg:col-span-5 text-white">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <span className="text-mfs-gold font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Final Step</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-6">
                Ready to <br /> <span className="text-mfs-gold italic">Transform?</span>
              </h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed max-w-sm hidden md:block">
                Take the first step toward corporate-grade financial precision.
              </p>
            </motion.div>
          </div>

          {/* RIGHT: THE COMPACT INTAKE ENGINE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 bg-white/5 backdrop-blur-2xl p-6 md:p-12 border border-white/10 rounded-sm shadow-2xl"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                  <CheckCircle2 size={50} className="text-mfs-gold mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tighter">Inquiry Logged</h3>
                  <p className="text-slate-400 text-sm">An internal specialist will contact you shortly.</p>
                  <button onClick={() => setStatus("idle")} className="mt-8 text-mfs-gold text-[10px] font-black uppercase tracking-widest">New Brief</button>
                </motion.div>
              ) : (
                <form action={clientAction} className="space-y-8 md:space-y-10">
                  {/* SERVICE SELECTOR: Compact Row */}
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-mfs-gold mb-4 opacity-70">Project Area</p>
                    <div className="flex flex-wrap gap-2">
                      {services.map((s) => (
                        <button
                          key={s} type="button" onClick={() => setActiveService(s)}
                          className={`px-4 py-2 rounded-sm text-[9px] font-bold uppercase tracking-widest transition-all border ${
                            activeService === s ? "bg-mfs-gold text-mfs-navy border-mfs-gold" : "text-white/40 border-white/5 hover:border-white/20"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* INPUTS: Minimal Border-Bottom Logic to save space */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="space-y-1">
                      <label className="text-[8px] font-black uppercase tracking-widest text-white/30">Client Name</label>
                      <input name="name" type="text" required placeholder="Full Name" className="w-full bg-transparent border-b border-white/10 py-2 text-white text-sm outline-none focus:border-mfs-gold transition-all placeholder:text-white/10" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[8px] font-black uppercase tracking-widest text-white/30">Corporate Email</label>
                      <input name="email" type="email" required placeholder="email@company.co.za" className="w-full bg-transparent border-b border-white/10 py-2 text-white text-sm outline-none focus:border-mfs-gold transition-all placeholder:text-white/10" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[8px] font-black uppercase tracking-widest text-white/30">Brief Context</label>
                    <textarea name="message" rows={2} required placeholder="How can we assist your growth?" className="w-full bg-transparent border-b border-white/10 py-2 text-white text-sm outline-none focus:border-mfs-gold transition-all resize-none placeholder:text-white/10" />
                  </div>

                  {/* THE BUTTON: Engineered Alignment */}
                  <div className="pt-4">
                    <motion.button 
                      disabled={isPending}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="group w-full bg-mfs-gold py-5 text-mfs-navy font-black uppercase tracking-[0.4em] text-[10px] flex items-center justify-center gap-4 hover:bg-white transition-all shadow-xl disabled:opacity-50 rounded-sm"
                    >
                      {isPending ? (
                        <Loader2 className="animate-spin" size={16} />
                      ) : (
                        <>
                          Initiate Consultation 
                          <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}