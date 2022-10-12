/*
    Crie 5 objetos nesse formato { nome:" idade" sexo "" profissão:"" nacionalidade ""}
    Ao Rodar o programa, deve  imprimir se a pessoa é aprovado ou não no processo a pessoa deve ser maior de idade e brasileira para ser maior de idade e brasileira para ser aprovada 
*/

const canditado1 = {
    nome : `Juliana`,
    idade : 19, 
    sexo : `Feminino`,
    profissão: `Atendente`,
    nacionalidade : `Brasileiro`,
}

if (canditado1.idade >= 18  && (canditado1.nacionalidade === "Brasileira" || canditado1.nacionalidade ===`Brasileiro`)){
    console.log("Você foi aprovado no processo")
}else{
    console.log(`Você não preenche os requesitos minimos pra vaga`)
}

