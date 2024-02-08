import React from 'react';
import { Navigate } from 'react-router-dom';
import { decryptData } from '../utils/cryptoUtils';

function PrivateRoute({ children }) {
  let isLogged = false;
  const logged = localStorage.getItem('User');
  const objectUser = JSON.parse(logged);

  if (logged !== null) {
    const decryptUser = decryptData(objectUser);
    isLogged = decryptUser.logged;
  }

  if (!isLogged) {
    return <Navigate to='/signin' />;
  }
  return children;
}

export default PrivateRoute;
