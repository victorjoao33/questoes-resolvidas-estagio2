// O valor da variável SOMA será 91, pois o código está somando os valores de K de 1 até 13 (incluso), ou seja, 1 + 2 + 3 + ... + 13 = 91.

let INDICE = 13, SOMA = 0, K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);


// O código acima faz a mesma operação que o código original so que em JS.