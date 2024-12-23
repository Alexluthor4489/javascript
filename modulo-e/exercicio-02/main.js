function limparTabuada() {
  let tab = document.getElementById('seltab'); // Seleciona o select
  tab.innerHTML = ''; // Limpa o conteúdo da tabuada
  tab.style.display = 'none'; // Esconde o select
  btnClear.style.display = 'none'; // Esconde o botão "Limpar Tabuada"
}
function tabuada(){

  let input = document.getElementById('numero')//Criada variável para armazenar o valor que vai ser inserido no input
  let tab = document.getElementById('seltab')//Criada variável que vai armazenar o valor que vai ser exibido no select
  let btnClear = document.getElementById('btnClear'); // Seleciona o botão "Limpar Tabuada"

  if( input.value.length == 0){//Se o valor do input for igual a 0 retorne um alert de erro! Para entender melhor esse trecho => input.value.length, => o value pega o valor que foi inserido dentro da variável input e o length é o responsável por contar. Resumindo um acha tesouro e o outro conta as moedas de ouro.
    alert('Por favor, digite um número!')
  }else {//Aqui estamos dizendo que se a condição de if não for satisfeita, então faça essa.
    let n = Number(input.value)//Foi  criada variável n que vai receber o valor inserido no input que por padrão vem em formato de string agora convertido em número aracés do Number.
    let c = 1//Foi criada variável contadora que vai iniciar com 1, ou seja 1 x 0, 1x1 , 1x2 ...
    tab.innerHTML= ''//Quando algum resultado havia sido exibido e e se pedia outro, o anterior não sumia, então foi uasado para a variável tab que recebe o id do select, responsável em exibir o resultado da tabuada, um innerHTML= '' , ou seja vazia. Ela vai ser responsável em limpar o resultado anterior para novas consultas
    while (c <= 10){// Usando o while para determinar que enquanto o contador c for menor que 10, então ele faz o passo abaixo.
      let itens = document.createElement('option')//Foi criada uma variável itens para receber o novo elemento que está sendo criado aqui de forma dinâmica com JS através do createElement. aqui está sendo criado o option, ele vai ser responsável por exibir cada operação dentro do select
      itens.text = `${n} x ${c} = ${n*c}`//Aqui está sendo definido a estrutura e també a lógica do option. Usando sua variável que acabou de ser criada, itens vai exibir seu text através do itens.text = e vai ter a seguinte estrutura: n (recebeu o valor inserido no input convertido em número) x c (Contador vai funcionar como o denominador da operação) = n*c foi aplicado a lógica o que vai fazer um multiplicar o outro
      tab.appendChild(itens)//Criado o filho dentro de tab, aqui o filho seria a variável itens contendo o option e toda sua estrutura.
      c++
    }
    tab.style.display = 'block' // Mostra o select
    btnClear.style.display = 'inline'; // Mostra o botão "Limpar Tabuada"
  }
}
