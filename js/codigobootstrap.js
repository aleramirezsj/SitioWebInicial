var fila1=document.getElementById("fila1");
fila1.style.display = "none";
var fila2=document.getElementById("fila2");
fila2.style.display= "none";
var fila3=document.getElementById("fila3");
fila3.style.display= "none";

var itemAlumnos=document.getElementById("itemAlumnos");
itemAlumnos.onclick=MostrarAlumnos;

var itemCarrousel=document.getElementById("itemCarrousel");
itemCarrousel.onclick=MostrarCarrousel;

var itemAcordion=document.getElementById("itemAcordion");
itemAcordion.onclick=MostrarAcordion;

function MostrarAlumnos()
{
    var fila1=document.getElementById("fila1");
    fila1.style.display = "block";  
    var fila2=document.getElementById("fila2");
    fila2.style.display= "none";
    var fila3=document.getElementById("fila3");
    fila3.style.display= "none";      
}

function MostrarCarrousel()
{
    var fila1=document.getElementById("fila1");
    fila1.style.display = "none";  
    var fila2=document.getElementById("fila2");
    fila2.style.display= "block";
    var fila3=document.getElementById("fila3");
    fila3.style.display= "none";      
}

function MostrarAcordion()
{
    var fila1=document.getElementById("fila1");
    fila1.style.display = "none";  
    var fila2=document.getElementById("fila2");
    fila2.style.display= "none";
    var fila3=document.getElementById("fila3");
    fila3.style.display= "block";      
}
