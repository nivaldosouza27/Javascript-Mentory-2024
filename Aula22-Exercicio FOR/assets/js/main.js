const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
    {tag: 'div', texto: 'Frase 5'}
]

function insereTag(tag, texto){
    var newTag = document.createElement(tag) 
    newTag.textContent = texto
    document.getElementById('new-div').appendChild(newTag)
}

var newDiv = document.createElement('div')
newDiv.id = 'new-div'
document.getElementById('container').appendChild(newDiv)

for (i=0; i<elementos.length; i++){
    var tag = elementos[i].tag;
    var texto = elementos[i].texto

    insereTag(tag, texto)
}

