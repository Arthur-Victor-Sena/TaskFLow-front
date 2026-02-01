const lisALL  = document.getElementById("lisall");





lisALL.addEventListener('click',  event=>{
    
    var verificacao = document.querySelectorAll(".listall")
    
    if(verificacao.length > 0 ){
        verificacao.forEach(linha => linha.remove())
        


    }else{

    
    fetch("http://localhost:8080/user/1") 
    .then(Response => Response.json())
    .then(data =>{

            data.forEach(data =>{
    
                const form = document.createElement("form")
                const nomeInput = document.createElement("input")
                const emailInput = document.createElement("input")
                const idInput = document.createElement("input")
                
                nomeInput.value = data.nome
                emailInput.value = data.email
                idInput.value = data.Id
                


                form.classList.add("listall")
                tabela.appendChild(form)
                form.appendChild(nomeInput)        
                form.appendChild(emailInput)      
                form.appendChild(idInput)

                
                    })
    })//.then(data =>{

    }//else

})//evento





