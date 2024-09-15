<?php
// database.php - Configuración de la conexión a MySQL recuerda estoy tomando solo cliente por el momento ok?
$servername = "localhost";
$username = "root";  // Cambias por el usuario correcto de MySQL
$password = "tu_contraseña";  // Cambias por tu contraseña de MySQL
$dbname = "mi_base_datos";  // Cambias por el nombre de tu base de datos

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión en caso funcione pes
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
