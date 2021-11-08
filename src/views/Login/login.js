import React, { useState } from "react";
import loginImage from "./loginImage.svg";
import background from "./greenbg.jpg"
import { Button, Grid, Paper, Avatar, Typography, Box, TextField, Link } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useUser } from "../../Contexts/UserContext";

const Login = () => {
    const { setCurrentUser } = useUser()

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleUserNameChange = event => {
        const value = event.target.value;

        setUserName(value)
    };

    const handlePasswordChange = event => {
        const value = event.target.value;

        setPassword(value)
    };

    const submitHandler = (event) => {
        event.preventDefault()

        if (userName == 'admin' && password == 'admin') {
            window.localStorage.setItem('userType', 'admin')
            setCurrentUser((currentUser) => { return { ...currentUser, type: 'admin' } })
        }
        else if (userName == 'user' && password == 'user') {
            window.localStorage.setItem('userType', 'user')
            setCurrentUser((currentUser) => { return { ...currentUser, type: 'user' } })
        }
        else {
            setPassword('')
            setUserName('')
        }
    }

    return (
        <Grid
            container component="main"
            spacing={0}
            padding='0px'
            padding-left='0px'
            direction="row"
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
                xs={6}>
                <Grid
                    item
                    xs={6}
                    alignItems='flex-end' >
                    <img src={loginImage} />
                </Grid>
                <Grid
                    item
                    xs={5}>
                    <Grid
                        item
                        sx={{ alignItems: 'center' }}>
                        <Typography
                            component="h1"
                            align='right'
                            variant='h3'
                            fontFamily='revert'
                            fontSize='40px'
                            marginRight='10px' >
                            Welcome Back to<em><b> UniConnect</b></em>!
                        </Typography>
                    </Grid>
                    <form spacing={2}>
                        <TextField
                            fullWidth
                            label='Username'
                            margin='normal'
                            placeholder='Enter Username'
                            value={userName}
                            onChange={handleUserNameChange} />
                        <TextField
                            fullWidth
                            label='Password'
                            marginBottom='normal'
                            placeholder='Enter Password'
                            value={password}
                            onChange={handlePasswordChange} />
                    </form>
                    <Grid
                        alignItems='center'
                        justifyItems='center'>
                        <Button
                            type='submit'
                            variant="contained"
                            // href= '/timeline'
                            onClick={submitHandler}
                            mt='2'
                            background='green'
                            sx={{
                                mt: 2,
                                background: 'green'
                            }}>
                            Login
                        </Button>
                    </Grid>
                    <Grid
                        container
                        direction='row'
                        alignItems='center'
                        justifyContent='center'
                        marginTop='4vh'>
                        <Grid item xs>
                            <Link
                                href="/ResetPassword"
                                variant="body2"
                                color="#1fc449"
                                fontSize='12px'>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link
                                href="/signup"
                                variant="body2"
                                color="#1fc449"
                                fontSize='12px'>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>)
}

export default Login