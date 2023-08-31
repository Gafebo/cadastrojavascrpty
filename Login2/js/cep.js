
//arrow function
const pesquisaCEP = async () => {

    const cep = document.getElementById('cep').value;

    //passando o cep para API viacep
    //usando template script ``
    //apagar o S do https://
    const url = `http://viacep.com.br/ws/${cep}/json/`;

    const dados = await fetch(url);
    const endereco = await dados.json();

    preencherFormulario(endereco);
};

//FUncao para preencher o formulario




const preencherFormulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;


}

/* Função para limpar formulario */

function limparFormulario(){
    document.getElementById('nome').value = '';
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('uf').value = '';
    document.getElementById('email').value = '';

    document.getElementById('nome').focus();
}

function cepUndefined(){
    if(document.getElementById('rua').value == "undefined"){
        alert("Cep Invalido!")
    }
}




/* Criando um evento do input CEP */
document.getElementById('cep')
    .addEventListener('focusout', pesquisaCEP);