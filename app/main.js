const elementoParaInserirProdutos = document.getElementById('secaoProdutos')

const tituloProdutos = document.getElementById('produtosTitulo')


async function getAPI() {
    console.log('recarregou')
    const res = await fetch('https://json-server-alura-geek.glitch.me/produtos/')
    lista = await res.json()
    console.log(lista)

    var pagina = window.location.hash;

    if (pagina == '#starwars') {
        tituloProdutos.innerHTML = 'Todos produtos Star Wars'
        const produtosStarWars = lista.filter(produto => produto.categoria == 'Star Wars')
        exibirOsProdutosNaTela(produtosStarWars)

    } else if (pagina == '#console') {
        tituloProdutos.innerHTML = 'Todos produtos Console'
        const produtosConsole = lista.filter(produto => produto.categoria == 'Consoles')
        exibirOsProdutosNaTela(produtosConsole)
    } else if (pagina == '#diversos') {
        tituloProdutos.innerHTML = 'Todos produtos Diversos'
        const produtosDiversos = lista.filter(produto => produto.categoria == 'Diversos')
        exibirOsProdutosNaTela(produtosDiversos)
    } else {
        exibirOsProdutosNaTela(lista)
    }


}

function exibirOsProdutosNaTela(listaDeProdutos) {

    elementoParaInserirProdutos.innerHTML = ''

    listaDeProdutos.forEach(produto => {
        elementoParaInserirProdutos.innerHTML += `
        
        <div class="produtoXYZ">
        <div class="imagemProduto">
            <img src="${produto.imagem}" alt="Cabeça Darth Star Wars miniatura">
        </div>

        <p>${produto.produto}</p>
        <p class="preco">${produto.preco}</p>
        <p class="descricaoProduto">${produto.descricao}</p>
    </div>`
    })
}