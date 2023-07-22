async function listaDeProdutos() {
    const conexao = await fetch("https://json-server-alura-geek.glitch.me/produtos/");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

function salvarProduto() {
    var inputUrl = document.getElementById("url").value;
    var inputCategoria = document.getElementById("categoria").value;
    var inputNome = document.getElementById("nome").value;
    var inputPreco = document.getElementById("preco").value;
    var inputDescricao = document.getElementById("descricao").value;

    criarProduto(inputUrl, inputCategoria, inputNome, inputPreco, inputDescricao)
    alert("Produto Salvo");

    window.location.href = "/administrador.html";
}
async function criarProduto(url, categoria, produto, preco, descricao) {
    const conexao = await fetch("https://json-server-alura-geek.glitch.me/produtos/", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "categoria": categoria,
            "produto": produto,
            "preco": preco,
            "imagem": url,
            "alt": 'produto ' + produto,
            "descricao": descricao
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível salvar o produto")
    }
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}



async function buscarProduto(termoDeBusca) {
    const conexao = await fetch(`../Dados/produtosConsoles.json?q=${termoDeBusca}`);
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}