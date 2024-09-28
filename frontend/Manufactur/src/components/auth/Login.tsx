import { useState } from 'react';
import { Container, TextField, Button, Typography, Alert, Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch('../../backend/public/validateLogin.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          if (data.role === 'admin') {
            window.location.href = '/admin-dashboard';
          } else {
            window.location.href = '/client-dashboard';
          }
        } else {
          setErrorMessage('Credenciales incorrectas');
        }
      })
      .catch(() => setErrorMessage('Ocurrió un error al iniciar sesión.'));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      {/* Botón para regresar al Landing fuera del Paper */}
      <Box sx={{ position: 'absolute', top: 16, left: 16 }}>
        <Button component={Link} to="/" variant="outlined" color="primary">
          Volver al Inicio
        </Button>
      </Box>

      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            ManufacturPRO
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            Iniciar Sesión
          </Typography>
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              label="Correo Electrónico"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Contraseña"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Iniciar Sesión
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
