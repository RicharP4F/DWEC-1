// Creamos un objeto con Object
var empresa = new Object();
empresa.nombre = "Facebook";
empresa.ceo = new Object();
empresa.ceo.nombre = "Mark";
empresa.ceo.favColor = "azul";

// //Consultamos los valores del objeto
// console.log(empresa);
// console.log("El nombre de la empresa es: " + empresa.nombre);
// console.log("El nombre de la empresa es: " + empresa["nombre"]);
// console.log("El nombre del creador de la empresa es: "
//   + empresa.ceo.nombre);




// // Creamos un objeto con un constructor
// function Empresa(nombre, nombreCEO, favColorCEO){
//   this.nombre = nombre;
//   this.ceo = new Object();
//   this.ceo.nombre = nombreCEO;
//   this.ceo.favColor = favColorCEO;
// }
// // var CocaCola = new Empresa("CocaCola","John","rojo");
// // console.log(CocaCola);
// // console.log("A " + CocaCola.ceo.nombre +
// //  " le gusta el color " + CocaCola.ceo.favColor );
