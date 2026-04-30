// SKAICONNECT - Main JavaScript

// Smooth scrolling for anchor links
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

// Add active class to current page in navigation
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

// Intersection Observer for fade-in animations
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

// Observe all cards and sections for animation
document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.card, .timeline-item, .stat-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
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
