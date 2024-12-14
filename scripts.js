// JavaScript pour gérer le slideshow

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    // Cache toutes les slides
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    
    // Affiche la slide courante
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;  // Passe à la suivante
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;  // Passe à la précédente
    showSlide(currentSlide);
}

// Initialiser le premier slide visible
showSlide(currentSlide);

// Ajouter des événements de clic pour les boutons de navigation
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);
