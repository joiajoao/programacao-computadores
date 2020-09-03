chefe ()

function chefe(){

    // vetor de escopo local
    let vendedores = []
    let vendas = []
    do {
        var opcao = Number(prompt(`Escolha [1] \n Cadastrar Vendedor [2] \n Cadastrar Venda [3] \n Sair `))
        switch (opcao){
            case 1: cadastraVendedores(vendedores) // essa passagem é por referencia e torna o vetor de escopo global
                break
            case 2: cadastraVendas(vendas, vendedores)
                break
            case 3: console.log(`Tchau`)
            default: console.log(`Tente Novamente ... `)
        }   
    }
    while(opcao != 3)
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