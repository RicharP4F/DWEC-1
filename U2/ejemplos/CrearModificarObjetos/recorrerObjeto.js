
//Podemos recorrer el objeto atributo a atributo:
console.log(empresa);
console.log("El nombre de la empresa es: " + empresa.nombre);
console.log("El nombre de la empresa es: " + empresa["nombre"]);
console.log("El nombre del creador de la empresa es: "
  + empresa.ceo.nombre);
console.log("El color favorito de " + empresa.ceo.nombre +
" es "+ empresa.ceo.favColor);

//Podemos recorrer el objeto con for in:
for (var campo in empresa) {
  console.log(campo + ": " + empresa[campo]);
}




//¿Qué pasa si empleo for in en arrays?
var a = ["Uno", "Dos", "Tres"];
for (var i in a) {
  console.log("Elemento " + i + ": " + a[i]);
}
// Si añado propiedades al array también
// las muestra:
// Ejemplo
a.limiteInferior = 0;
a.limiteSuperior = 4;
for (var i in a) {
  console.log("Elemento " + i + ": " + a[i]);
}
for (var i = 0; i<a.length; i++) {
  console.log("Elemento " + i + ": " + a[i]);
}
// Conclusión: for in, mejor para objetos
// Más info: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/for...in
