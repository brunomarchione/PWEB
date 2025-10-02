function jogar(escolhaUsuario) {
    const numAleatorio = Math.random() * 0.99;
    let escolhaComp = '';

    if (numAleatorio < 0.33) {
        escolhaComp = 'Pedra';
    } else if (numAleatorio < 0.66) {
        escolhaComp = 'Papel';
    } else {
        escolhaComp = 'Tesoura';
    }

    let resultado = '';
    let explicacao = '';

    if (escolhaUsuario === escolhaComp) {
        resultado = 'Empate, computador também escolheu ' + escolhaComp + '.';
    } else if (
        (escolhaUsuario === 'Pedra' && escolhaComp === 'Tesoura') ||
        (escolhaUsuario === 'Tesoura' && escolhaComp === 'Papel') ||
        (escolhaUsuario === 'Papel' && escolhaComp === 'Pedra')
    ) {
        resultado = 'Você venceu! Computador escolheu ' + escolhaComp;
        explicacao = `${escolhaUsuario} vence ${escolhaComp}.`;
    } else {
        resultado = 'Você perdeu! Computador escolheu ' + escolhaComp;
        explicacao = `${escolhaComp} vence ${escolhaUsuario}.`;
    }

    document.getElementById('resultado').textContent = resultado;
    document.getElementById('explicacao').textContent = explicacao;
}