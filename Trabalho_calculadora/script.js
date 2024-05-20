function calcularIR() {
    const rendimentoAnual = parseFloat(document.getElementById('rendimentoAnual').value) || 0;
    const deducoes = parseFloat(document.getElementById('deducoes').value) || 0;
    const outrosRendimentos = parseFloat(document.getElementById('outrosRendimentos').value) || 0;
    const dependentes = parseInt(document.getElementById('dependentes').value) || 0;

    // Cálculo básico de exemplo
    const baseCalculo = rendimentoAnual - deducoes + outrosRendimentos - (dependentes * 189.59);
    let imposto = 0;

    if (baseCalculo <= 22847.76) {
        imposto = 0;
    } else if (baseCalculo <= 33919.80) {
        imposto = (baseCalculo - 22847.76) * 0.075;
    } else if (baseCalculo <= 45012.60) {
        imposto = (baseCalculo - 33919.80) * 0.15 + 827.68;
    } else if (baseCalculo <= 55976.16) {
        imposto = (baseCalculo - 45012.60) * 0.225 + 2104.25;
    } else {
        imposto = (baseCalculo - 55976.16) * 0.275 + 3816.79;
    }

    document.getElementById('resultado').innerText = `Imposto devido: R$ ${imposto.toFixed(2)}`;
}

function validateInput(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}
function mudarfoco(event, nextInputId) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById(nextInputId).focus();
    }
}
