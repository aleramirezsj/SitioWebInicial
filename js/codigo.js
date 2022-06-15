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
