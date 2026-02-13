import { criarFunc } from "./js/user/criar.js";
import { listallFunc } from "./js/user/listartodos.js";
import { listarIdFunc} from "./js/user/listarId.js"
import {atualizarIdFunc} from "./js/user/atualizarporId.js"
import {apagarId}  from "./js/user/apagar.js"


const btnCriarUser = document.getElementById("creUser")
const btnListallUser = document.getElementById("lisallUser")
const btnListIdUser = document.getElementById("lisidUser")
const btnAtualizarIdUser = document.getElementById("atuUser")
const btnapagarIdUser = document.getElementById("delUser")


btnCriarUser.addEventListener("click", criarFunc)
btnListallUser.addEventListener("click", listallFunc)
btnListIdUser.addEventListener('click' , listarIdFunc)
btnAtualizarIdUser.addEventListener('click' , atualizarIdFunc)
btnapagarIdUser.addEventListener('click' , apagarId)





import {criarTask} from "./js/taks/criarTask.js"

const btnCriarTask = document.getElementById("creTask");

btnCriarTask.addEventListener("click" , criarTask)

