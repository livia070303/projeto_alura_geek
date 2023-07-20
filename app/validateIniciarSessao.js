var email = document.getElementById("emailInput");
var senha = document.getElementById("senhaInput");

//regex para validação de email
let reg = /^[\w.\+]+@\w+.\w{2,}(?:.\w{2})?$/;


function Envio(e) {
    e.preventDefault();
    var botao = document.getElementById("botaoEntrar");
    botao.style.backgroundColor = 'green';
    botao.innerText = "Login feito";
    email.value = '';
    senha.value = '';
    window.location.href = "/administrador.html";
}

function ehValido(campo) {

    var spanEmailInvalido = document.getElementById("emailInvalido");
    var spanSenhaInvalido = document.getElementById("senhaInvalida");
    var botao = document.getElementById("botaoEntrar");

    // botao.disabled = true;
    botao.style.backgroundColor = "#2A7AE4";
    botao.innerText = "Enviar mensagem";

    if (ehBrancoOuVazio(email.value)) {

        if (campo == 'email') spanEmailInvalido.innerText = "Email não pode ser branco ou vazio!";
        return false;
    } else if (!reg.test(email.value)) {
        if (campo == 'email') spanEmailInvalido.innerText = "Email invalido, deve ser: teste@gmail.com";
        return false;
    } else {
        spanEmailInvalido.innerText = "";
    }

    if (ehBrancoOuVazio(senha.value)) {

        if (campo == 'senha') spanSenhaInvalido.innerText = "Senha não pode ser vazio ou em branco!";
        return false;
    } else {
        spanSenhaInvalido.innerText = "";
    }

    botao.style.backgroundColor = "darkblue";
    botao.disabled = false;

}

function ehBrancoOuVazio(palavra) {
    return (palavra == "" || palavra.replaceAll(' ', '') == '')
}

function ehMaiorQueNumero(palavra, num) {
    return (palavra.length > num)
}