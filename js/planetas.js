const container = document.querySelector('.image-planet-container');
const image1 = document.querySelector('.image1');
const image2 = document.querySelector('.image2');
const image3 = document.querySelector('.image3');
const image4 = document.querySelector('.image4');
const image5 = document.querySelector('.image5');
const image6 = document.querySelector('.image6');
const image7 = document.querySelector('.image7');
const image8 = document.querySelector('.image8');
const image9 = document.querySelector('.image9');
const image10 = document.querySelector('.image10');

setTimeout(() => {
    moveImage(image1, 0, 100, 100); // image1 executa órbita elíptica com raio horizontal 200 e raio vertical 100
    setTimeout(() => {
        moveImage(image2, 0, 150, 120); // image2 executa órbita elíptica com raio horizontal 180 e raio vertical 120
        setTimeout(() => {
            moveImage(image3, 0, 200, 140); // image3 executa órbita elíptica com raio horizontal 220 e raio vertical 140
            setTimeout(() => {
                moveImage(image4, 0, 250, 120); // Adicione a órbita elíptica para image4 com raios de 200 e 120
                setTimeout(() => {
                    moveImage(image5, 0, 300, 100); // Adicione a órbita elíptica para image5 com raios de 220 e 100
                    setTimeout(() => {
                        moveImage(image6, 0, 350, 140); // Adicione a órbita elíptica para image6 com raios de 180 e 140
                        setTimeout(() => {
                            moveImage(image7, 0, 400, 120); // Adicione a órbita elíptica para image7 com raios de 240 e 120
                            setTimeout(() => {
                                moveImage(image8, 0, 450, 110); // Adicione a órbita elíptica para image8 com raios de 200 e 110
                                setTimeout(() => {
                                    moveImage(image9, 0, 500, 130); // Adicione a órbita elíptica para image9 com raios de 210 e 130
                                    setTimeout(() => {
                                        moveImage(image10, 0, 550, 100); // Adicione a órbita elíptica para image10 com raios de 230 e 100
                                    }, 2800);
                                }, 2600);
                            }, 2400);
                        }, 2200);
                    }, 2000);
                }, 1800);
            }, 1600);
        }, 1400);
    }, 1200);
}, 1000);

function moveImage(img, num, radiusX, radiusY) {
    const containerWidth = container.offsetWidth + num;
    const containerHeight = container.offsetHeight + num;

    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;
    let angle = 0;

    setInterval(() => {
        const newX = centerX + radiusX * Math.cos(angle);
        const newY = centerY + radiusY * Math.sin(angle);

        img.style.left = `${newX}px`;
        img.style.top = `${newY - 200}px`;

        angle += 0.01; // Adjust speed of rotation
    }, 10.0); // Adjust interval for smoother animation
}
