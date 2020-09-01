chefe()

function chefe(){
    // não mais vamos declarar variaveis usando a palavra chave VAR (escopo global)
    // a partir de agora vamos declarar usando o LET (escopo local da função onde é declarado)
    let vetor = [] // esse vetor vai existir apenas dentro desta função
    do{
        var opcao = Number(prompt(`Digite \n [1].Entrada \n [2].Relat1 \n [3].Relat2 \n [4].Relat3 \n [5].Relat4 \n [6].Sair`))
    switch(opcao){
        case 1: entrada(vetor) // estamos passando uma referencia na memoria do vetor
                break
        case 2: calcularMedia(vetor)
                break
        case 3: calcularMaiorIdade(vetor)
                break
        case 4: calcularQtde(vetor)
                break
        case 5: calcularPercentual(vetor)
                break
        case 6: console.log(`Obrigado por utilizar nosso programa!`)
                break
        default: console.log(`Opção inválida, tente novamente.`)
        }
    }
    while (opcao != 6)
}

function entrada(vet){ // vet vai apontar para vetor
    console.log(`Entrou na função entrada`)
    // cria objeto
    let objeto = new Object
    objeto.sexo = prompt(`Informe M para masculino e F para feminino`).toUpperCase() // converte para letra maiscula
    objeto.altura = Number(prompt(`Informe a altura`))
    objeto.idade = Number(prompt(`Informe a idade`))
    objeto.olhos = prompt(`Informe A (azuis) V (verde) C (castanho)`).toUpperCase() // converte para letra maiscula
    // vamos inserir em vetor e nao em vet
    vet.push(objeto)
    console.log(`Habitante inserido com sucesso.`)
}

function calcularMedia(vet){ // vet vai apontar para vetor
    console.log(`Entrou na função calcular media`)
    let soma = 0
    for(let i=0; i < vet.length; i++){
        if ((vet[i].olhos == "C") && (vet[i].altura > 1.60)){
            soma = soma + vet.[i].idade
            qtde++
        }
    }
    console.log(`A Média da Idade é ${soma/qtde}`)
}

function calcularMaiorIdade(vet){ // vet vai apontar para vetor
    let maiorIdade = vet[0].idade
    for(let i=1; i < vet.length; i++){
        if(vet[i].idade > maiorIdade){
            maiorIdade = vet[i]idade // atualiza maior idade
        }
    }
    console.log(`Maior idade entre os habitantes: ${maiorIdade}`)
}

function calcularQtde(vet){ // vet vai apontar para vetor
    let qtde = 0
    for(let i=0; i < vet.length; i++){
        if (((vet[i].sexo == "F") && (vet[i].idade >= 20) && (vet[i].idade <= 45))
        ||
        ((vet[i].olhos == "A") && (vet[i].altura < 1.70))){
            qtde++
        }
    }
    console.log(`Entrou na função calcular quantidade`)
}

function calcularPercentual(vet){ // vet vai apontar para vetor
    let conta = 0
    for(let i=0; i < vet.length; i++){
        if(vet[i].sexo == "M"){
            conta++
        }
    }
    console.log(`O Percetual de homen é ${(conta/vet.length)*100}`)
}