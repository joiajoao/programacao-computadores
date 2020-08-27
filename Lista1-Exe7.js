chefe()

function chefe(){
    var vetor = [] // Declaro o Vetor
    exe7(vetor) // Estamos passando o vetor como parametro - Escopo Global
    console.log(vetor)
    calculaMedia(vetor)
}

//entrada de dados
function exe7(vet){ // Vet representa vetor -> O que fizermos com o vet, será em vetor

    var numero = Number(prompt(`Informe um número`))
    do {
        // Coloca o numero em Vet
        vet.push(numero)
        numero = Number(prompt(`Informe outro número | Número negativo para encerrar.`))
    }
    while (numero >= 0)
}

//calcula e mostra a media
function calculaMedia(vet){
    var soma = 0
    for (var i=0; i < vet.length; i++){
        soma = soma + vet[i]
    }
    console.log(`A Média é: ${soma/vet.length}`)
}