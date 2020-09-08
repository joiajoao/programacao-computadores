chefe ()

function chefe(){

    // vetor de escopo local
    let vendedores = []
    let vendas = []
    do {
        var opcao = Number(prompt(`Escolha [1] \n Cadastrar Vendedor [2] \n Cadastrar Venda \n [3] Consulta Venda Mes \n [4] Consulta Venda \n [5] \n [6] \n [7] Sair `))
        switch (opcao){
            case 1: cadastraVendedores(vendedores) // essa passagem é por referencia e torna o vetor de escopo global
                break
            case 2: cadastraVendas(vendas, vendedores)
                break
            case 3: consultaVendasFuncionariosMes(vendas)
                break
            case 4: consultaVendasFuncionario(vendas)
                break
            case 5: consultaVendedorMes(vendas)
                break
            case 6: consultaMes(vendas)
                break
            case 7: console.log(`Tchau`)
            default: console.log(`Tente Novamente ... `)
        }   
    }
    while(opcao != 7)
}

function consultaMes(vdas){
    let meses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for(let i=0; i < vdas.length; i++){
        let posicao = vdas[i].mes - 1 // descubro a posicao para colocar
        meses[posicao] = meses[posicao] + vdas[i].valor // acumula o valor
    }
    // encontraremos o maior valor vendido
    let maiorValor = meses[0] // assumo que é Janeiro
    for(let i = 0; i < meses.length; i++){
        if(meses [i] > maiorValor){
            maiorValor = meses[i]
        }
    }
    // encontramos a posição do maior valor vendido
    let posicao = meses.indexOf(maiorValor)
    console.log(`O mês que mais vendeu ${posicao + 1}`)
}

function consultaVendedorMes(vdas){
    let mes = Number(prompt(`Informe o Mês`))
    let maiorVenda = 0
    let vendedorMaisVendeu = 0
    for(let i=0; i < vdas.length; i++){
        if(vdas[i].mes == mes){
            if(vdas[i].valor > maiorVenda){
                maiorVenda = vdas[i].valor
                vendedorMaisVendeu = vdas[i].vendedor
            }
        }
    }
    console.log(`Vendedor com mais vendas ${vendedorMaisVendeu} e valor ${maiorVenda}`)
}

function consultaVendasFuncionario(vdas){
    let vendedor = Number(prompt(`Informe o código do vendedor`))
    // percorre o vetor de vendas
    let soma = 0
    for(let i = 0; i< vdas.length;i++){
        if (vdas[i].vendedor == vendedor) { // encontrei a venda do vendedor
            soma = soma + vdas[i].valor
        }
    }
    console.log(`A soma das vendas é ${soma} `)
}

function consultaVendasFuncionariosMes(vdas){
    let vendedor = Number(prompt(`Informe o código do vendedor:`))
    let mes = Number(prompt(`Informe o Mês da venda:`))
    // percorre o vetor de vendas
    for(let i = 0; i < vdas.length; i++){
        //recupera somente o mes da data -> getMonth()
        if((vdas[i].vendedor == vendedor) && (vdas[i].mes.getMonth() == mes)){
            console.log(`Valor da Venda ${vdas[i].valor}`)
            return // sai da função
        }
    }
    console.log(`Não existe venda para este funcionario ste funcionário neste mês.`)
}

function cadastraVendedores(vended){
    let objeto = new Object
    objeto.codigo = Number(prompt(`Informe o código do vendedor:`))
    objeto.nome = prompt(`Informe o nome do vendedor`)
    // verifica se o código ja existe
    for(let i= 0; i < vended.length; i++){
        if(vended[i].codigo == objeto.codigo){
            console.log(`Cadastro cancelado pois já existe um vendedor com este código`)
            return 0 // sai da função pois nao iremos cadastrar
        }
    }
    // insere no vended, mas na verdade insere nov etor vendedores
    vended.push(objeto)
}

function cadastraVendas(vdas, vdes){ // vdas representa o vetor vendas e vdes representa o vetor vendedores
    let objeto = new Object()
    objeto.codigo = Number(prompt(`Informe o código da venda`))
    objeto.vendedor = Number(prompt(`Informe o código do vendedor`))
    objeto.mes = Number(prompt(`Informe o mês da venda`))
    objeto.valor = Number(prompt(`Informe valor da venda`))
    // verifica se o vendedor existe
    // percorre o vetor de vendedores (vdes)
    for(let i=0; i < vdes.length; i++){
        if(objeto.vendedor == vdas[i].codigo){ // achamos o vendedor
            // verifica se existe venda para este vendedor no mesmo mes - não podemos registrar a venda
            // percorre o vetor de vendas
            for(let j=0; j < vdas.length; j++){
                if ((objeto.mes == vdas[i].mes) && (objeto.vendedor == vdas[i].vendedor)){
                    console.log(`Não podemos registrar a venda`)
                    return 0                
                }
            }
            // já percorreu e nao achou, então vamos inserir
            //insere a venda em vdas, que na verdade é vendas
            vdas. push(objeto)
            console.log(`Venda registrada`)
            return 0 // sai da função
        }
    }
    console.log(`Vendedor não existe`)
}