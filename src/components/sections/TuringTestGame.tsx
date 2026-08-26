"use client";
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { ShieldAlert, ShieldCheck, Database, RefreshCcw, Gamepad2, ArrowLeft, ArrowRight } from "lucide-react";

type Question = {
  id: number;
  text: string;
  type: "broker" | "palantir";
  explanation: string;
};

const QUESTIONS: Question[] = [
  { id: 1, text: "Vender bases de datos de usuarios a anunciantes de terceros para microsegmentación política.", type: "broker", explanation: "Palantir no es un agregador de datos. Nunca vendemos datos personales." },
  { id: 2, text: "Construir software donde los registros de auditoría (logs) son inmutables y no pueden ser alterados ni por administradores.", type: "palantir", explanation: "Esto asegura la responsabilidad y es el núcleo de nuestra Privacidad por Diseño." },
  { id: 3, text: "Entrenar modelos de IA propietarios usando los datos confidenciales de salud de una ONG cliente, para luego vender esa IA a aseguradoras.", type: "broker", explanation: "Cero Monetización: Los datos de un cliente son estrictamente suyos. No reutilizamos datos para entrenar modelos externos." },
  { id: 4, text: "Retirarse proactivamente de un contrato gubernamental millonario al descubrir riesgos severos de violaciones a derechos humanos.", type: "palantir", explanation: "Evaluación Proactiva: Hemos rechazado oportunidades donde el trabajo no nos resulta éticamente cómodo." },
  { id: 5, text: "Implementar controles de acceso donde cada analista solo puede ver exactamente la fila de datos que su autorización legal permite.", type: "palantir", explanation: "Llamado control de acceso granular, esencial para proteger libertades civiles en misiones de inteligencia." },
  { id: 6, text: "Diseñar un sistema que absorbe datos globales de redes sociales para vender perfiles psicológicos sin consentimiento.", type: "broker", explanation: "Este modelo de negocio masivo y extractivo va en contra del enfoque de infraestructura soberana de Palantir." },
  { id: 7, text: "Tener un Consejo Asesor de Privacidad y Libertades Civiles (PCAP) independiente revisando los casos de uso del software.", type: "palantir", explanation: "Gobernanza Institucional: Sometemos nuestros despliegues a escrutinio de expertos externos." },
  { id: 8, text: "Ofrecer 'Software como Servicio' donde el proveedor mantiene la propiedad legal de toda la información procesada.", type: "broker", explanation: "Falso. En el modelo de Palantir, el cliente SIEMPRE retiene el control legal absoluto de sus datos." },
  { id: 9, text: "Colaborar con organizaciones sin fines de lucro (ej. Polaris) para combatir la esclavitud moderna usando el software.", type: "palantir", explanation: "Alianzas Humanitarias: Nuestro software se utiliza activamente para proteger libertades fundamentales." },
  { id: 10, text: "Ocultar las vulnerabilidades del producto y lanzar versiones beta en misiones de seguridad crítica para ahorrar costos.", type: "broker", explanation: "Ingeniería Ética: En Palantir, la seguridad y mitigación de impactos se evalúan rigurosamente ANTES del despliegue." }
];

