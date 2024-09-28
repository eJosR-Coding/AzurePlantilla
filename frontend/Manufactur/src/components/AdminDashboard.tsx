import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Alert,
  Box,
  Paper,
} from '@mui/material';


interface User {
  user_id: number;
  nombre: string;
  correo_electronico: string;
  rol: string;
}

const AdminDashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch users on component mount
  useEffect(() => {
    fetch('http://localhost/backend/public/getUsers.php')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch(() => setErrorMessage('Error al cargar usuarios'));
  }, []);

  // Handle user deletion
  const handleDeleteUser = (userId: number) => {
    fetch('http://localhost/backend/public/deleteUser.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }), // match "userId" key expected by backend
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setUsers(users.filter((user) => user.user_id !== userId));
        } else {
          setErrorMessage('Error al eliminar usuario');
        }
      })
      .catch(() => setErrorMessage('Error al eliminar usuario'));
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
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h4" gutterBottom>
            Panel de Administración
          </Typography>
          <Typography variant="h6" gutterBottom>
            Usuarios Existentes
          </Typography>
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Correo Electrónico</TableCell>
                <TableCell>Rol</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.user_id}>
                  <TableCell>{user.nombre}</TableCell>
                  <TableCell>{user.correo_electronico}</TableCell>
                  <TableCell>{user.rol}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDeleteUser(user.user_id)}
                    >
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </Box>
  );
};

// En components/Admindashboard.tsx
export default function AdminDashboard() {
    return <div>Admin Dashboard</div>;
}

