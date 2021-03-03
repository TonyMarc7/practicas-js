document.getElementById('player').addEventListener('click', sumarP);

score = 0;
tiempo = 40;
meta = 30;
function sumarP() {
    score++;
    document.querySelector('#score').innerHTML = "Puntos: " + score + "/" + meta;
    mover = Math.round(Math.random()*460);
    mover2 = Math.round(Math.random()*460);
    document.getElementById('player').style.marginTop =mover + 'px';
    document.getElementById('player').style.marginLeft =mover2 + 'px';
    if (score==30) {
        alert("Ganaste. Felicidades!");
        location.reload()
    }
}

function restarT() {
    tiempo--;
    document.getElementById('tiempo').innerHTML = "&nbsp;&nbsp; Tiempo: " + tiempo;
    if (tiempo==0) {
        alert("Perdiste, fuiste muy lento!");
        location.reload()
    }
}
setInterval(restarT, 1000)
alert('Dale click al Circulo!')