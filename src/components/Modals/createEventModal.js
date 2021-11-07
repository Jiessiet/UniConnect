import React from "react";
import { Button, Grid, Paper, Avatar, Typography, Box, TextField, Link} from '@mui/material';
import { green } from '@mui/material/colors';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';


function Modal({handleClose}) {

  return (
    <Grid 
        container 
        xs={12}
        alignItems="center"
        justifyContent='center'
        marginTop = '10vh'
        sx={{
            minheight: '100vh', 
            minWidth: '100vw',
        }}>
        <Grid 
            container 
            direction="column" 
            alignItems="center"
            justifyItems='center' 
            justifyContent='center'
            component={Paper} 
            elevation={6}
            variant = 'outlined'
            borderRadius= {16}
            padding= {0}
            xs={3}
            style = {{ 
                minHeight: '30vh', 
                minWidth: '30vw', 
                border: `3px solid ${green[200]}`, 
                padding: '5vh', 
                margin: '2vh'}}>
                <Grid container direction='column' alignItems='center'>  
                    <Grid item xs={3}>               
                        <Avatar>
                            <AppRegistrationRoundedIcon style={{blockSize:'30px'}}/>
                        </Avatar>
                    </Grid> 
                    <Grid item xs={9}> 
                        <Typography 
                            component = "h1" 
                            variant = 'h3' 
                            marginTop='2vh' 
                            align='center'> 
                            Create your Event
                        </Typography>
                    </Grid> 
                </Grid>
                <Grid item align='center'>
                    <Box component="form">
                            <TextField 
                                fullWidth 
                                label='Event Title' 
                                right-padding='5px' 
                                margin = 'normal' 
                                placeholder='Name your event'
                            />
                            <TextField 
                                fullWidth 
                                label='Event Description' 
                                multiline='true' 
                                margin = 'normal' 
                                placeholder="Let other's know what your events about!"
                            />
                            <TextField 
                                fullWidth 
                                label='Date' 
                                type='date' 
                                margin = 'normal' 
                                InputLabelProps = 
                                    {{shrink: true}} 
                                placeholder='What day will you event happen?'
                            />
                            <Grid container direction='row'>
                                <Grid item xs={6}>
                                    <TextField 
                                        label='Start Time' 
                                        type='time' 
                                        margin = 'normal' 
                                        InputLabelProps = 
                                            {{shrink: true}} 
                                        placeholder='What time will you event start?'
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField 
                                        label='End Time' 
                                        type='time' 
                                        margin = 'normal' 
                                        InputLabelProps = 
                                            {{shrink: true}} 
                                        placeholder='What time will your event end?'
                                    />
                                </Grid>
                            </Grid>
                        <TextField 
                            fullWidth 
                            label='Tags' 
                            margin = 'normal' 
                            placeholder='Retype your password'
                        />
                        <TextField 
                            fullWidth 
                            label='Attendee Limit' 
                            type="number" 
                            margin = 'normal' 
                            placeholder='How many people are allowed to sign up?'/>
                    </Box>
                </Grid>
            <Grid item padding='0'>
                <Button 
                    type = 'submit' 
                    variant="outline" 
                    onClick={handleClose}
                    sx=
                        {{mt: 3, color: 'white', background:'green'}}>
                    Create
                </Button>
            </Grid> 
        </Grid>
    </Grid>                 
  );
}

export default Modal;