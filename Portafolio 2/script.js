const track = document.querySelector('.track');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let currentIndex = 0;
const totalSlides = slides.length;

// Función para actualizar el carrusel
function updateCarousel() {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
}

// Botón siguiente
next.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Vuelve al inicio
    }
    updateCarousel();
});

// Botón anterior
prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1; // Va al final
    }
    updateCarousel();
});

// Opcional: Navegación por teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prev.click();
    } else if (e.key === 'ArrowRight') {
        next.click();
    }
});
const dotsContainer = document.querySelector('.dots-container');
let dots = [];

slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === currentIndex) dot.classList.add('active');
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
    dotsContainer.appendChild(dot);
    dots.push(dot);
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
    
    // Actualizar dots
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}