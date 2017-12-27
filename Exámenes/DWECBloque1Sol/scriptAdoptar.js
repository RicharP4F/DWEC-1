function recarga(){
  location.reload();
}

function inicio(){
  location.assign("home.html");
}

function indeciso(){
  var resp = confirm("Sentimos que estés indeciso. ¿Sigues interesado?");
  if (!resp){
    location.assign("home.html");
  }
}

function temporizador(){
  var n = window.setInterval(indeciso,20000);
}

function adoptar(){
  var nombre = document.getElementsByName("nombre")[0];
  var tel = document.getElementsByName("telefono")[0];
  if((nombre.value != "") && (tel.value != "")){
    location.assign("gracias.html");
  }
}

onload = function seleccionAdoptar(){
  //Genero el número random
  var n = Math.floor(Math.random()*lista.length);
  var adoptado = lista[n];
  console.log(adoptado);

  //Dibujo en la página
  var imagen = document.createElement("img");
  imagen.src = adoptado.foto;
  imagen.alt = adoptado.nombre;
  imagen.style.width = "300px";

  document.body.appendChild(imagen);
  var nombreP = document.createElement("p");
  var nombreTexto = document.createTextNode(adoptado.nombre);
  nombreP.appendChild(nombreTexto);
  nombreP.style.fontWeight = "bold";
  document.body.appendChild(nombreP);

  //lanzo el temporizador
  temporizador();

}
