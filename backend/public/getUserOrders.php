<?php
session_start();
include '../config/database.php';

// Verifica que el usuario esté logueado
if (!isset($_SESSION['user_id'])) {
    echo json_encode([]); // Devolver un array vacío si no hay usuario logueado
    exit();
}

$userId = $_SESSION['user_id'];

// Consulta para obtener los registros de producción asociados al usuario actual
$sql = "SELECT production_id, fecha_produccion, cantidad_producida, producto_id FROM Produccion WHERE usuario_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $userId);
$stmt->execute();
$result = $stmt->get_result();

$producciones = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $producciones[] = $row;
    }
}

echo json_encode($producciones);
$stmt->close();
$conn->close();
?>
