const secaoProdutos = document.getElementById('secaoProdutos')

async function pesquisar() {
    
    var campoPesquisado = document.getElementById('inputPesquisar').value;

    if (campoPesquisado !== "" || campoPesquisado.replaceAll(' ', '') !== '') {
        secaoProdutos.innerHTML = ''
        const res = await fetch('https://json-server-alura-geek.glitch.me/produtos/')
        lista = await res.json()
        const produtosFiltrados = lista.filter(produto => produto.produto.match(campoPesquisado))
        if (produtosFiltrados.length > 0) {
            
            exibirOsProdutosNaTela(produtosFiltrados)
        } else {
            secaoProdutos.innerHTML = '<h1>Nenhum produto encontrado!</h1>'
        }

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