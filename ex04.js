/*
    Faça um programa que receba 3 numeros inteiros, e deve imprimir, qual é o maior é o menor 
*/
const fristnumber  = 44
const secondnumber = 20
const thirnumber = 30

if (fristnumber > secondnumber && fristnumber > thirnumber){
    console.log(`O numero`,fristnumber,`é maior que`,secondnumber,`e`,thirnumber)
}else if (secondnumber > thirnumber){
    console.log("O segundo é o maior")
}else{
    console.log("O terceiro é o maior")
}
if (fristnumber < secondnumber && fristnumber < thirnumber){
    console.log(`O Primeiro é o menor`)
}else if (secondnumber < thirnumber){
    console.log("O segundo é o menor")
}else{
    console.log("O terceiro é o menor")
}