<?php
require_once 'conexion.php';
require_once './vendor/autoload.php';
require_once 'secrets.php';


\Stripe\Stripe::setApiKey($stripeSecretKey);
header('Content-Type: application/json');

$YOUR_DOMAIN = 'http://localhost:4200';
$data='';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = json_decode(file_get_contents("php://input"), true);
}
$articulo = isset($data['articulo'])?$data['articulo']:'';

$checkout_session = \Stripe\Checkout\Session::create([
  'line_items' => [
    [
      'price_data' => [
        'currency' => 'bob',
        'product_data' => [
          'name' => $articulo['Nombre'],
          'description'=>$articulo['Descripcion']
      ],
        'unit_amount' => $articulo['PrecioUnitario']*100,
        'tax_behavior' => 'exclusive',
      ],
      'adjustable_quantity' => [
        'enabled' => true,
        'minimum' => 1,
        'maximum' => 10,
      ],
      'quantity' => 1,
    ],
  ],
  'mode' => 'payment',
  'success_url' => $YOUR_DOMAIN . '/home',
  'cancel_url' => $YOUR_DOMAIN . '/home',
]);

// header("HTTP/1.1 303 See Other");
// header("Location: " . $checkout_session->url);
echo json_encode(['sessionId' => $checkout_session->id]);
// try {
//   // Crea una sesión en Stripe para el pago
//   $checkout_session = \Stripe\Checkout\Session::create([
//     'payment_method_types' => ['card'],
//     'line_items' => [
//       [
//         'price_data' => [
//           'currency' => 'usd',
//           'product_data' => [
//             'name' => 'Producto de ejemplo', // Nombre del producto
//           ],
//           'unit_amount' => 1999, // Monto en centavos (ejemplo: $19.99 USD)
//         ],
//         'quantity' => 1, // Cantidad de productos
//       ],
//     ],
//     'mode' => 'payment',
//     'success_url' => 'https://tu-sitio.com/pago-exitoso',
//     'cancel_url' => 'https://tu-sitio.com/pago-cancelado',
//   ]);

//   echo json_encode(['sessionId' => $checkout_session->id]);
// } catch (\Exception $e) {
//   echo json_encode(['error' => $e->getMessage()]);
// }
?>