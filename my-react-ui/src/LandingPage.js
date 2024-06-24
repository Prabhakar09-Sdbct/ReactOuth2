import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Hero from './components/Hero';
import getLPTheme from './components/getLPTheme';

export default function LandingPage({ mode }) {
  const LPtheme = createTheme(getLPTheme(mode));

  return (
    <ThemeProvider theme={ LPtheme }>
      <CssBaseline />
      <Hero />
      {/* <Box sx={{ bgcolor: 'background.default' }}>
        <Divider />
        <Footer />
      </Box> */}
    </ThemeProvider>
  );
}