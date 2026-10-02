
// Objetivo: Combinar repetição, entrada de dados e acumulador.
// Uma equipe registrou o tempo, em minutos, de seis atendimentos técnicos e deseja calcular a média.
// O programa deve:
// ☐ Criar um acumulador iniciado em zero.
// ☐ Usar um laço para solicitar exatamente 6 tempos.
// ☐ Somar cada valor ao acumulador.
// ☐ Calcular a média ao final.
// ☐ Exibir a soma dos tempos e a média.


const entrada = require("readline-sync");
let somaTempos = 0;
const totalAtendimentos = 6;

for (let i = 0; i < totalAtendimentos; i++) {
    const tempo = entrada.questionInt(`Informe o tempo do atendimento ${i + 1} (em minutos): `);
    somaTempos += tempo;
}

const mediaTempos = somaTempos / totalAtendimentos;

console.log(`Soma dos tempos: ${somaTempos} minutos`);
console.log(`Média dos tempos: ${mediaTempos} minutos`);



































































