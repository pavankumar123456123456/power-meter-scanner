import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page.</p>
      <Button variant="contained" onClick={() => navigate('/login')}>
        testing
      </Button>
    </div>
  );
};

export default Home;
