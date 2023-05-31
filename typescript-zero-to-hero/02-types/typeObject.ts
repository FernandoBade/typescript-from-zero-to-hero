// const pessoa01 = {
//     nome: 'Glaucia',
//     sobrenome: 'Lemos',
//     idade: 35,
//     funcao: 'Cloud Advocate'
// };

// function onboarding01(funcionario: { nome: string }) {
//     return `Seja bem-vindo(a) ${funcionario.nome}!`;
// }

// interface Pessoa02 {
//     nome: string;
//     funcao: string;
// }

// console.log(pessoa01);
// console.log(onboarding01({ nome: 'Fernando Bade' }));

// function onboarding02(pessoa: Pessoa02) {
//     return `
//     Seja bem-vindo(a) ${pessoa.nome}!
//     Sua função na empresa será ${pessoa.funcao}.`;
// }

// console.log(onboarding02({ nome: 'Fernando', funcao: 'Desenvolvedor Jr' }));
// console.log(onboarding02(pessoa01));

// type Pessoa03 = {
//     nome: string;
//     funcao: string;
//     linguagem: string;
// }

// function onboarding03(pessoa: Pessoa03) {
//     return `
//     Seja bem-vindo(a) ${pessoa.nome}!
//     Sua função na empresa será ${pessoa.funcao}.
//     Você trabalhará com a linguagem ${pessoa.linguagem}.`;
// }
// console.log(onboarding03({ nome: 'Fernando', funcao:'Desenvolvedor Jr', linguagem: 'TypeScript' }));

// interface Pessoa04 {
//     nome: string;
//     funcao: string;
//     linguagem: string;
//     email?: string;
// }

// function onboarding04(pessoa: Pessoa04) {
//     return `
//     Seja bem-vindo(a) ${pessoa.nome}!
//     Sua função na empresa será ${pessoa.funcao}.
//     Você trabalhará com a linguagem ${pessoa.linguagem}.`;
// }
// console.log(onboarding04({ nome: 'Fernando', funcao:'Desenvolvedor Jr', linguagem: 'TypeScript' }));

// interface Pessoa05 {
//     nome: string;
//     funcao: string;
//     linguagem: string;
//     readonly email: string;
// }

// function onboarding05(pessoa: Pessoa05) {
//     return `
//     Seja bem-vindo(a) ${pessoa.nome}!
//     Sua função na empresa será ${pessoa.funcao}.
//     Você trabalhará com a linguagem ${pessoa.linguagem}.
//     Seu e-mail será ${pessoa.email}.`;
// }
// console.log(onboarding05({
//     nome: 'Fernando',
//     funcao: 'Desenvolvedor Jr',
//     linguagem: 'TypeScript',
//     email: 'email@email.com'
// }));

// interface Mae {
//     nome: string;
// }

// interface Pai {
//     sobrenome: string;
// }

// interface Filho extends Mae, Pai {
//     idade: number;
// }

// const filho1: Filho = {
//     nome: 'Fernando',
//     sobrenome: 'Bade',
//     idade: 36
// }

// console.log(filho1);


// interface Cachorro  {
//     raca: string
//     tamanho: string
// }

// interface Gato {
//     raca: string
//     idade: number
// }

// type Animal = Cachorro & Gato;

// const animalTeste: Animal = {
//     raca: 'vira-latas',
//     idade: 34,
//     tamanho: 'grande',
// }
// console.log(animalTeste);


type Usuario = {
    nome: string;
    email: string;
}

type Admin = {
    nome: string;
    email: string;
    admin: true;
}

const usuario: Usuario = {
    nome: 'Fernando Bade',
    email: 'email@email.com'
}

const usuarioAdmin: Admin = {
    nome: 'Fernando Bade',
    email: 'email@email.com',
    admin: true,
}

function acessarSistema(usuario: Usuario): Usuario {
    return usuario;
}

function acessarSistemaAdmin<T> (usuario: T): T {
    return usuario;
}

console.log(acessarSistema(usuario));
console.log(acessarSistemaAdmin<Usuario>(usuarioAdmin));

