const elementoParaInserirProdutos = document.getElementById('secaoProdutos')


getAPI();

async function getAPI(){
    const res = await fetch('../Dados/produtosConsoles.json')
    produtos = await res.json()
    exibirOsLivrosNaTela(produtos)
}

function exibirOsLivrosNaTela(listaDeProdutos){
    debugger
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
