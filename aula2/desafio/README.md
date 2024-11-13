# Respostas dos Desafios

1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

```javascript
let diaDaSemana = prompt('Informe o dia da semana');

if (diaDaSemana == 'Sábado') {
    alert('Bom final de semana!');
} else if (diaDaSemana == 'Domingo') {
    alert('Bom final de semana!');
} else {
    alert('Boa semana!');
}
```

2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

```javascript
let numero = prompt('Informe um número');

if (numero > 0) {
    alert('Número é positivo');
} else {
    alert('Número é negativo');
}
```

3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

```javascript
let pontucao = 91;

if (pontuacao >= 100) {
    alert('Parabéns, você venceu!');
} else {
    alert('Tente novamente para ganhar.');
}
```

4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

```javascript
let saldo = 1000;

alert(`Caro(a) cliente, seu saldo é R$ ${saldo} reais.`);
```

5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

```javascript
let nome = prompt('Informe seu nome');

alert(`Boas vindas, ${nome}!`);
```