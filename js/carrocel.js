let currentIndex = 1; // Start from the first actual item, not the clone
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
    items = document.querySelectorAll('.carousel-item'); // Update the items list including the clones
    updateFocus();
}

function updateCarousel() {
    const offset = -(currentIndex * (items[0].clientWidth + 10)) + (containerCarousel.clientWidth / 2) - (items[0].clientWidth / 2);
    containerCarousel.style.transform = `translateX(${offset}px)`;
    updateFocus();
}

function updateFocus() {
    items.forEach(item => item.classList.remove('focused'));
    items[currentIndex].classList.add('focused'); // Highlight the middle item
}

function resetTransition() {
    containerCarousel.style.transition = "none";
    updateCarousel();
    containerCarousel.offsetHeight; // Trigger a reflow to reset transition
    containerCarousel.style.transition = "transform 0.5s ease";
}

function moveToNext() {
    currentIndex++;
    if (currentIndex >= items.length - 1) {
        currentIndex = 2; // Skip over the last clone to the first real item
        setTimeout(resetTransition, 500); // Reset after the transition ends
    } else {
        updateCarousel();
    }
}

function moveToPrev() {
    currentIndex--;
    if (currentIndex <= 0) {
        currentIndex = items.length - 3; // Skip over the first clone to the last real item
        setTimeout(resetTransition, 500); // Reset after the transition ends
    } else {
        updateCarousel();
    }
}

document.querySelector('.next').addEventListener('click', moveToNext);
document.querySelector('.prev').addEventListener('click', moveToPrev);
window.addEventListener('resize', resetTransition); // Recalculate on resize

cloneItems();
setTimeout(resetTransition, 100); // Initial reset to set up proper positioning
