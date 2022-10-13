/*
[ ] Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.
*/

const numero = 25


if (numero % 2 === 0){
   
    if(numero / 5 === 0 ) console.log("O numero é par e divisível por 5")
    else console.log(`O numero é par e não e divisivél por 5`)
}else{
   
    for(let i = 2; i<numero; i++)
    if(numero % i === 0){
        console.log(`Ele é um numero impar mas não é primo `)
        break
    }else{
    if (i === numero - 1)  console.log("Ele é um numero primo ")
    }
}