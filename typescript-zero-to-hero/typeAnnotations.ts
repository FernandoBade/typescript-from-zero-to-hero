//variáveis
let nome: string = "John Doe";
console.log(nome);

//arrays
let animais: string[] = ["elefante, cachorro, panda"]
console.log(animais);

//objetos
let carro: {
    marca: string,
    modelo: string,
    ano: number,
    preco: number
}
carro = {
    marca: "VW",
    modelo: "Corsa",
    ano: 2002,
    preco: 15_000
}
console.log(carro);

//funções
function multiplicarNumeros(num1: number, num2: number) {
    return num1 * num2;
}
console.log(multiplicarNumeros(10, 12));

//booleanos
let tarefaConcluida: boolean = true;
let tarefaPendente: boolean = false;

console.log(tarefaConcluida);
console.log(tarefaPendente);

let concluido: boolean = false;

if (concluido) {
    console.log("Concluída com sucesso");
} else {
    console.log("Tarefa pendente")
}

