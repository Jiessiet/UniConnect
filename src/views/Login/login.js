import React from "react";
import loginImage from "./loginImage.svg";
import background from "./greenbg.jpg"
import { Button, Grid, Paper, Avatar, Typography, Box, TextField, Link} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

export class login extends React.Component {

render() {
    return(  
    <Grid 
        container component="main" 
        spacing={0}
        padding = '0px'
        padding-left='0px'
        direction="row"
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
                <img src={loginImage}/>
            </Grid>
            <Grid item xs={5}>
                <Box sx={{alignItems: 'center'}}/>                  
                    {/* <Avatar sx={{}}>
                        <LoginIcon />
                    </Avatar> */}
                    <Typography component = "h1" align= 'right' variant = 'h3' fontFamily= 'revert' fontSize = '50px' marginRight = '10px' > Welcome Back to
                    <em><b> UniConnect</b></em>! </Typography>
                    <form spacing={2}> 
                        <TextField fullWidth label='Username' margin = 'normal' placeholder='Enter Username'/>
                        <TextField fullWidth label='Password' marginBottom = 'normal' placeholder='Enter Password'/>
                    </form>
                    <Box className="footer" alignItems='center'/>
                        <Button type = 'submit' variant="contained" href= '/timeline' mt='2' background='green' sx={{mt: 2, background:'green'}}>Login</Button>
            </Grid>
            <Grid container direction='row' alignItems='flex-end' justifyContent='flex-end' padding='0' sx={{mt: 0, mb: 4, mr: 5, ml: 5}}>
                <Grid xs={6}> </Grid>
                <Grid item xs>
                <Link href="/forgotpassword" variant="body2" color="#1fc449">
                    Forgot password?
                </Link>
                </Grid>
                <Grid item>
                <Link href="/signup" variant="body2" color="#1fc449">
                    {"Don't have an account? Sign Up"}
                </Link>
                </Grid>
            </Grid>
        </Grid>
    </Grid>)
    }
}

 export default login