// Luxurious Contact Form JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Form initialization
    const luxuryForm = document.getElementById('luxuryContactForm');
    if (!luxuryForm) return;
    
    // Enhanced form interactions
    const luxuryInputs = luxuryForm.querySelectorAll('.luxury-input, .luxury-select, .luxury-textarea');
    const luxurySubmitBtn = luxuryForm.querySelector('.luxury-submit-btn');
    
    // Add focus and blur effects to inputs
    luxuryInputs.forEach(input => {
        // Add floating label effect
        input.addEventListener('focus', function() {
            const wrapper = this.closest('.luxury-input-wrapper');
            if (wrapper) {
                wrapper.classList.add('focused');
            }
            
            // Add floating effect to label
            const label = this.closest('.luxury-form-group').querySelector('.luxury-label');
            if (label) {
                label.classList.add('floating');
            }
        });
        
        input.addEventListener('blur', function() {
            const wrapper = this.closest('.luxury-input-wrapper');
            if (wrapper && !this.value) {
                wrapper.classList.remove('focused');
            }
            
            // Remove floating effect from label if empty
            const label = this.closest('.luxury-form-group').querySelector('.luxury-label');
            if (label && !this.value) {
                label.classList.remove('floating');
            }
        });
        
        // Check initial value for floating labels
        if (input.value) {
            const label = input.closest('.luxury-form-group').querySelector('.luxury-label');
            if (label) {
                label.classList.add('floating');
            }
        }
    });
    
    // Enhanced checkbox interactions
    const luxuryCheckboxes = luxuryForm.querySelectorAll('.luxury-checkbox input[type="checkbox"]');
    luxuryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const checkboxWrapper = this.closest('.luxury-checkbox');
            if (this.checked) {
                checkboxWrapper.classList.add('checked');
            } else {
                checkboxWrapper.classList.remove('checked');
            }
        });
    });
    
    // Form submission with luxury animation
    luxuryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        let isValid = true;
        const requiredFields = luxuryForm.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('invalid');
                
                // Add shake animation to invalid fields
                field.animate([
                    { transform: 'translateX(0)' },
                    { transform: 'translateX(-10px)' },
                    { transform: 'translateX(10px)' },
                    { transform: 'translateX(-10px)' },
                    { transform: 'translateX(0)' }
                ], {
                    duration: 500,
                    iterations: 1
                });
            } else {
                field.classList.remove('invalid');
            }
        });
        
        if (!isValid) {
            // Scroll to first invalid field
            const firstInvalid = luxuryForm.querySelector('.invalid');
            if (firstInvalid) {
                firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstInvalid.focus();
            }
            return;
        }
        
        // Show luxury submission animation
        const btnText = luxurySubmitBtn.querySelector('.btn-text');
        const btnIcon = luxurySubmitBtn.querySelector('.btn-icon');
        
        // Animate button
        luxurySubmitBtn.classList.add('submitting');
        btnText.textContent = 'Processing Request';
        btnIcon.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" fill="none"/></svg>';
        
        // Rotate icon animation
        const rotateAnimation = btnIcon.animate([
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(360deg)' }
        ], {
            duration: 1000,
            iterations: Infinity
        });
        
        // Simulate API call with delay
        setTimeout(() => {
            // Stop rotation
            rotateAnimation.cancel();
            
            // Show success state
            luxurySubmitBtn.classList.remove('submitting');
            luxurySubmitBtn.classList.add('success');
            btnText.textContent = 'Request Received';
            btnIcon.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'luxury-success-message';
            successMessage.innerHTML = `
                <div class="success-content">
                    <div class="success-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                    <h4>Consultation Initiated</h4>
                    <p>Your Private Client Advisor will contact you within 15 minutes.</p>
                    <p class="reference">Reference: <strong>#VS-${Date.now().toString().slice(-6)}</strong></p>
                </div>
            `;
            
            // Insert after form
            luxuryForm.parentNode.insertBefore(successMessage, luxuryForm.nextSibling);
            
            // Animate success message
            setTimeout(() => {
                successMessage.classList.add('visible');
            }, 100);
            
            // Reset form after delay
            setTimeout(() => {
                luxuryForm.reset();
                
                // Reset button
                luxurySubmitBtn.classList.remove('success');
                btnText.textContent = 'Initiate Consultation';
                btnIcon.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>';
                
                // Remove success message
                if (successMessage.parentNode) {
                    successMessage.parentNode.removeChild(successMessage);
                }
                
                // Reset labels
                luxuryForm.querySelectorAll('.luxury-label').forEach(label => {
                    label.classList.remove('floating');
                });
            }, 5000);
        }, 2000);
    });
    
    // Add luxury hover effects to showcase cards
    const showcaseCards = document.querySelectorAll('.luxury-showcase-card, .luxury-testimonial-card');
    showcaseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });
    
    // Add luxury animations when elements come into view
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Add staggered animation delay for form groups
                if (entry.target.classList.contains('luxury-form-group')) {
                    const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.1}s`;
                }
            }
        });
    }, { threshold: 0.1 });
    
    animateOnScrollElements.forEach(element => {
        observer.observe(element);
    });
    
    // Add luxury floating animation to stats
    const luxuryStats = document.querySelectorAll('.luxury-stat');
    luxuryStats.forEach((stat, index) => {
        // Add random floating animation
        stat.style.animationDelay = `${index * 0.2}s`;
    });
});

// Add luxury micro-interactions
document.addEventListener('mousemove', function(e) {
    const luxuryElements = document.querySelectorAll('.luxury-showcase-card, .luxury-form-wrapper, .luxury-stat');
    
    luxuryElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Add subtle parallax effect
        const xPos = (x / rect.width) - 0.5;
        const yPos = (y / rect.height) - 0.5;
        
        el.style.setProperty('--mouse-x', xPos);
        el.style.setProperty('--mouse-y', yPos);
    });
});