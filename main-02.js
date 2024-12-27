function parimp(n){
        if (n % 2 == 0){
            return 'Par'
    }else{
        return 'impar'
 }
}
let res = parimp (10)
console.log(res)

function soma(n1, n2){//passamos dois parâmetros e depois pedimos para retornar a soma dos dois parâmetros
    return n1 + n2
}
console.log(soma(2, 5))//Atribuindo valores aos parâmetros, onde a ordem é igual dos valores atribuídos é igual a ordem dos parâmetros passados, ou seja, o n1 corresponde ao 2 e o n2 corrresponde ao 5.
console.log(soma(2))//Se caso for atribuído valor a um parâmetro só, esse fica representado pelo primeiro parâmetro e o segundo fica como undefined. Porém 2 + undefined = NaN, ou seja um número indefinido. Para isso não acontecer, atribuímod o valor 0 diretamente nos parâmetros, desta forma se atribuírmos valores a eles depois em um console.log por exemplo, ele vai pegar o valor, mas se não ele vai estar como zero e portanto não vai retornar undefined.
function soma2(n1=0, n2=0){
    return n1 + n2
}
console.log(soma2(2)) // Desta forma ele retorna 2 e não mais o undefined.


//CRIANDO UMA FUNÇÃO FATORIAL USANDO UMA FUNCTION DE RECURSIVIDADE(Chama a função dentro dela mesma.)
//Relembrando o que é um número fatorial:
// 5! = 5 X 4 X 3 X 2 X 1 = 120
// ou
// 5! = 5 X 4! = Também é 120 (Um número fatorial é o mesmo que ele vezes seu antercessor fatorial)
// n! = n x(n- 1)!

// 1! = 1

function fatorial(n){
    if (n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))