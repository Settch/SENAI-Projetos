//tipos de variáveis => Tipagem dinâmica


const idade =30
const idade2 =30.5
const idade3 ='30'
const maiorDeidade = true
const nomes = ['Joelinton', 'Gerson', 'Clédi']

console.log(`o tipo da variável idade é ${typeof (idade)}`)
console.log(`O tipo da variável idade2 é ${typeof (idade2)}`)
console.log(`O tipo da variável idade3 é ${typeof (idade3)}`)
console.log(`O tipo da variável maiorDeidade é ${typeof (maiorDeidade)}`)
console.log(`O tipo da variável nomes é ${typeof (nomes)}`)

//Exemplo de tipagem fraca - pode atribuir outro tipo a variável
console.log(idade3 / 2)


//Diferença entre ponto e vírgula
console.log(4.5)
console.log(4,5)