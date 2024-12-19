function carregar(){
let mensagem = document.getElementById('msg')
let foto = document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()
mensagem.innerHTML(`Agora são ${hora} horas!`)

}