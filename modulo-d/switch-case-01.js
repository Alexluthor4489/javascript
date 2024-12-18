let agora = new Date()//Esta é uma forma de pegar o horário atualizado do seu sistema
let diaSem = agora.getDay()//Aqui estamos pegando a funcionalidade dias da semana. O getDay trata cada dia da semana como um número ex: Domingo = 0, Segunda = 1, Terça = 2 e assim por diante.

switch(diaSem){//O switch case é uma estrutura mais simplicada. Ele só funciona com números comuns e strins. Ele não é tão específico quanto o if, mas em situações pontuais e simples como os dias da semana por exemplo e ajuda muito.
    case 0://Caso seja Domingo
        console.log('Hoje é domingo')
    break;
    case 1://Caso seja Segunda
        console.log('Hoje é Segunda')
    break;
    case 2://Caso seja Terça
        console.log('Hoje é Terça')
    break;
    case 3://Caso seja Quarta
        console.log('Hoje é Quarta')
    break;
    case 4://Caso seja Quinta
        console.log('Hoje é Quinta')
    break;
    case 5://Caso seja Sexta
        console.log('Hoje é Sexta')
    break;
    case 6://Caso seja Sábado
        console.log('Hoje é Sábado')
    break;
    default:
        console.log('Esse não é um dia da semana terestre!')
}
