let agora = new Date()//Esta é uma forma de pegar o horário atualizado do seu sistema
let diaSem = agora.getDay()//Aqui estamos pegando a funcionalidade dias da semana.

switch(diaSem){
    case 0:
        console.log('Hoje é domingo')
    break;
    case 1:
        console.log('Hoje é Segunda')
    break;
    case 1:
        console.log('Hoje é Terça')
    break;
    case 1:
        console.log('Hoje é Quarta')
    break;
    case 1:
        console.log('Hoje é Quinta')
    break;
    case 1:
        console.log('Hoje é Sexta')
    break;
    case 1:
        console.log('Hoje é Sábado')
    break;
    default:
        console.log('Esse não é um dia da semana terestre!')
}
