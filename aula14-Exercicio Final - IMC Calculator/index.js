function escopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
    const pessoa_objeto = {}

    function recebeEvento(evento){

        evento.preventDefault();
    
        function verificaCampos(form) {
            let campoNome = form.querySelector('.nome').value;
            let campoSobrenome = form.querySelector('.sobrenome').value;
            let campoPeso = form.querySelector('.peso').value;
            let campoAltura = form.querySelector('.altura').value;

            if (campoNome === '' || campoSobrenome === '' || campoPeso === '' || campoAltura ===''){
                alert("Preencha todos os campos para prosseguir")
                throw new Error("Preencha todos os campos para prosseguir")
            };

            if (isNaN(campoNome) === false){
                alert("Digite um valor válido no campo nome")
                throw new Error("Digite um valor válido no campo nome")
            };

            if (isNaN(campoSobrenome) === false){
                alert("Digite um valor válido no campo sobrenome")
                throw new Error("Digite um valor válido no campo sobrenome")
            };

            if(isNaN(campoAltura) === true || campoAltura <= 0 || campoAltura >= 3){
                alert("Digite um valor válido no campo altura")
                throw new Error("Digite um valor válido no campo altura")
            };
        }
        
        function calculaIMC(peso, altura) {
            return peso / (altura * altura)
        }
        
        function classificaIMC(imc) {
            if (imc < 18.5) return 'Magreza';
            else if (imc >= 18.5, imc < 24.9) return 'Normal';
            else if (imc >= 24.9, imc < 29.9) return 'Sobrepeso';
            else if (imc >= 29.9, imc < 39.9) return 'Obesidade';
            else return 'Obesidade Grave';
        }

        function CadastrarObjeto(pessoa, resultado){
            pessoa = {
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value,
                imc: calculaIMC(peso.value, altura.value)
            };

            pessoa.classificacao = classificaIMC (pessoa.imc);

            resultado.querySelector('.b1').innerHTML = pessoa.nome + ' ' + pessoa.sobrenome ;
            resultado.querySelector('.b2').innerHTML = pessoa.peso;
            resultado.querySelector('.b3').innerHTML = pessoa.altura;
            resultado.querySelector('.b4').innerHTML = pessoa.imc.toFixed(2);
            resultado.querySelector('.b5').innerHTML = pessoa.classificacao;

        }

        verificaCampos(form)
        CadastrarObjeto(pessoa_objeto, resultado)

        return console.log(pessoa_objeto);
    }
    
    form.addEventListener('submit', recebeEvento);
}

escopo();