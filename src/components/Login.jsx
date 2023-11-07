import React from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  const [mobile, setMobile] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <div>
      <Grid
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Grid item xs={12}>
          <form autoComplete="off" onSubmit={() => {}}>
            <h2
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
              }}
            >
              Login Form
            </h2>
            <TextField
              label="Mobile"
              onChange={(e) => setMobile(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="number"
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 10);
              }}
              sx={{ mb: 3 }}
              fullWidth
              value={mobile}
              // error={emailError}
            />
            <TextField
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="password"
              value={password}
              // error={passwordError}
              fullWidth
              sx={{ mb: 3 }}
            />
            <Button variant="contained" color="success" type="submit" fullWidth>
              Login
            </Button>
          </form>
        </Grid>
        <Grid item xs={12}>
          <small>
            Need an account? <Link to="/register">Register here</Link>
          </small>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
