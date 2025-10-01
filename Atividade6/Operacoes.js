function calcOperacoes() {
    const primeiroNumero = Number(prompt("Informe o primeiro valor:"));
    const segundoNumero = Number(prompt("Informe o segundo valor:"));

    const resultados = {
        adicao: primeiroNumero + segundoNumero,
        subtracao: primeiroNumero - segundoNumero,
        multiplicacao: primeiroNumero * segundoNumero,
        divisao: primeiroNumero / segundoNumero,
        resto: primeiroNumero % segundoNumero
    };

    let textoResultado =  `📊 Operações realizadas:\n\n`;
        textoResultado += `➕ Adição: ${resultados.adicao}\n`;
        textoResultado += `➖ Subtração: ${resultados.subtracao}\n`;
        textoResultado += `✖️ Multiplicação: ${resultados.multiplicacao}\n`;
        textoResultado += `➗ Divisão: ${resultados.divisao}\n`;
        textoResultado += `🧮 Resto: ${resultados.resto}`;

    alert(textoResultado);
}