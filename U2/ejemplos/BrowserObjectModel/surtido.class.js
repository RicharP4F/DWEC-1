function Surtido(productos){
  this.productos = productos;
  this.dibujarSurtido = function(produ){
    cuerpo.innerHTML = "";
    var str = "";
    if (produ == undefined){
      for (var i = 0; i < this.productos.length; i++) {
        str += "<div>";
        str += "<img src='" + this.productos[i].foto + "' alt = '";
        str += this.productos[i].nombre + "'>";
        str += "<p>Producto: " + this.productos[i].nombre + "</p>";
        str += "<p>" + this.productos[i].descripcion + "</p>";
        str += "<p><b>" + this.productos[i].precio + "</b></p>";
        str += "</div>";
      }
      cuerpo.innerHTML = str;
    }
  }
}
