<?php
// index.php
include '../controllers/ClienteController.php';

// Ejecutar el controlador de cliente
$controller = new ClienteController();
$controller->obtenerClientes();
?>
