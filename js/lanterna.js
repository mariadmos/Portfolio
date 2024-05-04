const cursor = document.querySelector('.cursor');
const lanterna = document.createElement('div');
lanterna.classList.add('lanterna');
document.body.appendChild(lanterna);

document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY}px`; /* Move o cursor verticalmente com o mouse */
    cursor.style.left = `${e.clientX}px`; /* Move o cursor horizontalmente com o mouse */

    // Move a lanterna para a posição do cursor
    lanterna.style.top = `${e.clientY - 0}px`; /* Ajuste conforme necessário */
    lanterna.style.left = `${e.clientX - 0}px`; /* Ajuste conforme necessário */
});

document.getElementById('mobile-menu-button').addEventListener('click', function (event) {
    var menuItems = document.getElementById('mobile-menu-items');
    var overlay = document.getElementById('overlay');
    if (menuItems.style.display !== 'flex') {
        menuItems.style.display = 'flex';
        overlay.style.display = 'block'; // Show the overlay
    } else {
        menuItems.style.display = 'none';
        overlay.style.display = 'none'; // Hide the overlay
    }
    event.stopPropagation(); // Prevents the document click event from firing
});

document.addEventListener('click', function () {
    var menuItems = document.getElementById('mobile-menu-items');
    var overlay = document.getElementById('overlay');
    menuItems.style.display = 'none';
    overlay.style.display = 'none'; // Hide the overlay
});