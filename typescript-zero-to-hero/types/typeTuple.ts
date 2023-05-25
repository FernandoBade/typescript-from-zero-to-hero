//let pessoa: [string, string, number];
// pessoa = ['Glaucia Lemos', 'Cloud Advocate', 34];
//pessoa = [34, 'Glaucia Lemos', 'Cloud Advocate'];

// let pessoa1: [string, string, number];
// pessoa1 = ['Glaucia Lemos', 'Cloud Advocate', 34];
// console.log(pessoa1[0]); 
// console.log(pessoa1[1]);
// console.log(pessoa1[2]);

// let pessoa2: [nome: string, posicao: string, idade: number];
// pessoa2 = ['Glaucia Lemos', 'Cloud Advocate', 34];
// console.log(pessoa2);

// let listaFrutas: [string, ...string[]] = ['pera', 'laranja', 'maça', 'melancia', 'uva']
// console.log(...listaFrutas)

// let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas]
// console.log(listaFrutas2);

// function listarPessoas(nomes: string[], idades: number[]) {
//     return [...nomes, ...idades];
// }
// let resultado = listarPessoas(['Glaucia', 'Jake'], [34, 14])
// console.log(resultado);


type Nome =
    | [primeiroNome: string, sobrenome: string]
    | [primeiroNome: string, nomeMeio: string, sobrenome: string];
    
function criarPessoa(...nome: Nome){
    return [...nome]
}

console.log(criarPessoa('Glaucia', 'Lemos')); 
console.log(criarPessoa('Glaucia', 'de Souza', 'Lemos')); 
