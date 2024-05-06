let currentIndex = 1; // Começa a partir do primeiro item real, não do clone
const containerCarousel = document.querySelector('.carousel');
let items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function cloneItems() {
    const firstItem = items[0];
    const lastItem = items[items.length - 1];
    const firstClone = firstItem.cloneNode(true);
    const lastClone = lastItem.cloneNode(true);
    firstClone.id = "first-clone";
    lastClone.id = "last-clone";
    containerCarousel.appendChild(firstClone);
    containerCarousel.insertBefore(lastClone, firstItem);
    items = document.querySelectorAll('.carousel-item'); // Atualiza a lista de itens incluindo os clones
    updateFocus();
}

function updateCarousel() {
    const offset = -(currentIndex * (items[0].clientWidth + 10)) + (containerCarousel.clientWidth / 2) - (items[0].clientWidth / 2);
    containerCarousel.style.transition = "transform 0.5s ease";
    containerCarousel.style.transform = `translateX(${offset}px)`;
    updateFocus();
}

function updateFocus() {
    items.forEach(item => item.classList.remove('focused'));
    items[currentIndex].classList.add('focused'); // Destaca o item do meio
}

function moveToNext() {
    currentIndex++;
    if (currentIndex >= items.length - 1) {
        currentIndex = 2; // Volta para o segundo item real
        containerCarousel.style.transition = "none"; // Remove a transição para um loop suave
    }
    updateCarousel();
}

function moveToPrev() {
    currentIndex--;
    if (currentIndex <= 0) {
        currentIndex = items.length - 3; // Volta para o penúltimo item real
        containerCarousel.style.transition = "none"; // Remove a transição para um loop suave
    }
    updateCarousel();
}

containerCarousel.addEventListener('transitionend', () => {
    if (currentIndex >= items.length - 1) {
        currentIndex = 1; // Volta para o segundo item real
        containerCarousel.style.transition = "none"; // Remove a transição para um loop suave
        updateCarousel();
    } else if (currentIndex <= 0) {
        currentIndex = items.length - 2; // Volta para o penúltimo item real
        containerCarousel.style.transition = "none"; // Remove a transição para um loop suave
        updateCarousel();
    }
});

document.querySelector('.next').addEventListener('click', moveToNext);
document.querySelector('.prev').addEventListener('click', moveToPrev);

cloneItems();
updateCarousel();
