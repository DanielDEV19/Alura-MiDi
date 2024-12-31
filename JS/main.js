function playSonido(IdElementoAudio){
    document.querySelector(IdElementoAudio).play();
}


const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < 9){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#sonido_${instrumento}`
    tecla.onclick = function (){
        playSonido(idAudio);
    };
    contador+=1;

    tecla.onkeydown = function(evento ){
        console.log(evento)
        if (evento.code === 'Space' ||  evento.code === 'Enter') {
            tecla.classList.add('activa');
        }else{
            tecla.classList.remove('activa');
        }

    }
}

