import React, { useState } from "react";
import { Button, Grid, Paper, Tooltip, Typography, Box, Icon, TextField, Link } from '@mui/material';
import { green } from '@mui/material/colors';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { IconButton } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import { useUser } from '../../../Contexts/UserContext';
import axios from '../../../api'
import { edit } from "../../../api/functions"


function EditUserProfile() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')
    const [university, setUniversity] = useState('')
    const [username, setUsername] = useState('')
    const [image, setImage] = useState(null)

    const handleValueChange = (event, setter) => {

        if(typeof event == 'undefined'){
            // event = currentUser
        }
        const value = event.target.value;

        setter(value)
    };

    const { currentUser, setCurrentUser } = useUser()

    function handleRegister(event) {
        event.preventDefault()

        if(password !== passwordAgain && typeof password !== 'undefined') {
            //TODO: not matching indicator
            return;
        }
        else if(typeof email == 'undefined'){
            email = currentUser.email
        }
        else if(typeof password == 'undefined'){
            password = currentUser.password
        }
        else if (typeof username == 'undefined'){
            username = currentUser.username
        }
        else if (typeof university == 'undefined'){
            university = currentUser.university            
        }

        edit(email, password, university, username, currentUser, setCurrentUser, image, currentUser._id)
        console.log(email)
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
            style={{ minHeight: '100vh', minWidth: '100vw' }}>
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
                                Edit Profile
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <form>
                            <Grid container direction='row' alignItems='center' justifyItems='center'>
                                <Grid item xs={10.25}>
                                    <TextField fullWidth label='Username' right-padding='5px' margin='normal' placeholder='Edit your username' value={username} onChange={(event) => {handleValueChange(event, setUsername)}} />
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
                            <TextField fullWidth label='Email' margin='normal' placeholder='Type your new email' value={email} onChange={(event) => {
                                if(typeof email !== 'undefined'){
                                    handleValueChange(event, setEmail)
                                }
                               
                                }}/>
                            <TextField fullWidth label='University' margin='normal' placeholder='Edit your University' value={university} onChange={(event) => {handleValueChange(event, setUniversity)}}  />
                            <TextField fullWidth label='Password' margin='normal' placeholder='Create a secure password' value={password} onChange={(event) => {handleValueChange(event, setPassword)}} />
                            <TextField fullWidth label='Password' margin='normal' placeholder='Retype your password' value={passwordAgain} onChange={(event) => {handleValueChange(event, setPasswordAgain)}} />
                        </form>
                    </Grid>
                    <Grid item padding='0'>
                        <Button type='submit'
                            variant="outline"
                            sx={{ mt: 1, color: 'white', background: 'green' }}
                            onClick={handleRegister}>
                            Edit
                        </Button>
                    </Grid>
                    <Grid item padding='0' sx={{ mt: 5, mb: 0 }}>
                        <Link href="./dashboard" variant="body2" color="#1fc449">
                            {"Return to dashboard without editing"}
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>)
}

export default EditUserProfile
