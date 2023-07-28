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
function getCarrito() {
    $id = $_GET['id'];
    global $conn;
    $sql = "SELECT a.Nombre AS articulo, ca.Cantidad_articulo
            FROM Cliente c, Articulo a, Carrito ca
            WHERE ca.id_cliente = c.Id AND ca.id_articulo = a.Id AND c.id = '$id'";
    $resultado = mysqli_query($conn, $sql);
    $resultados_array = array();
    while ($fila = mysqli_fetch_assoc($resultado)) {
        $resultados_array[] = $fila;
    }
    echo json_encode($resultados_array);
}
?>
