import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { setAuthPopup } from 'redux/auth/actions';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('auth_token');
  const dispatch = useDispatch();

  if (token) {
    return children;
  }
  dispatch(setAuthPopup(true));
  return <Navigate to="/" />;
}

export default ProtectedRoute;
