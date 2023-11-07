import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Home = (props) => {
  const navigate = useNavigate();
  return (
    <Grid
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid item xs={12}>
        <Stack spacing={2} direction="column">
          <Button
            variant="contained"
            fullWidth
            color="success"
            onClick={() => navigate('/login')}
          >
            Existing User
          </Button>
          <Button
            variant="contained"
            fullWidth
            color="info"
            onClick={() => navigate('/register')}
          >
            Register User
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Home;
