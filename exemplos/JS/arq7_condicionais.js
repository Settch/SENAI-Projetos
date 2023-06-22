//Estruturas condicionais com operador lógico E (&&)

const nota = 70
const faltas = 3
const quantidadeAulascurso = 10

//PAra que o aluno seja aprovado a nota deve ser maior ou igual que 50 e as faltas menores ou iguais a 25% do total de aulas

//Sem o operador E

if(nota >=50){
    if(faltas <=0.25){
        console.log('Aprovado')
    }
    else{
        console.log('Reprovado por faltas')
    }
}
else{
    console.log('Reprovado por notas')
}

//Com o operador E (&&)
if(nota >=50 && faltas<=0.25 * quantidadeAulascurso){
    console.log('Você está aprovado')
}
else{
    console.log('Você está reprovado')
}
