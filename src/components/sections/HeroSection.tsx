"use client";
import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function HeroSection() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center gap-12 p-8">
      {/* Left Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 flex flex-col justify-center max-w-2xl"
      >
        <motion.div variants={itemVariants} className="mb-8 inline-block">
          <div className="glassmorphism rounded-2xl p-4 border border-white/10 shadow-2xl overflow-hidden bg-slate-void/40 inline-flex">
            <img src="/logo.png" alt="Logo Principal" className="w-56 md:w-72 h-auto object-contain mix-blend-screen opacity-90" />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full glassmorphism border-cyan-palantir/30 text-xs text-cyan-palantir uppercase tracking-widest font-mono mb-4 lg:mb-6 w-max">
          <span className="w-2 h-2 rounded-full bg-cyan-palantir animate-pulse"></span>
          Política de Derechos Humanos
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter cyber-gradient leading-tight mb-4 lg:mb-6">
          Defendiendo los Derechos Humanos en la Era de los Datos y la IA
        </motion.h1>

        <motion.p variants={itemVariants} className="text-base md:text-lg text-text-muted font-light leading-relaxed mb-6 lg:mb-10">
          Nuestro compromiso corporativo con la Declaración Universal de Derechos Humanos (Arts. 2, 3, 12), los Principios Rectores de la ONU y las Directrices de la OCDE. Construimos software que fortalece las instituciones democráticas mientras protege ferozmente las libertades civiles.
        </motion.p>

        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 lg:gap-4">
          <div className="glassmorphism rounded-xl p-3 lg:p-4 glow-hover">
            <span className="font-mono text-[10px] lg:text-xs text-text-mono uppercase block mb-1">Legado</span>
            <strong className="text-lg lg:text-xl text-white block">20+ Años</strong>
            <span className="text-[10px] lg:text-xs text-text-muted">Defendiendo derechos desde 2003</span>
          </div>
          <div className="glassmorphism rounded-xl p-3 lg:p-4 glow-hover">
            <span className="font-mono text-[10px] lg:text-xs text-text-mono uppercase block mb-1">Modelo</span>
            <strong className="text-lg lg:text-xl text-white block">Zero Brokerage</strong>
            <span className="text-[10px] lg:text-xs text-text-muted">Software, no venta de datos</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Media/Interactive Element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 h-full max-h-[500px] rounded-3xl glassmorphism border-beam-card p-6 flex flex-col relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-palantir/10 to-transparent pointer-events-none"></div>
        
        {/* Telemetry Header */}
        <div className="flex justify-between items-center mb-6 relative z-10">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-cyan-palantir animate-pulse"></div>
             <span className="font-mono text-xs text-cyan-palantir tracking-widest uppercase">Análisis PCL en Vivo</span>
          </div>
          <span className="font-mono text-xs text-text-muted">NODO: 0x8F9A</span>
        </div>

        {/* Data Bars */}
        <div className="flex-1 flex items-end gap-2 relative z-10 mb-6">
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ height: ["20%", "80%", "30%", "90%", "40%"] }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: Math.random()
              }}
              className="flex-1 bg-cyan-palantir/20 rounded-t-sm border-t border-cyan-palantir/50"
            />
          ))}
        </div>

        {/* Log Output */}
        <div className="h-32 bg-obsidian/80 rounded-xl border border-white/5 p-4 font-mono text-xs text-text-muted overflow-hidden relative z-10 flex flex-col justify-end">
          <motion.div
            animate={{ y: [0, -20] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="space-y-2 opacity-80"
          >
            <p className="text-emerald-grid">&gt; Verificando cumplimiento marco UDHR...</p>
            <p>&gt; Auditando logs inmutables (PID 204)...</p>
            <p className="text-cyan-palantir">&gt; Revisión de Privacidad: APROBADA.</p>
            <p>&gt; Estableciendo infraestructura soberana...</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
