let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
let autoPlayTimer;

// Changer de slide
function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex >= slides.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = slides.length - 1;
    updateCarousel();
    resetAutoPlay();
}

// Aller directement à un slide
function currentSlide(index) {
    currentIndex = index;
    updateCarousel();
    resetAutoPlay();
}

// Mettre à jour l'affichage
function updateCarousel() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        dots[index].classList.remove('active');
    });
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

// Auto-rotation (change d'image tous les 5 secondes)
function autoPlay() {
    autoPlayTimer = setInterval(() => {
        currentIndex++;
        if (currentIndex >= slides.length) currentIndex = 0;
        updateCarousel();
    }, 5000); // 5 secondes
}

function resetAutoPlay() {
    clearInterval(autoPlayTimer);
    autoPlay();
}

// Démarrer l'auto-rotation au chargement
document.addEventListener('DOMContentLoaded', () => {
    autoPlay();
});
