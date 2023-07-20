var nome = document.getElementById("nomeInput");
var mensagem = document.getElementById("inputEscrevaSuaMensagem");

//regex para validação de email
let reg = /^[\w.\+]+@\w+.\w{2,}(?:.\w{2})?$/;

function Envio(e) {
    e.preventDefault();
    var botao = document.getElementById("botaoEnviarMensagem");
    botao.style.backgroundColor= 'green';
    botao.innerText= "Mensagem enviada";
    nome.value = "";
    mensagem.value = "";
}

function ehValido(campo){
   
    var spanNomeInvalido = document.getElementById("nomeInputInvalido");
    var spanMensagemInvalido = document.getElementById("inputEscrevaSuaMensagemInvalido");
    var botao = document.getElementById("botaoEnviarMensagem");
    botao.disabled = true;
    botao.style.backgroundColor= "#2A7AE4";
    botao.innerText= "Enviar mensagem";


    if(ehBrancoOuVazio(nome.value)){  
        if(campo=='nome') spanNomeInvalido.innerText="Nome não pode ser vazio ou em branco!";
         return false;
    }
    else if(ehMaiorQueNumero(nome.value,40)){
        if(campo=='nome') spanNomeInvalido.innerText="Nome deve ter apenas 40 caracteres!";
        return false;
    }
    else
    {
        spanNomeInvalido.innerText="";
    }

    if(ehBrancoOuVazio(mensagem.value)){
        if(campo=='mensagem') spanMensagemInvalido.innerText="Mensagem não pode ser vazio ou em branco!";
        return false;

    }else if(ehMaiorQueNumero(mensagem.value,120)){
        if(campo=='mensagem') spanMensagemInvalido.innerText="Mensagem deve ter apenas 120 caracteres!";
        return false;

    }else{
        spanMensagemInvalido.innerText="";
    }

    botao.style.backgroundColor= "darkblue";
    botao.disabled = false;
    
}


function  ehBrancoOuVazio(palavra){
    return (palavra=="" || palavra.replaceAll(' ','') == '')
}

function ehMaiorQueNumero(palavra, num){
    return (palavra.length > num) 
}