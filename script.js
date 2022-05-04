function desplegar() {
    if(document.getElementById("flexRadioDefault1").checked) {
        document.getElementById("lista").innerHTML=
        `
        <label for="item1">
            <input type="checkbox" id="item1">
            <span>1</span>
        </label>
        <br>
        <label for="item2">
            <input type="checkbox" id="item2">
            <span>2</span>
        </label>
        `;
    }
    else {
        document.getElementById("lista").innerHTML=` `;
    }
}
function apellido4(){
    let ape=document.getElementById("apellido").value;
    let sinEspacios=ape.replace(/ /g, "");
    if(ape.length>0 && sinEspacios.length>0){
        alert("Tu apellido es: "+ape.toUpperCase());
    }
}


function verificar() {
    let x=document.getElementById("email");
    let y=document.getElementById("boton");
    if(x.value.length===0){
       x.style.borderColor="red";
       y.disabled=true;
    }
    else{
        x.style.borderColor="green";
        y.disabled=false;
    }
}

function alertName() {
    let contenido=document.getElementById("nombre").value;
    let sinEspacios=contenido.replace(/ /g, "");
    if(contenido.length > 0 && sinEspacios.length > 0) {
        alert("Tu nombre es: "+contenido.toUpperCase());
    }
}

function validar1() {
    let cont=document.getElementById("contrasena");

    if(cont.value.length === 0) {
        cont.style.borderColor="red";
    }
    else {
        cont.style.borderColor="green";
    }
}

function validar2() {
    let cont=document.getElementById("contrasena");
    let confir=document.getElementById("contConfir");

    if(cont.value.length === 0 || confir.value.length === 0 || cont.value !== confir.value) {
        cont.style.borderColor="red";
        confir.style.borderColor="red";
    }
    else {
        cont.style.borderColor="green";
        confir.style.borderColor="green";
    }
}
