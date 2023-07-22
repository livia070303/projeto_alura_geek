// Botão adicionar produto: caso o formulário esteja preenchido corretamente o produto será adicionado, do contrário deverá mostrar uma mensagem de erro.
var nome = document.getElementById("nomeProduto");
var descricao = document.getElementById("descricao");

// function EnvioAdicionarProduto(e) {
//     e.preventDefault();
//     var botao = document.getElementById("botaoPaginaAdicionarProduto");
//     botao.style.backgroundColor= 'green';
//     botao.innerText= "Produto adicionado";
//     nome.value = "";
//     descricao.value = "";
// }

function ehValidoCampoProduto(campo){
   
    // nome = document.getElementById("nomeProduto");
    // descricao = document.getElementById("descricao");

    var spanNomeInvalido = document.getElementById("nomeInvalido");
    var spanDescricaoInvalida = document.getElementById("descricaoInvalida");
    var botao = document.getElementById("botaoPaginaAdicionarProduto");
    botao.disabled = true;
    botao.style.backgroundColor= "#2A7AE4";
    // botao.innerText= "Adicionar produto";
    
    if(ehBrancoOuVazio(nome.value)){  
        if(campo=='nome') spanNomeInvalido.innerText="Nome não pode ser vazio ou em branco!";
         return false;

    }else if(ehMaiorQueNumero(nome.value,20)){
        if(campo=='nome') spanNomeInvalido.innerText="Campo nome do produto deve ter apenas 20 caracteres!";
        return false;
    }
    else
    {
        spanNomeInvalido.innerText="";
    }

    if(ehBrancoOuVazio(descricao.value)){  
        if(campo=='descricao') spanDescricaoInvalida.innerText="Descrição não pode ser vazio ou em branco!";
         return false;
    }
    else if(ehMaiorQueNumero(descricao.value,150)){
        if(campo=='descricao') spanDescricaoInvalida.innerText="Campo descricao deve ter apenas 150 caracteres!";
        return false;

    }else{
        spanDescricaoInvalida.innerText="";
    }

    botao.style.backgroundColor= "darkblue";
    // botao.innerText= "Adicionar produto";
    botao.disabled = false;
    
}

function  ehBrancoOuVazio(palavra){
    return (palavra=="" || palavra.replaceAll(' ','') == '')
}

function ehMaiorQueNumero(palavra, num){
    return (palavra.length > num) 
}