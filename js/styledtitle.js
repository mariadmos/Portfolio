const HEADING = document.getElementById('name-maria-dalva-pisca');

    const CONFIG = {
        text: 'M',
        accent: '#bf00ff', // Initial solid color
        probability: 0.1
    };

    const CONFIG2 = {
        text: 'aria Dalv',
        accent: '#bf00ff', // Initial solid color
        probability: 0.2
    };

    const CONFIG3 = {
        text: 'a',
        accent: '#bf00ff', // Initial solid color
        probability: 0.3
    };
    const HEADING3 = document.getElementById('name-maria-dalva-pisca-2');

    const RENDER = () => {
        let splitters = '';
        const flickIndex = Math.floor(Math.random() * (CONFIG.text.length + 1));
        for (let c = 0; c < CONFIG.text.length; c++) {
            const flick = Math.random() < CONFIG.probability || c === flickIndex;
            const speed = Math.random() * (4 - 1) + 1; // speed ranges from 1 to 4
            const delay = Math.random() * 5; // delay ranges from 0 to 5 seconds

            splitters += `<span ${flick ? `data-flick="true" style="--speed:${speed}s; --delay:${delay}s; animation-delay: ${delay}s; animation-duration: ${speed}s;"` : ''}>${CONFIG.text[c]}</span>`;
        }
        HEADING.innerHTML = splitters + `<span class="sr-only">${CONFIG.text}</span>`;
    };

    // Toggle between solid and semi-transparent color
    let isSolidColor = true;
    let isSolidColor2 = true;
    let isSolidColor3 = true;

    const updateAccent = () => {
        const color = isSolidColor ? 'rgb(191, 0, 255, 1)' : 'rgb(191, 0, 255, 0.5)'; // Solid or semi-transparent
        document.documentElement.style.setProperty('--accent', color);
        RENDER();
        isSolidColor = !isSolidColor; // Toggle the state
    };

  
    const HEADING2 = document.getElementById('name-maria-dalva');

    

    const RENDER2 = () => {
        let splitters = '';
        const flickIndex = Math.floor(Math.random() * (CONFIG2.text.length + 1));
        for (let c = 0; c < CONFIG2.text.length; c++) {
            const flick = Math.random() < CONFIG2.probability || c === flickIndex;
            const speed = Math.random() * (4 - 1) + 1; // speed ranges from 1 to 4
            const delay = Math.random() * 5; // delay ranges from 0 to 5 seconds

            splitters += `<span ${flick ? `data-flick="true" style="--speed:${speed}s; --delay:${delay}s; animation-delay: ${delay}s; animation-duration: ${speed}s;"` : ''}>${CONFIG2.text[c]}</span>`;
        }
        HEADING2.innerHTML = splitters + `<span class="sr-only">${CONFIG2.text}</span>`;
    };

    const RENDER3 = () => {
        let splitters = '';
        const flickIndex = Math.floor(Math.random() * (CONFIG3.text.length + 1));
        for (let c = 0; c < CONFIG3.text.length; c++) {
            const flick = Math.random() < CONFIG3.probability || c === flickIndex;
            const speed = Math.random() * (4 - 1) + 1; // speed ranges from 1 to 4
            const delay = Math.random() * 5; // delay ranges from 0 to 5 seconds

            splitters += `<span ${flick ? `data-flick="true" style="--speed:${speed}s; --delay:${delay}s; animation-delay: ${delay}s; animation-duration: ${speed}s;"` : ''}>${CONFIG3.text[c]}</span>`;
        }
        HEADING3.innerHTML = splitters + `<span class="sr-only">${CONFIG3.text}</span>`;
    };


    // Toggle between solid and semi-transparent color

    const updateAccent2 = () => {
        const color = 'rgb(191, 0, 255, 1)';
        document.getElementById("name-maria-dalva").style.setProperty('--accent', color);
        document.getElementById("name-maria-dalva").style.setProperty('margin-left', "-18px");
        RENDER2();
        isSolidColor2 = !isSolidColor2; // Toggle the state
    };

    const updateAccent3 = () => {
        const color = isSolidColor ? 'rgb(191, 0, 255, 1)' : 'rgb(191, 0, 255, 0.5)'; // Solid or semi-transparent
        document.getElementById("name-maria-dalva-pisca-2").style.setProperty('--accent', color);
        document.getElementById("name-maria-dalva-pisca-2").style.setProperty('margin-left', "-20px");
        RENDER3();
        isSolidColor3 = !isSolidColor3; // Toggle the state
    };
    // Update color every 500 milliseconds
      // Update color every 500 milliseconds

      function randomInterval(func, min, max) {
        const delay = Math.random() * (max - min) + min;
        setTimeout(function() {
            func();
            randomInterval(func, min, max);
        }, delay);
    }

    randomInterval(updateAccent, 0, 2000);
    updateAccent2();
    randomInterval(updateAccent3, 0, 2000);

    // RENDER();
    // RENDER3();