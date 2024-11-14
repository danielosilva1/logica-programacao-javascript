alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let numeroTentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    // Se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        numeroTentativas++;

        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
}

let palavraTentativa = numeroTentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto}) com ${numeroTentativas} ${palavraTentativa}`);

// if (numeroTentativas > 1) {
//     alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto}) com ${numeroTentativas} tentativas`);
// } else {
//     alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto}) com ${numeroTentativas} tentativa`);
// }