import React from "react";
import { Button, Alert, Tooltip, Snackbar, Grid, Paper, Autocomplete, Avatar, Typography, Box, TextField, Link, SliderValueLabel } from '@mui/material';
import { green } from '@mui/material/colors';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from "@material-ui/core";
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


function Modal({ handleClose }) {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        if (true) { // TODO: all event forms are not empty
            addEvent();
            setOpen(true);
            window.setTimeout(function () {
                window.location.reload()
            }, 2000)
        } else {
            // return a negative snackbar
        }
    };

    const Input = styled('input')({
        display: 'none',
    });

    function addEvent() {
        //here we will be adding to the database with the new events information
        return null
    }

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
                md={8} //5
                lg={3}
                style={{
                    minHeight: '30vh',
                    minWidth: '30vw',
                    border: `3px solid ${green[200]}`,
                    padding: '5vh',
                    margin: '2vh'
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
                    <Grid item xs={9}>
                        <Typography
                            component="h1"
                            variant='h3'
                            // marginTop='2vh' 
                            align='center'
                            fontStyle='revert'
                            fontFamily='revert'>
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
                            margin='normal'
                            placeholder='Name your event'
                        />
                        <TextField
                            fullWidth
                            label='Event Description'
                            multiline='true'
                            margin='normal'
                            rows={2}
                            placeholder="Let other's know what your event is about!"
                        />
                        <TextField
                            fullWidth
                            label='Date'
                            type='date'
                            margin='normal'
                            InputLabelProps=
                            {{ shrink: true }}
                            placeholder='What day will you event happen?'
                        />
                        <Grid container direction='row' alignItems='center'>
                            <Grid item xs>
                                <TextField
                                    fullWidth
                                    label='Start Time'
                                    type='time'
                                    margin='normal'
                                    // sx={{marginRight:'2vw'}}
                                    InputLabelProps=
                                    {{ shrink: true }}
                                    placeholder='What time will you event start?'
                                />
                            </Grid>
                            <Grid item xs paddingLeft='1vh'>
                                <TextField
                                    fullWidth
                                    // minWidth='100%' 
                                    label='End Time'
                                    type='time'
                                    margin='normal'
                                    InputLabelProps=
                                    {{ shrink: true }}
                                    placeholder='What time will your event end?'
                                />
                            </Grid>
                        </Grid>
                        <Grid container direction='row-reverse' alignItems='center' justifyItems='center'>
                            <Grid item xs={2}>
                                <IconButton>
                                    <AddCircleOutlineIcon fontSize='medium' />
                                </IconButton>
                            </Grid>
                            <Grid item xs={10}>
                                <Autocomplete
                                    multiple
                                    options={tags}
                                    getOptionLabel={(option) => option.tag}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Tags"
                                            placeholder="Add all related tags"
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                        <TextField
                            fullWidth
                            label='Attendee Limit'
                            type="number"
                            defaultValue='1'
                            margin='normal'
                            placeholder='How many people are allowed to sign up?'
                        />
                    </Box>
                </Grid>
                <Grid container direction='row' justifyItems='center'>
                    <Grid xs={5}></Grid>
                    <Grid item xs>
                        <Button
                            type='submit'
                            variant="outline"
                            paddingRight='30vh'
                            onClick={() => { handleClick(); addEvent() }}
                            sx={{
                                color: 'white',
                                background: 'green',
                                "&:hover": {
                                    backgroundColor: "#74A651",
                                    color: "#C6F2C4",
                                },
                            }}
                        >
                            Create
                        </Button>
                        <label htmlFor="icon-button-file">
                            <Input accept="image/*" id="icon-button-file" type="file" />
                            <Tooltip title="Upload an photo for your event">
                                <IconButton color="green" component="span">
                                    <PhotoCamera background='green' />
                                </IconButton>
                            </Tooltip>
                        </label>
                    </Grid>
                </Grid>
                <div>
                    <Snackbar
                        open={open}
                        autoHideDuration={1000}
                    >
                        <Alert severity='success'> Event Created </Alert>
                    </Snackbar>
                </div>
            </Grid>
        </Grid>
    );
}

export default Modal;


const tags = [
    { tag: 'gaming' },
    { tag: 'movies' },
    { tag: 'friends' }];