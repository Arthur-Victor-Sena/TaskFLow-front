const tabela = document.getElementById("tabela")
const tabela2 = document.getElementById("tabela2")

export function listarTaskId(){
   
    
    var verificacao = document.querySelectorAll(".lisIdTask");


    //faz a verificação se já existe se retornar null quer dizer que não existe
    if(verificacao.length > 0){
        tabela2.innerHTML = ""
        return
    }
    const thead  = document.createElement("thead")
    const table = document.createElement("table")
    const trHead = document.createElement("tr")
    
    const inputId = document.createElement("input")
    inputId.classList.add("lisIdTask")

    const colunaNome = document.createElement("th")
    const colunaEmail = document.createElement("th")
    const colunaId = document.createElement("th")

    const tbody = document.createElement("tbody")
    
    var funcId
    const btnPesquisa = document.createElement("button")
    btnPesquisa.classList.add("lisIdTask")

    colunaNome.textContent = "Usuário"
    colunaEmail.textContent = "E-mail"
    colunaId.textContent = "Id User"
    
    trHead.appendChild(colunaNome)
    trHead.appendChild(colunaEmail)
    trHead.appendChild(colunaId)

    thead.appendChild(trHead)

    table.classList.add("lisIdTask")
    table.appendChild(thead)

    
  
    
    tabela2.innerText = ""
    tabela.innerText = ""
    inputId.placeholder = "Digite o id do usuário que deseja verificar"
    
    
        
        btnPesquisa.textContent = "Pesquisar"

        tabela2.appendChild(inputId)
        tabela2.appendChild(btnPesquisa)
    
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
            
              const trBody = document.createElement("tr")

              const tdNome = document.createElement("td")
              const tdEmail = document.createElement("td")
              const tdId = document.createElement("td")


                tdNome.textContent = data.nome
                tdEmail.textContent = data.email
                tdId.textContent = data.Id
                

                tdNome.readOnly = true;
                tdEmail.readOnly = true;
                tdId.readOnly = true;
               
                trBody.appendChild(tdId)
               trBody.appendChild(tdNome)
               trBody.appendChild(tdEmail)

                tbody.appendChild(trBody)
                table.appendChild(tbody)

                tabela2.appendChild(table)
                    
                
                
        

    }catch{
        alert("Erro, não foi possível concluir esta ação")
        location.reload()
    }
        
        }  //if(verInt(funcId) == true){

        else{
            alert("Digite um Id válido em formato de número inteiro (Números inteiros Ex: 1,2,3,4,5......)")
        }

    })
    
    //para remover caso exista os inputs no front
   
}

    function verInt(n){

    let int = Number(n)
    if(Number.isInteger(n) ){
       
            return true
        
    }else{
        return false
    }
}

