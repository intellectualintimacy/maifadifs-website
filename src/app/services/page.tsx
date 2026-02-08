"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calculator, Landmark, PieChart, Users2, ShieldCheck, 
  FileSearch, CheckCircle2, ArrowRight, ChevronRight 
} from "lucide-react";

// DATA FROM PDF - ORGANIZED FOR DEEP-DIVE
const serviceData = [
  {
    id: "accounting",
    title: "Accounting & Bookkeeping",
    icon: <Calculator size={32} />,
    desc: "We build the foundation of your business using IFRS standards.",
    items: [
      "Designing and setting up accounting systems",
      "Recording monthly data on professional software",
      "Performing Bank, Customer, and Supplier reconciliations",
      "Preparing monthly management accounts",
      "Compiling IFRS-compliant financial statements",
      "Compiling and maintaining asset registers"
    ]
  },
  {
    id: "tax",
    title: "Tax Services",
    icon: <Landmark size={32} />,
    desc: "Complete SARS compliance to keep your business safe and optimized.",
    items: [
      "Income Tax & Turnover Tax",
      "Capital Gains Tax (CGT)",
      "Value Added Tax (VAT) management",
      "Employee Tax (PAYE) / UIF / SDL",
      "Dividend Tax & Donations Tax",
      "Estate Duty planning"
    ]
  },
  {
    id: "finance",
    title: "Financial Management",
    icon: <PieChart size={32} />,
    desc: "Strategic advisory to help you scale with confidence.",
    items: [
      "Cash Flow management and forecasting",
      "Variance Analysis and advice for improvements",
      "Budgets compilation and monitoring",
      "Interpretation of financial results and ratios",
      "Ensuring optimal financial efficiency",
      "Professional Company Valuations"
    ]
  },
  {
    id: "payroll",
    title: "Payroll Function",
    icon: <Users2 size={32} />,
    desc: "Hassle-free payroll management for your growing team.",
    items: [
      "Monthly payroll processing on specialized software",
      "Payroll Tax (PAYE) and UIF administration",
      "Providing Payslips and annual IRP5 certificates",
      "EMP501 reconciliations and submissions",
      "SARS Easy File (electronic filing) support",
      "Monthly payroll administration"
    ]
  },
  {
    id: "reviews",
    title: "Independent Reviews",
    icon: <FileSearch size={32} />,
    desc: "Ensuring your records are accurate and legally compliant.",
    items: [
      "Engagements to review financial statements",
      "Performing agreed-upon procedures and findings reports",
      "Implementing Internal Control Systems",
      "Recommending operational improvements"
    ]
  },
  {
    id: "compliance",
    title: "Compliance & Support",
    icon: <ShieldCheck size={32} />,
    desc: "Managing your business's legal standing with the CIPC.",
    items: [
      "Registering new companies",
      "Maintaining company and close corporation registers",
      "Handling company amendments",
      "Annual returns at the CIPC",
      "Issuing and transferring shares / Share certificates",
      "Compensation Fund (COIDA) administration"
    ]
  }
];

export default function ServicesDeepDive() {
  const [activeTab, setActiveTab] = useState("accounting");

  // Handle Scroll Spy for Sidebar
  useEffect(() => {
    const handleScroll = () => {
      const sections = serviceData.map(d => document.getElementById(d.id));
      const scrollPosition = window.scrollY + 300;

      sections.forEach(section => {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveTab(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="bg-mfs-slate min-h-screen">
      <Navbar />

      {/* 1. ARCHITECTURAL HERO */}
      <section className="relative pt-40 pb-20 md:pt-60 md:pb-40 px-6 bg-mfs-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#C5A059 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-mfs-gold font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">
              Complete Service Catalog
            </span>
            <h1 className="text-5xl md:text-9xl font-black text-white tracking-tighter leading-none mb-8">
              Financial <br />
              <span className="text-mfs-gold italic">Architecture.</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Explore our full range of 16-year corporate pedigree services, 
              simplified and engineered for your business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE MAIN ENGINE (SIDEBAR + CONTENT) */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-12 relative">
        
        {/* DESKTOP SIDEBAR NAVIGATION */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit space-y-2">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Categories</p>
          {serviceData.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`w-full flex items-center justify-between p-4 rounded-sm transition-all group ${
                activeTab === s.id ? "bg-mfs-navy text-white shadow-xl" : "hover:bg-white text-slate-400"
              }`}
            >
              <span className="text-xs font-bold uppercase tracking-widest">{s.title}</span>
              <ChevronRight size={14} className={`${activeTab === s.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
            </button>
          ))}
        </aside>

        {/* CONTENT PANELS */}
        <div className="lg:col-span-9 space-y-32">
          {serviceData.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-32">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-16 h-16 bg-white border border-slate-100 flex items-center justify-center text-mfs-navy rounded-sm shadow-sm">
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-mfs-navy tracking-tighter uppercase">{category.title}</h2>
                  <p className="text-slate-500 font-light mt-2">{category.desc}</p>
                </div>
              </div>

              {/* SERVICE ITEM GRID */}
              <div className="grid md:grid-cols-2 gap-4">
                {category.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-sm border border-slate-100 flex items-start gap-4 group hover:border-mfs-gold transition-colors"
                  >
                    <CheckCircle2 size={18} className="text-mfs-gold mt-1 flex-shrink-0" />
                    <span className="text-mfs-navy font-medium text-sm leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MOBILE FLOATING NAVIGATION (App-Style) */}
      <div className="lg:hidden fixed bottom-6 left-6 right-6 z-[100]">
        <div className="bg-mfs-navy/90 backdrop-blur-xl p-2 rounded-sm border border-white/10 flex overflow-x-auto no-scrollbar gap-2 shadow-2xl">
          {serviceData.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest transition-all ${
                activeTab === s.id ? "bg-mfs-gold text-mfs-navy" : "text-white/60"
              }`}
            >
              {s.id}
            </button>
          ))}
        </div>
      </div>

      {/* 4. FINAL WORLD-CLASS CTA */}
      <section className="py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <motion.div 
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              className="p-16 border-2 border-mfs-navy rounded-sm relative overflow-hidden group"
           >
              <div className="absolute -bottom-10 -right-10 opacity-[0.03] rotate-12 transition-transform group-hover:rotate-0">
                <Landmark size={300} />
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-mfs-navy tracking-tighter mb-8 leading-[0.9]">
                Need a Custom <br /> <span className="text-mfs-gold italic">Strategy?</span>
              </h3>
              <p className="text-slate-500 mb-10 max-w-sm mx-auto font-light">
                Our solutions are tailor-made for your specific environment. Let's engineer your growth today.
              </p>
              <button className="bg-mfs-navy text-white px-12 py-5 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-mfs-gold hover:text-mfs-navy transition-all">
                Initiate Consultation
              </button>
           </motion.div>
        </div>
      </section>
    </main>
  );
}