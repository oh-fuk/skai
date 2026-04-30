// SKAICONNECT - Main JavaScript with Advanced Animations

// ============================================
// SMOOTH SCROLLING
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#contact') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// ACTIVE PAGE NAVIGATION
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.style.color = 'var(--accent-gold)';
        }
    });
});

// ============================================
// ENHANCED COUNTER ANIMATION FOR NUMBERS
// ============================================
function animateCounter(element, target, duration = 2000, suffix = '') {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    // Add counting class for pulse effect
    element.classList.add('counting');

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
            element.classList.remove('counting');

            // Add completion animation
            element.style.animation = 'numberBounce 0.6s ease';
            setTimeout(() => {
                element.style.animation = '';
            }, 600);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
}

// Enhanced counter with easing
function animateCounterEased(element, target, duration = 2500, suffix = '') {
    const start = 0;
    const startTime = performance.now();

    element.classList.add('counting');

    function easeOutExpo(t) {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutExpo(progress);
        const current = Math.floor(start + (target - start) * easedProgress);

        element.textContent = current + suffix;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target + suffix;
            element.classList.remove('counting');

            // Completion effect
            element.style.animation = 'numberBounce 0.6s ease';
            setTimeout(() => {
                element.style.animation = '';
            }, 600);
        }
    }

    requestAnimationFrame(update);
}

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Counter Animation Observer
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const text = entry.target.textContent;

            // Extract number and suffix
            let number = parseInt(text.replace(/[^0-9]/g, ''));
            let suffix = text.replace(/[0-9]/g, '').trim();

            // Handle percentage
            if (text.includes('%')) {
                suffix = '%';
            }
            // Handle multipliers like 2x, 3x
            else if (text.includes('x')) {
                suffix = 'x';
            }
            // Handle + signs
            else if (text.includes('+')) {
                suffix = '+';
            }

            if (!isNaN(number)) {
                entry.target.textContent = '0' + suffix;
                animateCounter(entry.target, number, 2000, suffix);
            }
        }
    });
}, observerOptions);

// Fade-in Animation Observer
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Slide-in from Left Observer
const slideLeftObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, observerOptions);

// Slide-in from Right Observer
const slideRightObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, observerOptions);

// Scale-up Animation Observer
const scaleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'scale(1)';
        }
    });
}, observerOptions);

// ============================================
// INITIALIZE ANIMATIONS ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function () {

    // Counter animations for stat items
    const statNumbers = document.querySelectorAll('.stat-item h2, .stats-grid h2');
    statNumbers.forEach(el => {
        counterObserver.observe(el);
    });

    // Fade-in animations for cards
    const cards = document.querySelectorAll('.card, .blog-article');
    cards.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        fadeObserver.observe(el);
    });

    // Slide-in from left for timeline items
    const timelineItems = document.querySelectorAll('.timeline-item:nth-child(odd)');
    timelineItems.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-50px)';
        el.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
        slideLeftObserver.observe(el);
    });

    // Slide-in from right for timeline items
    const timelineItemsRight = document.querySelectorAll('.timeline-item:nth-child(even)');
    timelineItemsRight.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(50px)';
        el.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
        slideRightObserver.observe(el);
    });

    // Scale-up animation for hero images
    const heroImages = document.querySelectorAll('.hero-image, .hero img');
    heroImages.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'scale(0.9)';
        el.style.transition = 'opacity 1s ease, transform 1s ease';
        scaleObserver.observe(el);
    });

    // Stagger animation for card grids
    const cardGrids = document.querySelectorAll('.card-grid .card');
    cardGrids.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.5s ease ${index * 0.15}s, transform 0.5s ease ${index * 0.15}s`;
        fadeObserver.observe(el);
    });

    // Fade-in for sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
        fadeObserver.observe(el);
    });
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Form validation (placeholder for contact forms)
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;

    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = 'var(--primary-red)';
        } else {
            input.style.borderColor = 'var(--border-divider)';
        }
    });

    return isValid;
}

// Console message
console.log('%c SKAICONNECT ', 'background: #B91C1C; color: white; font-size: 20px; padding: 10px;');
console.log('%c Powering the Future of Customer Experience ', 'color: #D97706; font-size: 14px;');

// Blog Search and Filter Functions
function filterBlogs() {
    const searchInput = document.getElementById('blogSearch');
    if (!searchInput) return;

    const searchTerm = searchInput.value.toLowerCase();
    const articles = document.querySelectorAll('.blog-article');

    articles.forEach(article => {
        const title = article.getAttribute('data-title').toLowerCase();
        const category = article.getAttribute('data-category').toLowerCase();
        const content = article.textContent.toLowerCase();

        if (title.includes(searchTerm) || category.includes(searchTerm) || content.includes(searchTerm)) {
            article.classList.remove('hidden');
        } else {
            article.classList.add('hidden');
        }
    });
}

function filterByCategory(category) {
    const articles = document.querySelectorAll('.blog-article');
    const buttons = document.querySelectorAll('.filter-btn');

    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Clear search
    const searchInput = document.getElementById('blogSearch');
    if (searchInput) searchInput.value = '';

    // Filter articles
    articles.forEach(article => {
        if (category === 'all') {
            article.classList.remove('hidden');
        } else {
            const articleCategory = article.getAttribute('data-category');
            if (articleCategory === category) {
                article.classList.remove('hidden');
            } else {
                article.classList.add('hidden');
            }
        }
    });
}
