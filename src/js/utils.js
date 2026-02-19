/**
 * Atualiza o rótulo de timestamp no cabeçalho.
 */
export function updateTimestamp() {
    const label = document.getElementById("updatedLabel");
    if (!label) return;

    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const mins = 15; // Padrão demo

    label.textContent = `Atualizado há ${mins} min • ${hh}:${mm}`;
}
