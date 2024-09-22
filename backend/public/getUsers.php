<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include '../config/database.php';

$sql = "SELECT user_id, nombre, correo_electronico, rol FROM Usuario";
$result = $conn->query($sql);
$usuarios = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $usuarios[] = $row;
    }
}

echo json_encode($usuarios);
$conn->close();
?>
