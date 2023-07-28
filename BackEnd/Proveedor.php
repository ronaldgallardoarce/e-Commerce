<?php
require_once ('conexion.php');
function getAll(){
global $conn;
$sql="Select * from Proveedor";
$resultado = mysqli_query($conn, $sql);
$resul=[];
while($fila =mysqli_fetch_assoc($resultado)){
    $resul[]=$fila;
}
echo json_encode($resul);
}
?>