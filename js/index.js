import { guardarProducto } from "./firebase.js";
window.addEventListener('DOMContentLoaded',()=>{
    //console.log("funciona");
})

const formCarga=document.getElementById("carga-producto");

formCarga.addEventListener("submit", (e)=>{
    e.preventDefault()
    //console.log("interrumpiendo el envio del formulario")
    const txtNombre=formCarga['txtNombre']
    const txtPrecio=formCarga['txtPrecio']
    const txtRubro=formCarga['txtRubro']

    guardarProducto(txtNombre.value,txtPrecio.value,txtRubro.value)
    formCarga.reset()
})