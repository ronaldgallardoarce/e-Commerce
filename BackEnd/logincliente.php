<?php
require_once ('conexion.php');

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
    $sql = "SELECT a.Nombre, ca.Cantidad_articulo
            FROM Cliente c, Articulo a, Carrito ca
            WHERE ca.id_cliente = c.Id AND ca.id_articulo = a.Id AND c.id = '$id'";
    $resultado = mysqli_query($conn, $sql);
    $resultados_array = array();
    while ($fila = mysqli_fetch_assoc($resultado)) {
        $resultados_array[] = $fila;
    }
    echo json_encode($resultados_array);
}
function postCarrito() {
    $data = json_decode(file_get_contents('php://input'), true);
    $id_cliente = $data['id_cliente'];
    $id_articulo = $data['id_articulo'];
    $stock = $data['stock'];

    global $conn;
    $sql = "INSERT INTO Carrito (id_cliente, id_articulo, Cantidad_articulo) VALUES ($id_cliente, $id_articulo, $stock)";
    $resultado = mysqli_query($conn, $sql);

    if ($resultado) {
        echo json_encode(array('success' => true));
    } else {
        echo json_encode(array('success' => false, 'error' => mysqli_error($conn)));
    }
}

?>
