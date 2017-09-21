//********IF
/*Si la condición no se cumple (valor es false) no se ejecuta
el bloque{...} y el programa continúa ejecutando el resto de
instrucciones del script que haya por debajo.*/

// var mostrarMensaje = true;
//
// if(mostrarMensaje) {
//   console.log("Hola Mundo");
// }

/*El ejemplo se podría reescribir también como, utilizad la
que os sea más cómoda:*/

// var mostrarMensaje = true;
//
// if(mostrarMensaje == true) {
//   console.log("Hola Mundo");
// }




/*Los operadores AND y OR permiten encadenar varias condiciones
simples para construir condiciones complejas:*/
// var mostrarMensaje = true;
// var genero = "femenino";
// if (mostrarMensaje == true && genero=="femenino"){
//   console.log("Estimada Sra, ....");
// }

// var genero = "desconocido";
// if (genero == "desconocido" || genero=="masculino"){
//   console.log("Estimado Cliente, ....")
// }else{
//   console.log("Estimada Cliente, ....")
// }



/*Else y else if permiten encadenar condiciones*/

// var edad = 20;
// if(edad < 12) {
//   alert("Todavía eres muy pequeño");
// } else if(edad < 19) {
//   alert("Eres un adolescente");
// } else if(edad < 35) {
//   alert("Aun sigues siendo joven");
// } else {
//   alert("Piensa en cuidarte un poco más");
// }



//********SWITCH
/*Dentro del switch se definen todas las comparaciones que
se quieren realizar sobre el valor de la variable.*/
// var fruta = "manzana";
// switch (fruta) {
//   case "pera":
//     console.log("El precio de la pera es 1.40");
//     break;
//   case "melón":
//     console.log("El precio del melón es 1.99");
//     break;
//   case "manzana":
//     console.log("El precio de la manzana es 2.99");
//     break;
//   default:
//     console.log("Lo siento, no tenemos esa fruta");
// }
