/**
 * Configura interações de UI como hover em cards e scroll suave.
 */
export function setupUIInteractions() {
    // Scroll suave interno
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;

            const target = document.querySelector(targetId);
            if (!target) return;

            window.scrollTo({
                top: target.offsetTop - 40,
                behavior: "smooth"
            });

            // Ativa link na sidebar se existir
            document.querySelectorAll('.sidebar-link').forEach(link => link.classList.remove('active'));
            if (this.classList.contains('sidebar-link')) {
                this.classList.add('active');
            }
        });
    });
}

