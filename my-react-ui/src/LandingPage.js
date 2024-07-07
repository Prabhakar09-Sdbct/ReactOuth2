import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as React from 'react';
import getLPTheme from './components/common/getLPTheme';

export default function LandingPage({ mode }) {
  const LPtheme = createTheme(getLPTheme(mode));

  return (
    <ThemeProvider theme={ LPtheme }>
      <CssBaseline />
      
    </ThemeProvider>
  );
}