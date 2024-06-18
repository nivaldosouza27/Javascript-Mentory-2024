/*
* Primitivos(imutaveis) - string, number, booleran, undefined, null, BigInt, Symbol - Valores Copiados
* Referencia (Mutáveis) - Array, Object, Function - Valores passados por Referencia
*/

let a = [1,2,3]
let b = a

console.log(a, b)

a.push(4);
console.log(a,b)

b.pop();
console.log(a,b)