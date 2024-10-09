//index.html , de escena calle

const cuadro1 = document.getElementById("cuadro1");
let texto1 = "COMO DETECTIVE OFICIAL REGISTRADO EN EL ROD, TE CONTACTAMOS PARA CONTRATARTE PARA EL CASO DEL SUICIDIO IMPOSIBLE.\n ESCRIBE TU NOMBRE REGISTRADO Y ACEPTA EL CONTRATO ELECTRONICO";
const textoCuadro1 = document.getElementById("textoCuadro1");
const text = document.getElementById("text");
const cuerpo = document.body;
const boton1 = document.getElementById("boton1");
const areaPuerta = document.getElementById("areaPuerta");

let i = 0;
let nombreUsuario = "";
let puedesClikar = false;


//*****************************



function preNombre() {
    setTimeout(nombre, 2000);
}

function nombre() {
    cuadro1.style.display = "block";
    setTimeout(pedirNombre, 1000);
}

function pedirNombre() {
    setTimeout(showLeter, 30);
}

function showLeter() {
    textoCuadro1.innerHTML += texto1[i];
    i++;

    if (i < texto1.length) {
        pedirNombre();
    }
}


function pedirNombreUsuario() {

    nombreUsuario = text.value;


    textoCuadro1.innerHTML = "";
    text.style.display = "none";
    boton1.style.display = "none";
    texto1 = `PERFECTO DETECTIVE ${nombreUsuario} , PUEDE EMPEZAR SU INVESTIGACION , ESTA ES SU CASA DE VERANO, PERO EL VERANO ANTERIOR A SU "SUICIDIO" NO TENEMOS CONSTANCIA QUE HAYA IDO.`


    i = 0;
    pedirNombre();

    setTimeout(quitaCuadro, 9000);

    function quitaCuadro() {
        cuadro1.style.display = "none";


    }

    cuerpo.style.cursor = "crosshair";
    puedesClikar = true;




}


//AQUI EMPÌEZA EL JUEGO CLICKABLE



areaPuerta.addEventListener("click", saludar);




function saludar() {


    if (puedesClikar) {
        window.open("habitacion.html" , "_self");
    }


}
