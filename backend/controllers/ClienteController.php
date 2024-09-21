<?php
include '../config/database.php';

class ClienteController {
    public function obtenerClientes() {
        global $conn;
        $sql = "SELECT * FROM Cliente";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo "ID: " . $row["customer_id"] . " - Nombre: " . $row["nombre"] . " - Correo: " . $row["correo_electronico"] . "<br>";
            }
        } else {
            echo "No se encontraron clientes.";
        }
    }

    public function agregarCliente($nombre, $correo, $numero, $segmento) {
        global $conn;
        $sql = "INSERT INTO Cliente (nombre, correo_electronico, numero_contacto, segmento) VALUES (?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssss", $nombre, $correo, $numero, $segmento);
        $stmt->execute();
    }

    public function eliminarCliente($cliente_id) {
        global $conn;
        $sql = "DELETE FROM Cliente WHERE customer_id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $cliente_id);
        $stmt->execute();
    }
}
?>
