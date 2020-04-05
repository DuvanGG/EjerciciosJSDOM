var video = document.getElementById("video"); 

function Reproducir() { 
  video.play(); 
} 

function Pausar() { 
  video.pause(); 
} 

function Silenciar(){
    if(video.muted == false){
        video.muted = true;
    }else{
      video.muted = false;
    }
}


var contVol = 1
function BajarVol(){
  if(contVol <= 1){
    video.volume = contVol;
    contVol =contVol.toFixed(2) - 0.2;
  }
  if(contVol == 0){
    alert("Volumen al minimo");
    video.volume = 0;
  }
  console.log(contVol);
}


function SubirVol(){
  if(contVol <= 1){
    video.volume = contVol;
    contVol = contVol + 0.2;
  }
  if(contVol == 1){
    alert("volumen al maximo");
    video.volume = 1 ;
  }
  console.log(contVol);
}

var contAdel = 5
function Adelantar(){
  video.currentTime = contAdel;
  contAdel = contAdel + 5
  // tiempoactual = video.currentTime
  // console.log(tiempoactual)
  
}

function Atrasar(){
  video.currentTime = contAdel;
  contAdel = contAdel - 5
}