import { useState } from 'react';
import { Container, TextField, Button, Typography, Alert, Box, Paper, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { Link } from 'react-router-dom';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('cliente');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch('../../backend/public/registerUser.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, email, password, rol }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          window.location.href = '/login';
        } else {
          setErrorMessage('Error al registrar usuario');
        }
      })
      .catch(() => setErrorMessage('Ocurrió un error al registrar usuario.'));
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
            Registrar Nuevo Usuario
          </Typography>
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              margin="normal"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
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
            <FormControl fullWidth margin="normal">
              <InputLabel id="rol-label">Rol</InputLabel>
              <Select
                labelId="rol-label"
                value={rol}
                label="Rol"
                onChange={(e) => setRol(e.target.value)}
              >
                <MenuItem value="cliente">Cliente</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Registrar
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Register;
