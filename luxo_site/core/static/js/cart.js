let currentSlide = 0;
const totalSlides = 3;
const track = document.getElementById('carouselTrack');
const indicators = document.querySelectorAll('.indicator');

function updateCarousel() {
    const translateX = -currentSlide * 100;
    track.style.transform = `translateX(${translateX}%)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
}

// Auto-play carousel
let autoPlay = setInterval(nextSlide, 5000);

// Pause auto-play on hover
const container = document.querySelector('.carousel-container');
container.addEventListener('mouseenter', () => {
    clearInterval(autoPlay);
});

container.addEventListener('mouseleave', () => {
    autoPlay = setInterval(nextSlide, 5000);
});

// Touch/swipe suporte para mobile
let startX = 0;
let isDragging = false;

container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
});

container.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    
    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    }
    
    isDragging = false;
});

// Navegação pelo teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});