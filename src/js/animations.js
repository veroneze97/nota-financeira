/**
 * Anima as linhas de gráfico (sparklines) no ticker.
 */
export function animateSparklines() {
    const lines = document.querySelectorAll("polyline");

    lines.forEach(line => {
        const length = line.getTotalLength();
        line.style.strokeDasharray = length;
        line.style.strokeDashoffset = length;

        line.getBoundingClientRect(); // Trigger reflow

        line.style.transition = "stroke-dashoffset 1.2s ease-out";
        line.style.strokeDashoffset = "0";
    });
}
