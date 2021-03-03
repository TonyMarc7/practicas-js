window.onload = function() {
    pantallita=document.getElementById('pantalla');
    document.onkeydown = teclado;
}
x='0';
xi=1;
coma=0;
ni=0;
op='no';

function numero(n) {
    if (x=='0' || xi==1) {
        pantallita.innerHTML=n;
        x=n;
        if (n=='.') {
            pantallita.innerHTML='0.';
            x=n; coma=1;
        }
    } else {
        if (n=='.' && coma==0) {
            pantallita.innerHTML+=n;
            x+=n; coma=1;
        }
    else if (n=='.' && coma==1) {}
        else {
            pantallita.innerHTML+=n;
            x+=n;
        }
    }    
    xi=0;
}

function operar(go) {
    igual()
    ni=x;
    op=go;
    xi=1;
}

function igual() {
    if(op=='no') {
        pantallita.innerHTML=x;
    } else {
        dat=ni+op+x;
        sol=eval(dat);
        pantallita.innerHTML=sol;
        x=sol;
        op='no';
        xi=1;
    }
}

function raiz() {
    x=Math.sqrt(x);
    pantallita.innerHTML=x;
    op='no';
    xi=1;
}

function porcent() {
    x=x/100;
    pantallita.innerHTML=x;
    igual();
    xi=1;
}

function inve() {
    nx=Number(x);
    nx=(1/nx);
    x=String(nx);
    pantallita.innerHTML=x;
    xi=1;
}

function borrar() {
    cifras=x.length;
    br=x.substr(cifras-1, cifras);
    x=x.substr(0, cifras-1);
    if (x=='') {x='0'};
    if (br=='.') {coma=0};
    pantallita.innerHTML=x;
}

function borradoParcial() {
    pantallita.innerHTML=0;
    x=0;
    coma=0;
}

function borradoTotal() {
    pantallita.innerHTML=0;
    x=0;
    coma=0;
    ni=0;
    op='no';
}

function teclado (elEvento) { 
    evento = elEvento || window.event;
    k=evento.keyCode;
    if (k>47 && k<58) { 
       p=k-48;
       p=String(p);
       numero(p);
       }	
    if (k>95 && k<106) {
       p=k-96;
       p=String(p);
       numero(p);
       }
    if (k==110 || k==190) {numero(".")};
    if (k==106) {operar('*')};
    if (k==107) {operar('+')};
    if (k==109) {operar('-')};
    if (k==111) {operar('/')};
    if (k==32 || k==13) {igual()} ;
    if (k==46) {borradoTotal()};
    if (k==8) {borrar()};
    if (k==36) {borradoParcial()};
    }