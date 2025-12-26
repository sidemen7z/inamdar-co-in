# 🎨 Design System Quick Reference

## Color Palette

### Primary Colors
```css
--primary-navy: #0A2540      /* Main brand color */
--deep-navy: #1B3A5E         /* Darker variant */
--midnight-blue: #0F172A     /* Darkest blue */
--slate-grey: #4A5568        /* Neutral grey */
```

### Accent Colors
```css
--accent-blue: #2563EB       /* Primary accent */
--accent-blue-light: #3B82F6 /* Light variant */
--accent-teal: #0D9488       /* Secondary accent */
--accent-teal-light: #14B8A6 /* Light variant */
--accent-purple: #7C3AED     /* Tertiary accent */
--accent-gold: #F59E0B       /* Highlight color */
```

### Neutral Colors
```css
--white: #FFFFFF             /* Pure white */
--off-white: #F8FAFC         /* Subtle background */
--light-grey: #E2E8F0        /* Light grey */
--border-color: #CBD5E0      /* Border color */
```

### Text Colors
```css
--text-dark: #1A202C         /* Primary text */
--text-medium: #4A5568       /* Secondary text */
--text-light: #718096        /* Tertiary text */
--text-lighter: #A0AEC0      /* Subtle text */
```

---

## Gradients

### Primary Gradient
```css
--gradient-primary: linear-gradient(135deg, #0A2540 0%, #1B3A5E 50%, #2563EB 100%);
```
**Use for**: Backgrounds, hero sections, footer

### Accent Gradient
```css
--gradient-accent: linear-gradient(135deg, #2563EB 0%, #7C3AED 100%);
```
**Use for**: Buttons, icons, highlights

### Teal Gradient
```css
--gradient-teal: linear-gradient(135deg, #0D9488 0%, #14B8A6 100%);
```
**Use for**: Secondary CTAs, accents

### Gold Gradient
```css
--gradient-gold: linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%);
```
**Use for**: Special highlights, badges

### Overlay Gradient
```css
--gradient-overlay: linear-gradient(135deg, rgba(10, 37, 64, 0.95) 0%, rgba(37, 99, 235, 0.85) 100%);
```
**Use for**: Image overlays, hero backgrounds

---

## Shadows

### Small Shadow
```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
```
**Use for**: Cards, subtle elevation

### Medium Shadow
```css
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
```
**Use for**: Dropdowns, modals

### Large Shadow
```css
--shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.15);
```
**Use for**: Hover states, floating elements

### Extra Large Shadow
```css
--shadow-xl: 0 20px 50px rgba(0, 0, 0, 0.2);
```
**Use for**: Prominent elements, hero cards

### Glow Effects
```css
--shadow-glow: 0 0 30px rgba(37, 99, 235, 0.3);
--shadow-glow-teal: 0 0 30px rgba(13, 148, 136, 0.3);
```
**Use for**: Hover states, focus indicators

---

## Transitions

### Standard Transition
```css
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```
**Use for**: Most hover effects

### Smooth Transition
```css
--transition-smooth: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
```
**Use for**: Larger movements, fades

### Bounce Transition
```css
--transition-bounce: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
```
**Use for**: Playful interactions, icons

---

## Spacing System

```css
--spacing-xs: 0.5rem    /* 8px */
--spacing-sm: 1rem      /* 16px */
--spacing-md: 1.5rem    /* 24px */
--spacing-lg: 2rem      /* 32px */
--spacing-xl: 3rem      /* 48px */
--spacing-2xl: 4rem     /* 64px */
```

---

## Glassmorphism

### Glass Background
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);
```

### Utility Class
```css
.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
}
```

---

## Animations

### Fade In Up
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```
**Usage**: `.fade-in-up` class

### Slide In Left/Right
```css
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```
**Usage**: `.slide-in-left` or `.slide-in-right` class

### Scale In
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```
**Usage**: `.scale-in` class

### Float
```css
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}
```
**Usage**: `animation: float 3s ease-in-out infinite;`

### Shimmer
```css
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}
```
**Usage**: For light sweep effects

---

## Common Patterns

### Premium Button
```css
.premium-button {
  background: var(--gradient-accent);
  color: var(--white);
  padding: 18px 36px;
  border-radius: 12px;
  border: none;
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
  transition: var(--transition-smooth);
}

.premium-button:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 12px 35px rgba(37, 99, 235, 0.5);
}
```

### Glassmorphic Card
```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 40px;
  box-shadow: var(--shadow-lg);
}
```

### Gradient Text
```css
.gradient-text {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Hover Lift Effect
```css
.hover-lift {
  transition: var(--transition);
}

.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}
```

### Icon with Glow
```css
.icon-glow {
  background: var(--gradient-accent);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
  transition: var(--transition-bounce);
}

.icon-glow:hover {
  transform: scale(1.15) rotate(-5deg);
  box-shadow: 0 12px 35px rgba(37, 99, 235, 0.5);
}
```

---

## Typography Scale

### Headings
```css
h1 { font-size: 3.5rem; font-weight: 800; }
h2 { font-size: 3rem; font-weight: 700; }
h3 { font-size: 2.5rem; font-weight: 700; }
h4 { font-size: 2rem; font-weight: 600; }
h5 { font-size: 1.5rem; font-weight: 600; }
h6 { font-size: 1.25rem; font-weight: 600; }
```

### Body Text
```css
body { font-size: 16px; line-height: 1.6; }
p { font-size: 15px; line-height: 1.7; }
small { font-size: 14px; }
```

---

## Border Radius

```css
--radius-sm: 8px      /* Small elements */
--radius-md: 12px     /* Medium elements */
--radius-lg: 16px     /* Large elements */
--radius-xl: 20px     /* Extra large elements */
--radius-full: 9999px /* Pills/circles */
```

---

## Responsive Breakpoints

```css
/* Small Mobile */
@media (max-width: 576px) { }

/* Mobile */
@media (max-width: 768px) { }

/* Tablet */
@media (max-width: 992px) { }

/* Desktop */
@media (max-width: 1200px) { }

/* Large Desktop */
@media (min-width: 1201px) { }
```

---

## Best Practices

### DO ✅
- Use CSS variables for consistency
- Apply transitions to interactive elements
- Use gradients for premium feel
- Add hover states to all clickable items
- Implement glassmorphism for modern look
- Use staggered animations for lists
- Apply shadows for depth
- Use border-radius for modern feel

### DON'T ❌
- Hardcode colors
- Skip hover states
- Overuse animations
- Ignore mobile responsiveness
- Use default browser styles
- Mix different transition timings
- Forget accessibility
- Ignore performance

---

## Quick Tips

1. **Gradients**: Use sparingly for maximum impact
2. **Shadows**: Layer shadows for depth (sm → md → lg)
3. **Animations**: Keep under 0.5s for snappy feel
4. **Colors**: Stick to the palette for consistency
5. **Spacing**: Use the spacing system for rhythm
6. **Typography**: Maintain clear hierarchy
7. **Glassmorphism**: Works best on dark backgrounds
8. **Hover States**: Always provide visual feedback

---

## Component Checklist

When creating a new component:
- [ ] Uses CSS variables for colors
- [ ] Has hover states
- [ ] Is responsive
- [ ] Uses consistent spacing
- [ ] Has appropriate shadows
- [ ] Includes transitions
- [ ] Follows typography scale
- [ ] Has proper border radius
- [ ] Includes accessibility features
- [ ] Performs well on mobile

---

**Use this guide to maintain design consistency across your website!** 🎨
