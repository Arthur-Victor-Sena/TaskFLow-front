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
    
    btnPesquisa.addEventListener("click" , event=>{
     
        event.preventDefault();

        funcId = Number(inputId.value) 

        

        if(verInt(funcId) == true){

        
        

        fetch(`http://localhost:8080/user/${funcId}`)
        .then(resposne => resposne.json())
        .then(data =>{

              
                
                nomeInput.value = data.nome
                emailInput.value = data.email
                idInput.value = data.Id
                nomeInput.readOnly = true;
                emailInput.readOnly = true;
                idInput.readOnly = true;
                form.classList.add("listall")
                tabela.appendChild(form)
                form.appendChild(nomeInput)        
                form.appendChild(emailInput)      
                form.appendChild(idInput)

})
        }

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

