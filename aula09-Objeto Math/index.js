let num1 = 9.4553;
let arr1 = [1,2,550,36,540,511,541541,20115,20.5];

let num2 = Math.floor(num1); //Arrendonda o numero para baixo
let num3 = Math.ceil(num1); //Arredonda o numero para cima
let num4 = Math.round(num1); //Arredonda o numero para o mais proximo


console.log(Math.max(arr1))
console.log(Math.min(arr1))
console.log(Math.random()); //gera um numero aleatorio maior que zero e menor que 1

const rand = Math.round(Math.random() * (10 - 5) + 5); //gera um numero aleatorio entre 10 e 5
console.log(rand)
