const listaDeTeclas = document.querySelectorAll('.tecla');


function playSonido(idAudio){
    document.querySelector(idAudio).play();
}

for(let contador = 0; contador < listaDeTeclas.length; contador ++){
    const tecla = listaDeTeclas[contador];
    const instrmento = tecla.classList[1];
    const idAudio = `#sonido_${instrmento}`
    
    tecla.onclick = function () {
        playSonido(idAudio);
    }; 

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('activa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('activa');
    }
}
