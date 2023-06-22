//A função deve receber uma nota e retornar:
// => Aprovado se a nota for maior que ou igual a 70
// => Recuperação para notas maiores ou iguais a 50
// => Reprovado para notas menores que 50

const nomeAluno = "Xutaiz"
const notaAluno = 10

function avaliaNota(nota, nome){
    if(nota >= 70){
        return `${nome} está aprovado!`
    }
    if(nota >=50){
        return `${nome} está de recuperação.`
    }
    else{
        return `${nome} está reprovado.`
    }
}

//console.log(avaliaNota(notaAluno, nomeAluno))

//A função deve receber um Array de nomes e um nome específico e verificar se este nome consta no Array

const listaNomes = new Array(
    "John",
    "Tom",
    "Dom",
    "Brom",
    "Zom"
)

const nomeProcurado = "Dom"

function procuraNome (lista, valorProcurado){
    let valorEncontrado = ""

    for(let i = 0; i< lista.length; i++){
        if(lista[i] == valorProcurado){
            valorEncontrado = true
            break
        }
        else{
            valorEncontrado = false
        }
    }

    if(valorEncontrado == true){
        console.log(`${valorProcurado} foi encontrado.`)
    }
    else[
        console.log(`${valorProcurado} não foi encontrado.`)
    ]
}

procuraNome(listaNomes, nomeProcurado)