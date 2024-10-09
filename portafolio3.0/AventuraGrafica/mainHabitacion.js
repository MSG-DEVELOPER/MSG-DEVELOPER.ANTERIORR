const imagen = document.getElementById("imagen");
const areaTeclado = document.getElementById("areaTeclado");
const areaBoton = document.getElementById("areaBoton");
const areaPlanta = document.getElementById("areaPlanta");
const areaBiblio = document.getElementById("areaBiblio");



let encendido = false;


//******* 

areaTeclado.addEventListener("click", tocaTeclado);
areaBoton.addEventListener("click", tocaBoton);
areaPlanta.addEventListener("click" , tocarPlanta);
areaBiblio.addEventListener("click" , tocaBiblio);



//******* 

function animacionEntrada() {

    imagen.style.transition = "5s";
    imagen.style.opacity = 1;

}



function tocaTeclado() {
    if (encendido) {
        alert("ENCENDIDO! PERO ME PIDE UN PASSWORD , TIENE SENTIDO...");
        window.open("pc.html");

    } else {
        alert("EL PC ESTA APAGADO.PODRIA REVISAR SI HAY ALGO INTERESANTE DENTRO SI ESTUVIERA ENCENDIDO");
    }


}

function tocaBoton() {
    if (!encendido) {

        alert("ENCONTRÉ EL BOTON PARA ENCEDERLO. BINGO!");
        encendido=true;
    }
}

function tocarPlanta(){
    alert("VAYA , ES UN EJEMPLAR PEQUEÑO DEL ARBOL DE LA SANGRE DEL DRAGÓN");
}

function tocaBiblio(){
alert("LIBROS VIEJOS. PERO HAY UNO QUE ESTA DEL REVÉS...");
alert("...")
alert("ES DE BOTÁNICA , TIENE UN PUNTO DE PÁGINA ...")
alert("DICE: El árbol de la sangre del dragón ― Dracaena cinnabari― es una planta del archipiélago de SOCOTRA. Su imagen nos traslada a un mundo fantástico y espectacular. Se trata de una estructura en forma de sombrilla, cuya resina, llamada sangre de dragón, tiene una coloración roja y es utilizada en la medicina desde hace muchos años.")

}