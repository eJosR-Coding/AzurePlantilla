<?php
// database.php - Configuración de la conexión a MySQL recuerda estoy tomando solo cliente por el momento ok?
$servername = "localhost";
$username = "root";  
$password = "tu_contraseña";  
$dbname = "mi_db";  

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión en caso funcione pes
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
