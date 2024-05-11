let pontosEquipe1 = 0;
let pontosEquipe2 = 0;
let usadoTruco = true; // Inicializado como true

function adicionarPonto(equipe) {
    if (equipe === 1) {
        pontosEquipe1++;
        document.getElementById('pontosEquipe1').textContent = pontosEquipe1;
    } else {
        pontosEquipe2++;
        document.getElementById('pontosEquipe2').textContent = pontosEquipe2;
    }
}

function removerPonto(equipe) {
    if (equipe === 1) {
        pontosEquipe1 = Math.max(0, pontosEquipe1 - 1);
        document.getElementById('pontosEquipe1').textContent = pontosEquipe1;
    } else {
        pontosEquipe2 = Math.max(0, pontosEquipe2 - 1);
        document.getElementById('pontosEquipe2').textContent = pontosEquipe2;
    }
}

function usarTruco() {
    usadoTruco == true
    document.getElementById('truco').classList.add('truco-ativo');
    
}
