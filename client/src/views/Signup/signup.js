import React, { useState } from "react";
import background from "./greenbg.jpg"
import { Button, Grid, Paper, Tooltip, Typography, Box, Icon, TextField, Link } from '@mui/material';
import { green } from '@mui/material/colors';
// import SignUpImg from './signupimg.svg'
import SignUpImg from './signupanimate.svg'
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { IconButton } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import { useUser } from '../../Contexts/UserContext';
import axios from '../../api'
import { signup } from "../../api/functions"





function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')
    const [university, setUniversity] = useState('')
    const [username, setUsername] = useState('')
    const [image, setImage] = useState(null)

    const handleValueChange = (event, setter) => {
        const value = event.target.value;

        setter(value)
    };

    const { setCurrentUser } = useUser()

    function handleRegister(event) {
        event.preventDefault()

        if(password !== passwordAgain) {
            //TODO: not matching indicator
            return;
        }
        signup(email, password, university, username, setCurrentUser, image)
    }

    const Input = styled('input')({
        display: 'none',
    });

    function photoHandler(event) {
        setImage(event.target.files[0])
    }

    return (
        <Grid
            container
            xs={4}
            lg={4}
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh', minWidth: '100vw' }}
            sx={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            <Grid container
                direction="row"
                alignItems="center"
                component={Paper}
                elevation={6}
                borderRadius={16}
                padding='0px'
                xs={7}
                mt='6vh'
            >
                {/* <Grid item xs={6} alignItems='flex-end' zIndex='800'> */}
                <img src={SignUpImg}
                    style={{
                        position: 'abolsute',
                        marginLeft: '-3vw',
                        marginRight: '-15vw',
                        maxHeight: 600
                    }} />
                {/* </Grid> */}
                <Grid container
                    direction="column"
                    alignItems="center"
                    justifyItems='center'
                    justifyContent='center'
                    component={Paper}
                    elevation={6}
                    variant='outlined'
                    borderRadius={16}
                    padding='0px'
                    marginRight='1vw'
                    // zIndex='1000'
                    style={{
                        maxHeight: '90vh', minWidth: '20vw', border: `3px solid ${green[200]}`,
                        padding: '5vh'
                    }}
                    xs={7}>
                    <Grid container direction='column' alignItems='center'>
                        <Grid item xs={9}>
                            <Typography component="h1" variant='h3' marginTop='2vh' fontFamily='revert' fontStyle='revert'>
                                Sign Up!
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <form>
                            <Grid container direction='row' alignItems='center' justifyItems='center'>
                                <Grid item xs={10.25}>
                                    <TextField fullWidth label='Username' right-padding='5px' margin='normal' required='true' placeholder='Create your own unique username' value={username} onChange={(event) => {handleValueChange(event, setUsername)}} />
                                </Grid>
                                <Grid item><label htmlFor="icon-button-file" xs={1}>
                                    <Input accept="image/*" id="icon-button-file" type="file" onChange={photoHandler}/>
                                    <Tooltip title='Upload your profile picture'>
                                        <IconButton color="green" component="span">
                                            <PhotoCamera background='green' />
                                        </IconButton>
                                    </Tooltip>
                                </label>
                                </Grid>
                            </Grid>
                            <TextField fullWidth label='Email' margin='normal' required='true' placeholder='Type your email' value={email} onChange={(event) => {handleValueChange(event, setEmail)}}/>
                            <TextField fullWidth label='University' required='true' margin='normal' placeholder='Enter your University' value={university} onChange={(event) => {handleValueChange(event, setUniversity)}}  />
                            <TextField fullWidth label='Password' required='true' margin='normal' placeholder='Create a secure password' value={password} onChange={(event) => {handleValueChange(event, setPassword)}} />
                            <TextField fullWidth label='Password' required='true' margin='normal' placeholder='Retype your password' value={passwordAgain} onChange={(event) => {handleValueChange(event, setPasswordAgain)}} />
                        </form>
                    </Grid>
                    <Grid item padding='0'>
                        <Button type='submit'
                            variant="outline"
                            sx={{ mt: 1, color: 'white', background: 'green' }}
                            onClick={handleRegister}>
                            Register
                        </Button>
                    </Grid>
                    <Grid item padding='0' sx={{ mt: 5, mb: 0 }}>
                        <Link href="./login" variant="body2" color="#1fc449">
                            {"Already have an account? Log In"}
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>)
}

export default Signup
