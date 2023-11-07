import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { base_url, login } from '../utils/urldata';

const Login = ({ open, setOpen, type, setType }) => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (mobile && password) {
      // submit the form here
      let body = {
        mobile_number: mobile,
        password: password,
      };
      let link = base_url + login;
      axios
        .post(link, body)
        .then(() => {})
        .catch(() => {})
        .finally(() => {});
    }
  };
  return (
    <>
      <Grid
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Grid item xs={12}>
          <form autoComplete="off" onSubmit={handleSubmit}>
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
    </>
  );
};

export default Login;
