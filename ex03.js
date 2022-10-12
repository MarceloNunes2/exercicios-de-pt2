/*
    Faça um prograna que gere um numero aleatorio de 1  a 10, e verifica se a pessoa ganhou ou não, Então ele tambem ira gerar um numero aleatorio 1 e 10 e verifica se a pseeoa ganhou ou não.
    Em caso de ter ganhado, mostra o premio, se não ganhou, mostra outra mensagem
*/

const numeros = Math.floor(Math.random()*10)
const res = Math.floor(Math.random()*10)
if (numeros === res){
    console.log(`você ganhou parabens o numero sorteado foi`,numeros )
}else{
    console.log(`Infelizmente não foi dessa vez o numero sorteado  foi`,numeros)
}