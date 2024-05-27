function calcularDescontoINSS(salarioBruto) {
    var salarioLimpo = 0

    switch (true) {
        case salarioBruto <= 1320:
            salarioLimpo = salarioBruto - (salarioBruto * 0.075)
            break;
        case salarioBruto <= 2571.29:
            salarioLimpo = salarioBruto - (salarioBruto * 0.09)
            break;
        case salarioBruto <= 3856.94:
            salarioLimpo = salarioBruto - (salarioBruto * 0.12)
            break;
        default:
            salarioLimpo = salarioBruto - (salarioBruto * 0.14)
    }

    return salarioLimpo
}




function calcularIR(){
var valoutrosRedimentos = 0
var salarioBruto = document.getElementById('salarioBruto')  
var outrosRedimentos = document.getElementById('outrosRendimentos')
var dependentes = document.getElementById('dependentes')

var valsalarioBruto = salarioBruto.value
valoutrosRedimentos = outrosRedimentos.value
var valdependentes = dependentes.value
salarioLimpo = calcularDescontoINSS(valsalarioBruto)
var imposto = 0
var impostocomdeducao = 0
var rendadedusida = salarioLimpo - (189.59 * valdependentes)
var impostoAserPago = 0
var imprime = document.getElementById("resultado")
valoutrosRedimentos = valoutrosRedimentos.trim() === "" ? 0 : parseFloat(valoutrosRedimentos)
rendadedusida = parseFloat(rendadedusida)

var rendaTotal = (valoutrosRedimentos + rendadedusida)

    switch (true) {
        case rendaTotal <= 2259.20:
            salarioLimpo = salarioLimpo
            imposto = 0
            impostocomdeducao = imposto - 0
            impostoAserPago = impostocomdeducao.toFixed(2)
            imprime.innerHTML = "Imposto a ser pago é R$" + impostoAserPago
            console.log(imposto + " Imposto |" + salarioLimpo + " SalarioLimpo |" + valdependentes + " Valdependentes |" + rendadedusida + " Rendededusida | " + impostocomdeducao + " impostocomdeducao " + rendaTotal + " Rendatotal " + valoutrosRedimentos + " outrosrendimentos ")
            break
    
        case rendaTotal <= 2828.65:
            imposto = rendaTotal * 0.075
            impostocomdeducao = imposto - 169.44
            impostoAserPago = impostocomdeducao.toFixed(2)
            imprime.innerHTML = "Imposto a ser pago é R$" + impostoAserPago
            console.log(" 2º |" + imposto + " Imposto |" + salarioLimpo + " SalarioLimpo |" + valdependentes + " Valdependentes |" + rendadedusida + " Rendededusida | " + impostocomdeducao + " impostocomdeducao " + rendaTotal + " Rendatotal " + valoutrosRedimentos + " outrosrendimentos ")
            break

        case rendaTotal <= 3751.05:
            imposto = rendaTotal * 0.15
            impostocomdeducao = imposto - 381.44
            impostoAserPago = impostocomdeducao.toFixed(2)
            imprime.innerHTML = "Imposto a ser pago é R$" + impostoAserPago
            console.log(" 3º |" + imposto + " Imposto |" + salarioLimpo + " SalarioLimpo |" + valdependentes + " Valdependentes |" + rendadedusida + " Rendededusida | " + impostocomdeducao + " impostocomdeducao " + rendaTotal + " Rendatotal " + valoutrosRedimentos + " outrosrendimentos ")
        break

        case rendaTotal <= 4664.68:
            imposto = rendaTotal * 0.225
            impostocomdeducao = imposto - 662.77
            impostoAserPago = impostocomdeducao.toFixed(2)
            imprime.innerHTML = "Imposto a ser pago é R$" + impostoAserPago
            console.log(" 4º |" + imposto + " Imposto |" + salarioLimpo + " SalarioLimpo |" + valdependentes + " Valdependentes |" + rendadedusida + " Rendededusida | " + impostocomdeducao + " impostocomdeducao " + rendaTotal + " Rendatotal " + valoutrosRedimentos + " outrosrendimentos ")
        break

        default:
            imposto = rendaTotal * 0.275
            impostocomdeducao = imposto - 896
            impostoAserPago = impostocomdeducao.toFixed(2)
            imprime.innerHTML = "Imposto a ser pago é R$" + impostoAserPago
            console.log(" 5º |" + imposto + " Imposto |" + salarioLimpo + " SalarioLimpo |" + valdependentes + " Valdependentes |" + rendadedusida + " Rendededusida | " + impostocomdeducao + " impostocomdeducao " + rendaTotal + " Rendatotal " + valoutrosRedimentos + " outrosrendimentos ")
    }
}

function mudarfoco(event, nextInputId) { 
    if (event.key === 'Enter') {
        event.preventDefault()
        document.getElementById(nextInputId).focus()
    }
}
//se tiver errado eu vou com certeza cair na malha fina....depois desse trabalho eu tirei a conclusão que não sei nada sobre imposto
