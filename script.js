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

