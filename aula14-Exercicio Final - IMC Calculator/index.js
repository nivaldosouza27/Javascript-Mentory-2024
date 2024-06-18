function escopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEvento(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        // function validaDados(peso, altura) {
        //     if (typeof peso == 'Float') {
        //     }else{
        //         return alert('Peso Invalido')
        //     }
        // }
        
        function calculaIMC(peso, altura) {
            return peso / (altura * altura)
        }
        
        function classificaIMC(imc) {
            if (imc < 18.5) {
                return 'Magreza';
            } else if (imc >= 18.5, imc < 24.9) {
                return 'Normal';
            }else if (imc >= 24.9, imc < 29.9) {
                return 'Sobrepeso';
            }else if (imc >= 29.9, imc < 39.9) {
                return 'Obesidade';
            }else {
                return 'Obesidade Grave';
            }
        }

        const pessoa_objeto = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
            imc: calculaIMC(peso.value, altura.value)
        };

        pessoa_objeto.classificacao = classificaIMC (pessoa_objeto.imc);
        
        resultado.querySelector('.b1').innerHTML = pessoa_objeto.nome + ' ' + pessoa_objeto.sobrenome ;
        resultado.querySelector('.b2').innerHTML = pessoa_objeto.peso;
        resultado.querySelector('.b3').innerHTML = pessoa_objeto.altura;
        resultado.querySelector('.b4').innerHTML = pessoa_objeto.imc.toFixed(2);
        resultado.querySelector('.b5').innerHTML = pessoa_objeto.classificacao;
    
        return console.log(pessoa_objeto);
    }
    
    form.addEventListener('submit', recebeEvento);
}

escopo();