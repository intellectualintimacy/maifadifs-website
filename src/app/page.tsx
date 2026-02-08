import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero";
import Strategy from "@/components/Strategy";
import Services from "@/components/Services";
import Blueprint from "@/components/Blueprint";
import Impact from "@/components/Impact";
import ContactCTA from "@/components/ContactCTA";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Partners /> 
      
      {/* Dynamic Stats Strip */}
      {/* <div className="bg-mfs-navy py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-8">
          <StatItem number="16+" label="Years Experience" />
          <StatItem number="100%" label="Tax Compliant" />
          <StatItem number="24/7" label="Advisory Support" />
          <StatItem number="SMME" label="Specialized" />
        </div>
      </div> */}

      <Services />
      <Blueprint />
      <Strategy />
      <Impact />
      <ContactCTA />
    </main>
  );
}

function StatItem({ number, label }: { number: string, label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-mfs-gold text-4xl font-black tracking-tighter">{number}</span>
      <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">{label}</span>
    </div>
  );
}