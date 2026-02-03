import { criarFunc } from "./criar.js";
import { listallFunc } from "./listartodos.js";

const btnCriar = document.getElementById("cre")
const btnListall = document.getElementById("lisall")

btnCriar.addEventListener("click", criarFunc)
btnListall.addEventListener("click", listallFunc)