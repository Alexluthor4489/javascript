//While: É uma estrutura de repetição com teste lógico no início.
//Aqui funciona da seguinte forma: Criamos uma variável com o nome c para representar um contador e atribuímos a ela o valor 1, porque queremos que o contador começe pelo 1.
//Depois de declarada a variável iniciamos o laço while, ele vai funcionar assim: Enquanto contador "c" fpr menor ou igual a 10 {instruções: exiba no console(c) c++ ou c = c +1, ou seja, c++ é o mesmo que c recebe c + 1}
//A carácterística do while é que a partir do momento que este laço for falso ele encerra, ou seja, se em cada repetiçao o valor de c que inicialmente é 1, vai chegar um ponto em que ele vai sair da condi'cão de <+ 10 e vai passar a valer 11, nesse momento se encerra o laço while.

let c = 1
while (c <= 10){
    console.log(`repeticão: ${c}`)
    c ++
}

//do while: É uma estrutura de reptição com teste de repetição no final.

let c2 = 11 //Aqui colocamos um valor inicial maior do que nossa condição propositalmente, para demonstrar que mesmo que está condição não esteja sendo atendida, ainda sim ela vai rodar o código uma vez, pois sua lógica está no final e quando o programa chega na lógica ele já foi exibido uma vez. No exemplo do while está condição não seria executada nem uma vez, pois a lógica está do início e não seria atendida desde o início.
do {
    console.log('AGORA COM O DO WHILE')
    console.log(`repetição ${c2}`)
    c2 ++
} while (c2 <= 10)