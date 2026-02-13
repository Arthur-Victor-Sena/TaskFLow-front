
const tabela = document.getElementById("tabela2")


export function criarTask(){

var verificacao = document.querySelector(".criarTask")

if(verificacao == null){
tabela.innerText = ""

var form = document.createElement("form")
const inputTitulo = document.createElement("input");
const inputDescr = document.createElement("input")
const selectStatus = document.createElement("select")
const inputUserId = document.createElement("input")

inputTitulo.placeholder = "Título da tarefa (Max. caracteres: 20)"
inputDescr.placeholder = "Descrição para essa tarefa (Max caracteres: 80)"
inputUserId.placeholder = "id do usuário que deseja vincular essa tarefa"

let option1 = document.createElement("option")
option1.value = "pending"
option1.text = "Pendente"

let option2 = document.createElement("option")
option2.value = "in_progress"
option2.text = "Em andamento"

let option3 = document.createElement("option")
option3.value = "done"
option3.text = "Concluída"

selectStatus.appendChild(option1)
selectStatus.appendChild(option2)
selectStatus.appendChild(option3)


form.appendChild(inputTitulo)
form.appendChild(inputDescr)
form.appendChild(selectStatus)
form.appendChild(inputUserId)

form.classList.add("criarTask")
tabela.appendChild(form)

}else{
    verificacao.remove()
}
} 