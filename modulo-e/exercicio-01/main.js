function contar(){
    let ini = document.getElementById('iniciar')
    let fim = document.getElementById('finalizar')
    let pas = document.getElementById('intervalo')
    let res = document.getElementById('res')
    let inicio = Number(ini.value)
    let final = Number(fim.value)
    let passo = Number(pas.value)

    res.innerHTML = 'Contando: <br><br>'
    res.style.display = 'block'
    for (let c = inicio; c <= final; c += passo){
        if(c === final){
        res.innerHTML += c +' '+ '✋'
        }else{
            res.innerHTML += c +' '+ '👉'
        }
    }
    res.style.textAlign = 'center'
}