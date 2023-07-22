async function deletarProduto(id) {
    const conexao = await fetch("https://json-server-alura-geek.glitch.me/produtos/" + id, {
        method: "DELETE",
        
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível apagar o produto!")
    }
}