const tabela = document.getElementById("tabela")

export function listarIdFunc(){
    var verificacao = document.querySelector(".lisId");
    var form = document.createElement("form")
    var inputId = document.createElement("input")
    var funcId
    var btnPesquisa = document.createElement("button")
    const nomeInput = document.createElement("input")
    const emailInput = document.createElement("input")
    const idInput = document.createElement("input")
    



    //faz a verificação se já existe se retornar null quer dizer que não existe
    if(verificacao == null){

    tabela.innerText = ""
    inputId.placeholder = "Digite o id do usuário que deseja verificar"
    

        form.classList.add("lisId")
        btnPesquisa.textContent = "Pesquisar"

        tabela.appendChild(form)
        form.appendChild(inputId)
        form.appendChild(btnPesquisa)
    
        btnPesquisa.addEventListener("click" , async event=>{
     
        event.preventDefault();

        funcId = Number(inputId.value) 

        if(verInt(funcId) == true){

        try{

       const response = await fetch(`http://localhost:8080/user/${funcId}`)
      

              if(!response.ok){
                alert("Erro, id não encontrado")
                location.reload()
                return
              }

              let data = await response.json()

                nomeInput.value = data.nome
                emailInput.value = data.email
                idInput.value = data.Id
                

                nomeInput.readOnly = true;
                emailInput.readOnly = true;
                idInput.readOnly = true;
               
               
                
                tabela.appendChild(form)
                    
                
                form.appendChild(nomeInput)        
                form.appendChild(emailInput)      
                form.appendChild(idInput)
        

    }catch{
        alert("Servidor não foi encontrado")
        location.reload()
    }
        
        }  //if(verInt(funcId) == true){

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

