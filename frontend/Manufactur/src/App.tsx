import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importando React Router
import Landing from './components/Landing';
import AdminDashboard from './components/AdminDashboard'
import ClientDashboard from './components/ClientDashboard';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

// 1. Crea un tema personalizado (opcional, puedes usar `createTheme()` sin parámetros si no deseas personalizarlo)
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

// 2. Define tu componente `App`, envolviendo el contenido con `ThemeProvider`
const App = () => {
  return (
    // Proporciona el tema a través del `ThemeProvider`
    <ThemeProvider theme={theme}>
      {/* Envolvemos la aplicación en `Router` para manejar rutas */}
      <Router>
        {/* Define las rutas de tu aplicación */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/client-dashboard" element={<ClientDashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

// 3. Exporta tu componente `App`
export default App;
