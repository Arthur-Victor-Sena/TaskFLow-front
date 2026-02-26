const tabela = document.getElementById("tabela")
const tabela2 = document.getElementById("tabela2")

export function apagarId() {

    var verificacao = document.querySelector(".apagarId")

    if (verificacao == null) {

        const labelId = document.createElement("label")
        const labelSenha = document.createElement("label")
        const labelEmail = document.createElement("label")
        const labelNome = document.createElement("label")

        var form = document.createElement("form")
        var inputId = document.createElement("input")
        var btnPesquisa = document.createElement("button")

        const nomeInput = document.createElement("input")
        const emailInput = document.createElement("input")
        const idInput = document.createElement("input")
        const senhaInput = document.createElement("input")

        var btnApagar = document.createElement("button")
        var btnCancelar = document.createElement("button")
        var btnConfirmar = document.createElement("button")

        var funcId

        btnPesquisa.textContent = "Pesquisar"
        btnApagar.textContent = "Apagar usuário"
        btnConfirmar.textContent = "Confirmar"
        btnCancelar.textContent = "Cancelar"

        labelId.textContent = "ID: "
        labelSenha.textContent = "Senha: "
        labelEmail.textContent = "Email: "
        labelNome.textContent = "Nome: "

        tabela2.innerText = ""
        tabela.innerText = ""

        inputId.placeholder = "Digite o id do usuário a ser deletado "

        form.classList.add("apagarId")

        tabela.appendChild(form)
        form.appendChild(inputId)
        form.appendChild(btnPesquisa)

        btnPesquisa.addEventListener("click", async event => {

            event.preventDefault()
            funcId = Number(inputId.value)

            if (verInt(funcId) == true) {

                try {

                    const response = await fetch(`http://localhost:8080/user/${funcId}`)

                    if (!response.ok) {
                        alert("Id não encontrado")
                    } else {

                        let data = await response.json()

                        nomeInput.value = data.nome
                        emailInput.value = data.email
                        idInput.value = data.Id
                        senhaInput.value = data.senha

                        nomeInput.readOnly = true
                        emailInput.readOnly = true
                        idInput.readOnly = true

                        form.classList.add("apagarId")
                        tabela.appendChild(form)

                        form.appendChild(document.createElement("br"))

                        form.appendChild(labelId)
                        form.appendChild(idInput)

                        form.appendChild(labelNome)
                        form.appendChild(nomeInput)

                        form.appendChild(document.createElement("br"))

                        form.appendChild(labelEmail)
                        form.appendChild(emailInput)

                        form.appendChild(document.createElement("br"))


                        form.appendChild(document.createElement("br"))

                        form.appendChild(labelSenha)
                        form.appendChild(senhaInput)

                        form.appendChild(document.createElement("br"))

                        form.appendChild(btnApagar)

                        btnApagar.addEventListener("click", event => {

                            event.preventDefault()

                            btnApagar.remove()

                            form.appendChild(btnConfirmar)
                            form.appendChild(btnCancelar)

                            btnConfirmar.addEventListener("click", async event => {

                                event.preventDefault()

                                try {

                                    const response = await fetch(`http://localhost:8080/user/${funcId}`, {
                                        method: "DELETE",
                                    })

                                    if (!response.ok) {
                                        alert("Erro, não foi possível apagar")
                                        location.reload()
                                        return
                                    }

                                    alert("Apagado com sucesso")
                                    location.reload()

                                } catch {
                                    alert("Servidor não encontrado")
                                }

                            })

                        })

                    }

                } catch {
                    alert("ERRO! não foi possíel concluir esta ação")
                }

            } else {
                alert("Digite um Id válido em formato de número inteiro (Números inteiros Ex: 1,2,3,4,5......)")
            }

        })

    } else {
        verificacao.remove()
    }

}

function verInt(n) {

    let int = Number(n)

    if (Number.isInteger(n)) {
        return true
    } else {
        return false
    }
}
