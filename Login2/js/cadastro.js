function testaFormulario() {
    if (document.getElementById('nome').value == "") {
        alert("Digite seu nome")
        nome = document.getElementById('nome').focus();
        
    } else if (document.getElementById('cep').value == "") {
        alert("Digite seu cep")
        cep = document.getElementById('cep').focus();
        
    } else if (document.getElementById('rua').value == "") {
        alert("Digite sua rua")
        rua = document.getElementById('rua').focus();

    } else if (document.getElementById('bairro').value == "") {
        bairro = document.getElementById('bairro').focus();
        alert("Digite seu bairro")

    } else if (document.getElementById('uf').value == '') {
        uf = document.getElementById('uf').focus();
        alert("Digite sua UF")

    } else if (document.getElementById('email').value == '') {
        email = document.getElementById('email').focus();
        alert("Digite seu E-mail")
    } else {
        alert("Parabéns você digitou tudo certo");
    }

}






