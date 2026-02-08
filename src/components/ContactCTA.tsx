"use client";
import React, { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, AlertCircle, ArrowUpRight } from "lucide-react";
import { sendEmail } from "@/app/actions";

const services = ["Accounting", "Tax Services", "Financial Management", "Payroll", "Compliance"];

export default function ContactCTA() {
  const [activeService, setActiveService] = useState("Accounting");
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function clientAction(formData: FormData) {
    formData.append("service", activeService);
    
    startTransition(async () => {
      const result = await sendEmail(formData);
      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    });
  }

  return (
    <section id="contact" className="relative bg-mfs-navy pt-32 overflow-hidden">
      {/* Dynamic Background Blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mfs-blue/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-start mb-32">
          
          {/* CONTENT SIDE */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-mfs-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">
                Initiate Consultation
              </span>
              <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
                Ready to <br /> 
                <span className="text-mfs-gold italic">Transform?</span>
              </h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-12 max-w-sm">
                Take the first step toward corporate-grade financial precision. Our experts are ready to engineer your growth.
              </p>
            </motion.div>
          </div>

          {/* FORM SIDE */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white/5 backdrop-blur-2xl p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 bg-mfs-gold/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={40} className="text-mfs-gold" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Message Received</h3>
                  <p className="text-slate-400 font-light">We will respond to your inquiry within 24 hours.</p>
                  <button 
                    onClick={() => setStatus("idle")} 
                    className="mt-10 text-mfs-gold text-[10px] font-black uppercase tracking-[0.3em] hover:text-white transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form action={clientAction} className="space-y-8">
                  {/* Service Toggle UI */}
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-mfs-gold mb-4 block">Service Area</label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((s) => (
                        <button
                          key={s} type="button" onClick={() => setActiveService(s)}
                          className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${
                            activeService === s ? "bg-mfs-gold text-mfs-navy border-mfs-gold" : "text-white/40 border-white/10 hover:border-mfs-gold/50"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[9px] font-bold text-white/40 uppercase tracking-widest ml-1">Full Name</label>
                      <input required name="name" type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 p-4 text-white rounded-lg outline-none focus:border-mfs-gold transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-bold text-white/40 uppercase tracking-widest ml-1">Work Email</label>
                      <input required name="email" type="email" placeholder="john@company.co.za" className="w-full bg-white/5 border border-white/10 p-4 text-white rounded-lg outline-none focus:border-mfs-gold transition-all" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-white/40 uppercase tracking-widest ml-1">How can we assist you?</label>
                    <textarea required name="message" rows={4} placeholder="Describe your business needs..." className="w-full bg-white/5 border border-white/10 p-4 text-white rounded-lg outline-none focus:border-mfs-gold transition-all resize-none" />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-400 text-xs animate-pulse">
                      <AlertCircle size={14} /> <span>Delivery failed. Please check your connection.</span>
                    </div>
                  )}

                  <button 
                    disabled={isPending}
                    className="w-full bg-mfs-gold py-6 text-mfs-navy font-black uppercase tracking-[0.4em] text-xs flex items-center justify-center gap-4 transition-all hover:bg-white disabled:opacity-50"
                  >
                    {isPending ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <>Initiate Consultation <Send size={16} /></>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-mfs-gold flex items-center justify-center rounded-sm">
                <span className="text-mfs-navy font-bold">M</span>
             </div>
             <span className="text-white/40 font-black tracking-tighter text-sm">MAIFADI FINANCIAL SOLUTIONS</span>
          </div>
          <div className="text-white/20 text-[9px] font-bold uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Precision Professionalism Excellence
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white/40 hover:text-mfs-gold text-[9px] font-black uppercase tracking-widest flex items-center gap-2 transition-colors">
            Return to Summit <ArrowUpRight size={14} />
          </button>
        </div>
      </footer>
    </section>
  );
}