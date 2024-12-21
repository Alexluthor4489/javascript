function calcular(){
    let nascimento = document.getElementById('nasc')
    let ano = new Date()
    let anoAtual = ano.getFullYear()
    let mensagem = document.getElementById('msg')
    let aniversario= nascimento.value
    
    let sexoMarcado = document.querySelector('input[name="sexo"]:checked')
    let seuSexo = sexoMarcado ? (sexoMarcado.id === "sex-m"? "Masculino" : "Feminino") : ""
    let calc = anoAtual - Number(aniversario)
    
    mensagem.innerHTML= `Você é do sexo: ${seuSexo}, e tem ${calc} anos de idade!`
    mensagem.style.display = "block" 
    
    if(aniversario === "" || seuSexo === ""){
        mensagem.innerHTML= 'Insira os dados necessários!'
        return;
    }
    let imgDiv = document.getElementById('img')
    let imagem = document.getElementById('foto')
    imgDiv.style.display = "block"

    if (calc >= 60) {
        imagem.src = seuSexo === "Masculino" ? './imagens/idoso.jpg' : './imagens/idosa.jpg';
    } else if (calc >= 18) {
        imagem.src = seuSexo === "Masculino" ? './imagens/homen.png' : './imagens/mulher.png';
    } else if (calc >= 12) {
        imagem.src = seuSexo === "Masculino" ? './imagens/adolescente-masc.jpg' : './imagens/adolescente-femi';
    } else if (calc >= 4) {
        imagem.src = seuSexo === "Masculino" ? './imagens/crianca-masc.png' : './imagens/crianca-femi.png';
    } else {
        imagem.src = seuSexo === "Masculino" ? './imagens/bebe-masc.png' : './imagens/bebe-femi.png';
    }
    
}