/**
 * Configura interações de UI como hover em cards e scroll suave.
 */
export function setupUIInteractions() {
    // Hover suave em cards
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transition = "all .25s ease";
            card.style.transform = "translateY(-4px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });
    });

    // Scroll suave interno
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (!target) return;

            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });
        });
    });
}
