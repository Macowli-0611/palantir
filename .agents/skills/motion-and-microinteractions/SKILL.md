---
name: motion-and-microinteractions
description: >-
  Advanced UI motion design, spring physics, dynamic cursor spotlights, 3D tilt cards,
  liquid transitions, and scroll reveal animations for ultra-responsive web interfaces.
  Use this skill whenever creating rich micro-animations, interactive components, hover states,
  or dynamic transitions that elevate UI feel.
---

# Motion & Micro-interactions Skill

This skill guides the implementation of tactile, fluid micro-interactions and motion choreography that make websites feel alive, responsive, and tactile.

## Principles of Modern UI Motion

1. **Physical Continuity (Springs over Ease-in-Out)**: Natural deceleration using spring cubic-bezier curves (`cubic-bezier(0.16, 1, 0.3, 1)` or `cubic-bezier(0.34, 1.56, 0.64, 1)` for bouncy micro-pops).
2. **Contextual Feedback**: Every user interaction (hover, press, focus, scroll) provides immediate, satisfying visual feedback.
3. **Layered Parallax & 3D Spatial Tilt**: Elements respond to the user's cursor angle in real-time, producing realistic 3D depth without bulky 3D engine overhead.
4. **Staggered Orchestration**: When lists or grids load, items fade and slide in with a 40ms–80ms progressive delay.

---

## Detailed References

- [Physics & Cursor Interactions](./references/physics_interactions.md): 3D Perspective Tilt Card, Magnetic Hover Buttons, Cursor Follower Glow.
- [Scroll Reveals & Orchestration](./references/scroll_reveals.md): High-performance IntersectionObserver orchestrators, Staggered Grid reveals, and Number Roll counters.

---

## Quick Example: 3D Perspective Tilt Card
```javascript
function attach3DTilt(element, maxTiltDeg = 12) {
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -maxTiltDeg;
    const rotateY = ((x - centerX) / centerX) * maxTiltDeg;

    element.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  element.addEventListener('mouseleave', () => {
    element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
}
```
