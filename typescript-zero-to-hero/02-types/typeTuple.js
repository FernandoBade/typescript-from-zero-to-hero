"use strict";
//let pessoa: [string, string, number];
// pessoa = ['Glaucia Lemos', 'Cloud Advocate', 34];
//pessoa = [34, 'Glaucia Lemos', 'Cloud Advocate'];
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Glaucia', 'Lemos'));
console.log(criarPessoa('Glaucia', 'de Souza', 'Lemos'));
