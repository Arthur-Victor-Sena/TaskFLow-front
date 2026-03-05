const tabela = document.getElementById("tabela")
const tabela2 = document.getElementById("tabela2")

export function listarTaskId(){

    var verificacao = document.querySelectorAll(".lisIdTask")

    if(verificacao.length > 0){
        tabela2.innerHTML = ""
        return
    }

    tabela2.innerText = ""
    tabela.innerText = ""

    const thead = document.createElement("thead")
    const table = document.createElement("table")
    const trHead = document.createElement("tr")

    const inputId = document.createElement("input")
    inputId.classList.add("lisIdTask")

    const colunaId = document.createElement("th")
    const colunaDescr = document.createElement("th")
    const colunaStatus = document.createElement("th")
    const colunaTitulo = document.createElement("th")

    const tbody = document.createElement("tbody")

    const btnPesquisa = document.createElement("button")
    btnPesquisa.classList.add("lisIdTask")

    colunaId.textContent = "Id"
    colunaDescr.textContent = "Descrição"
    colunaStatus.textContent = "Status"
    colunaTitulo.textContent = "Título"

    trHead.appendChild(colunaId)
    trHead.appendChild(colunaDescr)
    trHead.appendChild(colunaStatus)
    trHead.appendChild(colunaTitulo)

    thead.appendChild(trHead)

    table.classList.add("lisIdTask")
    table.classList.add("lista")

    table.appendChild(thead)

    inputId.placeholder = "Digite o id da tarefa"
    btnPesquisa.textContent = "Pesquisar"

    tabela2.appendChild(inputId)
    tabela2.appendChild(btnPesquisa)

    btnPesquisa.addEventListener("click", async event => {

        event.preventDefault()

        const taskId = Number(inputId.value)

        if(verInt(taskId)){

            try{

                const tabelaExistente = document.querySelector(".lista tbody")

                if(tabelaExistente){
                    tabelaExistente.innerHTML = ""
                }

                const response = await fetch(`http://localhost:8080/task/${taskId}`)

                if(!response.ok){
                    alert("Erro, id não encontrado")
                    location.reload()
                    return
                }

                const data = await response.json()

                const trBody = document.createElement("tr")

                const tdId = document.createElement("td")
                const tdDescr = document.createElement("td")
                const tdStatus = document.createElement("td")
                const tdTitulo = document.createElement("td")

                tdId.textContent = data.Id
                tdDescr.textContent = data.descr
                tdStatus.textContent = data.status
                tdTitulo.textContent = data.titulo

                trBody.appendChild(tdId)
                trBody.appendChild(tdDescr)
                trBody.appendChild(tdStatus)
                trBody.appendChild(tdTitulo)

                tbody.appendChild(trBody)

                table.appendChild(tbody)

                tabela2.appendChild(table)

            }catch{
                alert("Erro, não foi possível concluir esta ação")
                location.reload()
            }

        }else{
            alert("Digite um Id válido em formato de número inteiro (Ex: 1,2,3...)")
        }

    })
}

function verInt(n){
    return Number.isInteger(n)
}