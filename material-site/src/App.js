import * as React from 'react';
import {Box, Button, Typography, TextField, ThemeProvider, createTheme} from '@mui/material';
import { Tokens } from './tokens';

const customTheme = createTheme({
  palette: {
    primary: {
      main: Tokens.PalettePrimaryMain,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Box component="form" textAlign="center">
        <img className="mb-4" src="/logo192.png" alt="" width="72" height="57" />
        <Box mb={2} mt={3}>
          <Typography component="h1" variant="h3">Please sign in</Typography>
        </Box>

        <TextField fullWidth id="email" label="Email address" variant="filled" />
        <TextField fullWidth id="email" label="Password" variant="filled" />
        <Box mb={2}>
          <Typography component="label">
            <input type="checkbox" value="remember-me" /> Remember me
          </Typography>
        </Box>
        <Box mb={6}>
          <Button size="large" variant="contained" fullWidth color="primary" type="submit">Sign in</Button>
        </Box>
        <Typography color="grey.800">© 2017–2022</Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
