const tabela1 = document.getElementById("tabela")
const tabela2 = document.getElementById("tabela2")

export function listarTodosTask(){

var verificacao = document.querySelectorAll(".listarTodosTask")

if(verificacao.length > 0){
    tabela2.innerHTML = ""
}else{

try{
    tabela1.innerHTML = ""
    tabela2.innerHTML = ""

    const table = document.createElement("table")
    table.classList.add("listarTodosTask")

    const thead = document.createElement("thead")
    const colunas = document.createElement("tr")

    const colunaIdTask = document.createElement("th")
    const colunaTituloTask = document.createElement("th")
    const colunaDescTask = document.createElement("th")
    const colunaStatusTask = document.createElement("th")

    colunaIdTask.innerText = "ID da tarefa"
    colunaTituloTask.innerText = "Titulo"
    colunaDescTask.innerText = "Descrição"
    colunaStatusTask.innerText = "Status"

    colunas.appendChild(colunaIdTask)
    colunas.appendChild(colunaTituloTask)
    colunas.appendChild(colunaDescTask)
    colunas.appendChild(colunaStatusTask)

    thead.appendChild(colunas)
    table.appendChild(thead)

    const tbody = document.createElement("tbody")

    fetch("http://localhost:8080/task")
    .then(response => response.json())
    .then(data =>{
        data.forEach(data =>{

            const linhas = document.createElement("tr")

            const tdId = document.createElement("td")
            const tdTitulo = document.createElement("td")
            const tdDesc = document.createElement("td")
            const tdStatus = document.createElement("td")


            tdId.innerText = data.Id
            tdTitulo.innerText = data.titulo
            tdDesc.innerText = data.descr
            tdStatus.innerText = data.status

            tdTitulo.readOnly = true
            tdDesc.readOnly = true
            tdId.readOnly = true
            tdStatus.readOnly = true

            linhas.appendChild(tdId)
            linhas.appendChild(tdTitulo)
            linhas.appendChild(tdDesc)
            linhas.appendChild(tdStatus)

            tbody.appendChild(linhas)
        })
    })

    table.appendChild(tbody)
    tabela2.appendChild(table)

}
catch{
    alert("Erro, não foi possível encontrar o servidor")
}

}

}
