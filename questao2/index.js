function verificaFibonacci(numero) {
  let a = 0;
  let b = 1;
  while (b < numero) {
    let temp = b;
    b = a + b;
    a = temp;
  }
  if (b === numero) {
    return `${numero} pertence à sequência de Fibonacci.`;
  } else {
    return `${numero} não pertence à sequência de Fibonacci.`;
  }
}

// Exemplo de uso
console.log(verificaFibonacci(13)); // saída: 13 pertence à sequência de Fibonacci.
console.log(verificaFibonacci(7)); // saída: 7 não pertence à sequência de Fibonacci.


/* O código define uma função verificaFibonacci que recebe como argumento um número e verifica se ele pertence ou não à sequência de Fibonacci.

Dentro da função, inicializamos as variáveis a e b com os valores 0 e 1, respectivamente, que são os dois primeiros números da sequência. Em seguida, usamos um loop while para ir somando a e b até que b seja igual ou maior que o número informado. Dessa forma, teremos calculado os números da sequência de Fibonacci até um número próximo ou igual ao número informado.

Para fazer essa soma, guardamos o valor atual de b em uma variável temporária temp, atualizamos o valor de b somando a e b, e finalmente atualizamos o valor de a com o valor guardado em temp. Dessa forma, garantimos que a será sempre o valor anterior de b e b será sempre a soma dos dois valores anteriores.

Depois de calcularmos os números da sequência até esse ponto, verificamos se b é igual ao número informado. Se for, retornamos uma mensagem dizendo que o número pertence à sequência de Fibonacci. Caso contrário, retornamos uma mensagem dizendo que o número não pertence à sequência.

Por fim, podemos testar a função passando alguns números como argumento e verificando se ela retorna a mensagem correta para cada caso. No exemplo acima, chamamos a função duas vezes passando os números 13 e 7 como argumento e verificamos se a saída está correta. */