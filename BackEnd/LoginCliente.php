<?php
require_once ('Conexion.php');

function getCliente(){
    $data = json_decode(file_get_contents('php://input'), true);
    $usuario = $data['Usuario'];
    $contraseña = $data['Pass'];

    global $conn;
    $sql = "SELECT * FROM Cliente WHERE Usuario = '$usuario' AND Contraseña = '$contraseña'";
    $resultado = mysqli_query($conn, $sql);
    $resul = mysqli_fetch_assoc($resultado);
    echo json_encode($resul);
}
?>
