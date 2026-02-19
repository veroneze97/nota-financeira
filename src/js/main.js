import { updateTimestamp } from './utils.js';
import { animateSparklines, animateEntrance } from './animations.js';
import { simulateMarketMove } from './market.js';
import { setupUIInteractions } from './ui.js';

document.addEventListener("DOMContentLoaded", () => {
    // Inicialização
    updateTimestamp();
    animateSparklines();
    animateEntrance();
    setupUIInteractions();

    // Loops de atualização
    setInterval(updateTimestamp, 900000); // 15 min
    setInterval(simulateMarketMove, 30000); // 30 seg

    console.log("Nota Financeira: Estrutura profissional carregada.");
});
