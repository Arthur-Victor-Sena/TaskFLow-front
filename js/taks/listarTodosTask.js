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

    const cabecalho = document.createElement("thead")
    const linhaPrincipal = document.createElement("tr")

    const labelTituloTask = document.createElement("th")
    const labelDescTask = document.createElement("th")
    const labelIdTask = document.createElement("th")
    const labelStatusTask = document.createElement("th")

    labelTituloTask.innerText = "Titulo"
    labelDescTask.innerText = "Descrição"
    labelIdTask.innerText = "ID da tarefa"
    labelStatusTask.innerText = "Status"

    linhaPrincipal.appendChild(labelTituloTask)
    linhaPrincipal.appendChild(labelDescTask)
    linhaPrincipal.appendChild(labelIdTask)
    linhaPrincipal.appendChild(labelStatusTask)

    cabecalho.appendChild(linhaPrincipal)
    table.appendChild(cabecalho)

    const tbody = document.createElement("tbody")

    fetch("http://localhost:8080/task")
    .then(response => response.json())
    .then(data =>{
        data.forEach(data =>{

            const linhasSecundarias = document.createElement("tr")

            const cellTitulo = document.createElement("td")
            const cellDesc = document.createElement("td")
            const cellId = document.createElement("td")
            const cellStatus = document.createElement("td")


            cellTitulo.innerText = data.titulo
            cellDesc.innerText = data.descr
            cellId.innerText = data.Id
            cellStatus.innerText = data.status

            cellTitulo.readOnly = true
            cellDesc.readOnly = true
            cellId.readOnly = true
            cellStatus.readOnly = true

            linhasSecundarias.appendChild(cellTitulo)
            linhasSecundarias.appendChild(cellDesc)
            linhasSecundarias.appendChild(cellId)
            linhasSecundarias.appendChild(cellStatus)

            tbody.appendChild(linhasSecundarias)
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
