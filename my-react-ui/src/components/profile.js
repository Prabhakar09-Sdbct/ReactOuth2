import { Box, Button, Container, Grid, Paper, TextField, Typography, alpha } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import React, { useEffect, useState } from 'react';
import getLPTheme from './common/getLPTheme';
import "./profile.css";
import Loader from './loader/loader';
import userService from '../services/user.service';
import { toast } from 'react-toastify';

export default function Profile({ mode }) {

  const LPtheme = createTheme(getLPTheme(mode));
  const [profile, setProfile] = useState([]);
  const { id, firstName, lastName, loginId, status, phone } = profile;
  const [showSpinner, setSpinner] = useState(false);


  const fetchTableData = async () => {
    setSpinner(true);
    try {
      const response = await userService.getUserByLoginId();
      setProfile(response.data.result.data);
    } catch (error) {
      console.error('Error Table Data receipts:', error);
    } finally {
      setSpinner(false);
    }
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: '20px',
    maxWidth: '800px',
    margin: '20px auto',
    backgroundColor: theme.palette.mode === 'dark' ? '#090E10' : '#ffffff',
    borderColor: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
    borderWidth: '2px',
    borderStyle: 'solid',
  }));

  return (
    <ThemeProvider theme={LPtheme}>
      <Box
        id="hero"
        sx={(theme) => ({
          width: '100%',
          backgroundImage:
            theme.palette.mode === 'light'
              ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
              : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
          backgroundSize: '100% 20%',
          backgroundRepeat: 'no-repeat',
        })}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
          }}
        >
          <Box textAlign="center" className="outer-box">
            <StyledPaper elevation={2} className="container" id="receipt-form">
              <Box textAlign="center" my={2}>
                <Typography variant="h5" color={mode === 'dark' ? '#text.secondary' : '#000'}>
                  PROFILE
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField type="number" id="id" name="id" placeholder="ID" className="outlined-input" InputProps={{
                    readOnly: true,
                  }} value={id} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField type="text" id="loginId" name="loginId" placeholder="Login ID" className="outlined-input"
                    value={loginId} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField type="text" id="firstName" name="firstName" placeholder="firstName" className="outlined-input"
                    value={firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField type="text" id="lastName" name="lastName" placeholder="lastName" className="outlined-input"
                    value={lastName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField type="text" id="status" name="status" placeholder="status" className="outlined-input"
                    value={status} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField type="text" id="phone" name="phone" placeholder="phone" className="outlined-input"
                    value={phone} />
                </Grid>
              </Grid>
            </StyledPaper>
            <Grid item xs={12} className="button-style" style={{ paddingBottom: '1em' }}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Box>
        </Container>
        {showSpinner && <Loader />}
      </Box>
    </ThemeProvider >
  );
}
