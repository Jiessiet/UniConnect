import React from "react";
import loginImage from "./loginImage.svg";
import background from "./greenbg.jpg"
import { Button, Grid, Paper, Avatar, Typography, Box, TextField} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

export class login extends React.Component {

render() {
    return(  
    <Grid 
        container component="main" 
        spacing={0}
        padding = '0px'
        padding-left='0px'
        direction="column"
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
            <Grid item xs={6}>
                <img src={loginImage}/>
            </Grid>
            <Grid item xs={5}>
                <Box sx={{alignItems: 'center'}}/>                  
                    {/* <Avatar sx={{}}>
                        <LoginIcon />
                    </Avatar> */}
                    <Typography component = "h1" variant = 'h3' marginBottom = '0px' > Welcome Back to
                    UniConnect! </Typography>
                    <form spacing={2}> 
                        <TextField fullWidth label='Username' margin = 'normal' placeholder='Enter Username'/>
                        <TextField fullWidth label='Password' marginBottom = 'normal' placeholder='Enter Password'/>
                    </form>
                    <Box className="footer"/>
                        <Button variant="contained" sx={{mt: 1, background:'green'}}>Login</Button>
            </Grid>
        </Grid>
    </Grid>)
    }
}

 export default login