import React, { useState } from 'react';
import { TextField, FormControl, Button, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { base_url, register } from '../utils/urldata';

base_url;
const Register = ({ open, setOpen, type, setType }) => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [errors, setErrors] = React.useState([]);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    // navigate('/login');

    if (mobile && password && firstName && lastName && email) {
      // console.log(mobile, password, firstName, lastName, email);
      let body = {
        mobile_number: mobile,
        password,
        first_name: firstName,
        last_name: lastName,
        email,
        confirm_password: passwordConfirm,
      };

      let link = base_url + register;
      console.log(link);
      axios
        .post(link, body)
        .then((res) => {
          console.log(res);
          setType('noterror');
          setOpen(true);
          navigate('/login');
        })
        .catch((err) => {
          console.log(typeof err?.response?.data?.status, 'hello');
          if (err?.response?.data?.status === 409) {
            setOpen(true);
            setType('conflict');
          } else {
            setType('error');
            setErrors(Array(err?.response?.data?.errors));
          }
        })
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
              Register Form
            </h2>
            <TextField
              label="Mobile"
              onChange={(e) => setMobile(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="number"
              sx={{ mb: 3 }}
              fullWidth
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 10);
              }}
              value={mobile}
              error={
                errors[0]?.find((item) => item.path == 'mobile_number') ?? false
              }
              helperText={
                errors[0]?.filter((item) => item.path == 'mobile_number')[0]
                  ?.msg ?? ''
              }
            />
            <TextField
              label="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="text"
              sx={{ mb: 3 }}
              fullWidth
              value={firstName}
              error={
                errors[0]?.find((item) => item.path == 'first_name') ?? false
              }
              helperText={
                errors[0]?.filter((item) => item.path == 'first_name')[0]
                  ?.msg ?? ''
              }
            />
            <TextField
              label="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="text"
              sx={{ mb: 3 }}
              fullWidth
              value={lastName}
              error={
                errors[0]?.find((item) => item.path == 'last_name') ?? false
              }
              helperText={
                errors[0]?.filter((item) => item.path == 'last_name')[0]?.msg ??
                ''
              }
            />
            <TextField
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="email"
              sx={{ mb: 3 }}
              fullWidth
              value={email}
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
            <TextField
              label="confirm password"
              onChange={(e) => setPasswordConfirm(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="text"
              value={passwordConfirm}
              error={
                errors[0]?.find((item) => item.path == 'confirm_password') ??
                false
              }
              helperText={
                errors[0]?.filter((item) => item.path == 'confirm_password')[0]
                  ?.msg ?? ''
              }
              fullWidth
              sx={{ mb: 3 }}
            />
            <Button variant="contained" color="success" type="submit" fullWidth>
              Register
            </Button>
          </form>
        </Grid>
        <Grid item xs={12}>
          <small>
            Already have an account? <Link to="/login">Login here</Link>
          </small>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;
