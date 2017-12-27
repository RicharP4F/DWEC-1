lista = [
  {nombre:"Bolita",
  especie:"perro",
  edad:0.5,
  foto:"https://i.imgflip.com/mg5gp.jpg",
  info:"Bolita es un perro extremadamente violento. Lo metieron a una secadora y desde entonces está resentido. Si no dedicas tiempo a peinarle a mano, te morderá"},
  {nombre:"Bigotes",
  especie:"gato",
  edad:1.25,
  foto:"https://www.anipedia.net/imagenes/caracteristicas-generales-de-los-gatos.jpg",
  info:"Es un gato muy tranquilo que está todo el día durmiendo y que te ayudará a hacer los deberes de inglés"},
  {nombre:"Mestre tortuga",
  especie:"tortuga",
  edad:250,
  foto:"https://www.mundomascota.net/wp-content/uploads/2016/06/Tortuga-de-tierra.jpeg",
  info:"El mestre tortuga se pone melancólico cuando llueve pero se ha sacado los ciclos formativos de DAW, ASIR y DAM por lo que te ayudará a programar javascript"},
  {nombre:"Phyton",
  especie:"perro",
  edad:5,
  foto:"http://www.fotoshumor.com/carpeta/1/original/65341491897215-Perro-nerd.jpg",
  info:"Phyton es una perra que programa en Phyton, Javascript, C++, CSS, Bootstrap, Symphony, etc. Es imprescindible que tenga acceso a Internet y 3 cafés diarios."},
  {nombre:"Oso",
  especie:"perro",
  edad:3,
  foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRed0TDZ8GK8Un5XK0jHuKfERYPBA3I7qigWgHg8JfHDU8sGe07yA",
  info:"Oso es tu compañero ideal para pisos de ciudad. Es un perro que no come nada, que ocupa poco espacio y que no tira nada de pelo"},
  {nombre:"Rayitas",
  especie:"gato",
  edad:1,
  foto:"http://www.petvale.com.br/imagens/gato_lingua_de_fora.jpg",
  info:"Rayitas es un gato simpático que está siempre contento y enseñando la lengua por lo que bebe mucha agua"}
];

function Animal(nombre, especie, edad, foto, info){
  this.nombre = nombre;
  this.especie = especie;
  this.edad = edad;
  this.foto = foto;
  this.info = info;
}

var Dori = new Animal("Dori", "pez", 30, "https://www.nauticalnewstoday.com/wp-content/uploads/2016/06/pez-cirujano-2.jpg","Dori es un pez que sólo se acuerda de que no se acuerda de nada por lo que no te dará trabajo");
console.log(Dori);
lista.push(Dori);

console.log(lista);