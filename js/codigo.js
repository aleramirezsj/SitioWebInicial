
/*function cargarAyuda(control){
let ayudas={"txtNombre":"Ingrese con mayúsculas su nombre",
            "txtApellido":"Ingrese con mayúsculas su apellido",
        "chkCasado":"Situación civil"};    
    var h3=document.getElementById("h3ayuda");
    
    h3.innerHTML=ayudas[control.name];
}*/
function cargarAyuda(control){
    var h3=document.getElementById("h3ayuda");
    if (control.name=="txtNombre")
        var mensaje="Ingrese con mayúsculas su nombre";
    if (control.name=="txtApellido")
        var mensaje="Ingrese con mayúsculas su apellido";
    if (control.name=="chkCasado")
        var mensaje="Presione el cuadro para seleccionar o deseleccionar";    
    h3.innerHTML=mensaje;
}
function cargarAyudaNombre(){
    var h3=document.getElementById("h3ayuda");
    h3.innerHTML="Ingrese con mayúsculas su Nombre";
}
function cargarAyudaApellido(){
    var h3=document.getElementById("h3ayuda");
    h3.innerHTML="Ingrese con mayúsculas su Apellido";
}

function cargarAyudaEstadoCivil(){
    var h3=document.getElementById("h3ayuda");
    h3.innerHTML="Presione el cuadro para seleccionar o deseleccionar";
}

function preguntarNombreYApellido(){
    var nombre=prompt("Ingresa tu nombre:");
    var apellido=prompt("Ingresa tu apellido:");
    alert("Hola "+nombre+" "+apellido);
    alert(`Hola tu nombre es ${nombre} y tu apellido es ${apellido}`);
}
function ponerEnMayusculas(){
    var datosPersonales=document.getElementById("datos");
    datosPersonales.innerHTML="DATOS PERSONALES";
    datosPersonales.style.background="white";
}

function AgregarFila(){
    var tabla=document.getElementById("tabla");
    var nuevaFila='<tr><td>Ramirez</td><td>Rubén Alejandro</td><td>19</td><td>07</td><td>1976</td><td >Fco Romero 1823</td></tr>';
    tabla.innerHTML=tabla.innerHTML+nuevaFila;
}
