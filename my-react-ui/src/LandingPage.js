import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import getLPTheme from './components/common/getLPTheme';
import Home from './components/home';

export default function LandingPage({ mode }) {
  const LPtheme = createTheme(getLPTheme(mode));

  return (
    <ThemeProvider theme={ LPtheme }>
      <CssBaseline />
      
    </ThemeProvider>
  );
}