# Modern Typography Pairing

## Recommended Google Fonts Imports
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;900&family=Space+Grotesk:wght@400;600;700&family=JetBrains+Mono:wght@400;500;700&family=Syne:wght@700;800&display=swap" rel="stylesheet">
```

## Typography Scale & Hierarchy

| Element | Font Family | Weight | Letter Spacing | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Title (`h1`)** | `Syne` or `Outfit` | 800-900 | `-0.03em` | Massive visual hook with gradient text fill |
| **Section Title (`h2`)** | `Space Grotesk` | 700 | `-0.02em` | Structured modern headers |
| **Card Title (`h3`)** | `Outfit` | 600 | `-0.01em` | Clean legibility |
| **Body Text (`p`)** | `Outfit` / `Inter` | 400 | `0` | Comfortable reading with `line-height: 1.7` |
| **Tech Badge / Label** | `JetBrains Mono` | 500-700 | `0.1em` | Monospaced technical aesthetics (uppercase) |

## Gradient Text Recipe
```css
.text-gradient {
  background: linear-gradient(135deg, #ffffff 30%, rgba(255, 255, 255, 0.4) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-gradient-neon {
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 50%, #ff007f 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```
