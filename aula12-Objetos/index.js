const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: '25',
    
    fala() {
        console.log(this.nome, this.sobrenome, this.idade)
    }
};

pessoa1.fala();