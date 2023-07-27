<?php
// Habilitar los encabezados CORS para permitir solicitudes desde cualquier origen
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");
// Conexión a la base de datos
$servername = 'nuevoestilotja.sicaabol.com:3306';
$username = 'u171106619_rootNEDB';
$password = 'Yanarico7221647_';
$dbname = 'u171106619_nuevoEstiloDB';
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Comprobación de la conexión
if (!$conn) {
    die("Error en la conexión a la base de datos: " . mysqli_connect_error());
}
// Obtener el nombre de la función desde la URL
$functionName = $_GET['function'] ?? '';

// Ejecutar la función correspondiente según el nombre
if (function_exists($functionName)) {
    call_user_func($functionName);
}
?>