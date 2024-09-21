<?php
include '../config/database.php';

$data = json_decode(file_get_contents("php://input"), true);
$clientId = $data['clientId'];

$sql = "DELETE FROM Cliente WHERE customer_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $clientId);

if ($stmt->execute()) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Error al eliminar cliente']);
}
?>
