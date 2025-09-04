import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const AuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      sessionStorage.setItem('token', token);
      navigate('/'); // Redirect to homepage after storing token
    } else {
      // Handle error or no token case
      navigate('/login');
    }
  }, [searchParams, navigate]);

  return <div>Loading...</div>; // You can show a spinner here
};

export default AuthCallback;