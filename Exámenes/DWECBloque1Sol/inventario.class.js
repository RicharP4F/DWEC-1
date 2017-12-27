function Inventario(lista){
  this.animales = lista;
  this.dibujaAnimales = function(listado){
    cuerpo.innerHTML = "";
    var str = "";
    for (var i = 0; i < listado.length; i++){
      str += "<div>";
      str += "<img src='" + listado[i].foto + "' alt='";
      str += listado[i].nombre + "'/>";
      str += "<p><b>" + listado[i].nombre + "</b></p>";
      str += "<p><b> Edad:</b>" + listado[i].edad + "</p>";
      str += "<p><b> Más información: </b>" + listado[i].info + "</p>";
      str += "</div>";
    }
    cuerpo.innerHTML = str;
  }
}

Inventario.prototype.ordenEdad = function(){
    return this.animales.sort(function(el1, el2){
      return (el2.edad - el1.edad);
    });
}

Inventario.prototype.filtrarGato = function(){
    return this.animales.filter(function(el){
      return (el.especie == "gato");
    });
}

Inventario.prototype.filtrarPerro = function(){
    return this.animales.filter(function(el){
      return (el.especie == "perro");
    });
}

Inventario.prototype.filtrarOtro = function(){
    return this.animales.filter(function(el){
      return ((el.especie != "gato")&&(el.especie != "perro"));
    });
}
