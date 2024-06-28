import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import LandingPage from './LandingPage';
import AppAppBar from './components/common/AppAppBar';
import getLPTheme from './components/common/getLPTheme';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CustomTable from './components/common/CustomTable';
import ProtectedRoute from './Auth/ProtectedRoute';
import { AuthProvider } from './Auth/AuthContext';

const App = () => {
  const [mode, setMode] = useState('light');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <Router>
        <AuthProvider>
          <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
          <Routes>
            <Route path="/" element={<ProtectedRoute> <LandingPage mode={mode} /> </ProtectedRoute>} />
            <Route path="/signIn" element={<SignIn mode={mode} />} />
            <Route path="/signUp" element={<SignUp mode={mode} />} />
            <Route path="/home" element={
              <ProtectedRoute>
                <CustomTable mode={mode} />
              </ProtectedRoute>
            } />
            <Route path="*" element={<Navigate to="/signIn" />} />
          </Routes>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
