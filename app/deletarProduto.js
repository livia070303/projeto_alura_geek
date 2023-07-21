async function deletarProduto(id) {
    const conexao = await fetch("http://localhost:3000/produtos/" + id, {
        method: "DELETE",
        
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível apagar o produto!")
    }
}