"use client";
import React, { useState } from "react";
import { Server, Lock, ShieldCheck, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PILLARS = [
  {
    id: "sovereign",
    icon: Server,
    title: "Infraestructura Soberana",
    desc: "Nosotros proveemos el software. Los datos permanecen estrictamente bajo el control legal del cliente.",
    image: "/assets/media_1787780915383.png"
  },
  {
    id: "zero-monetization",
    icon: Lock,
    title: "Cero Monetización",
    desc: "No reutilizamos, vendemos ni entrenamos modelos de IA con los datos de un cliente para otros clientes.",
    image: "/assets/media_1787780923221.png"
  },
  {
    id: "privacy-design",
    icon: ShieldCheck,
    title: "Privacidad por Diseño",
    desc: "Controles de acceso granulares y registros de auditoría inmutables integrados en el núcleo.",
    image: "/assets/media_1787780934027.png"
  }
];

export default function PhilosophyArchitecture() {
  const [activeTab, setActiveTab] = useState(PILLARS[0].id);
  const activeData = PILLARS.find(p => p.id === activeTab)!;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-10 shrink-0"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">No Somos un Data Broker</h2>
        <p className="text-text-muted text-xs md:text-sm max-w-2xl mx-auto">
          Palantir no es una empresa de datos, un data broker o un agregador — somos una empresa de software que construye infraestructura. Con la excepción de prácticas comerciales internas necesarias, Palantir no posee, recopila, almacena ni vende datos personales.
        </p>
      </motion.div>

      <div className="w-full flex flex-col md:flex-row gap-6 h-[300px]">
        {/* Tabs Sidebar */}
        <div className="flex flex-col gap-3 w-full md:w-1/3">
          {PILLARS.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => setActiveTab(pillar.id)}
              className={`flex items-center gap-4 p-3 md:p-4 rounded-2xl transition-all duration-300 border text-left group ${
                activeTab === pillar.id 
                ? 'bg-white/10 border-cyan-palantir/50 shadow-[0_0_15px_rgba(0,229,255,0.1)]' 
                : 'bg-slate-void/50 border-white/5 hover:bg-white/5'
              }`}
            >
              <div className={`p-2 rounded-lg transition-colors ${activeTab === pillar.id ? 'bg-cyan-palantir/20 text-cyan-palantir' : 'bg-white/5 text-text-muted group-hover:text-white'}`}>
                <pillar.icon className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <span className={`font-bold text-xs md:text-sm ${activeTab === pillar.id ? 'text-white' : 'text-text-muted group-hover:text-white'}`}>
                {pillar.title}
              </span>
              {activeTab === pillar.id && (
                <motion.div layoutId="arrow" className="ml-auto">
                  <ArrowRight className="w-4 h-4 text-cyan-palantir" />
                </motion.div>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex-1 glassmorphism rounded-3xl border border-white/10 bg-slate-void/80 p-6 md:p-8 relative overflow-hidden flex items-center shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-palantir/5 to-transparent pointer-events-none"></div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -10, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative z-10 w-full flex items-center gap-8 h-full"
            >
              <div className="flex-1">
                <div className="inline-flex p-2 md:p-3 rounded-2xl bg-cyan-palantir/20 border border-cyan-palantir/30 mb-4 md:mb-6">
                  <activeData.icon className="w-6 h-6 md:w-8 md:h-8 text-cyan-palantir" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">{activeData.title}</h3>
                <p className="text-sm md:text-lg text-text-muted leading-relaxed">
                  {activeData.desc}
                </p>
              </div>
              <div className="hidden lg:block w-[280px] h-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,229,255,0.15)] relative group">
                <div className="absolute inset-0 bg-cyan-palantir/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
                <div className="absolute inset-0 border border-cyan-palantir/30 rounded-2xl z-20 pointer-events-none"></div>
                <img src={activeData.image} alt={activeData.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
