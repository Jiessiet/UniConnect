import React from 'react'
import { useState } from "react";
import { Icon, Button, Alert, IconButton, Tooltip, Snackbar, Grid, Paper, Autocomplete, Avatar, Typography, Box, TextField, Link, SliderValueLabel } from '@mui/material';
import { green } from '@mui/material/colors';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';


function Modal({ handleClose }) {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        if (true) {
            addTag();
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

    function addTag() {
        let databody = {

        }
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
                            <LocalOfferIcon sx={{ fontSize: 60, color: green[300], mb: '2' }} />
                        </IconButton>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography component="h1" variant='h3' align='center' fontFamily='revert'> Create Tag</Typography>
                    </Grid>
                </Grid>
                <Grid item align='center' xs={12}>
                    <TextField fullWidth margin='normal' label="New Tag Name" placeholder='ex. gaming, movies' type="search" />
                </Grid>
                <Grid item padding='0'>
                    <Button
                        type='submit'
                        variant="outline"
                        onClick={handleClick}
                        sx=
                        {{ mt: 2, background: 'green' }}>
                        Create Tag
                    </Button>
                </Grid>
            </Grid>
            <div>
                <Snackbar
                    open={open}
                    autoHideDuration={1000}
                >
                    <Alert severity='success'> Tag Created </Alert>
                </Snackbar>
            </div>
            {/* </Grid> */}
        </Grid>)
}
export default Modal
