meses=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
lasemana=["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
diassemana=["lun", "mar", "mié", "jue", "vie", "sáb", "dom"];

window.onload = function() {
    hoy=new Date();
    diasemhoy=hoy.getDay();
    diahoy=hoy.getDate();
    meshoy=hoy.getMonth();
    añohoy=hoy.getFullYear();

tit=document.getElementById("titulos");
ant=document.getElementById("anterior");
pos=document.getElementById("posterior");
f0=document.getElementById("fila0");

pie=document.getElementById("fechaactual");
pie.innerHTML+=lasemana[diasemhoy]+", "+diahoy+" de "+meses[meshoy]+" de "+añohoy;
document.buscar.buscaaño=añohoy;

mescal = meshoy;
añocal = añohoy;
cabecera() 
primeralinea()
escribirdias()
}

function cabecera() {
    tit.innerHTML=meses[mescal]+" de "+añocal;
    mesant=mescal-1;
    mespos=mescal+1;
        if (mesant<0) {mesant=11;}
        if (mespos>11) {mespos=0;}
            ant.innerHTML=meses[mesant]
            pos.innerHTML=meses[mespos]
}

function primeralinea() {
    for (i=0; i<7; i++) {
        celda0=f0.getElementsByTagName("th")[i];
        celda0.innerHTML=diassemana[i]
    }
}

function escribirdias() {
    primeromes=new Date(añocal,mescal,"1")
    prsem=primeromes.getDay()
    prsem--;
    if (prsem==-1) {prsem=6;}
        diaprmes=primeromes.getDate() 
        prcelda=diaprmes-prsem;
        empezar=primeromes.setDate(prcelda)
        diames=new Date()
        diames.setTime(empezar);
    for (i=1;i<7;i++) { //localizar fila
            fila=document.getElementById("fila"+i);
        for (j=0;j<7;j++) {
            midia=diames.getDate() 
            mimes=diames.getMonth()
            miaño=diames.getFullYear()
            celda=fila.getElementsByTagName("td")[j];
            celda.innerHTML=midia;
            celda.style.backgroundColor="#9bf5ff";
            celda.style.color="#492736";
                if (j==6) { 
                    celda.style.color="#f11445";
                }
                if (mimes!=mescal) { 
                    celda.style.color="#a0babc";
                }
                if (mimes==meshoy && midia==diahoy && miaño==añohoy ) { 
                    celda.style.backgroundColor="#f0b19e";
                    celda.innerHTML="<cite title='Fecha Actual'>"+midia+"</cite>";
                }
            midia=midia+1;
            diames.setDate(midia);
        }
    }
}

function mesantes() {
    nuevomes=new Date();
    primeromes--;
    nuevomes.setTime(primeromes);
    mescal=nuevomes.getMonth();
    añocal=nuevomes.getFullYear();
    cabecera();
    escribirdias();
}

function mesdespues() {
    nuevomes=new Date();
    tiempounix=primeromes.getTime();
    tiempounix=tiempounix+(45*24*60*60*1000);
    nuevomes.setTime(tiempounix);
    mescal=nuevomes.getMonth();
    añocal=nuevomes.getFullYear();
    cabecera();
    escribirdias();
}

function mifecha() {
    miaño=document.buscar.buscaaño.value; 
    listameses=document.buscar.buscames;
    opciones=listameses.options;
    num=listameses.selectedIndex
    mimes=opciones[num].value;
    if (isNaN(miaño) || miaño<1) { 
       alert("El año no es válido:\n debe ser un número mayor que 0")
    } else {
        mife=new Date();
        mife.setMonth(mimes);
        mife.setFullYear(miaño);
        mescal=mife.getMonth();
        añocal=mife.getFullYear();
        cabecera()
        escribirdias()
    }
}