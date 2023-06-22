//Declaração e execução de funções

/* function nomeFuncao (parâmetros){

    Acão da função

    retorno
} */

//Executar Função declarada

//nomeFuncao(parâmetros)


function escreveTexto (texto){
    console.log(texto)
}

escreveTexto("Hello World!")

function soma(){
    return 5+3
}

escreveTexto(soma())

function soma2(n1, n2){
    return n1 + n2
}

//escreveTexto(soma2(2, 4))

function divisao (n1, n2){
    return n1 / n2
}
escreveTexto(divisao(3, 9))

//escreveTexto(divisao(3, 9))
escreveTexto(typeof(divisao(3, 9).toFixed(2)))