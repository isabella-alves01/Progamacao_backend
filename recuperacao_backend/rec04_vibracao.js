// Objetivo: Utilizar if, else if e else em uma regra de negócio.
// Um sensor mede o nível de vibração de um equipamento em mm/s.
// O programa deve:
// ☐ Até 3 mm/s: situação ESTÁVEL.
// ☐ Acima de 3 até 6 mm/s: situação ATENÇÃO.
// ☐ Acima de 6 mm/s: situação CRÍTICA.
// ☐ Solicitar o valor da vibração pelo terminal.
// ☐ Exibir o valor informado e a classificação.

const entrada = require("readline-sync");
const nivelVibracao = entrada.questionInt(`Qual e o nivel de vibracao em mm/s:`);

if( nivelVibracao <=3){
    console.log(`Seu nivel e ${nivelVibracao} situacao ESTAVEL`)
}else if( nivelVibracao >3 && nivelVibracao <=6){
    console.log(`Seu nivel e ${nivelVibracao} situacao ATENCAO`)
}else{
    console.log(`Seu nivel e ${nivelVibracao} situacao CRITICA`)
}

