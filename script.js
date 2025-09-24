// Function untuk handle email submit
function handleEmailSubmit() {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value.trim();
    
    if (email === '') {
        alert('Silakan masukkan alamat email');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Silakan masukkan alamat email yang valid');
        return;
    }
    
    alert(`Email berhasil dimasukkan: ${email}`);
    emailInput.value = '';
}

// Function untuk validasi email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function untuk scroll carousel
function scrollCarousel(direction) {
    const carousel = document.getElementById('movieCarousel');
    const scrollAmount = 300;
    
    if (direction === 'left') {
        carousel.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        carousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Event listener untuk Enter key pada input email
    const emailInput = document.getElementById('emailInput');
    emailInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleEmailSubmit();
        }
    });
    
    // Auto-hide carousel buttons on mobile
    function handleResize() {
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        
        if (window.innerWidth <= 768) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'flex';
            nextBtn.style.display = 'flex';
        }
    }
    
    // Initial check
    handleResize();
    
    // Listen for resize events
    window.addEventListener('resize', handleResize);
    
    // Smooth scroll behavior untuk carousel
    const carousel = document.getElementById('movieCarousel');
    let isScrolling = false;
    
    // Touch events untuk mobile swipe
    let startX = 0;
    let scrollLeft = 0;
    
    carousel.addEventListener('touchstart', function(e) {
        startX = e.touches[0].pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });
    
    carousel.addEventListener('touchmove', function(e) {
        if (!startX) return;
        e.preventDefault();
        
        const x = e.touches[0].pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });
    
    carousel.addEventListener('touchend', function() {
        startX = 0;
    });
    
    // Mouse wheel scroll untuk desktop
    carousel.addEventListener('wheel', function(e) {
        if (window.innerWidth > 768) {
            e.preventDefault();
            carousel.scrollLeft += e.deltaY;
        }
    });
});

// Function untuk animasi loading (opsional)
function showLoading() {
    const btn = document.querySelector('.get-started-btn');
    const originalText = btn.textContent;
    
    btn.textContent = 'Loading...';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
    }, 2000);
}

// Function untuk hover effect pada movie cards
function addMovieCardHoverEffects() {
    const movieCards = document.querySelectorAll('.movie-card');
    
    movieCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 10px 30px rgba(229, 9, 20, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
        
        card.addEventListener('click', function() {
            const movieNumber = this.querySelector('.movie-number').textContent;
            const movieTitle = this.querySelector('.poster-placeholder').textContent;
            alert(`Clicked on movie #${movieNumber}: ${movieTitle}`);
        });
    });
}

// Initialize hover effects setelah DOM loaded
document.addEventListener('DOMContentLoaded', addMovieCardHoverEffects);

// --- SIGN IN MODAL ---
function toggleModal(show) {
    const modal = document.getElementById('signinModal');
    modal.style.display = show ? 'flex' : 'none';
}

// buka modal saat tombol "Masuk" diklik
document.addEventListener('DOMContentLoaded', function() {
    const signinBtn = document.querySelector('.signin-btn');
    signinBtn.addEventListener('click', () => toggleModal(true));

    // Tutup modal jika klik di luar konten
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('signinModal');
        if (e.target === modal) {
            toggleModal(false);
        }
    });

    // Handle form submit
    const signinForm = document.getElementById('signinForm');
    signinForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Berhasil masuk!');
        toggleModal(false);
    });
});

// --- LANGUAGE SWITCH ---
const translations = {
    id: {
        title: "Film, acara TV tak terbatas, dan banyak lagi",
        subtitle: "Harga mulai dari Rp54.000. Batalkan kapan pun.",
        description: "Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu.",
        signin: "Daftar",
        signinTitle: "Masuk",
        signupText: "Belum punya akun? Daftar",
        emailPlaceholder: "Alamat email",
        getStarted: "Mulai >",
        trending: "Sedang Tren Sekarang"
    },
    en: {
        title: "Unlimited movies, TV shows, and more",
        subtitle: "Starts at Rp54.000. Cancel anytime.",
        description: "Ready to watch? Enter your email to create or restart your membership.",
        signin: "Sign Up",
        signinTitle: "Sign In",
        signupText: "Don’t have an account? Sign up",
        emailPlaceholder: "Email address",
        getStarted: "Get Started >",
        trending: "Trending Now"
    }
};

function switchLanguage(lang) {
    document.querySelector('.hero-title').innerHTML = translations[lang].title;
    document.querySelector('.hero-subtitle').textContent = translations[lang].subtitle;
    document.querySelector('.hero-description').textContent = translations[lang].description;
    document.querySelector('.signin-btn').textContent = translations[lang].signin;
    document.getElementById('signinTitle').textContent = translations[lang].signinTitle;
    document.getElementById('signupText').textContent = translations[lang].signupText;
    document.getElementById('emailInput').placeholder = translations[lang].emailPlaceholder;
    document.querySelector('.get-started-btn').textContent = translations[lang].getStarted;
    document.querySelector('.section-title').textContent = translations[lang].trending;
}

// pasang event untuk select bahasa
document.addEventListener('DOMContentLoaded', function() {
    const langSelect = document.querySelector('.language-select');
    langSelect.addEventListener('change', function() {
        switchLanguage(langSelect.value);
    });
});

