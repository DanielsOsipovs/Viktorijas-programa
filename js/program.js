// Simple interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (!targetElement) return; // safety: avoid errors when target not found

            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // CTA button interactions
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function() {
            alert('Thank you for reaching out. You will be connected with support resources shortly.');
        });
    });
    
    // Add floating animation to feature cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'float 6s ease-in-out infinite';
                entry.target.style.animationDelay = Math.random() * 2 + 's';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });
});
