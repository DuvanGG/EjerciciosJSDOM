var ContenedorDivs = document.getElementById('ContenedorDivs');
var contador = 1 ;

function CrearDiv(){
    var NuevoDiv= document.createElement("DIV");
    // var Contenido = document.createTextNode(contador);
    NuevoDiv.innerHTML = contador
    NuevoDiv.setAttribute("style", "background-color: red;");
    NuevoDiv.setAttribute("id", contador);
    // NuevoDiv.appendChild(Contenido);
    ContenedorDivs.appendChild(NuevoDiv);
    contador = contador + 1
}

   
function EliminarDiv(){
    while(ContenedorDivs.firstChild){
        ContenedorDivs.removeChild(ContenedorDivs.firstChild)
    }
}

function EliminarPar(){
    let primero = document.getElementsByTagName('div')
    // console.log(primero.length)
    for(i=1; i<primero.length; i++){
        if(primero[i].innerText %2 == 0){
            alert("Es par")
            console.log(primero[i].innerText)
            primero[i].remove()
        }
    }
}


function EliminarDivUser(){
    ParteEliminar = prompt("Ingresa la posicion del div que desea eliminar")
    var primero = document.getElementsByTagName('div')
    console.log(primero[1].innerText)
    for(i=1; i<primero.length; i++){
        if(primero[i].innerText == ParteEliminar){
            console.log(primero[i].innerText)
            console.log(ParteEliminar)
            primero[i].remove()
        }
        console.log(primero.length)
    }
}