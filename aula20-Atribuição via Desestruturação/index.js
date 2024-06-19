/*
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [first, second, ...resto] = numeros  //rest

console.log(first,second)
console.log(resto)
*/


/* Desestruturação Arrays
const numeros = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const [lista1, lista2, lista3] = numeros

console.log(lista1[0])
console.log(lista2[0])
console.log(lista3[0])
*/


/*Desestruturação Objetos
let pessoa = {
    nome: 'Nivaldo',
    sobrenome: 'Souza',
    idade: '25',
    endereco: {
        rua: 'Jeronimo Xavier Rodrigues',
        numero: '134',
        bairro: 'Centro'
    }
}

let {nome, sobrenome, idade, endereco:{rua, numero, bairro}} = pessoa

nome = 'João'
sobrenome = 'Paulo'
idade = '60'

console.log(nome, sobrenome, idade, rua, numero, bairro)
*/