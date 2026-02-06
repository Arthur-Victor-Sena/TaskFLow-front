import { criarFunc } from "./criar.js";
import { listallFunc } from "./listartodos.js";
import { listarIdFunc} from "./listarId.js"
import {atualizarIdFunc} from "./atualizarporId.js"


const btnCriar = document.getElementById("cre")
const btnListall = document.getElementById("lisall")
const btnListId = document.getElementById("lisid")
const btnAtualizarId = document.getElementById("atu")

btnCriar.addEventListener("click", criarFunc)
btnListall.addEventListener("click", listallFunc)
btnListId.addEventListener('click' , listarIdFunc)
btnAtualizarId.addEventListener('click' , atualizarIdFunc)