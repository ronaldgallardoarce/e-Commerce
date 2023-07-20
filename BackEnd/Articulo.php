<?php
require_once ('Conexion.php');
function getAll(){
global $conn;
$sql="Select * from Articulo";
$resultado = mysqli_query($conn, $sql);
$resul=[];
while($fila =mysqli_fetch_assoc($resultado)){
    $resul[]=$fila;
}
echo json_encode($resul);
}
function getImagenArticulo(){
    global $conn;
    $sql="select * from ImagenArticulo";
    $resultado = mysqli_query($conn, $sql);
    $resul =[];
    while($fila=mysqli_fetch_assoc($resultado)){
        $resul[]=$fila;
    }
    echo json_encode($resul);
}
?>