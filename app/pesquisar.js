const secaoProdutos = document.getElementById('secaoProdutos')

async function pesquisar() {
    
    var campoPesquisado = document.getElementById('inputPesquisar').value;

    if (campoPesquisado !== "" || campoPesquisado.replaceAll(' ', '') !== '') {
        secaoProdutos.innerHTML = ''
        var lista = await obtemLista();
        
        const produtosFiltrados = lista.filter(produto => produto.produto.match(campoPesquisado))
        if (produtosFiltrados.length > 0) {
            
            exibirOsProdutosNaTela(produtosFiltrados)
        } else {
            secaoProdutos.innerHTML = '<h1>Nenhum produto encontrado!</h1>'
        }

    }

}

async function obtemLista(){
    var pagina = window.location.hash;

    const res = await fetch('https://json-server-alura-geek.glitch.me/produtos/')
    var  lista = await res.json()

    if (pagina == '#starwars') {
    
        const produtosStarWars = lista.filter(produto => produto.categoria == 'Star Wars')
        return produtosStarWars

    } else if (pagina == '#console') {
       
        const produtosConsole = lista.filter(produto => produto.categoria == 'Consoles')
        return produtosConsole

    } else if (pagina == '#diversos') {
        
        const produtosDiversos = lista.filter(produto => produto.categoria == 'Diversos')
        return produtosDiversos
    } else {
        return lista
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