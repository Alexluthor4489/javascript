function carregar(){
    let mensagem = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let section = document.getElementById('section')
    let data = new Date()
    let hora = data.getHours()
    

    if(hora >= 0 && hora < 12){
        img.src= 'foto-manha.jpg'
        mensagem.innerHTML=`Bom Dia! Agora são ${hora} horas.`
        document.body.style.background= '#6CE0C7'
        section.style.background= '#fffff'
    } else if(hora >= 12 && hora < 18){
        img.src= 'foto-tarde.jpg'
        mensagem.innerHTML=`Boa Tarde! Agora são ${hora} horas.`
        document.body.style.background= '#b3590b'
        section.style.background= '#06c898'
    }else{
        img.src= 'foto-noite.jpg'
        mensagem.innerHTML=`Boa Noite! Agora são ${hora} horas.`
        document.body.style.background= '#060924'
        section.style.background= '#06c898'
    }
}