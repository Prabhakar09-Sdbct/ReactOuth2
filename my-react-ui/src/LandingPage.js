import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as React from 'react';
import getLPTheme from './components/common/getLPTheme';
import { Container } from '@mui/material';

export default function LandingPage({ mode }) {
  const LPtheme = createTheme(getLPTheme(mode));

  return (
    <ThemeProvider theme={ LPtheme }>
      <CssBaseline />
      <Container
                id="testimonials"
                sx={{
                    pt: { xs: 6, sm: 16 },
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 3, sm: 6 },
                    minWidth: '100%'
                }}
            >
       <h4>Landing page</h4>
       </Container>
    </ThemeProvider>
  );
}