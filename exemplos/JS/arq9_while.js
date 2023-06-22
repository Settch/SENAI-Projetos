//Estrutura de laço com while

const listaDeDestinos = new Array(
    'Caçimba de dentro',
    'Juíz de fora',
    'Caçimba do meio',
    'Itacambira',
    'Milão',
)

const destinoDesejado = 'Caçimba de dentro'

console.table(listaDeDestinos)
console.log(listaDeDestinos[1])

let indice = 0
let encontrouDestino = true

/* while(condição){
    Ação(if)

    indice++
} */

while(indice < listaDeDestinos.length){
    if(listaDeDestinos[indice] == destinoDesejado){
        //console.log('Destino Encontrado!')
        encontrouDestino = true
        break
    }
    else{
        encontrouDestino = false
        //console.log('Destino não encontrado')
    }

    indice ++
}

if(encontrouDestino == true){
    console.log('Destino encontrado')
}
else{
    console.log('Destino não encontrado')
}

const multiplicador = 7
let contador = 1

while(contador <=10){
    console.log(multiplicador * contador)

    contador ++
}