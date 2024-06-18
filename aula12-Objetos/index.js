const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: '25',
    
    fala() {
        console.log(`A minha idade atual é ${this.idade}.` )
    },

    addAge() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.addAge();
pessoa1.fala();