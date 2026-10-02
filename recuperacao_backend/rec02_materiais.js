// Objetivo: Trabalhar com entrada de dados e cálculos numéricos.
// Uma equipe de manutenção precisa calcular o custo de um lote de peças de reposição.
// O programa deve:
// ☐ Importar a biblioteca readline-sync.
// ☐ Solicitar o nome da peça.
// ☐ Solicitar a quantidade comprada.
// ☐ Solicitar o preço unitário.
// ☐ Calcular o valor total da compra.
// ☐ Exibir um resumo contendo nome, quantidade, preço unitário e total.


const entrada = require('readline-sync');
 
const nomePeca = entrada.question(`Nome peca:`);
const quantidadeComprada = entrada.questionInt(`Quantidade comprada:`);
const precoUnitario =entrada.questionFloat(`preco unitario de cada peca:`)
const valorTotal = quantidadeComprada * precoUnitario

console.log(`O nome da sua peca^: ${nomePeca}`);
console.log(`Aquantidade que voce pegou: ${quantidadeComprada}`);
console.log(`O preco unitario: ${precoUnitario}`);
console.log(`preco total da sua compra: ${valorTotal}`)

