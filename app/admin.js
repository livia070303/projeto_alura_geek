const elementoParaInserirProdutos = document.getElementById('secaoProdutos')

const tituloProdutos = document.getElementById('produtosTitulo')


async function getAPI() {
    console.log('recarregou')
    const res = await fetch('../Dados/produtosConsoles.json')
    lista = await res.json()

    var pagina = window.location.hash;

    if (pagina == '#starwars') {
        tituloProdutos.innerHTML = 'Todos produtos Star Wars'
        const produtosStarWars = lista.produtos.filter(produto => produto.categoria == 'Star Wars')
        exibirOsLivrosNaTela(produtosStarWars)

    } else if (pagina == '#console') {
        tituloProdutos.innerHTML = 'Todos produtos Console'
        const produtosConsole = lista.produtos.filter(produto => produto.categoria == 'Consoles')
        exibirOsLivrosNaTela(produtosConsole)
    } else if (pagina == '#diversos') {
        tituloProdutos.innerHTML = 'Todos produtos Diversos'
        const produtosDiversos = lista.produtos.filter(produto => produto.categoria == 'Diversos')
        exibirOsLivrosNaTela(produtosDiversos)
    } else {
        exibirOsLivrosNaTela(lista.produtos)
    }


}

function exibirOsLivrosNaTela(listaDeProdutos) {

    elementoParaInserirProdutos.innerHTML = ''

    listaDeProdutos.forEach(produto => {
        elementoParaInserirProdutos.innerHTML += `
        
        <div class="produtoXYZ">
        <div class="imagemProduto">
            <div class="imagemIcones">
                <img class="imagemLixeira" src="img/lixeira.png" alt="lixeira">
                <img class="imagemLapis" src="img/lápis.png" alt="caneta">
            </div>
            <img src="${produto.imagem}" alt="Cabeça Darth Star Wars miniatura">
        </div>

        <p>${produto.produto}</p>
        <p class="preco">${produto.preco}</p>
        <p class="descricaoProduto">${produto.descricao}</p>
    </div>`
    })
}