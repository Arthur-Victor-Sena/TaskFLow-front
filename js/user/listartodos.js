const tabela2 = document.getElementById("tabela2")
const tabela = document.getElementById("tabela")

export function listallFunc(){

    var verificacao = document.querySelectorAll(".listall")
    

    if(verificacao.length > 0 ){
        tabela.innerText = ""
    }else{

    //limpa qualquer coisa que estiver na div para depois escrever
    tabela.innerText = ""
    tabela2.innerText = ""

    const thead  = document.createElement("thead")
    const table = document.createElement("table")
    const trHead = document.createElement("tr")
    
    const colunaNome = document.createElement("th")
    const colunaEmail = document.createElement("th")
    const colunaId = document.createElement("th")

    colunaNome.textContent = "Usuário"
    colunaEmail.textContent = "E-mail"
    colunaId.textContent = "Id User"
    
    trHead.appendChild(colunaId)
    trHead.appendChild(colunaNome)
    trHead.appendChild(colunaEmail)

    thead.appendChild(trHead)

    table.classList.add("listall")
    table.appendChild(thead)

    const tbody = document.createElement("tbody")

    try{
 
    fetch("http://localhost:8080/user") 
    .then(response => response.json())
    .then(data =>{

            data.forEach(data =>{
    
            const trBody = document.createElement("tr")

            const tdNome = document.createElement("td")
            const tdEmail = document.createElement("td")
            const tdId = document.createElement("td")
                
            tdNome.innerText = data.nome
            tdEmail.innerText = data.email
            tdId.innerText = data.Id

            tdNome.readOnly = true;
            tdEmail.readOnly = true;
            tdId.readOnly = true;

            trBody.appendChild(tdId)
            trBody.appendChild(tdNome)
            trBody.appendChild(tdEmail)

            tbody.appendChild(trBody)
                
                    })
    })//.then(data =>{
    table.appendChild(tbody)
    tabela.appendChild(table)
  
}catch{
        alert("Erro, não foi possível encontrar o servidor")
    }
    }//else






}
