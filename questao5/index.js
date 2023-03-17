let minhaString = "Exemplo de string a ser invertida";
let stringInvertida = "";

for (let i = minhaString.length - 1; i >= 0; i--) {
  stringInvertida += minhaString[i];
}

console.log(stringInvertida);


/* Na solução acima, a string a ser invertida é armazenada na variável minhaString. Em seguida, é criada uma variável vazia stringInvertida, que será usada para armazenar a string invertida.

Depois disso, é utilizado um loop for que começa do último caractere da string (índice minhaString.length - 1) e percorre até o primeiro caractere (índice 0), adicionando cada caractere encontrado à variável stringInvertida.

Por fim, a string invertida é impressa no console usando a função console.log. */