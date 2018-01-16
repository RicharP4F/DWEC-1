<?php header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

// obtener los parámetros:
$us = $_POST["usuario"];
//echo $us;
$pass = $_POST["password"];
//echo $pass;

if(($us == "manuel" && $pass == "1234")){
	echo ('{"res":true, "token":5678}');
} elseif ($us == "manuel") {
	echo('{"res":false, "error":"El password introducido es incorrecto"}');
} else {
	echo('{"res":false, "error":"El usuario o password introducido es incorrecto"}');
}

?>
