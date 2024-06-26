import Container from '@mui/material/Container';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import getLPTheme from '../components/getLPTheme';
import UserService from "../services/user.service";

export default function FAQ({mode}) {
  const LPtheme = createTheme(getLPTheme(mode));

  const handleSubmit = (event) => {
    event.preventDefault();
    UserService.getAdminBoard().then(
      response => {
        console.log("response",response.data);
      },
      error => {
      }
    );
    
  }

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <ThemeProvider theme={LPtheme}>
        <Container component="main" maxWidth="xs">

          <Box
            sx={{
              marginTop: 12,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >


            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>

        </Container>
      </ThemeProvider>
    </Container>
  );
}