document.addEventListener("DOMContentLoaded", function() {
    const projectContainer = document.getElementById("project-container");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    let currentPosition = 0;

    const moveCarousel = (direction) => {
        const cardWidth = document.querySelector(".project").offsetWidth;
        const maxPosition = -(projectContainer.childElementCount - 2) * cardWidth; // Considera dois cards a menos para evitar espaços vazios no final
        if (direction === "prev") {
            currentPosition = Math.min(currentPosition + cardWidth, 0);
        } else {
            currentPosition = Math.max(currentPosition - cardWidth, maxPosition);
        }
        projectContainer.style.transform = `translateX(${currentPosition}px)`;
    };

    prevBtn.addEventListener("click", () => moveCarousel("prev"));
    nextBtn.addEventListener("click", () => moveCarousel("next"));

    // Código para carregar os projetos, igual ao anterior
    const loadProjects = () => {
        for (let i = 1; i <= 5; i++) {
            const project = document.createElement("div");
            project.className = "project";
            project.innerHTML = `
                <a href="link_projeto${projectsLoaded + i}_no_github" target="_blank">
                    <img src="caminho_para_imagem_projeto${projectsLoaded + i}.jpg" alt="Projeto ${projectsLoaded + i}">
                    <h3>Nome do Projeto ${projectsLoaded + i}</h3>
                </a>
            `;
            projectContainer.appendChild(project);
        }
        projectsLoaded += 5;
    };

    loadProjects();
});
