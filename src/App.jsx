import React from 'react';
import MainPage from './components/MainPage';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2c6a4a', // Dark green color
      light: '#4caf50', // Soft green
      dark: '#1b5e20', // Darker green
    },
    background: {
      default: '#0d2e24',
      paper: '#1d1d1d',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h6: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainPage />
    </ThemeProvider>
  );
};

export default App;
