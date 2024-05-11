var pontosEquipe1 = 0
var pontosEquipe2 = 0
var usadoTruco = false
var pontostruco = null

function adicionarPonto1() {  
    if(usadoTruco == true){
        pontosEquipe1 = pontosEquipe1 +2
    }
    else{
        pontosEquipe1++
    }
    document.getElementById('pontosEquipe1').textContent = pontosEquipe1;
}
function adicionarPonto2() {  
    if(usadoTruco == true){
        pontosEquipe2 = pontosEquipe2 +2
    }
    else{
        pontosEquipe2++
    }
    document.getElementById('pontosEquipe2').textContent = pontosEquipe2;
}

function removerPonto1() {
    if(pontosEquipe1 > 0){
        pontosEquipe1--
        document.getElementById('pontosEquipe1').textContent = pontosEquipe1;
    }
}

function removerPonto2() {
    if(pontosEquipe2 > 0){
    pontosEquipe2--
    document.getElementById('pontosEquipe2').textContent = pontosEquipe2;
}
}

function usarTruco() {
    if(usadoTruco == false){
        usadoTruco = true
        document.getElementById('truco').classList.add('truco-ativo');
    }
    else{
        usadoTruco = false
        document.getElementById('truco').classList.remove('truco-ativo');
    }
    
        
    
    
    
    
}