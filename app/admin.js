const elementoParaInserirProdutos = document.getElementById('secaoProdutos')

const tituloProdutos = document.getElementById('produtosTitulo')


async function getAPI() {
    console.log('recarregou')
    const res = await fetch('https://json-server-alura-geek.glitch.me/produtos/')
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
async function getProdutoId() {
    console.log('editar item');
    var id = window.location.hash.replace('#', '');
    const res = await fetch('https://json-server-alura-geek.glitch.me/produtos/' + id)
    var item = await res.json()

    var url = document.getElementById('url');
    url.value = item.imagem;

    var categoria = document.getElementById('categoria');
    categoria.value = item.categoria;

    var nome = document.getElementById('nome');
    nome.value = item.produto;

    var preco = document.getElementById('preco');
    preco.value = item.preco;

    var descricao = document.getElementById('descricao');
    descricao.value = item.descricao;

}

function exibirOsLivrosNaTela(listaDeProdutos) {

    elementoParaInserirProdutos.innerHTML = ''

    listaDeProdutos.forEach(produto => {
        elementoParaInserirProdutos.innerHTML += `
        
        <div class="produtoXYZ">
        <div class="imagemProduto">
            <div class="imagemIcones">
                <img onclick= 'deletarProduto(${produto.id})' class="imagemLixeira" src="img/lixeira.png" alt="lixeira">
                <img onclick= 'editarProdutoRedirect(${produto.id})' class="imagemLapis" src="img/lápis.png" alt="caneta">
            </div>
            <img src="${produto.imagem}" alt="Cabeça Darth Star Wars miniatura">
        </div>

        <p>${produto.produto}</p>
        <p class="preco">${produto.preco}</p>
        <p class="descricaoProduto">${produto.descricao}</p>
    </div>`
    })
}

function editarProdutoRedirect(id) {
    window.location.href = 'editarProduto.html#' + id
}

async function deletarProduto(id) {
    const conexao = await fetch("https://json-server-alura-geek.glitch.me/produtos/" + id, {
        method: "DELETE",
        
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível apagar o produto!")
    }
}
async function editarProduto() {

    var id = window.location.hash.replace('#', '');
    var url = document.getElementById('url').value;
    var categoria = document.getElementById('categoria').value;
    var produto = document.getElementById('nome').value;
    var preco = document.getElementById('preco').value;
    var descricao = document.getElementById('descricao').value;
   
    const conexao = await fetch("https://json-server-alura-geek.glitch.me/produtos/" + id, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "categoria": categoria ,
            "produto": produto,
            "preco": preco,
            "imagem": url,
            "alt": 'produto '+ produto,
            "descricao": descricao
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível salvar o produto")
    }
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}