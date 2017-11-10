
//Funciones auxiliares:
function checkVegano(produ){
  return produ.vegano;
}

function ordenPrecioMas(prod1, prod2){
  return (prod1.precio - prod2.precio);
}

function ordenPrecioMenos(prod1, prod2){
  return (prod2.precio - prod1.precio);
}

function Surtido(productos){
  this.productos = productos;
  this.ordenPrecioMas = function(){
    return this.productos.sort(ordenPrecioMas);
  }
  this.ordenPrecioMenos = function(){
    return this.productos.sort(ordenPrecioMenos);
  }
  this.filtrarUbicacion = function(){
    return this.productos.filter(checkUbicacion);
  }
  this.filtrarVegano = function(){
    return this.productos.filter(checkVegano);
  }
  this.dibujaSurtido = function(produ){
    cuerpo.innerHTML = "";
    var str = "";
    if (produ){
      for (var i = 0; i < produ.length; i++) {
        str += "<div>";
        str += "<img src='" + produ[i].foto + "' alt = '";
        str += produ[i].nombre + "'/>";
        str += "<p>" + produ[i].nombre + "</p>";
        str += "<p>" + produ[i].descripcion + "</p>";
        str += "<p><b>" + produ[i].precio + "€ </b></p>";
        str += "</div>";
      }
    }else{
      for (var i = 0; i < this.productos.length; i++) {
        str += "<div>";
        // console.log(this.productos[i].foto);
        str += "<img src='" + this.productos[i].foto + "' alt ='";
        str += this.productos[i].nombre + "'/>";
        str += "<p>" + this.productos[i].nombre + "</p>";
        str += "<p>" + this.productos[i].descripcion + "</p>";
        str += "<p><b>" + this.productos[i].precio + "€ </b></p>";
        str += "</div>";
      }
    }
    cuerpo.innerHTML = str;
  }
}
