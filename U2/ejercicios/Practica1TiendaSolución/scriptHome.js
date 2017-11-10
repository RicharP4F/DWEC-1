var p = new Surtido(productos);
p.dibujaSurtido();

function verPorPrecioMas(p){
  var pOrden = p.ordenPrecioMas();
  console.log(pOrden);
  p.dibujaSurtido(pOrden);
}

function verPorPrecioMenos(p){
  var pOrden = p.ordenPrecioMenos();
  console.log(pOrden);
  p.dibujaSurtido(pOrden);
}

function verVegano(){
  var pVega = p.filtrarVegano();
  p.dibujaSurtido(pVega);
}

function recarga(){
  location.reload();
}

function condCompraOnline(){
  var v = window.open("","","height=500 width=500");
  v.document.write("<h1>Condiciones de la compra online</h1><p>bla bla bla</p>");
  v.document.write("<button onclick='window.close();'>Cerrar condiciones</button>");
}

function navegarCarrito(){
  location.assign("carrito.html");
}
