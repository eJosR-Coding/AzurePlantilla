<?php
include '../config/database.php';
include '../controllers/AuthController.php';

$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'];
$password = $data['password'];

$authController = new AuthController();
$response = $authController->login($email, $password);

// Devolver la respuesta en formato JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
