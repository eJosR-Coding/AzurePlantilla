<?php
session_start();
include '../config/database.php';

// Verifica que el usuario esté logueado
if (!isset($_SESSION['user_id'])) {
    echo json_encode(['success' => false, 'message' => 'Usuario no autenticado']);
    exit();
}

$userId = $_SESSION['user_id'];

// Consulta para obtener los pedidos del usuario actual
$sql = "SELECT * FROM Pedidos WHERE usuario_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $userId);
$stmt->execute();
$result = $stmt->get_result();

$orders = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $orders[] = $row;
    }
}

echo json_encode($orders);
$stmt->close();
$conn->close();
?>
