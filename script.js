// Espera o HTML carregar antes de executar o código
document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll(".fade-in");

    // Observa quando os elementos entram na área visível da tela
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                // Ativa a animação definida no CSS
                entrada.target.classList.add("visivel");

                // Depois de animar, não precisamos mais observar o elemento
                observador.unobserve(entrada.target);
            }
        });
    }, {
        // A animação começa quando 10% do elemento estiver visível
        threshold: 0.10
    });

    // Adiciona o observador em cada elemento com a classe "fade-in"
    elementos.forEach((elemento) => {
        observador.observe(elemento);
    });
});