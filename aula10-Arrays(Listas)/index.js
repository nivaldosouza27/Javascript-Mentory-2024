const alunos = ['Maria', 'João', 'Carlos', 'Eduardo', 'Pedro', 'Nivaldo'];

alunos.length //Retorna o tamanho do array
alunos.unshift('José') //Adiciona um elemento ao começo do array
alunos.push('Polyana') //Adiciona um elemento ao fim do array
alunos.pop() //Removendo o elemento final do array
alunos.shift() //Removendo elementos do começo do array
delete alunos[1] //Remove o elemento de indice 1 do array(deixa espaço em vazio)
console.log(alunos.slice(0,3)) // Retorna o array fatiado pelos parametros passados
console.log(alunos instanceof Array) //Retorna se a variavel é um array ou nao
console.log(alunos)