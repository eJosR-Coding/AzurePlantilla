
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Login from './components/auth/Login';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Cambia el color principal si lo deseas
    },
    secondary: {
      main: '#dc004e', 
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Login />
    </ThemeProvider>
  );
};

export default App;
