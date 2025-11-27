// Countdown Timer
function updateCountdown() {
    const launchDate = new Date('2026-03-01T10:00:00').getTime();
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownTimer);
        document.querySelector('.countdown-timer').innerHTML = '<div class="launched">We\'ve Launched! 🎉</div>';
    }
}

// Smooth Scroll to Contact
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
}

// Form Submission
// Form Submission with Custom Modal
document.getElementById('notify-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // Simple validation
    if (!name || !email) {
        showModal('Please fill in all fields');
        return;
    }
    
    // Here you would typically send this data to your backend
    console.log('New subscriber:', { name, email });
    
    // Show custom modal
    showModal(`Thank you ${name}! We'll notify you at ${email} when VegaBean launches with exclusive offers!`);
    
    // Reset form
    this.reset();
});

// Modal Functions
function showModal(message) {
    const modal = document.getElementById('customModal');
    const modalText = modal.querySelector('p');
    modalText.textContent = message;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('customModal').style.display = 'none';
}

// Close modal when clicking outside
document.getElementById('customModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Initialize countdown timer
const countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Add fade-in animation for elements
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.info-text, .product-visual, .contact-form, .contact-details');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});