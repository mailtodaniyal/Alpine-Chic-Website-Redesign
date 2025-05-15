        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const closeMenuBtn = document.getElementById('closeMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });
        
        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                if(this.getAttribute('href') === '#') return;
                
                const target = document.querySelector(this.getAttribute('href'));
                if(target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    mobileMenu.classList.remove('active');
                }
            });
        });
        
        // Header scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Animation on scroll
        const animateElements = document.querySelectorAll('.animate');
        
        const animateOnScroll = () => {
            animateElements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if(elementPosition < windowHeight - 100) {
                    element.classList.add('animated');
                }
            });
        };
        
        // Initial check
        animateOnScroll();
        
        // Check on scroll
        window.addEventListener('scroll', animateOnScroll);
        
        // Hero video fallback
        const heroVideo = document.querySelector('.hero-video');
        if(heroVideo) {
            heroVideo.addEventListener('error', () => {
                heroVideo.style.display = 'none';
                document.querySelector('.hero').style.backgroundImage = 'url(https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)';
                document.querySelector('.hero').style.backgroundSize = 'cover';
                document.querySelector('.hero').style.backgroundPosition = 'center';
            });
        }
