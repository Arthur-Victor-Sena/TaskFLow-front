
const tabela = document.getElementById("tabela")

export function listallFunc(){

    var verificacao = document.querySelectorAll(".listall")
    
    if(verificacao.length > 0 ){
        verificacao.forEach(linha => linha.remove())
    }else{

    //limpa qualquer coisa que estiver na div para depois escrever
    tabela.innerText = ""
    
    fetch("http://localhost:8080/user") 
    .then(response => response.json())
    .then(data =>{

            data.forEach(data =>{
    
                const form = document.createElement("form")
                const nomeInput = document.createElement("input")
                const emailInput = document.createElement("input")
                const idInput = document.createElement("input")
                
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
    })//.then(data =>{

    }//else






}
