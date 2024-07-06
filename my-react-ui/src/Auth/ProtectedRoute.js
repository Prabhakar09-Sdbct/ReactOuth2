import React, { useEffect, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from './AuthContext';

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { user, setUser, logOut } = useContext(AuthContext);

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));

    if (userDetails) {
      const decodedJwt = parseJwt(userDetails.token);

      if (decodedJwt && decodedJwt.exp * 1000 < Date.now()) {
        setUser(false);
        logOut();
      } else {
        setUser(true);
      }
    } else {
      setUser(false);
    }
  }, [location, logOut, setUser]);

  return user ? children : <Navigate to="/signIn" />;
};

export default ProtectedRoute;
