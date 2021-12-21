function iniciar(){/*iniciamos todas las funciones llamando a los elementos por su 
    ID, tambien creamos los eventos de reproducir(click) y la barra de estado(mover)*/
    maximo=600;/*se crea esta variable estableciendo el tiempo maximo del video, esto sirve para hacer operaciones*/
    medio=document.getElementById('medio');
    reproducir=document.getElementById('reproducir');
    barra=document.getElementById('barra');
    progreso=document.getElementById('progreso');

    reproducir.addEventListener('click', presionar, false);
    barra.addEventListener('click', mover,false );
}/*El click de reproducir fue llamado presionar, en esta funcion haremos que un boton tenga dos funcionalidades, las cuales son: reproducir y pausar. mediante una condicional if */
function presionar(){/*paused y ended son las propiedades mas conocidas del medio reproductor */
    if(!medio.paused && !medio.ended){
        medio.pause();
        reproducir.innerHTML='Reproducir';
        window.clearInterval(bucle);
    }else{
        medio.play();
        reproducir.innerHTML='pause';
        bucle=setInterval(estado, 1000);
    }
}
function estado(){/*con esta funcion sabremos en que tiempo se encuentra el video, mediante una condicional if la cual pregunta en que tiempo esta y lo calcula mediante una division de tiempo transcurrido * maximo(600) / medio.duration */
    if(!medio.ended){
        var total=parseInt(medio.currentTime*maximo/medio.duration);/*calcular el tamaño de la barra mediante estos 3 valores */
        progreso.style.width=total+'px';/*concatenamos el valor de la division y le adjuntamos pixeles */
    }else{
        progreso.style.width='0px';
        reproducir.innerHTML='Reproducir';
        window.clearInterval(bucle);
        }
}
function mover(e){
    if(!medio.paused && !medio.ended){
        var ratonX=e.pageX-barra.offsetLeft;
        var nuevoTiempo=ratonX*medio.duration/maximo;
        medio.currentTime=nuevoTiempo;
        progreso.style.width=ratonX+'px';
    }
}
window.addEventListener('load', iniciar, false);