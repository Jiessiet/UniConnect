import React from 'react'
import { useState } from "react";
import { Icon, Button, Alert, IconButton, Tooltip, Snackbar, Grid, Paper, Autocomplete, Avatar, Typography, Box, TextField, Link, SliderValueLabel } from '@mui/material';
import { green } from '@mui/material/colors';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';


function Modal({ handleClose }) {
    const [open, setOpen] = React.useState(false);
    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    const [userChosen, setUserChosen] = useState('')

    const handleUserSelectChange = event => {
        const value = event.target.value;
        setUserChosen(value)
    };

    const handleClick = () => {
        if (true) {  //check if the user exists in the database
            deleteUser();
            setOpen(true);
            window.setTimeout(function () {
                window.location.reload()
            }, 2000)
        } else {
            setOpenSnackbar(true)
        }
    };

    const Input = styled('input')({
        display: 'none',
    });

    function deleteUser() {
        //here we will be deleting from the database with the given users information
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
                    paddingLeft: '4vh',
                    paddingRight: '4vh',
                    paddingBottom: '4vh',
                    paddingTop: '2vh'
                    // margin: '2vh'
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
                            <PersonAddDisabledIcon sx={{ fontSize: 60, color: green[300], mb: '2' }} />
                        </IconButton>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography component="h1" variant='h3' align='center' fontFamily='revert'> Delete User</Typography>
                    </Grid>
                </Grid>
                <Grid item align='center' xs={12}>
                    <Autocomplete
                        multiple
                        options={users}
                        getOptionLabel={(option) => option.user}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Users"
                                placeholder="All Users to delete"
                                value={userChosen}
                                onChange={handleUserSelectChange}
                            />
                        )}
                    />
                </Grid>
                <Grid item padding='0'>
                    <Button
                        type='submit'
                        variant="outline"
                        onClick={handleClick}
                        sx=
                        {{ mt: 2, background: 'green' }}>
                        Delete User
                    </Button>
                </Grid>
            </Grid>
            <div>
                <Snackbar
                    open={open}
                    autoHideDuration={1000}
                >
                    <Alert severity='success'> User Deleted </Alert>
                </Snackbar>
            </div>
            <div>
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={1000}
                >
                    <Alert severity='error'> User Not Deleted</Alert>
                </Snackbar>
            </div>
        </Grid>)
}
export default Modal

const users = [
    { user: 'student030' },
    { user: 'u0ft3' },
    { user: 'p3rs0n' }];