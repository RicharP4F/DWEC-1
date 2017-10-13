// Creamos un objeto con un constructor
function Empresa(nombre, nombreCEO, favColorCEO){
  this.nombre = nombre;
  this.ceo = new Object();
  this.ceo.nombre = nombreCEO;
  this.ceo.favColor = favColorCEO;
}
var Google = new Empresa("Google","Larry y Sergei","Muchos: rojo, verde, azul y amarillo");

//Podemos cambiar el objeto después de crearlo
Google.sede = "California";
console.log(Google);


// //Modificamos el prototipo de Empresa.
// //Este cambio afecta a todos!
Empresa.prototype.tipo = "internacional";
Empresa.prototype.describe  = function(){
  alert(this.nombre + " es una empresa " + this.tipo + " fundada por " + this.ceo.nombre);
}
//console.log(Google);
//Google.describe();

// var Facebook = new Empresa("Facebook", "Mark", "Azul");
// console.log(Facebook.tipo);
// Facebook.describe();
