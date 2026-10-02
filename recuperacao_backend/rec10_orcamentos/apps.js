// ☐ Exportar as funções com module.exports.
// ☐ Criar o arquivo app.js.
// ☐ No app.js, importar readline-sync e o módulo com require().
// ☐ Solicitar nome do cliente, valor dos materiais e horas de serviço.
// ☐ Exibir relatório com cliente, materiais, mão de obra, total e situação do desconto.


const entrada = require("readline-sync");
const funcoes = require("./funcoesOrcamentos");


const nomeCliente = entrada.question(`Qual e o nome do cliente?`);
const valorMateriais = entrada.questionFloat(`Qual e o valor dos materiais?`);
const horasServico = entrada.questionInt(`Quantas horas de servico?`)

const maoDeObra = funcoes.calcularMaoDeObra(horasServico);
const total = funcoes.calcularTotal(valorMateriais,horasServico);
const desconto = funcoes.verificarDesconto(total);

console.log(`Cliente: ${nomeCliente}`);
console.log(`Mao de obra: R$ ${maoDeObra.toFixed(2)}`);
console.log(`Materiais: R$ ${valorMateriais.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Desconto: ${desconto}`);