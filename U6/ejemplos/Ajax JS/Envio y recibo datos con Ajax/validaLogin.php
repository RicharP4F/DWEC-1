<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
// Generar un número aleatorio
srand((double)microtime()*1000000);
$numeroAleatorio = rand(0, 10);
// Simular un falso retardo por la red y el servidor (entre 0 y 2 segundos)
sleep($numeroAleatorio % 2);
// El script devuelve aleatoriamente 1 o 0 para que la aplicación
// cliente pueda comprobar dos casos
echo ($numeroAleatorio % 2 == 0)? 1 : 0;
?>
