"use strict";
//variáveis
let nome = "John Doe";
console.log(nome);
//arrays
let animais = ["elefante, cachorro, panda"];
console.log(animais);
//objetos
let carro;
carro = {
    marca: "VW",
    modelo: "Corsa",
    ano: 2002,
    preco: 15000
};
console.log(carro);
//funções
function multiplicarNumeros(num1, num2) {
    return num1 * num2;
}
console.log(multiplicarNumeros(10, 12));
//booleanos
let tarefaConcluida = true;
let tarefaPendente = false;
console.log(tarefaConcluida);
console.log(tarefaPendente);
let concluido = false;
if (concluido) {
    console.log("Concluída com sucesso");
}
else {
    console.log("Tarefa pendente");
}
