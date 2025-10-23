function maiorNumero(a, b, c) {
    return Math.max(a, b, c);
}

function ordenaNumero(a, b, c) {
    return [a, b, c].sort((x, y) => x - y);
}

function verificaPalindromo(str) {
    const palavra = str.toUpperCase();
    const invertePalavra = palavra.split('').reverse().join('');
    return palavra === invertePalavra ? " é um palíndromo" : " não é um palíndromo";
}

function verificaTriangulo(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return "O triângulo é Equilátero";
        } else if (a === b || b === c || a === c) {
            return "O triângulo é Isósceles";
        } else {
            return "O triângulo é Escaleno";
        }
    } else {
        return "Não é um triângulo";
    }
}

function chamaMaiorNumero() {
    const num1 = Number(prompt("Digite o primeiro número: "));
    const num2 = Number(prompt("Digite o segundo número: "));
    const num3 = Number(prompt("Digite o terceiro número: "));
    alert("O maior número é " + maiorNumero(num1, num2, num3));
}

function chamaCrescente() { 
    const num1 = Number(prompt("Digite o primeiro número: "));
    const num2 = Number(prompt("Digite o segundo número: "));
    const num3 = Number(prompt("Digite o terceiro número: "));
    alert("Números ordenados em ordem crescente: " + ordenaNumero(num1, num2, num3));
}

function chamaPalindromo() {
    const palavraEntrada = prompt("Digite uma palavra para verificar se é um palíndromo:");
    alert("A palavra " + palavraEntrada + verificaPalindromo(palavraEntrada));
}

function chamaTriangulo() {
    const num1 = Number(prompt("Digite o primeiro lado do triângulo: "));
    const num2 = Number(prompt("Digite o segundo lado do triângulo: "));
    const num3 = Number(prompt("Digite o terceiro lado do triângulo: "));
    alert(verificaTriangulo(num1, num2, num3));
}