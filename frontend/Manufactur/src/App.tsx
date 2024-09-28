import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
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
      <CssBaseline /> {/* Opcional para un reinicio de estilos global */}
      
      {/* Componente de Login */}
      <Login />
    </ThemeProvider>
  );
};

// 3. Exporta tu componente `App`
export default App;
