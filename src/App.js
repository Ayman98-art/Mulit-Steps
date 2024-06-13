import * as React from 'react';
import { Grid } from '@mui/material';
import MulitStepper from './components/Stepper';
import './App.css';

function App() {
return (
<>
  <Grid container spacing={0} direction="column" 
    alignItems="center" justifyContent="center" sx={{ minHeight: '100vh' }}>
    <Grid item xs={3} className="App">
      <MulitStepper />
    </Grid>
  </Grid>
  </>
);
}

export default App;
