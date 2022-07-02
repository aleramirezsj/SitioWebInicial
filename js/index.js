import { guardarProducto, onGetProductos, deleteProducto, getProducto, updateProducto } from "./firebase.js"

const formCarga=document.getElementById("carga-producto")
const containerProductos=document.getElementById("containerProductos")
var editStatus=false
var idProductoEditado=""
window.addEventListener('DOMContentLoaded',async ()=>{
    //const productos= await listarProductos()
    onGetProductos((productos)=>{
        containerProductos.innerHTML=""
        productos.forEach(doc => {
            const producto= doc.data()
            containerProductos.innerHTML+=`
                <div class="card card-body mt-2 border-primary">
                    <h3 class="h5">${producto.nombre}</h3>
                    <p>${producto.precio}</p>
                    <p>${producto.rubro}</p>
                    <div>
                        <button class="btn btn-primary btn-borrar" data-id="${doc.id}">Borrar</button>
                        <button class="btn btn-secondary btn-editar" data-id="${doc.id}">Editar</button>
                    </div>
                </div>
            `
            })    

            var btnsBorrar=document.querySelectorAll('.btn-borrar')

            btnsBorrar.forEach(btn => {
                //btn.addEventListener('click', ({target:{dataset}})=>{
                //    deleteProducto(dataset.id)
                btn.addEventListener('click', (event)=>{
                    deleteProducto(event.target.dataset.id)
                })
            })

            var btnsEditar=document.querySelectorAll('.btn-editar')

            btnsEditar.forEach(btn => {
                //btn.addEventListener('click', ({target:{dataset}})=>{
                //    deleteProducto(dataset.id)
                btn.addEventListener('click', async (event)=>{
                    const doc=await getProducto(event.target.dataset.id)
                    const producto= doc.data()
                    formCarga['txtNombre'].value=producto.nombre
                    formCarga['txtPrecio'].value=producto.precio
                    formCarga['txtRubro'].value=producto.rubro
                    editStatus=true
                    idProductoEditado=event.target.dataset.id
                })
            })
    })
})
    

formCarga.addEventListener("submit", (e)=>{
    e.preventDefault()
    //console.log("interrumpiendo el envio del formulario")
    const txtNombre=formCarga['txtNombre']
    const txtPrecio=formCarga['txtPrecio']
    const txtRubro=formCarga['txtRubro']

    if(!editStatus)
        guardarProducto(txtNombre.value,txtPrecio.value,txtRubro.value)
    else
        {
            editStatus=false
            updateProducto(idProductoEditado,{
                nombre:txtNombre.value,
                precio:txtPrecio.value,
                rubro:txtRubro.value
            })
        }
    
    formCarga.reset()
})