const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((total, faturamento) => total + faturamento, 0);
  
  for (const estado in faturamentoPorEstado) {
    const percentual = (faturamentoPorEstado[estado] / faturamentoTotal) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
  }

  
 /*A solução acima utiliza um objeto faturamentoPorEstado para armazenar os valores de faturamento de cada estado. Em seguida, é calculado o faturamento total da distribuidora somando todos os valores do objeto utilizando a função Object.values e o método reduce.

Por fim, é percorrido um loop for...in sobre o objeto faturamentoPorEstado, calculando o percentual de representação de cada estado no faturamento total e imprimindo o resultado no console. */ 