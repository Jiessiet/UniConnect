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
import { useState } from "react";
import { useUser } from "../../Contexts/UserContext";
import axios from '../../api';




function Modal({ handleClose }) {
    const [open, setOpen] = React.useState(false);
    const [openTagModal, setOpenTagModal] = React.useState(false);
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const { currentUser, setCurrentUser } = useUser()


    const handleTagModal = () => setOpenTagModal(true);
    const handleTagClose = () => setOpenTagModal(false);

    
    const [eventName, setEventName] = useState('')
    const [eventDesc, setEventDesc] = useState('')
    const [eventDate, setEventDate] = useState('')
    const [eventStart, setEventStart] = useState('')
    const [eventEnd, setEventEnd] = useState('')
    const [eventTags, setEventTags] = useState('')
    const [eventAttendees, setEventAttendees] = useState('')

    const handleChange = (event, setter) => {
        const value = event.target.value;

        setter(value)
    };

    const addTagtoEvent = () => {
        return axios({
            method: 'post',
            url: '/api/users/login',
            data: {

            }
          }).then(response => {
              console.log(response)
              setCurrentUser(response.data)
          }).catch(function (error) {
            console.log(error);
          });
    }
    const handleClick = (event) => {
        event.preventDefault()
        if (eventName !== '' && eventDesc !== '' && eventDate !== '' && eventStart !== '') {

            axios({
                method: 'post',
                url: '/api/events',
                data: {
                    eventId: 5,
                    name: eventName,
                    description: eventDesc,
                    attendeeLimit: eventAttendees,
                    creator: {
                        email: currentUser.email,
                        password:  currentUser.password
                    }
                }
                }).then(response => {
                    console.log(response)
                    setEventName('')
                    setEventDesc('')
                    setEventDate('')
                    setEventStart('')
                    setEventEnd('')
                    setEventTags('')
                    setEventAttendees('')
                    setOpen(true);
            }).catch(function (error) {
                console.log(error);
            })

            setOpen(true);
        } else {
            setOpenSnackbar(true)
        }
    };

    function addEventToDatabase() {
        // event.preventDefault()
        
    }

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
                    <Box component="form" onSubmit={handleClick}>
                        <TextField
                            fullWidth
                            label='Event Title'
                            right-padding='5px'
                            margin='normal'
                            required='true'
                            placeholder='Name your event'
                            value={eventName}
                            onChange={(event)=>handleChange(event, setEventName)}
                        />
                        <TextField
                            fullWidth
                            label='Event Description'
                            multiline='true'
                            margin='normal'
                            required='true'
                            rows={2}
                            placeholder="Let other's know what your event is about!"
                            value={eventDesc}
                            onChange={(event)=>handleChange(event, setEventDesc)}
                        />
                        <TextField
                            fullWidth
                            label='Date'
                            type='date'
                            margin='normal'
                            required='true'
                            InputLabelProps=
                            {{ shrink: true }}
                            placeholder='What day will you event happen?'
                            value={eventDate}
                            onChange={(event)=>handleChange(event, setEventDate)}

                        />
                        <Grid container direction='row' alignItems='center'>
                            <Grid item xs>
                                <TextField
                                    fullWidth
                                    label='Start Time'
                                    type='time'
                                    margin='normal'
                                    required='true'
                                    // sx={{marginRight:'2vw'}}
                                    InputLabelProps=
                                    {{ shrink: true }}
                                    placeholder='What time will you event start?'
                                    value={eventStart}
                                    onChange={(event)=>handleChange(event, setEventStart)}
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
                                    value={eventEnd}
                                    onChange={(event)=>handleChange(event, setEventEnd)}
                                />
                            </Grid>
                        </Grid>
                        <Grid container direction='row-reverse' alignItems='center' justifyItems='center'>
                            {/* <Grid item xs={2}>
                                <IconButton>
                                    <AddCircleOutlineIcon fontSize='medium'/>
                                </IconButton>
                            </Grid> */}
                            <Grid item xs={12}>
                                <Autocomplete
                                    multiple
                                    options={tags}
                                    getOptionLabel={(option) => option.tag}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Tags"
                                            placeholder="Add all related tags"
                                            value={eventTags}
                                            onChange={(event)=>handleChange(event, setEventTags)}
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
                            value={eventAttendees}
                            onChange={(event)=>handleChange(event, setEventAttendees)}
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
                            onClick={() => { handleClick(); addEventToDatabase() }}
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
                        open={openSnackbar}
                        autoHideDuration={2000}
                    >
                        <Alert severity='error'> Event Not Created </Alert>
                    </Snackbar>
                </div>
                <div>
                    <Snackbar
                        open={open}
                        autoHideDuration={2000}
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
    { tag: 'Gaming' },
    { tag: 'Movies' },
    { tag: 'Friends' }];