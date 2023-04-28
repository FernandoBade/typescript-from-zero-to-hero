//number primitivo

let num1: number = 14.0;
let num2: number = 0x37cf;
let num3: number = 0o377;
let num4: number = 0b111001;

console.log('Number - Ponto Flutuante: ', num1, typeof(num1));
console.log('Number - Hexadecimal: ', num2, typeof(num2));
console.log('Number - Octal ', num3, typeof(num3));;
console.log('Number - Binário', num4, typeof(num4));


//bigint OBS': Apenas a partir do ESNEXT ou es2020

let big1: bigint = 9007199254474991n;
let big2: bigint = 0b1000000000000000000000000000000000000000000000000000000000000000000011n;
let big3: bigint = 0x20000000000000n;
let big4: bigint = 0o40000000000003n;

console.log('Bigint - Ponto Flutuante: ', big1, typeof(big1));
console.log('Bigint - Hexadecimal: ', big2, typeof(big2));
console.log('Bigint - Octal ', big3, typeof(big3));;
console.log('Bigint - Binário', big4, typeof(big4)); 