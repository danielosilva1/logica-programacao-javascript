# Respostas dos Desafios

1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

```javascript
let contador = 1;

while (contador <= 10) {
    console.log(`Valor do contador: ${contador}`);
    contador++;
}
```

2. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

```javascript
let contador = 10;

while (contador >= 0) {
    console.log(`Valor do contador: ${contador--}`);
}
```

3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

```javascript
let numero = prompt('Informe um número positivo');

console.log('Contagem regressiva:');
while (numero >= 0) {
    console.log(numero--);
}
```

4. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

```javascript
let numero = prompt('Informe um número positivo');
let contador = 0;

console.log('Contagem progressiva:');
while (contador <= numero) {
    console.log(contador++);
}
```