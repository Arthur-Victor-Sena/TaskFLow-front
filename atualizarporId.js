const tabela = document.getElementById("tabela")

export function atualizarIdFunc(){
    var verificacao = document.querySelector(".atualizarId");
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

    btnPesquisa.textContent = "Pesquisar"
    btnAtualizar.textContent = "Atualizar"
    btnConfirmar.textContent = "Confirmar"
    btnCancelar.textContent = "Cancelar"

    //faz a verificação se já existe se retornar null quer dizer que não existe
    if(verificacao == null){

    tabela.innerText = ""
    inputId.placeholder = "Digite o id "
    

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
       }else{
        
       

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
                    
                
                form.appendChild(nomeInput)        
                form.appendChild(emailInput)      
                form.appendChild(idInput)
                form.appendChild(senhaInput)
                form.appendChild(btnAtualizar)
                
                btnAtualizar.addEventListener("click" , event =>{

                    event.preventDefault()
                    nomeInput.readOnly = false;
                    emailInput.readOnly = false;
                    

                    btnAtualizar.remove()


                    form.appendChild(btnConfirmar)
                    form.appendChild(btnCancelar)


                    btnConfirmar.addEventListener('click' , event =>{
                    
                    event.preventDefault();
                    
                    
                  fetch(`http://localhost:8080/user/${funcId}`, {
                       
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            nome: nomeInput.value,
                            email: emailInput.value,
                            senha: senhaInput.value
                        })

                        })

                      

                    })
                    
                })//btn atualizar event
            }      
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


