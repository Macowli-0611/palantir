"use client";
import React, { useState } from "react";
import { ShieldCheck, Eye, FileSearch, Scale, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PILLARS = [
  {
    id: "privacy",
    icon: ShieldCheck,
    title: "Privacidad por Diseño",
    shortDesc: "La seguridad y la privacidad son consideraciones centrales.",
    fullDesc: "Las plataformas de Palantir están diseñadas con capacidades de protección de privacidad y libertades civiles integradas de manera nativa. Esto incluye controles de seguridad líderes en la industria, acceso granular y auditabilidad robusta. Nuestro software permite a nuestros clientes cumplir y superar los estrictos requisitos de privacidad y protección de datos exigidos a nivel global.",
    color: "cyan-palantir"
  },
  {
    id: "proactive",
    icon: Eye,
    title: "Evaluación Proactiva",
    shortDesc: "Defensa contra impactos adversos antes de trabajar.",
    fullDesc: "Creemos que la mejor defensa contra riesgos de impactos adversos en derechos humanos es entender firmemente a los clientes con los que trabajamos. Tenemos criterios específicos para industrias en las que trabajaremos, países donde no operaremos y limitaciones en las capacidades que construiremos en ciertas situaciones. Nos hemos retirado de oportunidades en el pasado donde no nos sentíamos cómodos con el trabajo que se estaba realizando.",
    color: "emerald-grid"
  },
  {
    id: "review",
    icon: FileSearch,
    title: "Revisión Constante",
    shortDesc: "Ingeniería de privacidad, ética y libertades civiles.",
    fullDesc: "La ingeniería de privacidad, ética y libertades civiles es una responsabilidad central de todos los empleados de Palantir. Todos reciben capacitación durante su integración y capacitaciones granulares para compromisos específicos de clientes. Esto incluye conceptos como minimización de datos en la práctica, privacidad por diseño y respeto por la propiedad de los datos del cliente.",
    color: "white"
  },
  {
    id: "reactive",
    icon: Scale,
    title: "Abordaje Reactivo",
    shortDesc: "Garantizando que el software se use para el bien.",
    fullDesc: "Palantir se identifica fuertemente con una responsabilidad omnipresente de esforzarse por garantizar que nuestro software se utilice para el bien. Esperamos que terceros, incluidos los clientes, respeten los derechos humanos en su uso de nuestros productos. Cuando somos informados de afirmaciones de mal uso de los productos, exploraremos todos los medios a nuestra disposición, incluyendo la terminación de relaciones.",
    color: "amber-warning"
  }
];

export default function BentoGridRiskMitigation() {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 max-w-6xl mx-auto relative">
      <div className="text-center mb-10 shrink-0">
        <h2 className="text-4xl font-bold mb-4 text-white">Mitigación de Riesgos</h2>
        <p className="text-text-muted text-sm max-w-2xl mx-auto">
          Enfoque de 4 dimensiones para proteger las libertades fundamentales en cada despliegue. Haz clic en un pilar para inspeccionar.
        </p>
      </div>

      {/* Horizontal Flex Grid */}
      <div className="flex flex-col md:flex-row gap-4 w-full h-[350px]">
        {PILLARS.map((pillar) => (
          <motion.div
            key={pillar.id}
            layoutId={`card-${pillar.id}`}
            onClick={() => setActivePillar(pillar.id)}
            whileHover={{ scale: 0.98 }}
            className="flex-1 glassmorphism rounded-3xl border border-white/10 p-6 flex flex-col cursor-pointer relative overflow-hidden group hover:border-cyan-palantir/50 transition-colors bg-slate-void/60"
          >
            <motion.div layoutId={`icon-${pillar.id}`} className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center mb-6 group-hover:bg-cyan-palantir/10 group-hover:border-cyan-palantir/30 group-hover:text-cyan-palantir transition-colors text-white">
              <pillar.icon className="w-6 h-6" />
            </motion.div>
            <motion.h3 layoutId={`title-${pillar.id}`} className="text-xl font-bold text-white mb-2">{pillar.title}</motion.h3>
            <p className="text-text-muted text-sm line-clamp-3">{pillar.shortDesc}</p>
          </motion.div>
        ))}
      </div>

      {/* Expanded Modal Overlay */}
      <AnimatePresence>
        {activePillar && (
          <div className="absolute inset-0 z-50 flex items-center justify-center p-8 bg-obsidian/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 cursor-pointer"
              onClick={() => setActivePillar(null)}
            />
            {PILLARS.map(pillar => pillar.id === activePillar && (
              <motion.div
                key={pillar.id}
                layoutId={`card-${pillar.id}`}
                className="relative z-10 glassmorphism bg-slate-void border border-white/20 rounded-3xl p-10 max-w-2xl w-full shadow-2xl"
              >
                <button 
                  onClick={() => setActivePillar(null)}
                  className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>

                <motion.div layoutId={`icon-${pillar.id}`} className="w-16 h-16 rounded-2xl border border-cyan-palantir/30 bg-cyan-palantir/10 flex items-center justify-center mb-6 text-cyan-palantir">
                  <pillar.icon className="w-8 h-8" />
                </motion.div>
                
                <motion.h3 layoutId={`title-${pillar.id}`} className="text-3xl font-bold text-white mb-6">
                  {pillar.title}
                </motion.h3>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, ease: "easeOut" }}
                >
                  <p className="text-text-primary text-base leading-relaxed">
                    {pillar.fullDesc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