export default function TuringTestGame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [feedback, setFeedback] = useState<"success" | "error" | null>(null);
  
  const x = useMotionValue(0);
  
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const opacityBroker = useTransform(x, [-150, -50], [1, 0]);
  const opacityPalantir = useTransform(x, [50, 150], [0, 1]);
  const cardScale = useTransform(x, [-200, 0, 200], [0.95, 1, 0.95]);

  const textOpacityBroker = useTransform(x, [-150, 0, 150], [1, 0.3, 0]);
  const textOpacityPalantir = useTransform(x, [-150, 0, 150], [0, 0.3, 1]);

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 100;
    const currentQ = QUESTIONS[currentIndex];
    
    if (info.offset.x < -swipeThreshold) {
      checkAnswer("broker", currentQ);
    } else if (info.offset.x > swipeThreshold) {
      checkAnswer("palantir", currentQ);
    }
  };

  const checkAnswer = (choice: "broker" | "palantir", question: Question) => {
    if (choice === question.type) {
      setScore(s => s + 1);
      setFeedback("success");
    } else {
      setFeedback("error");
    }

    setTimeout(() => {
      setFeedback(null);
      if (currentIndex < QUESTIONS.length - 1) {
        setCurrentIndex(i => i + 1);
      } else {
        setGameOver(true);
      }
    }, 2000); // Dar tiempo para ver la animación y la tarjeta
  };

  const restartGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setGameOver(false);
    setFeedback(null);
    x.set(0);
  };

  return (
    <>
      {/* Alerta Roja en los Bordes de la Página (Error) */}
      <AnimatePresence>
        {feedback === "error" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-[9999] border-[16px] border-red-600/90 shadow-[inset_0_0_250px_rgba(220,38,38,0.9)] bg-red-900/10"
          />
        )}
      </AnimatePresence>

      <motion.div 
        animate={feedback === "error" ? { x: [-20, 20, -15, 15, -10, 10, -5, 5, 0], transition: { duration: 0.5 } } : {}}
        className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8 max-w-6xl mx-auto relative overflow-hidden"
      >
        {/* Header Simplificado */}
        <div className="text-center mb-8 shrink-0 w-full max-w-2xl mx-auto z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-palantir/10 border border-cyan-palantir/30 text-xs text-cyan-palantir uppercase tracking-widest font-mono mb-4 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
            <Gamepad2 className="w-4 h-4" /> Simulador de Auditoría
          </div>
          <h2 className="text-4xl font-bold mb-2 text-white">El Test de Turing de Datos</h2>
          <p className="text-text-muted text-sm max-w-lg mx-auto">
            Desliza la tarjeta hacia el lado correcto según la filosofía de Palantir.
          </p>
        </div>

        <div className="flex-1 w-full flex items-center justify-center relative perspective-1000">
          
          {/* Instructivos Laterales Gigantes (Relativos a toda la pantalla) */}
          {!gameOver && (
            <>
              <motion.div 
                style={{ opacity: textOpacityBroker }} 
                className="absolute left-0 lg:left-10 top-0 bottom-0 z-0 flex flex-col items-start justify-center pointer-events-none w-1/3"
              >
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <ArrowLeft className="w-12 h-12 md:w-20 md:h-20 text-red-500 animate-pulse" />
                  <div className="hidden sm:block text-center md:text-left">
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-red-500 tracking-tighter drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]">DATA BROKER</h3>
                    <p className="text-red-400 font-mono text-xs md:text-sm uppercase mt-1">Práctica Ilegal</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                style={{ opacity: textOpacityPalantir }} 
                className="absolute right-0 lg:right-10 top-0 bottom-0 z-0 flex flex-col items-end justify-center pointer-events-none w-1/3"
              >
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="hidden sm:block text-center md:text-right">
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-cyan-palantir tracking-tighter drop-shadow-[0_0_20px_rgba(0,229,255,0.5)]">MODELO PALANTIR</h3>
                    <p className="text-cyan-palantir font-mono text-xs md:text-sm uppercase mt-1">Práctica Segura</p>
                  </div>
                  <ArrowRight className="w-12 h-12 md:w-20 md:h-20 text-cyan-palantir animate-pulse" />
                </div>
              </motion.div>
            </>
          )}

          {/* Contenedor central restrictivo para las tarjetas */}
          <div className="w-full max-w-sm md:max-w-md relative flex items-center justify-center h-full max-h-[400px]">
            
            {/* Contadores */}
            {!gameOver && (
              <div className="absolute -top-10 w-full flex justify-center items-center px-4 font-mono text-xs z-20">
                <span className="text-white px-4 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">RECORD: {currentIndex + 1}/{QUESTIONS.length}</span>
              </div>
            )}

            {/* Celebración de Pirotecnia Mejorada (Más alcance, más cantidad) */}
            <AnimatePresence>
              {feedback === "success" && (
                <motion.div 
                  initial={{ opacity: 1 }} exit={{ opacity: 0 }} 
                  className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
                >
                  {/* Rayos láser horizontales (más largos y brillantes) */}
                  <motion.div
                    initial={{ scaleX: 0, opacity: 1 }}
                    animate={{ scaleX: 1, opacity: 0, x: -800 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute right-1/2 h-2 w-[400px] origin-right bg-gradient-to-l from-cyan-palantir to-transparent shadow-[0_0_30px_#00E5FF]"
                  />
                  <motion.div
                    initial={{ scaleX: 0, opacity: 1 }}
                    animate={{ scaleX: 1, opacity: 0, x: 800 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute left-1/2 h-2 w-[400px] origin-left bg-gradient-to-r from-cyan-palantir to-transparent shadow-[0_0_30px_#00E5FF]"
                  />
                  {/* Chispas Izquierda (20 partículas de gran alcance) */}
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={`spark-l-${i}`}
                      initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                      animate={{ 
                        scale: [0, Math.random() * 2 + 1, 0],
                        x: -300 - Math.random() * 800,
                        y: -400 + Math.random() * 800,
                      }}
                      transition={{ duration: 0.8 + Math.random() * 1.5, ease: "easeOut" }}
                      className="absolute w-3 h-1 rounded-full bg-cyan-palantir shadow-[0_0_25px_#00E5FF]"
                    />
                  ))}
                  {/* Chispas Derecha (20 partículas de gran alcance) */}
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={`spark-r-${i}`}
                      initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                      animate={{ 
                        scale: [0, Math.random() * 2 + 1, 0],
                        x: 300 + Math.random() * 800,
                        y: -400 + Math.random() * 800,
                      }}
                      transition={{ duration: 0.8 + Math.random() * 1.5, ease: "easeOut" }}
                      className="absolute w-3 h-1 rounded-full bg-cyan-palantir shadow-[0_0_25px_#00E5FF]"
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="popLayout">
              {!gameOver ? (
                <motion.div
                  key={QUESTIONS[currentIndex].id}
                  initial={{ scale: 0.8, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="absolute z-10 w-full aspect-[3/4]"
                >
                  {/* Tarjeta Arrastrable (Deshabilita arrastre si hay feedback) */}
                  <motion.div
                    drag={feedback === null ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={handleDragEnd}
                  style={{ x, rotate, scale: cardScale }}
                  className="w-full h-full glassmorphism rounded-3xl border border-white/10 bg-slate-void/90 p-8 flex flex-col items-center justify-center text-center cursor-grab active:cursor-grabbing shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden"
                >
                  {/* Capas de Color Dinámicas */}
                  <motion.div style={{ opacity: opacityBroker }} className="absolute inset-0 bg-red-500/20 pointer-events-none" />
                  <motion.div style={{ opacity: opacityPalantir }} className="absolute inset-0 bg-cyan-palantir/20 pointer-events-none" />

                  <Database className="w-12 h-12 text-white/50 mb-8" />
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                    "{QUESTIONS[currentIndex].text}"
                  </h3>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="gameover"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glassmorphism rounded-3xl border border-cyan-palantir/30 bg-slate-void/90 p-10 flex flex-col items-center text-center w-full z-20 absolute"
              >
                <div className="w-20 h-20 rounded-full border-2 border-cyan-palantir flex items-center justify-center bg-cyan-palantir/10 mb-6">
                  <ShieldCheck className="w-10 h-10 text-cyan-palantir" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Reporte Finalizado</h3>
                <p className="text-text-muted mb-6">Auditoría procesada.</p>
                
                <div className="text-6xl font-black text-cyan-palantir mb-2">{score}/{QUESTIONS.length}</div>
                <p className="text-sm font-mono text-white/50 uppercase tracking-widest mb-8">Puntuación PCL</p>

                <button 
                  onClick={restartGame}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-cyan-palantir hover:text-obsidian text-white border border-white/20 hover:border-cyan-palantir rounded-xl font-bold transition-all"
                >
                  <RefreshCcw className="w-5 h-5" /> REINICIAR
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </motion.div>
    </>
  );
}
