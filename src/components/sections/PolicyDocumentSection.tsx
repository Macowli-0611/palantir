"use client";
import React, { useState } from "react";
import { BookOpen, Link as LinkIcon, Download, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CHAPTERS = [
  { id: "proposito", title: "Propósito y Alcance" },
  { id: "politica", title: "Política de Derechos Humanos" },
  { id: "mision", title: "Misión y Valores (La Tensión)" },
  { id: "incorporacion", title: "Incorporación en el Negocio" },
  { id: "expectativas", title: "Expectativas y Limitaciones" },
  { id: "recursos", title: "Recursos de Apoyo" }
];

export default function PolicyDocumentSection() {
  const [activeChapter, setActiveChapter] = useState(CHAPTERS[0].id);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-5xl h-full max-h-[700px] flex flex-col glassmorphism rounded-3xl border border-white/10 overflow-hidden relative bg-slate-void/90 shadow-2xl">
        
        {/* Header Fijo */}
        <div className="shrink-0 p-6 border-b border-white/10 flex justify-between items-center bg-obsidian/50 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-cyan-palantir" />
            <div>
              <h2 className="text-xl font-bold text-white">Manifiesto Oficial Completo</h2>
              <span className="text-xs font-mono text-text-muted">Palantir Human Rights Policy (v2023)</span>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-white transition-colors">
            <Download className="w-4 h-4" /> PDF Original
          </button>
        </div>

        {/* Layout Split */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Menu Lateral de Capítulos */}
          <div className="w-1/3 border-r border-white/10 p-4 flex flex-col gap-2 overflow-y-auto custom-scrollbar bg-white/[0.02]">
            {CHAPTERS.map(chapter => (
              <button
                key={chapter.id}
                onClick={() => setActiveChapter(chapter.id)}
                className={`flex items-center justify-between p-4 rounded-xl text-left transition-all ${
                  activeChapter === chapter.id 
                  ? 'bg-cyan-palantir/10 border border-cyan-palantir/30 text-cyan-palantir' 
                  : 'bg-transparent border border-transparent text-text-muted hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="text-sm font-bold">{chapter.title}</span>
                {activeChapter === chapter.id && <ChevronRight className="w-4 h-4" />}
              </button>
            ))}
          </div>

          {/* Contenido del Capítulo */}
          <div className="w-2/3 p-8 overflow-y-auto custom-scrollbar relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {activeChapter === "proposito" && (
                  <section>
                    <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-palantir pl-4">Propósito</h3>
                    <p className="text-text-muted leading-relaxed text-sm mb-4">
                      Palantir Technologies Inc., junto con nuestras subsidiarias, se ha comprometido a defender los derechos humanos desde nuestra fundación en 2003. Hemos afirmado el derecho de todas las personas a la protección bajo la Declaración Universal de Derechos Humanos (UDHR) a través de nuestro trabajo durante los últimos veinte años.
                    </p>
                    <p className="text-text-muted leading-relaxed text-sm">
                      Nuestra base de clientes incluye ahora entidades comerciales, gubernamentales y sin fines de lucro en los sectores de defensa, inteligencia, salud y otras industrias. Junto con ese crecimiento, nuestro compromiso principal con la privacidad y las libertades civiles (piedras angulares de los derechos humanos) sigue siendo tan central para nuestra identidad como siempre.
                    </p>
                  </section>
                )}

                {activeChapter === "politica" && (
                  <section>
                    <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-palantir pl-4">Política de Derechos Humanos</h3>
                    <p className="text-text-muted leading-relaxed text-sm mb-4">
                      Palantir apoya los principios descritos en los Principios Rectores de la ONU, el Pacto Internacional de Derechos Civiles y Políticos, y la guía de derechos humanos establecida en las Directrices de la OCDE para Empresas Multinacionales. Apoyamos particularmente los derechos a la seguridad (UDHR Artículo 3), la privacidad (UDHR Artículo 12) y las libertades sin distinción (UDHR Artículo 2).
                    </p>
                    <div className="bg-emerald-grid/10 border border-emerald-grid/20 p-5 rounded-xl mb-4">
                      <h4 className="text-emerald-grid font-bold mb-2">Declaración de Esclavitud Moderna</h4>
                      <p className="text-text-muted leading-relaxed text-sm">
                        La esclavitud moderna es un crimen y una violación de los derechos humanos. Creemos que es esencial para nuestra misión ayudar en la erradicación de la esclavitud en la era moderna. Adoptamos prácticas que buscan eliminar la trata de personas en nuestras cadenas de suministro. Nuestro Modern Slavery Statement detalla cómo revisamos nuestras políticas laborales para abordar problemas de esclavitud moderna.
                      </p>
                    </div>
                    <p className="text-text-muted leading-relaxed text-sm">
                      Nos enorgullecemos de una cultura interna en la que las inquietudes se fomentan y expresan abiertamente. Nuestras políticas establecen métodos para que empleados puedan plantear preguntas de forma anónima, y prohibimos estrictamente represalias.
                    </p>
                  </section>
                )}

                {activeChapter === "mision" && (
                  <section>
                    <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-palantir pl-4">Misión y Valores (La Tensión Compleja)</h3>
                    <p className="text-text-muted leading-relaxed text-sm mb-4">
                      Reconocemos la complejidad de los derechos humanos y el potencial de que ciertos derechos existan en **tensión** con otros en los espacios donde operamos (por ejemplo, el conflicto entre la seguridad y la privacidad en misiones de defensa o inteligencia). Al aceptar estos matices, evitamos que estas tensiones se vuelvan mutuamente excluyentes y permitimos que las instituciones promuevan misiones difíciles.
                    </p>
                    <p className="text-text-muted leading-relaxed text-sm">
                      Justo como mejor protegemos la privacidad habilitando responsablemente misiones esenciales de seguridad, creemos que mejor aseguramos los derechos humanos al empoderar a instituciones globales legítimas que funcionan correctamente.
                    </p>
                  </section>
                )}

                {activeChapter === "incorporacion" && (
                  <section>
                    <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-palantir pl-4">Incorporación en Nuestro Negocio</h3>
                    <p className="text-text-muted leading-relaxed text-sm mb-4">
                      La debida diligencia de derechos humanos es parte de nuestra estructura a través del equipo PCL (Privacy and Civil Liberties), que incluye abogados, ingenieros y científicos sociales. Fomentamos la "privacidad por diseño" y creemos que cualquier decisión que afecte significativamente a individuos no debe quedar únicamente en manos de máquinas.
                    </p>
                    <p className="text-text-muted leading-relaxed text-sm">
                      Además, contamos con el PCAP (Consejo Asesor) y alianzas con organizaciones como Polaris y C4ADS para combatir delitos transnacionales y defender valores fundamentales de la UDHR.
                    </p>
                  </section>
                )}

                {activeChapter === "expectativas" && (
                  <section>
                    <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-palantir pl-4">Expectativas de los Socios y Limitaciones</h3>
                    <p className="text-text-muted leading-relaxed text-sm font-bold mb-4">
                      Palantir no es una empresa de datos ni un agregador; somos una empresa de software. Nuestros clientes son los dueños legales de sus datos. No recolectamos ni vendemos datos personales.
                    </p>
                    <p className="text-text-muted leading-relaxed text-sm">
                      Existen limitaciones legales, éticas y de privacidad en nuestra capacidad de monitorear proactivamente todas las acciones de nuestros clientes o aprovechar datos de los que son legalmente dueños dentro de los productos de Palantir. Por ende, la mejor defensa es incorporar la privacidad como pilar del producto, investigar proactivamente el riesgo antes de interactuar y evaluar cuidadosamente los nuevos casos de uso antes del despliegue.
                    </p>
                  </section>
                )}

                {activeChapter === "recursos" && (
                  <section>
                    <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-palantir pl-4">Recursos de Apoyo Adicionales</h3>
                    <p className="text-text-muted leading-relaxed text-sm mb-6">
                      Nuestra política global se basa en leyes de derechos humanos internacionales. Hemos desarrollado procesos de diligencia debida en base a:
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-palantir/50 transition-colors cursor-pointer group">
                        <LinkIcon className="w-4 h-4 text-cyan-palantir" />
                        <span className="text-sm text-white group-hover:text-cyan-palantir transition-colors">Principios Rectores de la ONU sobre Empresas y DD.HH.</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-palantir/50 transition-colors cursor-pointer group">
                        <LinkIcon className="w-4 h-4 text-cyan-palantir" />
                        <span className="text-sm text-white group-hover:text-cyan-palantir transition-colors">Declaración Universal de Derechos Humanos (UDHR)</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-palantir/50 transition-colors cursor-pointer group">
                        <LinkIcon className="w-4 h-4 text-cyan-palantir" />
                        <span className="text-sm text-white group-hover:text-cyan-palantir transition-colors">Directrices de la OCDE para Empresas Multinacionales</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-palantir/50 transition-colors cursor-pointer group">
                        <LinkIcon className="w-4 h-4 text-cyan-palantir" />
                        <span className="text-sm text-white group-hover:text-cyan-palantir transition-colors">Palantir's Modern Slavery Statement</span>
                      </div>
                    </div>
                  </section>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
