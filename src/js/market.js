/**
 * Simula movimentos aleatórios nos valores de mercado.
 */
export function simulateMarketMove() {
    const values = document.querySelectorAll(".val");

    values.forEach(val => {
        const random = (Math.random() * 0.8 - 0.4).toFixed(2);
        const percent = parseFloat(random);

        if (val.classList.contains("up") || val.classList.contains("down")) {
            val.textContent = percent >= 0 ? `▲ +${percent}%` : `▼ ${percent}%`;

            val.classList.remove("up", "down");
            val.classList.add(percent >= 0 ? "up" : "down");
        }
    });
}
