<?php header("Access-Control-Allow-Origin: *");

// obtenemos el parámetro q de la URL
$continente = $_REQUEST["continente"];

switch ($continente) {
  case 'africa':
    $a = array("Algeria", "Angola", "Benin", "...");
    break;
  case 'asia':
    $a = array("Afghanistan", "Bahrain", "Bangladesh", "...");
    break;
  case 'south-america':
    $a = array("Argentina", "Bolivia", "Brasil", "...");
    break;
  case 'north-america':
    $a = array("Antigua and Barbuda", "Bahamas", "Barbados", "...");
    break;
  case 'europe':
    $a = array("Albania", "Andorra", "Armenia", "...");
    break;
  case 'oceania':
    $a = array("Australia", "Fiji", "Kiribati", "...");
    break;
  default:
    $a = "error";
    break;
}

header('Content-type: application/json');
echo json_encode($a);
?>
