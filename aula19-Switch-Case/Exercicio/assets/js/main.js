const date = new Date('2000-01-17T16:45');
const dia = date.getDay();
const mes = date.getMonth();
const ano = date.getFullYear();
const hora = date.getHours();
const min = date.getMinutes();

const conteudo = document.querySelector('.h1');
let resultado = {};

function zeroEsquerda(num){
    return num >=10 ? num : `0${num}`
}

function diaTexto(dia){
    const diasSemana = ['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sábado']
    return diasSemana[dia]
}

function mesTexto(mes) {
    const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
    return meses[mes]
}

function FormataData(dia, mes, ano, hora, min){
    resultado = {
        dia: zeroEsquerda(dia),
        diaField: diaTexto(dia),
        mes: mesTexto(mes),
        ano: ano,
        hora: zeroEsquerda(hora),
        minuto: zeroEsquerda(min)
    }
}

function alterHTML(conteudo, resultado){
    conteudo.innerHTML = `${resultado.diaField}, ${resultado.dia} de ${resultado.mes} de 
    ${resultado.ano} às ${resultado.hora}:${resultado.minuto}`;
}

FormataData(dia, mes, ano, hora, min)
alterHTML(conteudo, resultado)

console.log(resultado)
