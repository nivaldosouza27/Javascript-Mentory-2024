const nome = ['Nivaldo', 'Felipe', 'Claudio', 'Pedro']

function sayhello(nome) {
    return console.log(`Hello ${nome}`)
}

for (i = 0; i < nome.length; i++ ) {
    sayhello(nome[i])
}
