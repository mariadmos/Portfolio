 // Função para rolar para a âncora correspondente quando clicada
 document.querySelectorAll('.right-side a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão do link
        const targetId = this.getAttribute('href').substring(1); // Obtém o ID do alvo
        const targetElement = document.getElementById(targetId); // Obtém o elemento alvo
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente até o elemento
        }
    });
});