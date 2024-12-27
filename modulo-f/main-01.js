let familia = ['Deus', 'Alex', 'Franciele', 'Ravi'] //Array com 4 indices.
console.log(familia[0])//Mostra um elemento específico do array através do índice selecionado.
console.log(familia)//Mostra todos os elementos do array.

familia.push('Jesus', 'Maria', 'José')//Acrescentando mais valores ao Array através do método push. O método push é muito util, pois ele já entende que ao acrescentar um novo valor, automaticamente você vai precisar e um novo indice, ou seja, ele já cria essa nova vaga ou vagas dependendo da quantidade de novos valores você adicionar.
console.log(familia)
//Agora meu array família ficou assim: ['Deus', 'Alex', 'Franciele', 'Ravi', 'Jesus', 'Maria', 'José'] 

familia.length //O length serve para contar, ou seja, dentro de um array ele vai servir para contar quantos elementos tem dentro do array familia. O length não é um método e sim um atributo, por isso não tem parenteses depois dele.
console.log(familia.length)
//Agora eu tenho exibido no console, quantos elementos que o meu array familia tem: 7

familia.sort()// O sort é um método que permite colocar todos os elementos de uma array em ordem crescente.


//Modo padrão do for
/*for(let c = 0; c < familia.length; c++){
    console.log(familia[c])
}*/

//Forma mais moderna usando o for In
for(let c in familia){//resumindo: Para(for) cada posição dentro(in) de familia eu vou mostrar familia e seu indice representado por let c
    console.log(familia[c])
}
let c = familia.indexOf('Deus')//O indexOf serve para que possamos identificar a posição de um elemento do array, basta informar qual elemento e ele vai exibir em qual poisção ele se encontra.
if(c == -1){
console.log('O valor não foi encontrado')
}else{
console.log(c)
}


