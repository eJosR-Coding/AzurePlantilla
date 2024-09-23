<?php
class AuthController {
    public function login($email, $password) {
        global $conn;

        $sql = "SELECT * FROM Usuario WHERE correo_electronico = ? LIMIT 1";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows === 1) {
            $user = $result->fetch_assoc();
            // Verificar la contraseña encriptada
            if (password_verify($password, $user['password'])) {
                // Devolver los detalles del usuario incluyendo el rol
                return ['success' => true, 'user_id' => $user['user_id'], 'rol' => $user['rol']];
            } else {
                return ['success' => false, 'message' => 'Contraseña incorrecta'];
            }
        } else {
            return ['success' => false, 'message' => 'Usuario no encontrado'];
        }
    }
}


?>
