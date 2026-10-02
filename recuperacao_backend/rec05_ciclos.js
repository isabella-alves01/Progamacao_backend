// Objetivo: Utilizar laço de repetição para gerar uma sequência de resultados.
// Uma esteira produz uma quantidade fixa de produtos por ciclo. O supervisor quer visualizar a produção
// acumulada dos ciclos 1 até 12.
// O programa deve:
// ☐ Solicitar quantos produtos são produzidos por ciclo.
// ☐ Usar um laço for de 1 até 12.
// ☐ Exibir, em cada ciclo, o número do ciclo e a produção acumulada.
// ☐ Não escrever manualmente as doze linhas.

const entrada = require("readline-sync");
const producaoPorCiclo = entrada.questionInt(`Quantos produtos sao produzidos por ciclo:`);

let producaoAcumulada = 0;

for (let ciclo = 1; ciclo <= 12; ciclo++) {
    producaoAcumulada += producaoPorCiclo;
    console.log(`Ciclo ${ciclo}: Produção acumulada = ${producaoAcumulada}`);
}
