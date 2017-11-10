if (!navigator.cookieEnabled){
    alert("Es necesario que active las cookies para poder emplear la compra online");
}

var u = new Usuario(compra);
u.calcularImporte();
u.mostrarCompra();

function eliminar(){
  u.eliminarCompra();
  u.calcularImporte();
  u.mostrarCompra();
}

function hacerPedido(){
  if (u.compra.length == 0){
    alert('Debe tener algún artículo para hacer el pedido');
  }else{
    if (confirm("Debe aceptar las condiciones de compra para poder hacer el pedido")){
        location.assign("pedidoOK.html");
    }
  }
}

function condCompraOnline(){
  var v = window.open("","","height=500 width=500");
  v.document.write("<h1>Condiciones de la compra online</h1><p>bla bla bla</p>");
  v.document.write("<button onclick='window.close();'>Cerrar condiciones</button>");
}

function inicio(){
  location.assign("home.html")
}

function imprimir(){
  print();
}
