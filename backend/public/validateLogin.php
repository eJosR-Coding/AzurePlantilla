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
    
    // Redirigir al dashboard dependiendo del rol
    if ($_SESSION['rol'] === 'admin') {
        header('Location: ../frontend/html/admin_dashboard.html');
    } else {
        header('Location: ../frontend/html/client_dashboard.html');
    }
    exit();
} else {
    echo json_encode(['success' => false, 'message' => $result['message']]);
}
?>
