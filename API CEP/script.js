// API = aplicação que pode ser usada em diversos projetos (Application Programming Interface)

// FETCH = pega a API toda, busca a API

var cep = document.querySelector('#cep');
var resposta = document.querySelector('#resposta');

resposta.innerHTML="Digite um cep de 8 digitos;"
cep.addEventListener("focusout", consultar);

function consultar(){
    let cepValue=document.querySelector("#cep").value;

    if(cepValue.length<8 || cepValue.length>8){
        resposta.innerHTML="Digite um CEP válido!";

    }else{
        fetch(`https://viacep.com.br/ws/${cepValue}/json/`).then((response)=>{
            return response.json()
        }).then((data)=>{
            let localidade = document.querySelector("#localidade");
            localidade.value=data.localidade;
            resposta.innerHTML="";
        });
    }
}