const linhasFiltro = document.querySelectorAll('.filtraLinha')
const inputFiltro = document.querySelector('#inputFiltra')

console.log(linhasFiltro, inputFiltro)

function filtrar (event){

    const textoInput = inputFiltro.value.toUpperCase()

    for(let index = 0; index < linhasFiltro.length; index++){
        const linhaAtual = linhasFiltro[index]
        const conteudoLinhaAtual = linhasFiltro[index].textContent
        
        if(conteudoLinhaAtual.toUpperCase().includes(textoInput)){
            linhaAtual.style.display = ""
        }
        else{
            linhaAtual.style.display = "none"
        }
    }
}

inputFiltro.addEventListener ('keyup', filtrar)