'use strict';

/* Screen */

console.log("Ancho pantalla: " + screen.width + "px");
console.log("Alto pantalla: " + screen.height + "px");

console.log("Ancho disponible: " + screen.availWidth + "px");
console.log("Alto disponible: " + screen.availHeight + "px");

console.log("Ancho ventana: " + window.outerWidth + "px");
console.log("Alto ventana: " + window.outerHeight + "px");

console.log("Ancho interno ventana: " + window.innerWidth);
console.log("Alto interno ventana: " + window.innerHeight);

/* Navigator */

//¿Qué sabemos del cliente?
console.log("User-agent del cliente: " + navigator.userAgent);

//Idioma que utiliza
console.log("Idioma que utiliza: " + navigator.language);

//Cookies
console.log("¿Cookies habilitadas en el navegador? " + navigator.cookieEnabled);

//Java
console.log("¿Java habilitado? " + navigator.javaEnabled());

function printPos(position) { // Sólo funciona en un servidor web mediante https!!
    console.log("Latitud: " + position.coords.latitude + ", Longitud: " + position.coords.longitude);
}
//Ubicación del cliente
console.log("Ubicación del cliente: ");
navigator.geolocation.getCurrentPosition(printPos);
