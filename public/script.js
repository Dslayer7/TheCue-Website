// script.js

// This is a static page, so no complex JavaScript is strictly needed yet.
// You can add interactions, animations, or dynamic content loading here later.

console.log("The Cue webpage script loaded.");

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1, // Element is considered in view when 10% is visible
    rootMargin: '0px 0px -100px 0px' // Start animation when element is 100px from viewport
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('animate-fade-in-up', 'animate-fade-in-scale');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // For feature items, add a slight delay for staggered animation
            if (entry.target.classList.contains('feature-item')) {
                const delay = entry.target.dataset.delay || 0;
                entry.target.style.transitionDelay = `${delay}s`;
            }
        }
    });
}, observerOptions);

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', () => {
    // Hero content
    const heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('animate-fade-in-up');
    
    // Product description
    const productDescription = document.querySelector('.product-description');
    productDescription.classList.add('animate-fade-in-up');
    
    // Purchase options
    const purchaseOptions = document.querySelector('.purchase-options-container');
    purchaseOptions.classList.add('animate-fade-in-up');
    
    // How to use section
    const howToUse = document.querySelector('.how-to-use');
    howToUse.classList.add('animate-fade-in-up');
    
    // Features section
    const features = document.querySelector('.features');
    features.classList.add('animate-fade-in-up');
    
    // Feature items with staggered animation
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        item.classList.add('animate-fade-in-scale');
        item.dataset.delay = (index * 0.1).toFixed(1); // 0.1s delay between each item
    });
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-fade-in-up, .animate-fade-in-scale');
    animatedElements.forEach(element => observer.observe(element));
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: You could add button click events in the future.
// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', () => {
//         alert('Button clicked! Add to cart functionality coming soon.');
//     });
// });
