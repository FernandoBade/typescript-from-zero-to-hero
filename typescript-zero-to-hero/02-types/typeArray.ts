let frutas1: string[] = ['abacaxi', 'banana', 'maçã', 'limão', 'melancia', 'morango'];
console.log(frutas1[0]);


let frutas2: Array<string> = ['abacaxi', 'banana', 'maçã', 'limão', 'melancia', 'morango'];
console.log(frutas2[1]);

let frutas3: Array<string> = ['abacaxi'];
console.log(frutas3)
frutas3.push('banana');
console.log(frutas3)
console.log(frutas3.length)


//spread operator

let listaNumeros: Array<number> = new Array(1,2,3,4,5,6,7,8,9,10);
listaNumeros =  [...listaNumeros, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(listaNumeros);

listaNumeros.forEach((n) => console.log(n));
