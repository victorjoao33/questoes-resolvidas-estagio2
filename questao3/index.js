const faturamentoDiario = [1500, 2000, 800, 1200, 1700, 1300, 0, 0, 1400, 1800, 1000, 1600, 1900, 1100, 1300, 1700, 1200, 1300, 1400, 2000, 1800, 1600, 1400, 1700, 1900, 2100, 2200, 1700, 1900, 1500, 1300];

// menor valor de faturamento
const menorFaturamento = Math.min(...faturamentoDiario);
console.log(`Menor faturamento: ${menorFaturamento}`);

// maior valor de faturamento
const maiorFaturamento = Math.max(...faturamentoDiario);
console.log(`Maior faturamento: ${maiorFaturamento}`);

// média de faturamento diário
const diasUteis = 22; // supondo 22 dias úteis no mês
const faturamentoTotal = faturamentoDiario.reduce((total, faturamento) => total + faturamento, 0);
const mediaFaturamentoDiario = faturamentoTotal / diasUteis;

// número de dias em que o faturamento diário foi superior à média mensal
let diasAcimaMedia = 0;
faturamentoDiario.forEach((faturamento) => {
  if (faturamento > mediaFaturamentoDiario) {
    diasAcimaMedia++;
  }
});

console.log(`Número de dias com faturamento acima da média: ${diasAcimaMedia}`);


/*A solução acima considera um vetor faturamentoDiario com os valores de faturamento de cada dia útil do mês. Primeiramente, é calculado o menor e o maior valor de faturamento do mês utilizando as funções Math.min e Math.max, respectivamente.

Em seguida, é calculada a média de faturamento diário do mês, desconsiderando os dias sem faturamento (finais de semana e feriados), utilizando a função reduce para somar todos os valores de faturamento diário e dividindo pelo número de dias úteis do mês.

Por fim, é contado o número de dias em que o faturamento diário foi superior à média mensal utilizando um loop forEach. */