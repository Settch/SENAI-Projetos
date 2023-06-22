//Estruturas condicionais com operador lógico OU (||)

/* Para que a pessoa possa viajar sozinha ela deve
 => ter a idade maior ou igual a 18
  ou
 => Estar acompanhado do responsável*/

 const idade = 17
 const acompanhadoDeResponsavel = true

 if(idade >= 18 || acompanhadoDeResponsavel){
    console.log('Autorizado a viajar')
 }
 else{
    console.log('Não está autorizado a viajar')
 }

 const idad = 22
 const CNH = false

 /*  if(CNH >=18 && CNH){
   if(CNH == true){
   console.log('pode dirigir')
   }
}
 else{
   console.log('não pode dirigir')
 } */
  


 if(idad >=18 && CNH){
    console.log('Pode dirigir')
 }
 else{
    console.log('Não pode dirigir')
 }