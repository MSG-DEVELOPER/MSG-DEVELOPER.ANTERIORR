const texto=document.getElementById("texto");
let passwordUsuario;

function compruebaPassword(){
passwordUsuario=texto.value.toLowerCase();

if(passwordUsuario=="socrota"){
    alert("✅");
    alert("FIN DE LA PARTE 1")
    alert("TRABAJANDO EN LA PARTE 2")
}else{
   alert("INCORRECTO")
   alert("El sistema se apagará por seguridad");
   alert("...");
   alert("..");
   alert(".");
    window.open("habitacion.html" , "_self");
}
}