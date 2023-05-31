// enum Idioma {
//     Portuges,
//     Espanhol,
//     Ingles,
//     Japones,
// }
// console.log(Idioma)

// enum DiasDaSemana {
//     Segunda = 'SEG',
//     Terca = 'TER',
//     Quarta = 'QUA',
//     Quinta = 'QUI',
//     Sexta = 'SEX',
//     Sabado = 'SAB',
//     Domingo = 'DOM'
// }
// console.log(DiasDaSemana.Domingo);

// const enum Comida {
//     Hamburger,
//     Massa,
//     Pizza,
//     Churrasco,
//     Japonesa
// }

// const enum Comida {
//     Hamburger = 'Hambúrguer',
//     Massa = 'Massa',
//     Pizza = 'Pizza',
//     Churrasco = 'Churrasco',
//     Japonesa = 'Japonesa'
// }

// function comida(c: Comida) {
//     return `${c} é uma das minhas comidas favoritas!'`
// }
// console.log(comida(Comida.Pizza))
// console.log(comida(Comida.Churrasco))
// console.log(comida(Comida.Japonesa))

enum Tarefa {
    ToDo,
    InProgress,
    Done
}

const taskDone = {
    id: 1,
    status: Tarefa.Done,
    description: 'Parabéns! Tarefa concluída com sucesso!'
}

if (taskDone.status === Tarefa.Done) {   
    console.log('Enviar e-mail: Tarefa Concluída!');
}