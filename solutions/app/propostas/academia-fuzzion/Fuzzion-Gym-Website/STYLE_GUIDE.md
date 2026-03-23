# Academia Fuzzion Gym - Style & Development Guide

## 🎨 Design System

### Color Palette

#### Primary Colors
```css
--primary-orange: #FF6D00;    /* Main CTA, accents */
--primary-blue: #0066FF;      /* Secondary accents, links */
```

#### Secondary Colors
```css
--secondary-orange: #FF8C42;  /* Hover states */
--light-orange: #FFE4D1;      /* Light backgrounds */
--dark-blue: #003D99;         /* Darker accents */
```

#### Neutral Colors
```css
--white: #FFFFFF;             /* Main background */
--light-gray: #F5F5F7;        /* Section backgrounds */
--medium-gray: #E8E8ED;       /* Borders, dividers */
--dark-gray: #424245;         /* Footer background */
--text-dark: #1D1D1F;         /* Primary text */
```

#### Usage Examples
```css
/* Buttons */
background: linear-gradient(90deg, var(--primary-orange), var(--secondary-orange));

/* Links */
color: var(--primary-blue);

/* Backgrounds */
background: var(--light-gray);

/* Text */
color: var(--text-dark);
```

### Typography

#### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
```

This stack ensures:
- macOS/iOS: System font (SF Pro Display)
- Windows: Segoe UI
- Fallback: Helvetica Neue, generic sans-serif
- **Benefit**: No external font downloads, optimal performance

#### Font Sizes
```
H1: 3.5rem (56px) - Main headings
H2: 2.5rem (40px) - Section headings
H3: 1.5rem (24px) - Sub-headings
P:  1rem   (16px) - Body text
Small: 0.9rem (14px) - Small text
```

#### Font Weights
```
400: Regular text
500: Medium (labels, semibold)
600: Semibold (headings, buttons)
700: Bold (strong emphasis)
900: Black (logo)
```

#### Line Heights
```
Headings: 1.2
Body: 1.6
Lists: 1.8
```

### Spacing System

#### 8px Grid
```
4px - Minimal spacing (xs)
8px - Small spacing (s)
12px - Standard spacing (m)
16px - Medium spacing (md)
20px - Large spacing (lg)
24px - Extra large spacing (xl)
32px - 2xl spacing
40px - 3xl spacing
60px - 4xl spacing
80px - 5xl spacing
120px - 6xl spacing
```

#### Common Patterns
```css
/* Button padding */
padding: 16px 40px;  /* vertical horizontal */

/* Section padding */
padding: 120px 20px; /* desktop: 120px top/bottom, 20px sides */

/* Card spacing */
gap: 20px;           /* space between items */
```

### Shadow System

#### Elevation Shadows
```css
--shadow-sm: 0 2px 10px rgba(0, 0, 0, 0.08);      /* Subtle */
--shadow-md: 0 10px 40px rgba(0, 0, 0, 0.15);     /* Medium */
--shadow-lg: 0 20px 80px rgba(0, 0, 0, 0.2);      /* Prominent */
```

#### Usage
```css
/* Cards */
box-shadow: var(--shadow-md);

/* Hero section */
box-shadow: var(--shadow-lg);

/* Navbar */
box-shadow: var(--shadow-sm);

/* Hover states */
box-shadow: var(--shadow-lg);
```

### Transitions & Animations

#### Timing Function
```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```
- Easing: Material Design standard easing
- Duration: 300ms (responsive to user)
- Property: All (applies to all properties)

#### Common Durations
```
Hover effects: 0.2s - 0.3s (quick feedback)
Page transitions: 0.6s - 0.8s (smooth flow)
Scroll animations: 0.8s - 1.2s (elegant)
```

#### Keyframe Animations
```css
/* Slide in from bottom */
@keyframes slideInUp { ... }

/* Fade in */
@keyframes fadeIn { ... }

/* Bounce */
@keyframes bounce { ... }

/* Scroll indicator */
@keyframes scroll { ... }

/* Ripple effect */
@keyframes ripple { ... }
```

---

## 📐 Layout & Component Patterns

### Grid System

#### Main Container
```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
```

#### Layout Grids
```css
/* Two column */
grid-template-columns: 1fr 1fr;
gap: 60px;

/* Three column */
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
gap: 40px;

/* Flexible columns */
grid-template-columns: 1.2fr 1fr;
gap: 80px;
```

### Common Components

#### Buttons
```html
<button class="cta-button">Primary Action</button>
<button class="plan-button">Secondary Action</button>
<button class="form-button">Form Action</button>
```

```css
/* Primary Button */
.cta-button {
    padding: 16px 40px;
    background: linear-gradient(90deg, var(--primary-orange), var(--secondary-orange));
    color: white;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    box-shadow: var(--shadow-md);
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(255, 109, 0, 0.4);
}
```

#### Cards
```html
<div class="service-card">
    <div class="service-icon">💪</div>
    <h3>Service Name</h3>
    <p>Description</p>
</div>
```

```css
.service-card {
    background: var(--light-gray);
    padding: 50px 30px;
    border-radius: 20px;
    text-align: center;
    transition: var(--transition);
    border: 2px solid transparent;
}

.service-card:hover {
    background: var(--white);
    border-color: var(--primary-orange);
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
}
```

#### Form Inputs
```html
<div class="form-group">
    <input type="text" placeholder="Your name" required>
</div>
```

```css
.form-group input {
    padding: 15px 20px;
    border: 2px solid var(--medium-gray);
    border-radius: 10px;
    font-family: inherit;
    font-size: 1rem;
    transition: var(--transition);
    background: var(--light-gray);
}

