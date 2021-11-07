import React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


import LoyaltyIcon from '@mui/icons-material/Loyalty';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Dashboard = () => {
  //   classes = useStyles();
  return (
    <Container maxWidth='md' sx={{ mt: 12}}>
      <Grid container justify='space-between' spacing={3} mt={0}>
        <Grid item container xs={12} sm={7} spacing={3}>
          <Grid item container spacing={3} textAlign='center'>
            <Grid item xs={12} sm={5}>
              <Paper style={{ padding: '15' }}>
                <CardMedia
                  component='img'
                  height='200'
                  image='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
                  style={{marginBottom: 20}}
                />
                <Button fullWidth variant='contained' style={{ backgroundColor: '#099441' }} size='medium'>
                  Edit Profile
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Paper style={{ height: '100%' }}>
                <Typography variant='h5' pt={2} pb={2} color='#099441'>
                  STATS
                </Typography>
                <EqualizerIcon style={{fontSize:200}}/>
                <KeyboardArrowDownOutlinedIcon />
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} textAlign='center'>
            <Paper style={{ height: '100%' }}>
              <Button fullWidth style={{ color: '#099441', height: '100%', backgroundColor: '#eff5eb' }} variant='contained'>
                  Add tags
              </Button>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={5} style={{textAlign:'center', alignitems:'center'}}>
          <Paper style={{ height: '400px' }}>
            <Typography variant='h5' pt={2} color='#099441'>
              REPORT FEED
            </Typography>
            <Card style={{ width: '90%', margin: '20px auto', backgroundColor: '#eff5eb' }}>
                <CardContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
              <AccountCircleIcon style={{ marginRight: '1px' }} />
              <Typography>User 1928 has been reported</Typography>
              </CardContent>
            </Card>
            <Card style={{ width: '90%', margin: '20px auto', backgroundColor: '#eff5eb' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
              <AccountCircleIcon style={{ marginRight: '1px' }} />
              <Typography>User 1928 has been reported</Typography>
              </CardContent>
            </Card>
            <Card style={{ width: '90%', margin: '20px auto', backgroundColor: '#eff5eb' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
              <AccountCircleIcon style={{ marginRight: '1px' }} />
              <Typography>User 1928 has been reported</Typography>
              </CardContent>
            </Card>
            <KeyboardArrowDownOutlinedIcon style={{ marginTop: 30 }}/>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
