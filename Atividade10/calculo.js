function calcularIMC(p, a) {
    if (isNaN(p) || isNaN(a) || p <= 0 || a <= 0) {
        alert("Digite valores válidos para peso e altura.");
    return;
    }

    const imc = p / (a * a);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Magreza";
    } else if (imc < 24.9) {
        classificacao = "Normal";
    } else if (imc <= 29.9) {
        classificacao = "Sobrepeso (GRAU I)";
    } else if (imc <= 39.9) {
        classificacao = "Obesidade (GRAU II)";
    } else {
        classificacao = "Obesidade Grave (GRAU III)";
    }
    alert("\n\nSeu IMC é " + imc.toFixed(2) + " \n\nClassificação: " + classificacao);
}

function chamaCalcularIMC() {
    const altura = parseFloat(prompt("Informe sua altura: "));
    const peso = parseFloat(prompt("Informe seu peso: "));
    calcularIMC(peso, altura);
}