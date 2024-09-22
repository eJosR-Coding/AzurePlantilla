<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include '../config/database.php';

$data = json_decode(file_get_contents("php://input"), true);
$userId = $data['userId'];

// Eliminar el usuario de la base de datos
$sql = "DELETE FROM Usuario WHERE user_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $userId);

if ($stmt->execute()) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Error al eliminar usuario']);
}

$stmt->close();
$conn->close();
?>