.form-group input:focus {
    outline: none;
    border-color: var(--primary-orange);
    background: white;
}
```

---

## 🎯 JavaScript Patterns

### Event Handling

#### Scroll Events
```javascript
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateAnimation();
            ticking = false;
        });
        ticking = true;
    }
});
```

#### Click Events
```javascript
button.addEventListener('click', (e) => {
    // Handle click
    e.preventDefault();
    // Your code
});
```

#### Form Submission
```javascript
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Validate
    // Submit
});
```

### Animation Patterns

#### RequestAnimationFrame
```javascript
function animate() {
    // Update animation frame
    requestAnimationFrame(animate);
}
animate();
```

#### Debouncing
```javascript
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
```

#### IntersectionObserver
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Element is visible
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(el => {
    observer.observe(el);
});
```

---

## 📱 Responsive Design Patterns

### Mobile-First Approach

```css
/* Base styles (mobile) */
.container {
    padding: 0 15px;
}

/* Tablet and above */
@media (min-width: 768px) {
    .container {
        padding: 0 20px;
    }
}

/* Desktop and above */
@media (min-width: 1024px) {
    .container {
        padding: 0 40px;
    }
}
```

### Breakpoints
```
480px  - Small phones
768px  - Tablets
1024px - Desktop
1440px - Large desktop
```

### Common Responsive Patterns

#### Text Scaling
```css
h1 {
    font-size: 1.5rem;
}

@media (min-width: 768px) {
    h1 {
        font-size: 2rem;
    }
}

@media (min-width: 1024px) {
    h1 {
        font-size: 3.5rem;
    }
}
```

#### Layout Switching
```css
/* Mobile: single column */
.hero-content {
    grid-template-columns: 1fr;
}

/* Desktop: two columns */
@media (min-width: 1024px) {
    .hero-content {
        grid-template-columns: 1fr 1fr;
    }
}
```

#### Spacing Adjustment
```css
/* Mobile */
padding: 40px 20px;
gap: 20px;

/* Desktop */
@media (min-width: 1024px) {
    padding: 120px 20px;
    gap: 60px;
}
```

---

## 🔍 Best Practices

### HTML
```html
<!-- ✅ Good: Semantic HTML -->
<header>...</header>
<nav>...</nav>
<main>
    <section id="services">
        <article class="service-card">
            <h2>Service</h2>
            <p>Description</p>
        </article>
    </section>
</main>
<footer>...</footer>

<!-- ❌ Bad: Non-semantic -->
<div class="header">...</div>
<div class="nav">...</div>
<div class="main">...</div>
```

### CSS
```css
/* ✅ Good: Reusable classes, scoped styling */
.button {
    display: inline-block;
    padding: 10px 20px;
}

.button.primary {
    background: var(--primary-orange);
    color: white;
}

/* ❌ Bad: IDs, inline styles, !important */
#submitButton {
    background: orange !important;
}
```

### JavaScript
```javascript
// ✅ Good: Modular, documented, cached selectors
const button = document.querySelector('.submit-button');
button.addEventListener('click', handleSubmit);

// ❌ Bad: Repeated queries, no caching
document.querySelector('.submit-button').addEventListener('click', () => {
    document.querySelector('.submit-button').style.color = 'red';
    document.querySelector('.submit-button').disabled = true;
});
```

---

## 🚀 Performance Optimization

### Critical Rendering Path
1. HTML parsed
2. CSS parsed and applied
3. JavaScript executed
4. Images loaded (lazy)
5. Animations triggered

### Optimization Techniques
- Minimize CSS/JS
- Defer non-critical JS
- Lazy load images
- Cache static assets
- Use CSS transforms for animations
- Debounce scroll events

---

## 📚 Code Organization

### File Structure
```
index.html        - Main markup
styles.css        - All styling (organized by section)
script.js         - All functionality (organized by feature)
```

### CSS Organization
```
1. Root variables
2. Global styles
3. Typography
4. Navigation
5. Hero section
6. About section
7. Services section
8. Plans section
9. Contact section
10. Footer
11. Animations
12. Responsive media queries
```

### JavaScript Organization
```
1. Canvas animation system
2. Mobile menu
3. Contact form
4. Button effects
5. Smooth scroll
6. Section animations
7. Lazy loading
8. Event listeners
9. Error handling
10. Analytics
```

---

## 🎓 Addition Guidelines

### Adding a New Section

1. **HTML Structure** (in index.html)
```html
<section id="new-section" class="new-section">
    <div class="container">
        <div class="section-header">
            <h2>Section Title</h2>
            <div class="section-divider"></div>
        </div>
        <!-- Content -->
    </div>
</section>
```

2. **CSS Styling** (in styles.css)
```css
.new-section {
    padding: 120px 20px;
    background: var(--white);
}

.new-section h2 {
    color: var(--text-dark);
}

/* Responsive */
@media (max-width: 768px) {
    .new-section {
        padding: 80px 20px;
    }
}
```

3. **Navigation Link** (in index.html)
```html
<li><a href="#new-section" class="nav-link">Section</a></li>
```

### Adding a New Component

1. Create reusable class (e.g., `.card`)
2. Define base styles
3. Add variant classes (e.g., `.card.featured`)
4. Test responsive behavior
5. Document in this guide

---

## 🔗 Related Files

- [README.md](README.md) - Project overview
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide
- [TESTING.md](TESTING.md) - Testing checklist
- [CHANGELOG.md](CHANGELOG.md) - Version history

---

## 📞 Questions?

For questions about style or development practices:
- Email: contato@fuzzion.com.br
- Phone: (11) 3000-0000

---

**Last Updated**: March 18, 2026
**Version**: 1.0.0

*Keep the code clean, comments clear, and designs consistent.* ✨
