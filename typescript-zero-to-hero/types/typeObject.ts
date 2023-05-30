const pessoa = {
    nome: 'Glaucia',
    sobrenome: 'Lemos',
    idade: 35,
    funcao: 'Cloud Advocate'
};

function onboarding01(funcionario: { nome: string }) {
    return `Seja bem-vindo(a) ${funcionario.nome}!`;
}

interface Pessoa {
    nome: string;
    funcao: string;
}

console.log(pessoa);
console.log(onboarding01({ nome: 'Fernando Bade' }));

function onboarding02(pessoa: Pessoa) {
    return `Seja bem-vindo(a) ${pessoa.nome}! n/ Sua função na empresa será ${pessoa.funcao}.`;
}

console.log(onboarding02(pessoa));