"use client";
import React, { useState } from "react";
import { Lock, Send, ShieldCheck, Loader2, ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnonymousReportForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successCode, setSuccessCode] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    category: "PRIVACY_VIOLATION",
    entityInvolved: "",
    description: "",
    isAnonymous: true,
    contactEmail: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: formData.category,
          entityInvolved: formData.entityInvolved,
          description: formData.description,
          contactEmail: formData.isAnonymous ? undefined : formData.contactEmail,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccessCode(data.trackingCode);
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error(error);
      alert("Error crítico del servidor.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-10 shrink-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-warning/10 border border-amber-warning/20 text-amber-warning mb-4">
            <Lock className="w-4 h-4" />
            <span className="text-sm font-mono tracking-widest uppercase">Canal Seguro</span>
          </div>
          <h2 className="text-4xl font-bold mb-2 text-white">Portal de Denuncias Éticas</h2>
          <p className="text-text-muted text-sm max-w-xl mx-auto">
            Envía un informe confidencial sobre violaciones de derechos humanos. Partes externas impactadas también pueden reportar a <a href="mailto:HumanRights@palantir.com" className="text-cyan-palantir hover:underline">HumanRights@palantir.com</a>.
          </p>
        </div>

        <div className="glassmorphism rounded-3xl p-8 relative overflow-hidden min-h-[400px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {!successCode ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit} 
                className="relative z-10 h-full flex flex-col"
              >
                {/* Progress Bar */}
                <div className="flex gap-2 mb-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${step >= i ? 'bg-cyan-palantir' : 'bg-white/10'}`} />
                  ))}
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-xs font-mono text-text-mono uppercase">Categoría de la Violación</label>
                          <select 
                            value={formData.category}
                            onChange={e => setFormData({...formData, category: e.target.value})}
                            className="w-full bg-slate-void/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-palantir/50 transition-colors appearance-none"
                          >
                            <option value="PRIVACY_VIOLATION">Violación de Privacidad (UDHR Art. 12)</option>
                            <option value="MODERN_SLAVERY">Esclavitud Moderna / Trata</option>
                            <option value="PRODUCT_MISUSE">Mal Uso del Producto</option>
                            <option value="DISCRIMINATION">Discriminación Algorítmica</option>
                            <option value="OTHER">Otra Preocupación Ética</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-mono text-text-mono uppercase">Entidad Involucrada</label>
                          <input 
                            required
                            type="text" 
                            placeholder="Organización, proyecto, o departamento"
                            value={formData.entityInvolved}
                            onChange={e => setFormData({...formData, entityInvolved: e.target.value})}
                            className="w-full bg-slate-void/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-palantir/50 transition-colors placeholder:text-white/20"
                          />
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-xs font-mono text-text-mono uppercase">Descripción Técnica</label>
                          <textarea 
                            required
                            rows={5}
                            placeholder="Proporciona detalles específicos, contexto técnico..."
                            value={formData.description}
                            onChange={e => setFormData({...formData, description: e.target.value})}
                            className="w-full bg-slate-void/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-palantir/50 transition-colors placeholder:text-white/20 resize-none"
                          ></textarea>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                        <label className="flex items-center gap-4 cursor-pointer group p-4 border border-white/10 rounded-xl hover:border-cyan-palantir/50 transition-all">
                          <div className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${formData.isAnonymous ? 'bg-cyan-palantir border-cyan-palantir' : 'bg-transparent border-white/20'}`}>
                            {formData.isAnonymous && <ShieldCheck className="w-4 h-4 text-obsidian" />}
                          </div>
                          <input 
                            type="checkbox" 
                            className="hidden" 
                            checked={formData.isAnonymous}
                            onChange={() => setFormData({...formData, isAnonymous: !formData.isAnonymous})}
                          />
                          <div>
                            <span className="block text-sm font-bold text-white">Enviar Anónimamente</span>
                            <span className="block text-xs text-text-muted mt-1">Cero retención de PII en nuestros registros.</span>
                          </div>
                        </label>

                        {!formData.isAnonymous && (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-2">
                            <input 
                              type="email" 
                              placeholder="contacto@correo.seguro (Opcional)"
                              value={formData.contactEmail}
                              onChange={e => setFormData({...formData, contactEmail: e.target.value})}
                              className="w-full bg-slate-void/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-palantir/50 transition-colors placeholder:text-white/20"
                            />
                          </motion.div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex justify-between mt-8 pt-4 border-t border-white/10">
                  {step > 1 ? (
                    <button type="button" onClick={() => setStep(step - 1)} className="flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors">
                      <ArrowLeft className="w-4 h-4" /> Atras
                    </button>
                  ) : <div></div>}
                  
                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-obsidian font-bold rounded-xl hover:bg-cyan-palantir transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> ENCRIPTANDO...</>
                    ) : step < 3 ? (
                      <>Continuar <ArrowRight className="w-4 h-4" /></>
                    ) : (
                      <><Send className="w-4 h-4" /> ENVIAR A PCL</>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center relative z-10 flex flex-col items-center justify-center h-full"
              >
                <div className="w-16 h-16 bg-emerald-grid/20 border border-emerald-grid/50 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <ShieldCheck className="w-8 h-8 text-emerald-grid" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Reporte Criptográficamente Asegurado</h3>
                <p className="text-text-muted mb-8 text-sm">Tu envío ha sido registrado de forma segura con el Equipo PCL.</p>
                
                <div className="bg-slate-void/80 border border-white/10 p-6 rounded-2xl w-full max-w-sm relative overflow-hidden mb-8">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-palantir to-transparent opacity-50"></div>
                  <span className="block text-xs font-mono text-text-mono uppercase mb-2">Hash de Seguimiento (Guarda esto)</span>
                  <div className="text-xl font-mono text-cyan-palantir tracking-wider break-all">
                    {successCode}
                  </div>
                </div>
                
                <button 
                  onClick={() => { setSuccessCode(null); setStep(1); setFormData({...formData, description: "", entityInvolved: ""}); }}
                  className="text-sm text-text-muted hover:text-white transition-colors"
                >
                  Enviar otro reporte
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
