// Objetivo: Cadastrar e percorrer dados armazenados em um array.
// Crie um programa para cadastrar seis setores de uma fábrica e, ao final, listar todos os setores numerados.
// O programa deve:
// ☐ Criar um array vazio.
// ☐ Usar um laço para solicitar 6 nomes de setores.
// ☐ Adicionar cada nome ao array usando push().
// ☐ Percorrer o array novamente após o cadastro.
// ☐ Exibir no formato &quot;1 - Montagem&quot;, &quot;2 - Qualidade&quot; etc.
// ☐ Usar a propriedade length em pelo menos um dos laços.



const entrada = require("readline-sync");
let setores = [];

for(let i =0; i < 6; i++ ) {
    const nomesSetores = entrada.question(`Informe o nome do setor ${i+1}:`);
    setores.push(nomesSetores);
}

    console.log("\nSetores cadastrados:");
for (let i = 0; i < setores.length; i++) {
    console.log(`${i + 1} - ${setores[i]}`);
}





















