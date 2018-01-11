<?php header("Access-Control-Allow-Origin: *");

// Array de provincias
$p = array("Álava", "Albacete", "Alicante", "Almería", "Asturias", "Ávila", "Badajoz", "Barcelona", "Burgos", "Cáceres", "Cádiz", "Cantabria", "Castellón", "Ciudad Real", "Córdoba", "Cuenca", "Gerona", "Granada", "Guadalajara", "Guipúzcoa", "Huelva", "Huesca", "Islas Baleares", "Jaén", "La Coruña", "La Rioja", "Las Palmas", "León", "Lérida", "Lugo", "Madrid", "Málaga", "Murcia", "Navarra", "Orense", "Palencia", "Pontevedra", "Salamanca", "Santa Cruz de Tenerife", "Segovia", "Sevilla", "Soria", "Tarragona", "Teruel", "Toledo", "Valencia", "Valladolid", "Vizcaya", "Zamora", "Zaragoza");

// obtenemos el parámetro q de la URL
$q = $_REQUEST["q"];

$pista = "";

// lookup all hints from array if $q is different from ""
if ($q !== "") {
    $q = strtolower($q);
    $len=strlen($q);
    foreach($p as $name) {
        if (stristr($q, substr($name, 0, $len))) {
            if ($pista === "") {
                $pista = $name;
            } else {
                $pista .= ", $name";
            }
        }
    }
}

// Output "no suggestion" if no hint was found or output correct values
echo $pista === "" ? "Sin sugerencias" : $pista;
?>
