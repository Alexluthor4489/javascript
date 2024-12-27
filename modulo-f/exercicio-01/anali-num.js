let num = document.getElementById('numero')//Vai receber o número de 1 a 100
let lista = document.getElementById('selval')//Vai armazenar os valores select
let res = document.getElementById('res')//Vai exibir mensagem
let btn = document.getElementById('btnClear')
let valores = []// Vai receber os valores que for digitar.

function isNumero(n){//Função com um parâmetro n
    if(Number(n) >= 1 && Number(n) <= 100){//Condição que diz que o numero tem que ser de 1 a 100
        return true//Se a condição for atendida, retorne verdadeiro
    }else {
        return false//Se não for atendida, retorne falso.
    }
}
function inLista(n, l){//Função com dois parâmetros, o 'n' de num e o 'l' de lista.
    if (l.indexOf(Number(n)) != -1){//Condição que diz que se o valor do indice não for -1 então retorne verdadeiro. Se o indexOf retorna -1 que dizer que aquele elemento não se enconta no array.Básicamente o trecho entre parenteses está dizendo que; se a lista de números tiver um retorno diferente de -1 então ele retorna verdadeiro
        return true
    }else{// Se não, retorna falso.
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){//Condição que verifica se o valor que está sendo inserido está sendo repetido ou não, ou seja se o valor de num é diferente dos valores já contidos na lista.
        valores.push(Number(num.value))
        let item = document.createElement('option')//Criada variável para o novo elemento criado
        item.text = `Valor ${num.value} adicionado`//Vai definir o conteúdo dese novo elemnto, aqui essse valor seria uma string dizendo qual foi o valor adicionado.
        lista.appendChild(item)//Definindo que item é filho de lista
        res.innerHTML = ''//Serve para limpar a resposta toda vez que adicionarmos outro número, desta forma ele atualiza se inserirmos mais um número após ter clicado em finalizar.
        lista.style.display= 'block'//Deixa visível apenas quando começar a inserir dados, pois no HTML ele está configurado como display none.
    }else {
        alert('Valor inválido ou já encontrado na lista.')//Se a condição acima não for atendida ele retorna este alerta de erro!
    }
    num.value = ''
    num.focus()

}
function finalizar() {
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]

            if(valores[pos] > maior)
                maior = valores[pos]
            
            if(valores[pos] < menor)
               menor = valores[pos]
        }
        media = soma / total
        res.style.display = 'block'
        res.inner = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado é o: ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi o: ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos: ${soma}.</p>`
        res.innerHTML += `<p>A média de todos os valores é: ${media}.</p>`
    
        
    }
}
function limparSelect(){
    if(res.length == 0 || lista.length == 0){
        alert('Não há dados para serem apagados!')
    }
    btn.style.display = 'block'
    res.innerHTML = '' // Limpa a mensagem
    lista.style.display = 'none'
    res.style.display= 'none'
}