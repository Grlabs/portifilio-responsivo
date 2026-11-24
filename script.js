
console.log("Portfólio GR Labs carregado!");


const botaoTema = document.getElementById("theme-toggle");

botaoTema.addEventListener("click", function() {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        botaoTema.textContent = "🌙 Modo escuro";
    } else {
        botaoTema.textContent = "☀️ Modo claro";
    }

});


// Abrir modal
function abrirModal(universidade) {
    const modal = document.getElementById("modal-" + universidade);

    modal.style.display = "flex";
}

// Fechar modal
function fecharModal(universidade) {
    const modal = document.getElementById("modal-" + universidade);

    modal.style.display = "none";
}

// Fechar ao clicar fora do conteúdo
window.addEventListener("click", function(event) {

    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }

});

// Fechar apertando ESC
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        document.querySelectorAll(".modal").forEach(function(modal) {
            modal.style.display = "none";
        });
    }

});
