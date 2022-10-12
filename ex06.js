// Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

const notas = 9

switch (notas){
    case 0:
        console.log(`Você foi pessimo`)
    break;

    case 1:
        console.log(`Você foi muito mal`)
    break;

    case 2:
        console.log(`Você não foi nada bem`)
    break;

    case 3:
        console.log(`Você poderia ter ido muito melhor`)
    break;

    case 4:
        console.log(`Tente melhorar na proxima`)
    break;

    case 5:
        console.log(`Bom você esta na metade do caminho de uma nota maxima estude mais`)
    break;
    
    case 6:
        console.log(`Parabéns você esta na media`)
    break;

    case 7:
        console.log(`Parabens muito boa nota`)
    break;

    case 8:
        console.log(`Ual que notão em `)
    break;

    case 9:
        console.log(`Quase em por pouco na tira a nota maxíma`)
    break;

    case 10:
        console.log(`Gênioo`)
    break;
    
    default:
        console.log(`Valor não encontrado`)
        break;
}