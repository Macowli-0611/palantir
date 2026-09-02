"use client";
import React from "react";
import { Users, Globe2, Shield } from "lucide-react";
import { motion } from "framer-motion";

const GOVERNANCE = [
  {
    id: "pcl",
    icon: Shield,
    title: "Equipo PCL",
    acronym: "Privacy and Civil Liberties",
    subtitle: "Privacidad y Libertades Civiles",
    desc: "Compuesto por abogados, ingenieros y científicos sociales. El equipo se enfoca en incorporar proactivamente la privacidad, la ética y los principios de derechos humanos directamente en los productos que ofrecemos y en las oportunidades que Palantir persigue.",
    color: "cyan-palantir"
  },
  {
    id: "pcap",
    icon: Users,
    title: "Consejo Asesor (PCAP)",
    acronym: "Privacy & Civil Liberties Advisory Panel",
    subtitle: "Panel Asesor Independiente",
    desc: "Un grupo de expertos internacionales independientes en derecho de privacidad, libertades civiles en tecnología, políticas y ética que nos ayudan a comprender y abordar los problemas complejos que encontramos en el curso de nuestro trabajo.",
    color: "emerald-grid"
  },
  {
    id: "ngo",
    icon: Globe2,
    title: "Alianzas Humanitarias",
    acronym: "Misiones sobre el terreno",
    subtitle: "Aplicación y Respuesta Global",
    desc: "Nuestros productos son desplegados sobre el terreno por organizaciones como Polaris, C4ADS y otras entidades sin fines de lucro cuyas misiones dedicadas se centran en preservar y mejorar los derechos a la seguridad, la libertad frente al hambre y la esclavitud.",
    color: "amber-warning"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 25 }
  }
};

export default function GovernanceSection() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-8 max-w-6xl mx-auto">
      <div className="text-center mb-10 shrink-0">
        <h2 className="text-4xl font-bold mb-4 text-white">Gobernanza Institucional</h2>
        <p className="text-text-muted text-sm max-w-2xl mx-auto">
          Auditoría estructural de derechos humanos, incrustada en cada capa de nuestro ciclo de vida.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
      >
        {GOVERNANCE.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="glassmorphism border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col bg-slate-void/90 hover:bg-slate-void transition-colors group relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-cyan-palantir/50 transition-colors z-30"></div>
            
            <div className="relative z-20 w-12 h-12 rounded-xl border border-white/10 bg-obsidian/80 backdrop-blur-md flex items-center justify-center mb-6 group-hover:border-cyan-palantir/50 group-hover:bg-cyan-palantir/20 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <item.icon className="w-6 h-6 text-white group-hover:text-cyan-palantir transition-colors" />
            </div>
            
            <div className="relative z-20">
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-palantir transition-colors">{item.title}</h3>
              {item.acronym && (
                <div className="inline-block px-2.5 py-0.5 rounded-md bg-cyan-palantir/10 border border-cyan-palantir/20 text-[10px] md:text-xs font-mono text-cyan-palantir mb-2">
                  {item.acronym}
                </div>
              )}
              <span className="text-[10px] md:text-xs font-mono uppercase text-text-muted group-hover:text-cyan-palantir/80 tracking-widest block mb-4 md:mb-5 transition-colors">{item.subtitle}</span>
              
              <p className="text-xs md:text-sm text-text-primary leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
