function calcularIR() {
   var RendaBruta = 0
   var outrosRendimentos = 0
   var dependentes = 0
   var deducoes = 0

}

function onlynumers(input) {
    input.value = input.value.replace(/[^0-9]/g, '')
}
function mudarfoco(event, nextInputId) { 
    if (event.key === 'Enter') {
        event.preventDefault()
        document.getElementById(nextInputId).focus()
    }
}
