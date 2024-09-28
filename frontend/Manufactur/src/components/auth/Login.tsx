import { useState, FormEvent } from 'react';
import { Container, TextField, Button, Typography, Box, Paper, Alert } from '@mui/material';

const Login = () => {
  // Estados locales para los inputs y el mensaje de error
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Manejar el envío del formulario
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Lógica para enviar los datos de inicio de sesión al servidor
    fetch('../../backend/public/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
      // Manejar la respuesta de la API
      if (data.success) {
        // Redirigir al usuario o mostrar un mensaje de éxito
      } else {
        // Mostrar el mensaje de error si no fue exitoso
        setErrorMessage(data.message || 'Error al iniciar sesión.');
      }
    })
    .catch(() => setErrorMessage('Ocurrió un error. Por favor, inténtalo de nuevo.'));
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          ManufacturPRO
        </Typography>
        <Typography variant="h6" component="h2" align="center" gutterBottom>
          Iniciar Sesión
        </Typography>

        {/* Mostrar mensaje de error si existe */}
        {errorMessage && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errorMessage}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Correo Electrónico"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Contraseña"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Iniciar Sesión
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
