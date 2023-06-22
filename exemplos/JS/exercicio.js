
/* function calculaIMC(peso,altura){
    const IMC = peso / (altura * altura)

    if(IMC < 18.5){
        return "Baixo peso"
    }
    if(IMC < 25){
        return "Normal"
    }
    if(IMC < 30){
        return "Sobrepeso"
    }
    else{
        return "Obeso"
    }
}

    function comparaNumeros(valor1, valor2){
        if(n1>n2){
            return `${n1} é maior do que o ${n2}`
        }
        if(n1<n2){
            return `${n1} é menor do que o ${n2}`
        }
        else(n1==n2){
            return `${n1} é igual ao ${n2}`
        }
    }
 */


//o que eu fiz

const peso = 87
const altura = 1.86

console.log(peso/ (altura * altura))

const n1 = 130 

const n2 = 144

if(n1>n2){
    console.log ('O primeiro número é maior que o outro')
}
else{
    if(n1==n2){
        console.log('São números iguais')
    }
    else{
       console.log('O primeiro número é menor do outro') 
    }
}

const idade = 68
const nome = 'Alex'

if(idade<12){
    console.log(`${nome} é kid`)
}
else{
    if(idade<17){
        console.log(`${nome} é teenager`)
    }
    else{
        if(idade<59){
            console.log(`${nome} é adulto`)
        }
        else{
            console.log(`${nome} é idoso`)
        }
    }
}