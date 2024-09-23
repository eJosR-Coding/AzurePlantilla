<?php
session_start();
include '../config/database.php';

// Verifica que el usuario esté logueado
if (!isset($_SESSION['user_id'])) {
    echo json_encode([]); // Devolver un array vacío si no hay usuario logueado
    exit();
}

$userId = $_SESSION['user_id'];

// Ajusta la consulta según la tabla correcta (en este caso, Venta)
$sql = "SELECT venta_id AS id, fecha_venta AS fecha, estado, total_venta AS total FROM Venta WHERE usuario_id = ?";
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
