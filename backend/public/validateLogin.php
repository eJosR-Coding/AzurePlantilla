<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include '../config/database.php';
include '../controllers/AuthController.php';

$data = json_decode(file_get_contents("php://input"), true);

// Verificar si los datos están llegando correctamente
if (!$data || !isset($data['email']) || !isset($data['password'])) {
    echo json_encode(['success' => false, 'message' => 'Datos incompletos']);
    exit();
}

$email = $data['email'];
$password = $data['password'];

$auth = new AuthController();
$result = $auth->login($email, $password);

// Revisar el resultado del login
if ($result['success']) {
    // Redirigir según el rol del usuario
    echo json_encode(['success' => true, 'message' => 'Inicio de sesión exitoso', 'role' => $result['role']]);
} else {
    echo json_encode(['success' => false, 'message' => $result['message']]);
}
?>
