import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Alert,
  Box,
  Paper,
} from '@mui/material';

// Define the expected type of orders
interface Order {
  production_id: number;
  fecha_produccion: string;
  cantidad_producida: number;
  producto_id: number;
}

const ClientDashboard = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch orders on component mount
  useEffect(() => {
    fetch('http://localhost/backend/public/getUserOrders.php')
      .then((response) => response.json())
      .then((data: Order[]) => {
        if (Array.isArray(data)) {
          setOrders(data); // Set the orders state correctly
        } else {
          setErrorMessage('Datos de pedidos no válidos recibidos del servidor');
        }
      })
      .catch(() => setErrorMessage('Error al cargar pedidos'));
  }, []);

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
            Panel del Usuario
          </Typography>
          <Typography variant="h6" gutterBottom>
            Mis Pedidos
          </Typography>
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID Producción</TableCell>
                <TableCell>Fecha de Producción</TableCell>
                <TableCell>Cantidad Producida</TableCell>
                <TableCell>Producto ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <TableRow key={order.production_id}>
                    <TableCell>{order.production_id}</TableCell>
                    <TableCell>{order.fecha_produccion}</TableCell>
                    <TableCell>{order.cantidad_producida}</TableCell>
                    <TableCell>{order.producto_id}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    No se encontraron pedidos
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </Box>
  );
};

export default ClientDashboard;
