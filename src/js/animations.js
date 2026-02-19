/**
 * Anima a entrada dos cards de forma escalonada.
 */
export function animateEntrance() {
    const elements = document.querySelectorAll('.card, .hero-dashboard h1, .hero-dashboard p, .hero-content .btn, .sidebar-link, .cat-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s`;
        observer.observe(el);
    });
}


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
