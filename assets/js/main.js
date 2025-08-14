function pad2(n){ return String(n).padStart(2,'0'); }

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu functionality
  const mobileMenu = document.querySelector('.mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  
  if(mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', () => {
      const isOpen = navLinks.classList.contains('active');
      navLinks.classList.toggle('active');
      mobileMenu.querySelector('i').classList.toggle('fa-bars');
      mobileMenu.querySelector('i').classList.toggle('fa-xmark');
      mobileMenu.setAttribute('aria-expanded', String(!isOpen));
    });
  }
  
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if(navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenu.querySelector('i').classList.add('fa-bars');
        mobileMenu.querySelector('i').classList.remove('fa-xmark');
        mobileMenu.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Number counting animation
  const animateNumbers = () => {
    const funfactItems = document.querySelectorAll('.funfact-item');
    
    funfactItems.forEach(item => {
      const targetElement = item.querySelector('h3');
      if(targetElement) {
        const targetText = targetElement.getAttribute('data-target');
        
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          if (!targetElement.classList.contains('animated')) {
            targetElement.classList.add('animated');
            
            let current = 0;
            const target = parseInt(targetText.replace(/[^0-9]/g, ''));
            const duration = 1000;
            
            let increment;
            if (target >= 10000) {
              increment = Math.ceil(target / 20);
            } else if (target >= 1000) {
              increment = Math.ceil(target / 15);
            } else if (target >= 100) {
              increment = Math.ceil(target / 10);
            } else {
              increment = targetText.includes('+') ? 5 : 10;
            }
            
            const steps = Math.ceil(target / increment);
            const stepTime = Math.max(duration / steps, 10);
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              targetElement.textContent = current.toLocaleString() + targetText.replace(/[0-9]/g, '');
            }, stepTime);
          }
        }
      }
    });
  };

  // Scroll animations
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      
      if (elementTop < window.innerHeight && elementBottom > 0) {
        element.classList.add('animate');
      }
    });
  };

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // FAQ functionality
  document.querySelectorAll('.faq-item').forEach((item, i) => {
    const btn = item.querySelector('.faq-question');
    const panel = item.querySelector('.faq-answer');
    
    if(btn && panel) {
      const id = `faq-panel-${i}`;
      
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-controls', id);
      panel.id = id;
      panel.setAttribute('role', 'region');
      panel.setAttribute('aria-hidden', 'true');
      
      btn.addEventListener('click', () => {
        const open = btn.getAttribute('aria-expanded') === 'true';
        
        document.querySelectorAll('.faq-question[aria-expanded="true"]').forEach(b => {
          if(b !== btn) {
            b.setAttribute('aria-expanded', 'false');
            const p = document.getElementById(b.getAttribute('aria-controls'));
            if (p) { 
              p.style.display = 'none'; 
              p.setAttribute('aria-hidden', 'true');
            }
          }
        });
        
        btn.setAttribute('aria-expanded', String(!open));
        panel.style.display = open ? 'none' : 'block';
        panel.setAttribute('aria-hidden', String(open));
      });
    }
  });

  // Quick Quote modal functionality
  const quickQuoteBtn = document.getElementById('quickQuoteBtn');
  if(quickQuoteBtn) {
    quickQuoteBtn.addEventListener('click', () => {
      alert('Quote form would open here. In a real implementation, this would open a modal or navigate to a dedicated page.');
    });
  }

  // Add trust promise to destination cards
  const trustPromise = document.createElement('p');
  trustPromise.className = 'trust-promise';
  trustPromise.textContent = 'No membership. No hidden fees. 15-minute response.';
  
  document.querySelectorAll('.destination-actions').forEach(actions => {
    const bookNowBtn = actions.querySelector('.destination-btn.primary');
    if (bookNowBtn) {
      actions.insertBefore(trustPromise.cloneNode(true), bookNowBtn.nextSibling);
    }
  });

  // Enhanced flight calculator with stop information
  document.querySelectorAll('.flight-calculator').forEach(fc => {
    const craft = fc.querySelector('.aircraft-selector');
    const dep = fc.querySelector('.departure-selector');
    const out = fc.querySelector('.calc-result');
    
    if(craft && dep && out) {
      const base = JSON.parse(dep.getAttribute('data-base-times'));

      function compute(){
        const key = dep.value.split('-')[0] || dep.value;
        const baseTime = parseFloat(base[key]);
        if (!baseTime) {
          out.textContent = '';
          return;
        }

        let t = baseTime;
        const m = craft.value;
        let stops = 0;
        
        if (m==='light') {
          t*=1.25;
          stops = Math.floor(baseTime / 5);
        } else if (m==='midsize') {
          t*=1.15;
          stops = Math.floor(baseTime / 7);
        } else if (m==='super') {
          t = baseTime;
          stops = Math.floor(baseTime / 10);
        } else if (m==='heavy') {
          t*=0.85;
          stops = Math.floor(baseTime / 15);
        } else if (m==='ultra') {
          t*=0.75;
          stops = 0;
        }

        const h = Math.floor(t), mins = Math.round((t-h)*60);
        const stopText = stops === 0 ? "nonstop" : stops === 1 ? "1 stop" : `${stops} stops`;
        out.textContent = `Estimated flight time: ${h}h${pad2(mins)} (${stopText})`;
      }

      [craft, dep].forEach(el => el.addEventListener('change', compute));
      compute();
    }
  });

  // Initial animations
  animateNumbers();
  animateOnScroll();

  // Attach scroll event listeners
  window.addEventListener('scroll', animateNumbers);
  window.addEventListener('scroll', animateOnScroll);
});