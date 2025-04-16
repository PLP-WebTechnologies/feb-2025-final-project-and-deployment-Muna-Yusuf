// ======================
// Navigation Active State
// ======================
document.querySelectorAll('nav a').forEach(link => {
    // Add 'active' class to current page link
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
    
    // Update active state when clicking links
    link.addEventListener('click', () => {
        document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// =================
// Dark Mode Toggle
// =================
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check localStorage for existing preference
const storedDarkMode = localStorage.getItem('darkMode');

// Apply saved preference on page load
if (storedDarkMode === 'true') {
    body.classList.add('dark-mode');
}

// Toggle functionality
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Store preference in localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    
    // Update button emoji
    darkModeToggle.textContent = isDarkMode ? '🌞' : '🌓';
});

// ====================
// Contact Form Handling
// ====================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            message: document.getElementById('message').value.trim()
        };

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all fields');
            return;
        }

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Simulate form submission
        console.log('Form Data Submitted:', formData);
        
        // Show success message
        alert('Thank you for your message! We will respond within 24 hours.');
        
        // Reset form
        contactForm.reset();
        
        // Remove active class from submit button
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.blur();
    });
}

// ======================
// Read More Button Handling
// ======================
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        // Get the associated article content
        const article = button.closest('article');
        const content = article.querySelector('p:not(.post-date)');
        
        // Toggle full content display
        if (content.style.webkitLineClamp) {
            content.style.webkitLineClamp = 'unset';
            button.textContent = 'Show Less';
        } else {
            content.style.webkitLineClamp = '3';
            button.textContent = 'Read More';
        }
        
        // Smooth scroll to maintain position
        article.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
});

// ======================
// Mobile Menu Toggle
// ======================
const mobileMenuToggle = document.createElement('button');
mobileMenuToggle.textContent = '☰';
mobileMenuToggle.id = 'mobileMenuToggle';
document.querySelector('header').prepend(mobileMenuToggle);

const nav = document.querySelector('nav');

mobileMenuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        nav.classList.remove('active');
    }
});

// ======================
// Smooth Scrolling
// ======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
