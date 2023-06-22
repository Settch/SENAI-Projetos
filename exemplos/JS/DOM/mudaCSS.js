const paragrafos = document.querySelectorAll('.paragrafo')

console.log(paragrafos)

for(let i = 0; i < paragrafos.length; i++){
    paragrafos[i].style.color = '#C9F4AA'
    paragrafos[i].style.fontSize = '32px'
    paragrafos[i].style.fontWeight = '800'
}