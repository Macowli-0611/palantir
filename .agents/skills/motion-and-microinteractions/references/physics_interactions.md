# Physics-Based Micro-Interactions

## 1. Magnetic Button
The button gently follows the cursor when the cursor is in its vicinity, creating an irresistible tactile magnetism.

```javascript
function makeMagnetic(btn, strength = 0.35) {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    btn.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0px, 0px)';
    btn.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
  });

  btn.addEventListener('mouseenter', () => {
    btn.style.transition = 'transform 0.1s ease-out';
  });
}
```

## 2. Dynamic Ambient Cursor Spotlight / Hover Glow
```css
.spotlight-surface {
  position: relative;
  overflow: hidden;
}

.spotlight-surface::after {
  content: '';
  position: absolute;
  top: var(--mouse-y, -500px);
  left: var(--mouse-x, -500px);
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.spotlight-surface:hover::after {
  opacity: 1;
}
```

```javascript
document.querySelectorAll('.spotlight-surface').forEach(surface => {
  surface.addEventListener('mousemove', e => {
    const rect = surface.getBoundingClientRect();
    surface.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    surface.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  });
});
```
