const tabela1 = document.getElementById("tabela")
const tabela = document.getElementById("tabela2")


export function criarTask(){

var verificacao = document.querySelector(".criarTask")
tabela1.innerText = ""
if(verificacao == null){
tabela.innerText = ""

var form = document.createElement("form")
const inputTitulo = document.createElement("input");
const inputDescr = document.createElement("input")
const selectStatus = document.createElement("select")
const inputUserId = document.createElement("input")
var labelTitulo = document.createElement("label")
var labelDescr = document.createElement("label")
var labelStatus = document.createElement("label")
var labelUserId = document.createElement("label")
var btnCriar = document.createElement("button")

inputTitulo.placeholder = "(Max. caracteres: 20)"
inputDescr.placeholder = "(Max caracteres: 80)"
inputUserId.placeholder = ""

labelTitulo.textContent = "Título: "
labelDescr.textContent = "Descrição: "
labelStatus.textContent = "Status da tarefa: "
labelUserId.textContent = "ID do usuário vinculado a tarefa: "

btnCriar.textContent = "Criar tarefa"

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

form.appendChild(labelTitulo)
form.appendChild(inputTitulo)

form.appendChild(document.createElement("br"))
form.appendChild(labelDescr)
form.appendChild(inputDescr)

form.appendChild(document.createElement("br"))
form.appendChild(labelStatus)
form.appendChild(selectStatus)

form.appendChild(document.createElement("br"))
form.appendChild(labelUserId)
form.appendChild(inputUserId)

form.appendChild(document.createElement("br"))
form.appendChild(btnCriar)

form.classList.add("criarTask")
tabela.appendChild(form)


btnCriar.addEventListener("click" , async event =>{
    let UserId = Number(inputUserId.value)
    if(verInt(UserId) == true && UserId > 0){

    event.preventDefault()

    try{
        const response = await fetch("http://localhost:8080/task", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                titulo: inputTitulo.value,
                descr: inputDescr.value,
                status: selectStatus.value,
                id_user: inputUserId.value
            })
        })

        if(!response.ok){
            alert("Erro ao criar tarefa")
            location.reload()
            return
        }

        alert("Tarefa criada com sucesso")
        location.reload()

    }catch(error){
        alert("Erro ao se comunicar com o servidor")
    }
} else if(UserId < 0){
alert("O id tem que ser superior a 0")
}else{
    alert("O campo ID do usuário vinculado a tarefa deve ser um número inteiro. Ex: 1,2,3,4,5...")    
}

})
}else{
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