//función auxiliar
function obtenerImporte(total, n){
  return total + n.precio;
}

function Usuario(compra){
  this.id = Math.floor(Math.random()*1000) + 1;
  this.idioma = navigator.language;
  this.navegador = navigator.userAgent;

  this.importe = 0;
  this.compra = compra;

  this.eliminarCompra = function(){
    this.compra.pop();
  }
  this.calcularImporte = function(){
    this.importe = this.compra.reduce(obtenerImporte, 0);
    this.importe = this.importe.toFixed(2);
    return this.importe;
  }
  this.mostrarCompra = function(){
    cuerpo.innerHTML = "";
    var str = "";
    for (var i = 0; i < this.compra.length; i++) {
      str += "<div>";
      // console.log(this.productos[i].foto);
      str += "<img src='" + this.compra[i].foto + "' alt ='";
      str += this.compra[i].nombre + "'/>";
      str += "<p>" + this.compra[i].nombre + "</p>";
      str += "<p>" + this.compra[i].descripcion + "</p>";
      str += "<p><b>" + this.compra[i].precio + "€ </b></p>";
      str += "</div>";
    }
    str +="<hr>"
    str +="El importe de la compra es: ";
    str +="<b>" + this.importe + "€ </b>"
    cuerpo.innerHTML = str;
  }
}
