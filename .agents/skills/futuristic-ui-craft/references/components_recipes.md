# Futuristic Component Recipes

Ready-to-use HTML & CSS patterns for creating modern, high-impact UI elements.

## 1. Border Beam Animated Card
Creates an energetic light ray that travels along the perimeter of the card.

```html
<div class="border-beam-card">
  <div class="beam-glow"></div>
  <div class="card-content">
    <div class="badge"><span class="pulse-dot"></span>SYS.ONLINE // 99.8%</div>
    <h3>Quantum Neural Layer</h3>
    <p>Real-time telemetry inference with sub-millisecond hyper-thread execution.</p>
    <button class="btn-cyber">INITIALIZE PROTOCOL</button>
  </div>
</div>
```

```css
.border-beam-card {
  position: relative;
  padding: 1px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  overflow: hidden;
}

.beam-glow {
  position: absolute;
  top: -50%; left: -50%;
  width: 200%; height: 200%;
  background: conic-gradient(
    transparent 0deg,
    rgba(0, 242, 254, 0.8) 60deg,
    rgba(255, 0, 127, 0.8) 120deg,
    transparent 180deg
  );
  animation: rotateBeam 6s linear infinite;
}

@keyframes rotateBeam {
  100% { transform: rotate(360deg); }
}

.border-beam-card .card-content {
  position: relative;
  background: #090d16;
  border-radius: 19px;
  padding: 2.5rem;
  z-index: 1;
}
```

## 2. Cyber Chamfer Button with Neon Glow
```html
<button class="btn-cyber">
  <span class="btn-glitch">DEPLOY SYSTEM</span>
  <span class="btn-corner-tl"></span>
  <span class="btn-corner-br"></span>
</button>
```

```css
.btn-cyber {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 2rem;
  background: linear-gradient(135deg, rgba(0, 242, 254, 0.15), rgba(139, 92, 246, 0.15));
  border: 1px solid var(--accent-cyan);
  color: #fff;
  font-family: var(--font-display, sans-serif);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  clip-path: polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px);
  cursor: pointer;
  box-shadow: 0 0 20px var(--accent-cyan-glow);
  transition: all 0.25s var(--ease-spring);
}

.btn-cyber:hover {
  background: var(--accent-cyan);
  color: #030712;
  box-shadow: 0 0 35px var(--accent-cyan), 0 0 10px #fff;
  transform: translateY(-2px);
}
```

## 3. Data Telemetry HUD Badge
```html
<div class="hud-badge">
  <span class="hud-icon">⚡</span>
  <span class="hud-label">FPS:</span>
  <span class="hud-value">120.00</span>
  <span class="hud-status live"></span>
</div>
```

```css
.hud-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(0, 242, 254, 0.3);
  border-radius: 6px;
  font-family: var(--font-mono, monospace);
  font-size: 0.75rem;
  color: var(--text-cyan);
  box-shadow: inset 0 0 10px rgba(0, 242, 254, 0.1);
}

.hud-status.live {
  width: 6px;
  height: 6px;
  background: var(--accent-emerald);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--accent-emerald);
  animation: hudPulse 1.5s infinite;
}

@keyframes hudPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.8); }
}
```
