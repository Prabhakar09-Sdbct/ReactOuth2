import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import LandingPage from './LandingPage';
import AppAppBar from './components/AppAppBar';
import getLPTheme from './components/getLPTheme';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const [mode, setMode] = React.useState('light');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <Router>
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <Routes>
          <Route path="/" element={<LandingPage mode={mode}/>} />
          <Route path="/signIn" element={<SignIn mode={mode}/>} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;