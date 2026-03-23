// ========================================
// 3D Scroll Animation System
// ========================================

class ScrollAnimationSystem {
    constructor() {
        this.canvas = document.getElementById('frameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.frames = [];
        this.currentFrame = 0;
        this.totalFrames = 240; // 001 to 240
        this.startFrame = 1; // Start from frame 001
        this.isLoading = true;
        
        this.init();
    }

    async init() {
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        
        await this.loadFrames();
        this.setupScrollListener();
    }

    async loadFrames() {
        // Carregamos de forma robusta para evitar "loading infinito".
        // - Tentamos carregar todos os frames em background
        // - Mostramos o frame 0 assim que ele estiver pronto
        // - Se demorar demais, encerramos o loading e exibimos fallback premium
        const timeoutMs = 1200;

        this.frames = new Array(this.totalFrames).fill(null);

        // Mensagem inicial (será substituída assim que o frame 0 carregar)
        this.drawErrorMessage();

        const loadPromises = [];
        for (let i = 0; i < this.totalFrames; i++) {
            const frameIndex = i;
            const frameNumber = i + this.startFrame; // frames/ezgif-frame-XXX.jpg

            const p = this.loadFrame(frameNumber).then((img) => {
                this.frames[frameIndex] = img;
                if (frameIndex === 0 && img) {
                    this.drawFrame(0);
                }
                return img;
            });

            loadPromises.push(p);
        }

        // Garante saída rápida do loading.
        await Promise.race([
            Promise.all(loadPromises),
            new Promise((resolve) => setTimeout(resolve, timeoutMs)),
        ]);

        this.isLoading = false;
        // Se o frame 0 falhar, pelo menos não ficamos presos em loading infinito.
        this.drawFrame(0);
    }

    loadFrame(index) {
        return new Promise((resolve) => {
            const img = new Image();
            const frameNum = String(index).padStart(3, '0');
            img.src = `frames/ezgif-frame-${frameNum}.jpg`;
            
            img.onload = () => resolve(img);
            img.onerror = () => resolve(null);
        });
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        if (this.frames.length > 0) {
            this.drawFrame(this.currentFrame);
        }
    }

    drawFrame(frameIndex) {
        if (this.frames.length === 0) return;
        frameIndex = Math.max(0, Math.min(frameIndex, this.totalFrames - 1));
        
        const frame = this.frames[frameIndex];
        if (!frame) {
            // Se não houver frame pronto, mostramos fallback (sem travar).
            if (!this.isLoading) this.drawErrorMessage();
            return;
        }
        
        // Calculate aspect ratio and fit to canvas
        const imgAspect = frame.width / frame.height;
        const canvasAspect = this.canvas.width / this.canvas.height;
        
        let drawWidth, drawHeight, x, y;
        
        if (imgAspect > canvasAspect) {
            drawHeight = this.canvas.height;
            drawWidth = drawHeight * imgAspect;
        } else {
            drawWidth = this.canvas.width;
            drawHeight = drawWidth / imgAspect;
        }
        
        x = (this.canvas.width - drawWidth) / 2;
        y = (this.canvas.height - drawHeight) / 2;
        
        // Clear canvas with dark background
        this.ctx.fillStyle = '#0a0a0a';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw image
    
        // Apply zoom out effect (0.75 = 75% size)
        const scale = 0.75;
        const scaledWidth = drawWidth * scale;
        const scaledHeight = drawHeight * scale;
        const offsetX = (drawWidth - scaledWidth) / 2;
        const offsetY = (drawHeight - scaledHeight) / 2;
        
        this.ctx.drawImage(frame, x + offsetX, y + offsetY, scaledWidth, scaledHeight);
    }

    drawErrorMessage() {
        this.ctx.fillStyle = '#666';
        this.ctx.font = '16px system-ui';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Animação 3D em modo fallback', this.canvas.width / 2, this.canvas.height / 2);
    }

    setupScrollListener() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.updateAnimation();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    updateAnimation() {
        // Calculate total scrollable height (document height - viewport height)
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        if (scrollableHeight <= 0) return;
        
        // Get scroll progress (0 to 1)
        const scrollProgress = window.scrollY / scrollableHeight;
        
        // Map scroll progress to frame index
        const frameIndex = Math.floor(scrollProgress * (this.totalFrames - 1));
        
        if (frameIndex !== this.currentFrame) {
            this.currentFrame = frameIndex;
            this.drawFrame(this.currentFrame);
        }
    }
}

// ========================================
// Mobile Menu Toggle
// ========================================

function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!navToggle || !navMenu) return;
    
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '70px';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.flexDirection = 'column';
        navMenu.style.gap = '0';
        navMenu.style.background = 'rgba(255, 255, 255, 0.98)';
        navMenu.style.borderBottom = '1px solid #e0e0e0';
        navMenu.style.padding = '20px';
        navMenu.style.zIndex = '999';
    });
    
    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.style.display = 'none';
        });
    });
}

