"use client";
import React, { useState } from "react";
import { Shield, Home, Search, ShieldAlert, Scale, ShieldQuestion, FileText, BookOpen, Gamepad2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NetworkGraph from "@/components/canvas/NetworkGraph";
import HeroSection from "@/components/sections/HeroSection";
import PhilosophyArchitecture from "@/components/sections/PhilosophyArchitecture";
import BentoGridRiskMitigation from "@/components/sections/BentoGridRiskMitigation";
import GovernanceSection from "@/components/sections/GovernanceSection";
import AnonymousReportForm from "@/components/sections/AnonymousReportForm";
import PolicyDocumentSection from "@/components/sections/PolicyDocumentSection";
import TuringTestGame from "@/components/sections/TuringTestGame";

const MODULES = [
  { id: "context", icon: Home, label: "Contexto" },
  { id: "philosophy", icon: ShieldQuestion, label: "Arquitectura" },
  { id: "mitigation", icon: ShieldAlert, label: "Mitigación" },
  { id: "governance", icon: Scale, label: "Gobernanza" },
  { id: "dossier", icon: BookOpen, label: "Dossier Legal" },
  { id: "game", icon: Gamepad2, label: "Simulador PCL" },
  { id: "report", icon: FileText, label: "Reporte Seguro" },
];

export default function AppCommandCenter() {
  const [activeModule, setActiveModule] = useState("context");

  return (
    <main className="relative h-screen w-full bg-obsidian text-text-primary selection:bg-cyan-palantir/30 selection:text-white overflow-hidden flex">
      {/* Interactive Background */}
      <NetworkGraph />

      {/* Sidebar Navigation */}
      <aside className="relative z-50 w-24 h-full glassmorphism border-r border-white/10 flex flex-col items-center py-8 justify-between shrink-0">
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-palantir/20 to-electric-blue/10 border border-cyan-palantir/30 flex items-center justify-center mb-8">
            <Shield className="w-6 h-6 text-cyan-palantir" />
          </div>
          
          <div className="flex flex-col gap-6">
            {MODULES.map((mod) => {
              const Icon = mod.icon;
              const isActive = activeModule === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(mod.id)}
                  className="group relative p-3 rounded-xl transition-all"
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute inset-0 bg-white/10 border border-white/20 rounded-xl"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <Icon className={`w-6 h-6 relative z-10 transition-colors ${isActive ? "text-cyan-palantir" : "text-text-muted group-hover:text-white"}`} />
                  
                  {/* Tooltip */}
                  <span className="absolute left-16 top-1/2 -translate-y-1/2 px-3 py-1 bg-slate-void border border-white/10 rounded-md text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {mod.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="text-xs font-mono text-text-muted rotate-180" style={{ writingMode: 'vertical-rl' }}>
          SYS.STATUS: OPERATIONAL
        </div>
      </aside>

      {/* Main Content Area */}
      <section className="relative z-10 flex-1 h-full overflow-y-auto overflow-x-hidden p-4 md:p-8 flex">
        <div className="w-full m-auto flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {activeModule === "context" && (
              <motion.div
                key="context"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-7xl"
              >
              <HeroSection />
            </motion.div>
          )}
              <motion.div
                key="philosophy"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-7xl"
              >
                <PhilosophyArchitecture />
              </motion.div>
            )}
            {activeModule === "mitigation" && (
              <motion.div
                key="mitigation"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-7xl"
              >
                <BentoGridRiskMitigation />
              </motion.div>
            )}
            {activeModule === "governance" && (
              <motion.div
                key="governance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-7xl"
              >
                <GovernanceSection />
              </motion.div>
            )}
            {activeModule === "dossier" && (
              <motion.div
                key="dossier"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-7xl"
              >
                <PolicyDocumentSection />
              </motion.div>
            )}
            {activeModule === "game" && (
              <motion.div
                key="game"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-7xl"
              >
                <TuringTestGame />
              </motion.div>
            )}
            {activeModule === "report" && (
              <motion.div
                key="report"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-7xl"
              >
                <AnonymousReportForm />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
