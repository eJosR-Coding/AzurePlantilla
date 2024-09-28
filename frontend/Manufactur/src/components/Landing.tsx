import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom'; 

const Landing = () => {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden', backgroundColor: '#282c34' }}>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
        <Container maxWidth="xl"> {/* Ajustar el contenedor al tamaño máximo */}
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div">
              ManufacturPRO
            </Typography>
            <Box>
              {/* Añadir enlaces a las rutas de Login y Register */}
              <Button color="inherit" component={Link} to="/login" sx={{ marginRight: '1rem' }}>
                Iniciar Sesión
              </Button>
              <Button color="inherit" variant="outlined" component={Link} to="/register">
                Registrarse
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Header Section */}
      <Box
        sx={{
          textAlign: 'center',
          padding: '4rem 0',
          backgroundColor: '#1976d2',
          color: 'white',
          width: '100%',
        }}
      >
        <Typography variant="h2" gutterBottom>
          Bienvenido a ManufacturPRO
        </Typography>
        <Typography variant="h5">
          La plataforma líder para optimizar procesos en el sector manufacturero peruano.
        </Typography>
      </Box>

      {/* Mission Section */}
      <Container maxWidth="xl" sx={{ padding: '2rem 0', color: 'white' }}>
        <Box sx={{ textAlign: 'center', padding: '2rem 0', backgroundColor: '#333' }}>
          <Typography variant="h4" gutterBottom>
            Nuestra Misión
          </Typography>
          <Typography variant="body1">
            ManufacturPRO es una aplicación tecnológica diseñada para mejorar la eficiencia en la gestión de inventarios
            y optimizar procesos de producción en el sector manufacturero. Nuestra plataforma permite a las empresas peruanas
            integrar tecnología avanzada para aumentar la competitividad.
          </Typography>
        </Box>

        {/* Features Section */}
        <Box sx={{ padding: '2rem 0', color: 'white', textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Características Destacadas
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {['Gestión de Inventario', 'Análisis de Producción', 'Soporte 24/7'].map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ backgroundColor: '#444', color: 'white' }}>
                  <CardMedia
                    component="img"
                    alt="Imagen de característica"
                    height="140"
                    image="https://via.placeholder.com/140"
                  />
                  <CardContent>
                    <Typography variant="h6">{feature}</Typography>
                    <Typography variant="body2">
                      {index === 0 && 'Controla y optimiza el stock de tu empresa con nuestras herramientas de gestión en tiempo real.'}
                      {index === 1 && 'Realiza análisis detallados de tus procesos de producción para mejorar la eficiencia operativa.'}
                      {index === 2 && 'Nuestro equipo de soporte está disponible las 24 horas para ayudarte con cualquier problema.'}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Footer Section */}
      <Box sx={{ textAlign: 'center', padding: '1rem', backgroundColor: '#1976d2', color: 'white', width: '100%' }}>
        © 2024 ManufacturPRO - Todos los derechos reservados.
      </Box>
    </Box>
  );
};

export default Landing;
