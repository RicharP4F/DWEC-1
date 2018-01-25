<?php header("Access-Control-Allow-Origin: *");

// obtener los parámetros de la URL
$art = $_REQUEST["articulo"];
$mod = $_REQUEST["modelo"];

if(($art == "pantalon" || $art=="camisa" || $art=="camiseta")&&($mod =="liso" || $mod=="estampado")){
	$modelo = $art." ".$mod;
	$pvp = rand(10, 50);
	$foto = 'modaHombre'.$art.$mod.".jpg";
	echo ('{"modelo":"'.$modelo.'", "pvp":'.$pvp.', "foto":"'.$foto.'"}');
}else{
	echo("{}");
}

?>
