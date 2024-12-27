//Objeto
//Os objetos são da mesma classe dos arrays, inclusive os dois tem o mesmo typeof object, porém os objetos são mais avançados. Os arrays só podem ter seus elementos e suas posições, já os objetos podem ter varios tipos em um mesmo conteúdo como por exemplo strings, numers, boleanos e até funções em seu conteúdo.
let amigo = {nome: 'Alex', sexo: 'M', peso: 95,
     engordar(p=0){
         console.log('Engordou')
         this.peso += p

     }}
amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)
