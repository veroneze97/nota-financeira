/* =========================
   NOTA FINANCEIRA – MAIN
   ========================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -------------------------
       1️⃣ Atualização dinâmica
    -------------------------- */

    function updateTimestamp() {
        const label = document.getElementById("updatedLabel");
        if (!label) return;

        const now = new Date();
        const hh = String(now.getHours()).padStart(2, "0");
        const mm = String(now.getMinutes()).padStart(2, "0");

        label.textContent = `Atualizado agora • ${hh}:${mm}`;
    }

    updateTimestamp();

    // Simula atualização a cada 15 minutos
    setInterval(updateTimestamp, 900000);



    /* -------------------------
       2️⃣ Animação de Sparklines
    -------------------------- */

    function animateSparklines() {
        const lines = document.querySelectorAll("polyline");

        lines.forEach(line => {
            const length = line.getTotalLength();
            line.style.strokeDasharray = length;
            line.style.strokeDashoffset = length;

            line.getBoundingClientRect(); // trigger reflow

            line.style.transition = "stroke-dashoffset 1.2s ease-out";
            line.style.strokeDashoffset = "0";
        });
    }

    animateSparklines();



    /* -------------------------
       3️⃣ Hover suave em cards
    -------------------------- */

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



    /* -------------------------
       4️⃣ Simulação de dados
       (Preparado para API real)
    -------------------------- */

    function simulateMarketMove() {
        const values = document.querySelectorAll(".val");

        values.forEach(val => {
            const random = (Math.random() * 0.8 - 0.4).toFixed(2);
            const percent = parseFloat(random);

            if (val.classList.contains("up") || val.classList.contains("down")) {

                val.textContent =
                    percent >= 0
                        ? `▲ +${percent}%`
                        : `▼ ${percent}%`;

                val.classList.remove("up", "down");

                if (percent >= 0) {
                    val.classList.add("up");
                } else {
                    val.classList.add("down");
                }
            }
        });
    }

    // Atualiza simulado a cada 30 segundos
    setInterval(simulateMarketMove, 30000);



    /* -------------------------
       5️⃣ Scroll suave interno
    -------------------------- */

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



    /* -------------------------
       6️⃣ Placeholder API
    -------------------------- */

    async function fetchMarketData() {
        // Futuro:
        // const response = await fetch('/api/market');
        // const data = await response.json();
        // updateUI(data);

        console.log("API pronta para integração futura.");
    }

});
