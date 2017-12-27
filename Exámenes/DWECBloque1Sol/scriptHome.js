var i = new Inventario(lista);
var listaOrden = i.ordenEdad();
i.dibujaAnimales(listaOrden);

function verGatos(){
  var listaGatos = i.filtrarGato();
  i.dibujaAnimales(listaGatos);
}

function verPerros(){
  var listaPerros = i.filtrarPerro();
  i.dibujaAnimales(listaPerros);
}

function verOtros(){
  var listaOtro = i.filtrarOtro();
  i.dibujaAnimales(listaOtro);
}

function recarga(){
  location.reload();
}

function condiciones(){
  var v = window.open("","","height=500 width=500");
  v.document.write("<h1>Condiciones de adopción en Protectora Juan de Garay</h1><p>La adopción en nuestra protectora es totalmente desinteresada. Obtenemos ingresos a través de donaciones anónimas y con la colaboración de voluntarios</p>");
  v.document.write("<button onclick='window.close();'>Cerrar condiciones</button>");
  v.document.write("<button onclick='window.print();'>Imprimir condiciones</button>");
}

function navegarAdoptar(){
  location.assign("adoptar.html");
}
