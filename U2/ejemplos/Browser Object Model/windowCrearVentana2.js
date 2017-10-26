//Creamos una ventana
var v = window.open("", "Ventanita", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");

// Escribo en ventanita (v)
v.document.write('<html><head><title>Ventanita</title><link rel="stylesheet" type="text/css" href="estiloVentanita.css"></head><p>Soy ventanita</p><div></div><body>');

// El nombre que hemos dado no aparece en title pero se conserva
console.log(v.name);

//Funciones que permiten modificar la ventana creada:
function moveWindow(){
  v.moveTo(200,100);
}

function scrollWindow(){
  v.scrollTo(100,200);
}

function resizeWindow(){
  v.resizeTo(250,250);
}
