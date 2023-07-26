<?php
require_once ('Conexion.php');
function getAllArticulos(){
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

function getArticulo(){
    $id=$_GET['id'];
    global $conn;
    $sql="select * from Articulo where Id=$id";
    $resultado=mysqli_query($conn,$sql);
    $resul= mysqli_fetch_assoc($resultado);
    echo json_encode($resul);
}
?>