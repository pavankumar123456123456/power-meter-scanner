import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import User from './components/User';
import Home from './components/Home';
import SnackbarComponent from './components/SnackbarComponent';
import React from 'react';
function App() {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState('');

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home open={open} setOpen={setOpen} type={type} setType={setType} />
          }
        />
        <Route
          exact
          path="/register"
          element={
            <Register
              open={open}
              setOpen={setOpen}
              type={type}
              setType={setType}
            />
          }
        />
        <Route
          exact
          path="/login"
          element={
            <Login
              open={open}
              setOpen={setOpen}
              type={type}
              setType={setType}
            />
          }
        />
        <Route
          exact
          path="/user"
          element={
            <User open={open} setOpen={setOpen} type={type} setType={setType} />
          }
        />
      </Routes>

      <SnackbarComponent
        open={open}
        setOpen={setOpen}
        type={type}
        setType={setType}
        handleClick={handleClick}
        handleClose={handleClose}
      />
    </div>
  );
}

export default App;
