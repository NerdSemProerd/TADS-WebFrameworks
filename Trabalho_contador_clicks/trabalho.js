var pontosEquipe1 = 0
var pontosEquipe2 = 0
var usadoTruco = false
var pontostruco = null
var vitoriasEquipe1 = 0
var vitoriasEquipe2 = 0
var placarEquipe1 = document.getElementById("Equipe1")
var placarEquipe2 = document.getElementById("Equipe2")

function adicionarPonto1() {  
    if(usadoTruco == true){
        pontosEquipe1 = pontosEquipe1 +3
        desligatruco()
        verificapontos()
    }
    else{
        pontosEquipe1++
        verificapontos()
    }
    document.getElementById('pontosEquipe1').textContent = pontosEquipe1;
}
function adicionarPonto2() {  
    if(usadoTruco == true){
        pontosEquipe2 = pontosEquipe2 +3
        desligatruco()
        verificapontos()
    }
    else{
        pontosEquipe2++
        verificapontos()
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
function desligatruco() {
    usadoTruco = false
    document.getElementById('truco').classList.remove('truco-ativo');
}
function verificapontos(){
    if (pontosEquipe1 >= 12){
        vitoriasEquipe1++
        Equipe1.innerHTML = "Vitórias da Equipe 1: " + vitoriasEquipe1;
        zerarpontos()

    }
    if (pontosEquipe2 >= 12){
        vitoriasEquipe2++
        Equipe2.innerHTML = "Vitórias da Equipe 2: " + vitoriasEquipe2;
        zerarpontos()
    }
}
function zerarpontos(){
    pontosEquipe1 = 0
    pontosEquipe2 = 0
    atualizar()
}
function reiniciar(){
    pontosEquipe1 = 0
    pontosEquipe2 = 0
    vitoriasEquipe1 = 0
    vitoriasEquipe2 = 0
    atualizar()
    desligatruco()
}
function atualizar(){
    Equipe1.innerHTML = "Vitórias da Equipe 1: " + vitoriasEquipe1;
    Equipe2.innerHTML = "Vitórias da Equipe 2: " + vitoriasEquipe2;
    document.getElementById('pontosEquipe1').textContent = pontosEquipe1;
    document.getElementById('pontosEquipe2').textContent = pontosEquipe2;
}

//document.getElementById("vencedor").innerHTML =