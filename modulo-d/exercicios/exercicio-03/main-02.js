function verificar(){
    let data = new Date()
    let anoAtu = data.getFullYear()
    let dataNasc = document.getElementById('ano')
    let res =  document.getElementById('res')

    if(dataNasc.value == 0 || Number(dataNasc.value) > anoAtu){
        alert('[ERROR] Insira os dados corretamente!')
    }else {
        let sexo = document.getElementsByName('sexo')
        let idade = anoAtu - Number(dataNasc.value)
        let genero = ''/*Aqui criamos uma variável genero vazia pois o seu conteúdo ainda vai ser definido apartir do momento em que o sexo for marcado. */
        let img = document.createElement('img')/*Aqui estamos criando uma img sem usar html. Vamos fazer isso de forma dinâmica direto do JS e para isso usamos o createElement, ou seja criar Elemento seguido de qual elemento vai ser criado dentro de áspas*/

        img.setAttribute('id','foto')/*Como vamos precisar pegar o id da img e como ela foi criada de forma dinâmica diretamente no JS, então vamos ter que criar um id para ela por aqui também. Para isso usamos o setAttribute, nele definimos qual será o atributo adicionado a img. Neste caso estamos adicionado um id e seu nome será foto.*/

        if(sexo[0].checked)/*Se o sexo que foi marcado é o da posição 0, ou seja, o primeiro*/{
            genero = 'Masculino'
            if(idade <= 2){
                img.setAttribute('src', './imagens/bebe-masc.png')
            }else if(idade > 2 && idade < 10){
                img.setAttribute('src', './imagens/crianca-masc.png')
            }else if(idade >= 10 && idade < 18){
                img.setAttribute('src', './imagens/adolescente-masc.jpg')
            }else if(idade >= 18 && idade < 60){
                img.setAttribute('src', './imagens/homen.png')
            }else{
                img.setAttribute('src', './imagens/idoso.jpg')
            }
        }else if(sexo[1].checked)/*Se o sexo que foi marcado é o da posição 0, ou seja, o primeiro*/{
            genero = 'Feminino'
            if(idade <= 2){
                img.setAttribute('src', './imagens/bebe-femi.png')
            }else if(idade > 2 && idade < 10){
                img.setAttribute('src', './imagens/crianca-femi.png')
            }else if(idade >= 10 && idade < 18){
                img.setAttribute('src', './imagens/adolescente-femi.png')
            }else if(idade >= 18 && idade < 60){
                img.setAttribute('src', './imagens/mulher.png')
            }else{
                img.setAttribute('src','./imagens/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Sua idade é: ${idade} anos, e seu sexo é: ${genero}.`
        res.appendChild(img)/*Aqui estamos pedindo para no nosso res seja criado um filho que no caso aqui vai ser a div img que criamos diretamente do JS*/
    }
}