import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ p: 2 }} align='center' variant="h2" component="div" gutterbottom>
        Verify your email
      </Typography>
      <Typography align='center' variant="h5" gutterbottom>
        We sent an email to your account
      </Typography>
    </CardContent>
    <CardActions>
      <Button m={4} pt={3} size="large">Click to Resend</Button>
    </CardActions>
  </React.Fragment>
);

export default function AccountSetup() {
  return (
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
>
    <Box sx={{p:2, minWidth: 275, marginTop: 30}}>
      <Card variant="outlined">{card}</Card>
    </Box>
</Grid>
    
  );
}