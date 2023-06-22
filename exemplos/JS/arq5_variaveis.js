//Trabalhando com Arrays

const cidades = new Array(
    'Quixeramobim',
    'Maracanaú',
    'Fortaleza',
    'Montése',
)

cidades.push('Maraponga', 'Planalto')//O metodo push() adiciona elementos ao Array
cidades.splice(2,1)//O método splice() remove elementos do Array


console.log(typeof(cidades))
console.table(cidades)
console.log(cidades[1])