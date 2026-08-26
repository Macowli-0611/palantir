# Bento Grid Architecture

Bento grids organize complex dashboards and feature showcases into visually dynamic, modular cards with varying spans.

## HTML Structure
```html
<div class="bento-grid">
  <!-- Card 1: Large Featured (Spans 2 cols, 2 rows) -->
  <div class="bento-card bento-hero">
    <div class="bento-glow"></div>
    <div class="bento-badge">FEATURED // MATRIX_01</div>
    <h3>Hyper-Dimensional Compute</h3>
    <p>Autonomous neural cluster orchestration running at 400 TFLOPS.</p>
    <div class="bento-visual">
      <div class="radar-scan"></div>
    </div>
  </div>

  <!-- Card 2: Medium Top -->
  <div class="bento-card bento-wide">
    <div class="bento-badge">REAL-TIME METRICS</div>
    <h3>Sub-millisecond latency</h3>
    <div class="metric-display">
      <span class="metric-num">0.42</span><span class="metric-unit">ms</span>
    </div>
  </div>

  <!-- Card 3: Standard -->
  <div class="bento-card">
    <div class="bento-badge">SECURITY</div>
    <h3>Zero-Trust Enclave</h3>
    <p>Hardware-isolated cryptographic verification.</p>
  </div>

  <!-- Card 4: Standard -->
  <div class="bento-card">
    <div class="bento-badge">SYNC</div>
    <h3>Instant Global Mesh</h3>
    <p>Edge replication across 35 regions.</p>
  </div>
</div>
```

## CSS Grid Layout
```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.bento-card {
  position: relative;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.bento-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 242, 254, 0.1);
}

.bento-hero {
  grid-column: span 2;
  grid-row: span 2;
  min-height: 420px;
}

.bento-wide {
  grid-column: span 1;
}

@media (max-width: 900px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }
  .bento-hero, .bento-wide {
    grid-column: span 1;
    grid-row: span 1;
  }
}
```
