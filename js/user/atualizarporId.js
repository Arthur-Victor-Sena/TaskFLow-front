const tabela = document.getElementById("tabela")
const tabela2 = document.getElementById("tabela2")

export function atualizarIdFunc(){
   var verificacao = document.querySelector(".atualizarId");

    tabela.innerText = ""
    tabela2.innerText = ""
    //faz a verificação se já existe se retornar null quer dizer que não existe
    if(verificacao == null){

    
    var form = document.createElement("form")
    var inputId = document.createElement("input")
    var funcId
    var btnPesquisa = document.createElement("button")
    const nomeInput = document.createElement("input")
    const emailInput = document.createElement("input")
    const idInput = document.createElement("input")
    const senhaInput = document.createElement("input")
    var btnAtualizar = document.createElement("button")
    var btnCancelar = document.createElement("button")
    var btnConfirmar = document.createElement("button")
    const labelId = document.createElement("label");
    const labelSenha = document.createElement("label");
    const labelEmail = document.createElement("label");
    const labelNome = document.createElement("label");
    btnPesquisa.textContent = "Pesquisar"
    btnAtualizar.textContent = "Atualizar"
    btnConfirmar.textContent = "Confirmar"
    btnCancelar.textContent = "Cancelar"
    labelId.textContent = "ID";
    labelSenha.textContent = "Senha";
    labelEmail.textContent = "Email";
    labelNome.textContent = "Nome";
    btnCancelar.textContent = "Cancelar";

    
    inputId.placeholder = "Digite o id do usuário a ser atualizado"
    

        form.classList.add("atualizarId")
       

        tabela.appendChild(form)
        form.appendChild(inputId)
        form.appendChild(btnPesquisa)
    
        btnPesquisa.addEventListener("click" , async event=>{
     
        event.preventDefault();

        funcId = Number(inputId.value) 

        if(verInt(funcId) == true){

        try{
           
       const response = await   fetch(`http://localhost:8080/user/${funcId}`)      
      
       if(!response.ok){
        alert("Id não encontrado")
        location.reload()
        return
       }
        
       

     let data = await response.json()     
               
                
               
                nomeInput.value = data.nome
                emailInput.value = data.email
                idInput.value = data.Id
                senhaInput.value = data.senha 

                nomeInput.readOnly = true;
                emailInput.readOnly = true;
                idInput.readOnly = true;
               
               
                form.classList.add("atualizarId")
                tabela.appendChild(form)

                form.appendChild(document.createElement("br"))  
                
                form.appendChild(labelNome)
                form.appendChild(nomeInput)  
                
                 form.appendChild(document.createElement("br"))

                form.appendChild(labelEmail)
                form.appendChild(emailInput) 
                
                  form.appendChild(document.createElement("br")) 

                form.appendChild(labelId)
                form.appendChild(idInput)
                
                form.appendChild(document.createElement("br"))

                form.appendChild(labelSenha)
                form.appendChild(senhaInput)
                
                form.appendChild(btnAtualizar)

                
                btnAtualizar.addEventListener("click" , event =>{

                    event.preventDefault()
                    nomeInput.readOnly = false;
                    emailInput.readOnly = false;
                    

                    btnAtualizar.remove()


                    form.appendChild(btnConfirmar)
                    form.appendChild(btnCancelar)


                    btnConfirmar.addEventListener('click' , async event =>{
                    
                    event.preventDefault();
                    
                    try{

                    
                 const response = await fetch(`http://localhost:8080/user/${funcId}`, {
                       
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            nome: nomeInput.value,
                            email: emailInput.value,
                            senha: senhaInput.value
                        })
                        })// const response = fetch(`http://localhost:8080/user/${funcId}`, {


                        if(!response.ok){
                            alert("Erro ao salvar")
                            location.reload()
                            return
                        }

                        alert("Salvo com sucesso")
                        location.reload()

                    }catch{
                        alert("Servidor não encontrado")
                    }
                      

                    })//btnConfirmar.addEventListener('click' , async event =>{
                    
                })//btn atualizar event
                 
            }catch{
                alert("ERRO! não foi possíel encontrar o servidor, verifique se o servidor está ativo")
            }

        }//if (verInt(funcId) == true){

        else{
            alert("Digite um Id válido em formato de número inteiro (Números inteiros Ex: 1,2,3,4,5......)")
        }

    })
    
    //para remover caso exista os inputs no front
     } else{
    verificacao.remove()
}
}



    function verInt(n){

    let int = Number(n)
    if(Number.isInteger(n) ){
       
            return true
        
    }else{
        return false
    }
}


