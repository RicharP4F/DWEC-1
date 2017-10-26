
var v = window.open("","","height=200,width=200");

/* Location */

//Cargar un contenido
function cargar(){
  v.location.assign("https://www.w3schools.com/js/tryit.asp?filename=tryjs_loc_host");
}

//Partes de la url (carga el contenido con Browser-Sync)
console.log("Url: " + location.href);

console.log("Hostname de la url: " + location.hostname);

console.log("Querystring de la url: " + location.search);

console.log("Protocolo: " + location.protocol);

console.log("Hostname, protocolo y puerto: " + location.origin);

location.hash = "estoesunhash";

console.log("Hash: " + location.hash);

//Recargar
function recargar(){
  location.reload();
}

//Navegamos a una ubicación
function navegar(){
  location.replace("locationYhistory2.html");
}

/* History */
function navegarAdelante(){
  history.forward();
  //es lo mismo que history.go(1);
}
