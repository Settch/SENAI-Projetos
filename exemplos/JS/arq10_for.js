//estrutura de Laço com for

const listaDeDestinos = new Array(
    'Caçimba de dentro',
    'Juíz de fora',
    'Caçimba do meio',
    'Itacambira',
    'Milão',
    'Madrid',
    'Barcelona'
)

const destinoDesejado = 'Madrid'
const idade = 20

let destinoEncontrado = ''

for(indice = 0; indice < listaDeDestinos.length; indice++){

    if (listaDeDestinos[indice] == destinoDesejado){
        destinoEncontrado = true
        break
    }
    else{
        destinoEncontrado = false
    }
}

if(idade >=18 && destinoEncontrado ){
    console.log('viagem autorizada')
}
else{
    console.log('viagem não autorizada')
}

const valor = 4

for(let multiplo = 1; multiplo <=10;multiplo++){
    console.log(valor * multiplo)
}