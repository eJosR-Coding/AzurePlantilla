<?php
class UsuarioController {
    public function registrarUsuario($nombre, $correo, $password, $rol) {
        global $conn;
        $passwordHash = password_hash($password, PASSWORD_BCRYPT);
        $sql = "INSERT INTO Usuario (nombre, correo_electronico, contrasena, rol, fecha_registro) VALUES (?, ?, ?, ?, NOW())";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssss", $nombre, $correo, $passwordHash, $rol);
        $stmt->execute();
    }
}
?>
