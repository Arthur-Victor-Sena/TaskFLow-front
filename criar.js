
const tabela = document.getElementById("tabela")

export function criarFunc(){

    



var form = document.createElement("form")
var nomeInput = document.createElement("input")
var emailInput = document.createElement("input")
var senhaInput = document.createElement("input")
//variável para verificar se já existe os campos de criação 
var verificacao = document.querySelector(".create");
var btn = document.createElement("button")

//faz a verificação se já existe se retornar null quer dizer que não existe
if(verificacao == null){

    
//limpa qualquer coisa que estiver na div para depois escrever
    tabela.innerText = ""
   


nomeInput.type = "text";
nomeInput.placeholder = "Digite aqui o nome do usuario"

emailInput.type = "email"
emailInput.placeholder = "Digite aqui o email do usuario"

senhaInput.type = "text"
senhaInput.placeholder = "Digite a senha do usuário"

btn.textContent = "Criar"

//async garante que vire assíncrona a função assim podendo usar o wait
btn.addEventListener('click' ,async event=>{
      event.preventDefault();
    if(nomeInput.value === "" || 
        emailInput.value === "" || 
        senhaInput.value === ""){
        alert("preencha todos os campos")
    }
    else{
       try{

        //faz a chamada no banco de dados e espera sua resposta
    const response = await  fetch("http://localhost:8080/user", {
        //metodo post precisa do seguinte cabeçalho abaixo
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nomeInput.value,
            email: emailInput.value,
            senha: senhaInput.value
        })
        
    })
        
    //verifica se a resposta do back end deu positivo para o salvamento dos dados deu positivo(cod 201) e depois limpa os campos
    if(response.ok ){
        alert("criado com sucesso ")
        nomeInput.value=""
        emailInput.value=""
        senhaInput.value = ""
    }
    else{//apenas limpa os campos
        alert("Não foi possível a criação")
        nomeInput.value=""
        emailInput.value=""
        senhaInput.value = ""
    }

//caso o servidor spring esteja offline
}catch{
    alert("Servidor não encontrado")
}    
    }
})

//cria os inputs 
form.classList.add("create")
tabela.appendChild(form)
form.appendChild(nomeInput)
form.appendChild(emailInput)
form.appendChild(senhaInput)
form.appendChild(btn)

}

//para remover caso exista os inputs no front
else{
verificacao.remove()
}




}






