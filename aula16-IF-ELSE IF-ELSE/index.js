// IF pode ser usado sozinho no codigo
// Sempre que utilizo a palavra else, necessita de um IF antes
// Pode conter varios else if na checagem
// Só pode haver um else no maximo na checagem

const hora = 18;

if (hora >=0 && hora <= 12) {
    console.log('Bom dia')
}else if (hora > 12 && hora <= 17 ){
    console.log('Boa tarde')
}else if (hora > 17 && hora < 24 ){
    console.log('Boa noite')
}
else {
    console.log('Data Errada')
}