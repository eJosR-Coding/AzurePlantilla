<?php
include '../config/database.php';
include '../controllers/AuthController.php';

$data = json_decode(file_get_contents("php://input"), true);

$email = $data['email'];
$password = $data['password'];

$auth = new AuthController();
$result = $auth->login($email, $password);

if ($result['success']) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => $result['message']]);
}
?>
