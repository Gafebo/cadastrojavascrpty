function verificar() {
  
    let email = document.getElementById("email").value;
    let senha = document.getElementById('password').value;


    if (email == "" || senha == "") {
        alert("Obrigatorio o preenchimento do email e senha")
        document.querySelector("email").focus()
    } else {
        pesquisa(email, senha)
    }
};

function pesquisa(email, senha) {
    if (email == "gabriel@email.com" && senha == "1234Se") {
        window.open("../assets/index.html");
        window.close();
    } else {
        alert("Email ou senha inválida");
        document.querySelector("email")
    }
}