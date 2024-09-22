<?php
include '../config/database.php';
include '../controllers/AuthController.php';

session_start();

$data = json_decode(file_get_contents("php://input"), true);

$email = $data['email'];
$password = $data['password'];

$auth = new AuthController();
$result = $auth->login($email, $password);

if ($result['success']) {
    $_SESSION['user_id'] = $result['user_id'];
    $_SESSION['rol'] = $result['rol'];

    // Verificar el rol y redirigir al dashboard correspondiente
    if ($_SESSION['rol'] === 'admin') {
        echo json_encode(['success' => true, 'role' => 'admin']);
    } else {
        echo json_encode(['success' => true, 'role' => 'usuario']);
    }
} else {
    echo json_encode(['success' => false, 'message' => $result['message']]);
}
?>
