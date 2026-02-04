import { criarFunc } from "./criar.js";
import { listallFunc } from "./listartodos.js";
import { listarIdFunc} from "./listarId.js"

const btnCriar = document.getElementById("cre")
const btnListall = document.getElementById("lisall")
const btnListId = document.getElementById("lisid")

btnCriar.addEventListener("click", criarFunc)
btnListall.addEventListener("click", listallFunc)
btnListId.addEventListener('click' , listarIdFunc)