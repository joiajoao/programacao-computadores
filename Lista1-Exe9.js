chefe()
    function chefe(){
        var numero = Number(prompt(`informe um número`))
        exe9(numero)
    }

    function exe9(num){
        var soma = 0
        for (var divisor = num; dividor >= 1; divisor--){
            if(num % divisor == 0){
                soma = soma + divisor
            }
        }

    //  for (var divisor = 1; dividor <= num; divisor++){
    //      if(num % divisor == 0){
    //        soma = soma + divisor
    //      }
    //  }

        console.log(`A soma dos dividores de ${num} é ${soma}`)

    }