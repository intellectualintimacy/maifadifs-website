"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calculator, Landmark, PieChart, FileCheck, ArrowRight } from "lucide-react";

const serviceCategories = [
  {
    slug: "accounting",
    title: "Accounting & Bookkeeping",
    icon: <Calculator className="w-8 h-8" />,
    description: "Designing and implementing IFRS compliant systems for sustainable growth.",
    span: "md:col-span-2",
    color: "bg-mfs-navy text-white"
  },
  {
    slug: "tax",
    title: "Tax Services",
    icon: <Landmark className="w-8 h-8" />,
    description: "Full-spectrum compliance: Income Tax, VAT, PAYE, and Estate Duty.",
    span: "md:col-span-1",
    color: "bg-white text-mfs-navy border border-slate-100"
  },
  {
    slug: "finance",
    title: "Financial Management",
    icon: <PieChart className="w-8 h-8" />,
    description: "Variance analysis, budget compilation, and company valuations.",
    span: "md:col-span-1",
    color: "bg-mfs-gold text-mfs-navy"
  },
  {
    slug: "compliance",
    title: "Compliance & Reviews",
    icon: <FileCheck className="w-8 h-8" />,
    description: "Independent reviews, CIPC annual returns, and COIDA administration.",
    span: "md:col-span-2",
    color: "bg-slate-100 text-mfs-navy border border-slate-100"
  }
];

export default function Services() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-mfs-gold font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-mfs-navy tracking-tighter leading-[0.9]">
              Tailor-made <br className="hidden md:block" /> 
              <span className="text-mfs-gold italic">Solutions.</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm font-light leading-relaxed pb-2">
            Leveraging 16 years of corporate pedigree to provide efficient, 
            cost-effective financial operations for South African enterprises.
          </p>
        </div>

        {/* MOBILE: KINETIC SNAP SLIDER | DESKTOP: BENTO GRID */}
        <div className="
          flex overflow-x-auto snap-x snap-mandatory no-scrollbar 
          md:grid md:grid-cols-3 gap-4 md:gap-6
          pb-8 md:pb-0
        ">
          {serviceCategories.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className={`
                flex-shrink-0 w-[85vw] snap-center /* Mobile App Feel */
                md:w-auto md:snap-align-none        /* Desktop Grid */
                p-8 md:p-12 flex flex-col justify-between min-h-[400px] md:min-h-[450px] 
                transition-all duration-500 rounded-sm
                ${service.span} ${service.color}
              `}
            >
              <div>
                <div className="mb-8 p-3 bg-white/10 w-fit rounded-sm backdrop-blur-md">
                  {service.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className={`text-base md:text-lg font-light leading-relaxed ${index === 0 ? "text-slate-400" : "opacity-70"}`}>
                  {service.description}
                </p>
              </div>

              <div className="mt-12">
                <Link 
                  href={`/services#${service.slug}`} 
                  className="group flex items-center justify-between w-full border-t border-current/20 pt-6"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                    Explore Detail
                  </span>
                  <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:bg-mfs-gold group-hover:text-mfs-navy transition-all duration-300">
                    <ArrowRight size={18} />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MOBILE VISUAL INDICATOR */}
        <div className="flex md:hidden justify-center items-center gap-3 mt-4">
           {serviceCategories.map((_, i) => (
             <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-200" />
           ))}
           <span className="text-[8px] font-black uppercase tracking-widest text-slate-400 ml-2">
             Swipe to Navigate
           </span>
        </div>
      </div>
    </section>
  );
}