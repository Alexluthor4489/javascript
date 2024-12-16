let agora = new Date()
let hora = agora.getMinutes()
console.log(`Agora são: ${hora} horas!`)
if (hora > 23.59){
    console.log('Hora inválida. Preencha com um horário válido!')
}
else if(hora >= 6 && hora < 12){
    console.log(`Se são: ${hora} horas, portanto é de manhã!`)
}
else if(hora >= 12 && hora < 18){
    console.log(`Se são: ${hora} horas, portanto é de tarde!`)
}
else if(hora >= 18 && hora <24){
    console.log(`Se são: ${hora} horas, portanto é de noite!`)
}
else{
    console.log(`Se são: ${hora} horas, portanto é de madrugada!`)
}