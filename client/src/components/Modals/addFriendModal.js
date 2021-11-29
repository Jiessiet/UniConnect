import React from 'react'
import { Icon, InputBase, Button, Alert, IconButton, Tooltip, Snackbar, Grid, Paper, Autocomplete, Avatar, Typography, Box, TextField, Link, SliderValueLabel } from '@mui/material';
import { green } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { HowToVoteRounded } from '@material-ui/icons';


function Modal({ handleClose }) {
    const handleClick = () => {
        if (true) {
            // check if input is a user who exists in the database
            // then redirect to that user's profile page using their id from the database
            window.location.href = "/AddFriend";
        } else {
            // if does not exist display failed snackbar component
        }
    };

    const Input = styled('input')({
        display: 'none',
    });

    return (
        <Grid
            container
            xs={12}
            alignItems="center"
            justifyContent='center'
            marginTop='10vh'
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
                variant='outlined'
                borderRadius={16}
                padding={0}
                xs={9}
                md={8}
                lg={3}
                style={{
                    minHeight: '30vh',
                    minWidth: '30vw',
                    border: `3px solid ${green[200]}`,
                    paddingLeft: '4vh',
                    paddingRight: '4vh',
                    paddingBottom: '4vh',
                    paddingTop: '2vh'
                }}>


                <Grid container direction='column' alignItems='center'>
                    <Grid container direction='row' alignSelf='flex-start'>
                        <Grid item xs={10.5} />
                        <Grid item xs={1.5}>
                            <IconButton>
                                <CloseIcon onClick={handleClose} />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <IconButton>
                            <PersonAddAlt1Icon sx={{ fontSize: 60, color: green[300], mb: '2' }} />
                        </IconButton>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography component="h1" variant='h3' align='center' fontFamily='revert'> Add Friend</Typography>
                    </Grid>
                </Grid>

                <Grid item align='center' marginTop='20' marginBottom='2' xs={12}>
                    <Paper
                        component="form"
                        sx={{
                            p: '2px 3px',
                            display: 'flex',
                            justifyContent: "center",
                            alignItems: 'center',
                            margin: 2,
                        }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1, border: '2px' }}
                            placeholder="Find buddies :)"
                            margin='none'
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Paper>
                </Grid>
                <Grid item padding='0'>
                    <IconButton type="submit">
                        <SearchIcon onClick={handleClick} />
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>)
}
export default Modal