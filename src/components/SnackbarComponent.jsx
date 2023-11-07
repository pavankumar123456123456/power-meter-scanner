import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarComponent({ open, setOpen, type }) {
  console.log(open, type, 'check');
  //   const [open, setOpen] = React.useState(true);

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
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        {type == 'error' ? (
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            something went wrong!
          </Alert>
        ) : type == 'conflict' ? (
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Duplicate Entry!
          </Alert>
        ) : (
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            Success!
          </Alert>
        )}
      </Snackbar>
    </Stack>
  );
}
