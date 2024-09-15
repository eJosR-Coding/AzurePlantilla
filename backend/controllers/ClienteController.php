<?php
// ClienteController.php
include '../config/database.php';  // Incluye el archivo de conexión

class ClienteController {
    // Método para obtener todos los clientes
    public function obtenerClientes() {
        global $conn;
        $sql = "SELECT * FROM Cliente";  // Consulta para obtener todos los clientes
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo "ID: " . $row["customer_id"] . " - Nombre: " . $row["nombre"] . " - Correo: " . $row["correo_electronico"] . "<br>";
            }
        } else {
            echo "No se encontraron clientes.";
        }
    }
}

// Crear una instancia del controlador y ejecutar el método
$controller = new ClienteController();
$controller->obtenerClientes();
?>
