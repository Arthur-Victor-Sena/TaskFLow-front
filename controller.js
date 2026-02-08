import { criarFunc } from "./criar.js";
import { listallFunc } from "./listartodos.js";
import { listarIdFunc} from "./listarId.js"
import {atualizarIdFunc} from "./atualizarporId.js"
import {apagarId}  from "./apagar.js"

const btnCriar = document.getElementById("cre")
const btnListall = document.getElementById("lisall")
const btnListId = document.getElementById("lisid")
const btnAtualizarId = document.getElementById("atu")
const btnapagarId = document.getElementById("del")

btnCriar.addEventListener("click", criarFunc)
btnListall.addEventListener("click", listallFunc)
btnListId.addEventListener('click' , listarIdFunc)
btnAtualizarId.addEventListener('click' , atualizarIdFunc)
btnapagarId.addEventListener('click' , apagarId)