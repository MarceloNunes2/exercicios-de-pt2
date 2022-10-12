/*
    Faça um programa que compare se uma pessoa é brasileira ou não
*/

const name1 = {
    nome : `Marcelo`,
    age : 20,
    nacionalidade: `brasileira`
}

if (name1.nacionalidade === `brasileira`){
    console.log("Sua nacionalidade é",name1.nacionalidade)
}
else{
    console.log(`Sua nacioalidade é estrangeira`)
}