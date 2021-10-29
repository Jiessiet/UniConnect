import React from 'react'
import { Button, Grid, Paper, Avatar, Typography, Box, TextField, Link} from '@mui/material';
import { green } from '@mui/material/colors';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';

export class createEvent extends React.Component {

    render() {
    return ( 
    <Grid 
        container
        alignItems="center"
        justifyItems="center"
        style={{ minHeight: '100vh'}}
        sx={{
            // backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'}}>
        <Grid container 
            direction="column" 
            alignItems="center"
            // justifyItems='flex-end' 
            justifyContent='center'
            component={Paper} 
            elevation={6}
            variant = 'outlined'
            borderRadius= {16}
            padding= {0}
            xs={3}
            style = 
                {{ minHeight: '50vh', minWidth: '30vw', border: `3px solid ${green[200]}`, padding: '5vh'}}>
            <Grid container direction='column' alignItems='center'>  
                <Grid item xs={3}>               
                    <Avatar>
                        <AppRegistrationRoundedIcon style={{blockSize:'30px'}}/>
                    </Avatar>
                </Grid> 
                <Grid item xs={9}> 
                    <Typography component = "h1" variant = 'h3' marginTop='2vh' align='center'> Create your Event</Typography>
                </Grid> 
            </Grid>
            <Grid item align='center'>
            <Box
                component="form"
                spacing={5}
            >
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
                    <TextField 
                        label='Start Time' 
                        type='time' 
                        margin = 'normal' 
                        InputLabelProps = 
                            {{shrink: true}} 
                        placeholder='What time will you event start?'
                    />
                    <TextField 
                        label='End Time' 
                        type='time' 
                        margin = 'normal' 
                        InputLabelProps = 
                            {{shrink: true}} 
                        placeholder='What time will your event end?'
                    />
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
                        placeholder='How many people are allowed to sign up?'
                    />
                </Box>
                </Grid>
            <Grid item padding='0'>
                <Button 
                    type = 'submit' 
                    variant="outline" 
                    sx=
                        {{mt: 3, color: 'white', background:'green'}}>
                    Create
                </Button>
            </Grid> 
        </Grid>
    </Grid>)
    }
}
export default createEvent
