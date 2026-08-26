"use client";
import React from "react";
import { Users, Globe2, Shield } from "lucide-react";
import { motion } from "framer-motion";

const GOVERNANCE = [
  {
    id: "pcl",
    icon: Shield,
    title: "Equipo PCL",
    subtitle: "Privacidad y Libertades Civiles",
    desc: "Compuesto por abogados, ingenieros y científicos sociales. El equipo se enfoca en incorporar proactivamente la privacidad, la ética y los principios de derechos humanos directamente en los productos que ofrecemos y en las oportunidades que Palantir persigue.",
    color: "cyan-palantir"
  },
  {
    id: "pcap",
    icon: Users,
    title: "Consejo Asesor (PCAP)",
    subtitle: "Oversight Independiente",
    desc: "Un grupo de expertos internacionales independientes en derecho de privacidad, libertades civiles en tecnología, políticas y ética que nos ayudan a comprender y abordar los problemas complejos que encontramos en el curso de nuestro trabajo.",
    color: "emerald-grid"
  },
  {
    id: "ngo",
    icon: Globe2,
    title: "Alianzas Humanitarias",
    subtitle: "Aplicación sobre el terreno",
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
            className="glassmorphism border border-white/10 rounded-3xl p-8 flex flex-col bg-slate-void/80 hover:bg-slate-void transition-colors group relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-cyan-palantir/50 transition-colors"></div>
            
            <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center mb-6 group-hover:border-cyan-palantir/30 group-hover:bg-cyan-palantir/10 transition-colors">
              <item.icon className="w-6 h-6 text-white group-hover:text-cyan-palantir transition-colors" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
            <span className="text-xs font-mono uppercase text-cyan-palantir tracking-widest block mb-6">{item.subtitle}</span>
            
            <p className="text-sm text-text-primary leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
