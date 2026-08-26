---
name: futuristic-ui-craft
description: >-
  Expert guidelines, design tokens, shaders, and CSS/JS recipes for building futuristic,
  cyberpunk, sci-fi HUD/FUI, liquid glass, and high-tech web interfaces.
  Use this skill whenever creating or refining futuristic, dark mode, sci-fi, cyberpunk,
  tactile brutalist, or cutting-edge frontend web designs.
---

# Futuristic UI & High-Tech Frontend Craft

This skill equips the agent to craft hyper-polished, futuristic, and tech-forward web user interfaces that break away from mundane, cookie-cutter templates.

## Core Aesthetic Pillars

1. **Depth & Layering**: Deep dark canvases (`#030712`, `#050508`, `#0a0b10`), multi-layered radial glow backdrops, frosted liquid glass panels (`backdrop-filter: blur(16px)`), and 1px precision laser borders.
2. **Dynamic Glows & Shaders**: Interactive cursor spotlight tracking, animated border beams (`conic-gradient`), neon cyan/magenta/emerald chromatic accents, and subtle ambient particle mesh or SVG noise grain.
3. **Tactile Brutalism meets Cyberpunk**: Technical monospaced micro-labels (e.g. `SYS_READY // 01`, `[ACTIVE MATRIX]`), diagonal chamfer cuts (`clip-path: polygon(...)`), grid scanner overlays, and data-dense Bento layouts.
4. **Fluid Motion & Kinetic Feedback**: Smooth spring transforms, 3D card perspective tilt on mousemove, holographic shimmer effects on hover, and active telemetry counters.

---

## Directory Reference Guides

Consult the specialized references below for full code snippets and recipes:
- [Design Tokens & Theme Variables](./references/css_tokens.md): Complete CSS variable systems for futuristic neon, cyber-emerald, and deep void themes.
- [Component Recipes](./references/components_recipes.md): Copy-paste recipes for Glowing Bento Cards, Border Beam Boxes, Cyber Buttons, Liquid Glass Navbars, and HUD Telemetry badges.
- [Canvas & Shaders Effects](./references/canvas_effects.md): Lightweight zero-dependency JS canvas backgrounds for particle networks, cyber grid lines, and cursor spotlights.

---

## Quick Component Blueprint

### 1. The Liquid Glass & Border Beam Container
```css
.cyber-card {
  position: relative;
  background: rgba(13, 17, 23, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
}

.cyber-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.8), transparent);
  opacity: 0.7;
}

.cyber-card:hover {
  transform: translateY(-4px);
  border-color: rgba(56, 189, 248, 0.4);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(56, 189, 248, 0.15);
}
```

### 2. Micro-Interaction: Interactive Mouse Spotlight
```javascript
document.querySelectorAll('.cyber-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});
```

---

## When to Apply This Skill
- Any frontend project where the user requests a "futuristic", "cyberpunk", "sci-fi", "modern dark", "holographic", or "high-tech" look.
- When creating dashboards, Web3 platforms, AI agents/developer landing pages, or gaming hubs.
