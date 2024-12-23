function contar(){
    let ini = document.getElementById('iniciar')//Criando variável para capturar valor do input inicio
    let fim = document.getElementById('finalizar')//Criando variável para capturar valor do input fim
    let pas = document.getElementById('intervalo')//Criando variável para capturar valor do input passo
    let res = document.getElementById('res')//Criando variável para armazenar o resultado
    let inicio = Number(ini.value)//Criando variável para receber o valor de ini convertido em número
    let final = Number(fim.value)//Criando variável para receber o valor de fim convertido em número
    let passo = Number(pas.value)//Criando variável para receber o valor de pas convertido em número

    if(ini.value.length == 0 || fim.value.length ==0 || pas.value.length == 0){
        alert('[ERROR] Insira todos os dados!')
    }else if(inicio > final || passo > final){
        alert(`O valores de início e de passo não podem ser maiores ao valor final!`)
    }


    res.innerHTML = 'Contando: <br><br>'//Adicionado duas quebras de linha 
    res.style.display = 'block'//Passando a orientação de block para caso a cotagem seja grande, os números fiquem organizados uns em cima do outro.

    if(inicio < final || passo < final){
    for (let c = inicio; c <= final; c += passo){//Laços de repetição: criei variável c que vai armazenar a (inicialização) a (lógica) e o (inclemento)
        // let c = inicio: Significa que o lacó vai iniciar com o valor da variável início, ou seja, a variável que vai receber o valor do input início.
        // c <= final: Significa enquanto o contador for menor ou igual a let final(variável que criei para receber o valor do input fim) ele vai inclementar.
        // c += passo: Significa que let c 
        
        if(c === final){
        res.innerHTML += c +' '+ '✋'
        }else{
            res.innerHTML += c +' '+ '👉'
        }
    }
    res.style.textAlign = 'center'
}
}
/*function contar(){
    let ini = document.getElementById('iniciar')
    let fim = document.getElementById('finalizar')
    let pas = document.getElementById('intervalo')
    let res = document.getElementById('res')
    let inicio = Number(ini.value)
    let final = Number(fim.value)
    let passo = Number(pas.value)

    if(ini.value.length == 0 || fim.value.length ==0 || pas.value.length){
        alert('[ERROR] Insira todos os dados!')
    }

    res.innerHTML = 'Contando: <br><br>'//Adicionado duas quebras de linha 
    res.style.display = 'block'

    for (let c = inicio; c <= final; c += passo){
        
        if(c === final){
        res.innerHTML += c +' '+ '✋'
        }else{
            res.innerHTML += c +' '+ '👉'
        }
    }
    res.style.textAlign = 'center'
} */