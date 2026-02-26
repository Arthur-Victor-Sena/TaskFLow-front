const tabela = document.getElementById("tabela")
const tabela2 = document.getElementById("tabela2")

export function listarTaskUser(){
    
    var verificacao = document.querySelectorAll(".lisIdTask");


    if(verificacao.length > 0){
    tabela2.innerHTML = ""
    return
    }

    
    
    const inputPesquisa = document.createElement("input")
    inputPesquisa.classList.add("lisIdTask")
    const btnPesquisa = document.createElement("button")
    btnPesquisa.classList.add("lisIdTask")
    
    inputPesquisa.placeholder = "Digitr Id User"
    btnPesquisa.textContent = "Pesquisar"

   

    tabela2.appendChild(inputPesquisa)
    tabela2.appendChild(btnPesquisa)


    btnPesquisa.addEventListener("click" , async event =>{

         var userId   = inputPesquisa.value



    try{
        tabela.innerHTML = ""
        tabela2.innerHTML = ""
     var  Response = await fetch(`http://localhost:8080/task/${userId}`)
    


     let data = await Response.json()
    
    const tableUser = document.createElement("table")
    tableUser.classList.add("lisIdUser")

    const trHeadUser = document.createElement("tr")
    const thIdUser = document.createElement("th")
    const thNomeUser = document.createElement("th")
    const thEmailUser = document.createElement("th")

    thIdUser.innerText = "Id User"
    thNomeUser.innerText = "Usuário"
    thEmailUser.innerText = "Email"

    trHeadUser.appendChild(thIdUser)
    trHeadUser.appendChild(thNomeUser)
    trHeadUser.appendChild(thEmailUser)

    tableUser.appendChild(trHeadUser)

    const trBodyUser = document.createElement("tr")
    const tdIdUser = document.createElement("td")
    const tdNomeUser = document.createElement("td")
    const tdEmailUser = document.createElement("td")

    
    tdIdUser.innerText = data[0].user.Id
    tdNomeUser.innerText = data[0].user.nome
    tdEmailUser.innerText = data[0].user.email

    trBodyUser.appendChild(tdIdUser)
    trBodyUser.appendChild(tdNomeUser)
    trBodyUser.appendChild(tdEmailUser)

    tableUser.appendChild(trBodyUser)
    tableUser.classList.add("lisIdTask")

    tabela2.appendChild(tableUser)

   //Parte das tasks
     const tableTask = document.createElement("table") 
     const theadTask = document.createElement("thead")
     const trHeadTask = document.createElement("tr")
    

    const thDescTask = document.createElement("th")
    const thIdTask = document.createElement("th");
    const thTituloTask = document.createElement("th")
    const thStatusTask = document.createElement("th")
    const thIdUserTask = document.createElement("th")

    thDescTask.innerHTML = "Descrição"
    thIdTask.innerHTML = "Id Tarefa"
    thTituloTask.innerHTML = "Titulo"
    thStatusTask.innerText = "Status"
    thIdUserTask.innerText = "Id User"

    trHeadTask.appendChild(thIdTask)
    trHeadTask.appendChild(thTituloTask)
    trHeadTask.appendChild(thDescTask)
    trHeadTask.appendChild(thStatusTask)
    trHeadTask.appendChild(thIdUserTask)
    
    theadTask.appendChild(trHeadTask)
    tableTask.appendChild(theadTask)
    
    
    tableTask.classList.add("lisIdTask")
    
    const tbodyTask = document.createElement("tbody")

    data.forEach(Task =>{
       
        
        const trBodyTask = document.createElement("tr")
        
        const tdIdTask = document.createElement("td") 
        const tdTituloTask = document.createElement("td")
        const tdDescTask = document.createElement("td")
        const tdStatusTask = document.createElement("td")
        const tdIdUserTask = document.createElement("td")

        tdIdTask.innerText = Task.Id
        tdTituloTask.innerText = Task.titulo 
        tdDescTask.innerText = Task.descr
        tdStatusTask.innerText = Task.status
        tdIdUserTask.innerText = Task.user.Id

        trBodyTask.appendChild(tdIdTask)
        trBodyTask.appendChild(tdTituloTask)
        trBodyTask.appendChild(tdDescTask)
        trBodyTask.appendChild(tdStatusTask)
        trBodyTask.appendChild(tdIdUserTask)

        tbodyTask.appendChild(trBodyTask)
        tableTask.appendChild(tbodyTask)

        tabela2.appendChild(tableTask)
    })

        

  
    



        
    }catch(error){
     
        alert("Erro, não foi possível realizar a ação" + error)
        location.reload()

    }
   

    } )


    


}