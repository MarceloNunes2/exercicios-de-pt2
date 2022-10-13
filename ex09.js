/*
[ ] Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: - Todos os números são impares =&gt; TODOS OS NÚMEROS SÃO IMPARES - Todos os números são pares =&gt; TODOS OS NÚMEROS SÃO PARES. Em caso negativo dos casos a cima, colocar uma mensagem =&gt; Há números pares e ímpares.
*/

const fristnumber = 19
const secondnumber = 31 
const tristnumber = 21
const foornuber  = 3

if (fristnumber % 2 === 0 && secondnumber % 2 === 0 && tristnumber % 2 === 0 && foornuber % 2 === 0 ) {
    console.log(`Todos são pares`)
}else if (fristnumber % 2 !== 0 && fristnumber % 2 !== 0 && fristnumber % 2 !== 0 && fristnumber % 2 !== 0){
    console.log(`Todos São impares`)
}else{
    console.log(`Tudo misturado`)
}
