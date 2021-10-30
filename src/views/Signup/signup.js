import React from 'react'
import background from "./greenbg.jpg"
import { Button, Grid, Paper, Avatar, Typography, Box, Icon, TextField, Link} from '@mui/material';
import { green } from '@mui/material/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export class signup extends React.Component {

    render() {
    return ( 
    <Grid 
        container
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh', minWidth: '100vw'}}
        sx={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'}}>
        <Grid container 
            direction="row" 
            alignItems="center" 
            component={Paper} 
            elevation={6}
            borderRadius= {16}
            padding= '0px'
            xs={6}>
        <Grid item xs={6} alignItems='flex-end' >
            {/* <img src={loginImage}/> */}
        </Grid>
        <Grid container 
            direction="column" 
            alignItems="center"
            justifyItems='center' 
            justifyContent='center'
            component={Paper} 
            elevation={6}
            variant = 'outlined'
            borderRadius= {16}
            padding= '0px'
            style={{ minHeight: '50vh', minWidth: '30vw', border: `3px solid ${green[200]}`, padding: '5vh'}}
            xs={4}>
            <Grid container direction='column' alignItems='center'>  
                {/* <Grid item xs={1}>               
                    <Icon>
                        <AccountCircleIcon sx={{ }} />
                    </Icon>
                </Grid>  */}
                <Grid item xs={9}> 
                    <Typography component = "h1" variant = 'h3' marginTop='2vh'> Sign
                    Up! </Typography>
                </Grid> 
            </Grid>
            <Grid item>
                <form> 
                    <TextField fullWidth label='Username' right-padding='5px' margin = 'normal' placeholder='Create your own unique username'/>
                    <TextField fullWidth label='Email' margin = 'normal' placeholder='Type your email'/>
                    <TextField fullWidth label='University' margin = 'normal' placeholder='Enter your University'/>
                    <TextField fullWidth label='Password' margin = 'normal' placeholder='Create a secure password'/>
                    <TextField fullWidth label='Password' margin = 'normal' placeholder='Retype your password'/>
                </form>
            </Grid>
            <Grid item padding='0'>
            <Button type = 'submit' variant="outline" sx={{mt: 1, color: 'white', background:'green'}}>Register</Button>
            </Grid> 
            <Grid item padding='0' sx={{mt: 5, mb: 0}}>
                <Link href="./login.js" variant="body2" color="#1fc449">
                    {"Already have an account? Log In"}
                </Link>
            </Grid>
        </Grid>
    </Grid>
    </Grid>)
    }
}
export default signup
