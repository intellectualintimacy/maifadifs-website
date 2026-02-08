"use client";
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, FileText, Calendar, Lightbulb, 
  Search, ArrowUpRight, Filter, Download
} from "lucide-react";

// RESOURCE DATA
const resources = [
  {
    title: "2024 Tax Calendar",
    category: "Compliance",
    type: "Guide",
    desc: "Stay ahead of SARS deadlines. A simple breakdown of what is due and when.",
    readTime: "5 min read",
    icon: <Calendar className="text-mfs-gold" />,
    color: "bg-mfs-navy"
  },
  {
    title: "Scaling Your SMME",
    category: "Growth",
    type: "Insight",
    desc: "How to move from a small team to a structured corporate entity safely.",
    readTime: "8 min read",
    icon: <Lightbulb className="text-mfs-gold" />,
    color: "bg-mfs-blue"
  },
  {
    title: "CIPC Annual Returns",
    category: "Compliance",
    type: "Checklist",
    desc: "A step-by-step checklist to ensure your company stays registered and active.",
    readTime: "4 min read",
    icon: <FileText className="text-mfs-gold" />,
    color: "bg-slate-800"
  },
  {
    title: "Digital Accounting",
    category: "Tech",
    type: "Guide",
    desc: "The best software tools to automate your bookkeeping and save time.",
    readTime: "10 min read",
    icon: <BookOpen className="text-mfs-gold" />,
    color: "bg-mfs-navy"
  },
  {
    title: "VAT for Beginners",
    category: "Tax",
    type: "Guide",
    desc: "Understanding Value Added Tax without the confusing legal jargon.",
    readTime: "6 min read",
    icon: <Landmark className="text-mfs-gold" />,
    color: "bg-slate-900"
  }
];

const categories = ["All", "Tax", "Compliance", "Growth", "Tech"];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = resources.filter(r => 
    (activeCategory === "All" || r.category === activeCategory) &&
    (r.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* 1. INTEL HERO */}
      <section className="relative pt-40 pb-20 md:pt-60 md:pb-40 px-6 bg-mfs-slate border-b border-slate-100 overflow-hidden">
        {/* Abstract Background Ghost Text */}
        <div className="absolute -bottom-10 -left-10 text-[20vw] font-black text-mfs-navy/[0.02] select-none pointer-events-none">
          KNOWLEDGE
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-mfs-gold font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">
              The Intelligence Hub
            </span>
            <h1 className="text-6xl md:text-9xl font-black text-mfs-navy tracking-tighter leading-[0.85] mb-12">
              Financial <br />
              <span className="text-mfs-gold italic">Intelligence.</span>
            </h1>
          </motion.div>

          {/* SEARCH & FILTER BAR */}
          <div className="mt-12 flex flex-col md:flex-row gap-6 items-center justify-between border-t border-slate-200 pt-12">
            <div className="flex gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-4 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeCategory === cat ? "bg-mfs-navy text-white shadow-lg" : "bg-white text-slate-400 border border-slate-100 hover:border-mfs-gold"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-mfs-gold transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search the ledger..."
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white border border-slate-100 rounded-sm outline-none focus:border-mfs-gold text-sm transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE RESOURCE GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredResources.map((res, i) => (
              <motion.div
                layout
                key={res.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative h-[450px] bg-mfs-slate rounded-sm border border-slate-100 overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Header */}
                <div className={`h-24 ${res.color} p-6 flex justify-between items-start`}>
                  <div className="p-2 bg-white/10 backdrop-blur-md rounded-sm">
                    {res.icon}
                  </div>
                  <span className="text-[10px] font-black text-white/50 uppercase tracking-widest">{res.type}</span>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow">
                  <span className="text-mfs-gold text-[10px] font-black uppercase tracking-widest mb-4 block">
                    {res.category}
                  </span>
                  <h3 className="text-3xl font-bold text-mfs-navy tracking-tight mb-4 group-hover:text-mfs-gold transition-colors">
                    {res.title}
                  </h3>
                  <p className="text-slate-500 font-light leading-relaxed">
                    {res.desc}
                  </p>
                </div>

                {/* Footer / Interaction */}
                <div className="p-8 border-t border-slate-200 bg-white flex justify-between items-center transition-all group-hover:bg-mfs-navy">
                  <span className="text-[10px] font-bold text-slate-400 group-hover:text-white/50 uppercase tracking-widest">
                    {res.readTime}
                  </span>
                  <button className="flex items-center gap-2 text-mfs-navy font-black text-[10px] uppercase tracking-widest group-hover:text-white transition-all">
                    Access Guide <ArrowUpRight size={14} className="text-mfs-gold" />
                  </button>
                </div>

                {/* Hover Reveal Overlay (The "World-Class" touch) */}
                <div className="absolute inset-0 bg-mfs-navy translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-10 flex flex-col justify-center pointer-events-none">
                   <p className="text-white text-2xl font-light leading-relaxed mb-8">
                      "Knowledge is the architecture of success. Access the full guide to secure your strategy."
                   </p>
                   <div className="flex items-center gap-4 text-mfs-gold font-black uppercase tracking-widest text-xs">
                      Download PDF <Download size={18} />
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* EMPTY STATE */}
        {filteredResources.length === 0 && (
          <div className="py-40 text-center">
            <Search size={48} className="mx-auto text-slate-200 mb-6" />
            <h3 className="text-2xl font-bold text-mfs-navy italic">No intelligence found.</h3>
            <p className="text-slate-400 mt-2">Try adjusting your filters or search query.</p>
          </div>
        )}
      </section>

      {/* 3. KNOWLEDGE SUBSCRIPTION (Strategic CTA) */}
      <section className="py-40 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-7xl font-black text-mfs-navy tracking-tighter leading-none">
              Stay Ahead of the <br /> <span className="text-mfs-gold italic">Ledger.</span>
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto font-light text-lg">
              Get our monthly financial summary delivered to your inbox. Simple English, professional insights.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="yourname@company.co.za"
                className="flex-grow p-5 bg-mfs-slate border border-slate-100 rounded-sm outline-none focus:border-mfs-gold text-sm"
              />
              <button className="bg-mfs-navy text-white px-10 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-mfs-gold hover:text-mfs-navy transition-all">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

// Icon for simple use (matching our pattern)
function Landmark(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="21" x2="21" y2="21" />
      <path d="M3 13h18" />
      <path d="M5 13V7h14v6" />
      <path d="M7 21v-8" />
      <path d="M11 21v-8" />
      <path d="M15 21v-8" />
      <path d="M17 21v-8" />
      <path d="M12 3L3 7v2h18V7l-9-4z" />
    </svg>
  );
}