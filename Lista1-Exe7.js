chefe()

function chefe(){
    var vetor = [] // Declaro o Vetor
    exe7(vetor) // Estamos passando o vetor como parametro - Escopo Global
}

function exe7(vet){ // Vet representa vetor -> O que fizermos com o vet, será em vetor

    var numero = prompt(`Informe um número`)
    do {
        // Colo o numero em Vet
        vet.push(numero)
        numero = prompt(`Informe outro número | Número negativo para encerrar.`)
    }
    while (numero >= 0)
}

function calculaMedia(vet){
    var soma = 0
    for (var i=0; i < vet.legnth; i++){
        soma = soma + vet[i]
    }
    console.log(`A Média é: ${soma/vet.le}`)
}