// ========================================
// Contact Form Handling
// ========================================

function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = {
            name: form.querySelector('input[placeholder="Seu Nome"]').value,
            email: form.querySelector('input[placeholder="Seu Email"]').value,
            phone: form.querySelector('input[placeholder="Seu Telefone"]').value || 'Não informado',
            message: form.querySelector('textarea').value
        };
        
        // Validate
        if (!data.name || !data.email || !data.message) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Por favor, insira um email válido.');
            return;
        }
        
        // Success message
        const messageText = `
Obrigado ${data.name}!

Recebemos sua mensagem e entraremos em contato em breve.

Dados enviados:
- Email: ${data.email}
- Telefone: ${data.phone}
- Mensagem: ${data.message}
        `;
        
        alert(messageText);
        form.reset();
        
        // In production, you would send this to a backend:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // });
    });
}

// ========================================
// CTA Button Handling
// ========================================

function initCTAButtons() {
    const ctaButtons = document.querySelectorAll('.cta-button, .plan-button, .form-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.pointerEvents = 'none';
            ripple.style.animation = 'ripple 0.6s ease-out';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// ========================================
// Smooth Scroll for Anchor Links
// ========================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ========================================
// Intersection Observer for Section Animations
// ========================================

function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });
}

// ========================================
// Lazy Load Images
// ========================================

function initLazyLoad() {
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// ========================================
// Performance Optimization - Debounce
// ========================================

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

// ========================================
// Initialize on DOM Ready
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Hero estático (sem animação 3D).
    // Removemos completamente a inicialização do ScrollAnimationSystem para evitar
    // loading infinito e downloads pesados de frames.
    initMobileMenu();
    initContactForm();
    initCTAButtons();
    initSmoothScroll();
    initIntersectionObserver();
    initLazyLoad();
    
    // Add ripple animation to stylesheet
    if (!document.getElementById('ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Preload images on scroll
    window.addEventListener(
        'scroll',
        debounce(() => {
            // Additional scroll optimizations can be added here
        }, 500)
    );
    
    // Handle visibility changes
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            // Pause animations when tab is not visible
            console.log('⏸️  Animation paused');
        } else {
            console.log('▶️  Animation resumed');
        }
    });
});

// ========================================
// Error Handling
// ========================================

window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});

// ========================================
// Service Worker Registration (PWA)
// ========================================

if ('serviceWorker' in navigator) {
    // Service worker can be registered here for offline support
    // navigator.serviceWorker.register('sw.js').catch(err => {
    //     console.log('Service Worker registration failed:', err);
    // });
}

// ========================================
// Accessibility Improvements
// ========================================

// Add keyboard navigation for buttons
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        if (navToggle && navMenu) {
            navToggle.classList.remove('active');
            navMenu.style.display = 'none';
        }
    }
});

// ========================================
// Analytics Events (Optional)
// ========================================

function trackEvent(eventName, eventData = {}) {
    console.log(`📊 Event: ${eventName}`, eventData);
    
    // Integration with analytics services can be added here
    // ga('send', 'event', eventName, JSON.stringify(eventData));
}

// Track button clicks
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        trackEvent('button_click', { text: button.textContent });
    });
});

// Track link clicks
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('link_click', { href: link.href });
    });
});
