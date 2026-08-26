# Scroll Reveals & Animation Orchestration

## 1. High Performance IntersectionObserver Reveal Engine

```css
.reveal-init {
  opacity: 0;
  transform: translateY(28px) scale(0.98);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

.reveal-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}
```

```javascript
function initScrollReveals() {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal-init').forEach((el, index) => {
    // Add staggered delay if child of a grid
    const stagger = el.dataset.stagger || (index % 4) * 80;
    el.style.transitionDelay = `${stagger}ms`;
    observer.observe(el);
  });
}
```

## 2. Animated Number Counter (Telemetry style)
```javascript
function animateCounter(el, targetNumber, duration = 1500) {
  let startTimestamp = null;
  const startNumber = 0;

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    // Ease out cubic
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(ease * (targetNumber - startNumber) + startNumber);

    el.textContent = current.toLocaleString();

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      el.textContent = targetNumber.toLocaleString();
    }
  };

  window.requestAnimationFrame(step);
}
```
