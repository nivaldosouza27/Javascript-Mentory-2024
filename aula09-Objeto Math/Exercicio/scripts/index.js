const user_number = prompt('Digite um numero:');
const user_number_int = parseFloat(user_number)

const number_title = document.getElementById('number-title');
number_title.innerHTML = user_number_int;

const raiz_quadrada = document.getElementById('raiz');
raiz_quadrada.innerHTML = `<p>A Raiz quadrada de ${user_number_int} é "${(user_number_int ** 0.5)}"<p>`;

const check_int = document.getElementById('isInt');
check_int.innerHTML = `<p>O numero é inteiro? ${Number.isInteger(user_number_int)}<p>`;

const check_nan = document.getElementById('isNan');
check_nan.innerHTML = `<p>Ele é um Nan(Not a Number)? ${Number.isNaN(user_number_int)}<p>`;

const round_up = document.getElementById('roundUp');
round_up.innerHTML = `<p>O numero arredendado para mais é: ${Math.floor(user_number_int)}<p>`;

const round_down = document.getElementById('roundDown');
round_down.innerHTML = `<p>O numero arredendado para menos é: ${Math.ceil(user_number_int)}<p>`;

const two_decimals = document.getElementById('twoDecimals');
two_decimals.innerHTML = `<p>O numero com duas casas decimais é: ${user_number_int.toFixed(2)}<p>`;
