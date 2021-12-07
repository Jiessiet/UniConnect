import React, { useState } from 'react';
import {Modal, Box, Typography, Grid, Avatar} from '@mui/material'

const friendListModal = ({ handleClose, friends }) => {
  const [open, setOpen] = useState(false);
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        position='absolute'
        top='50%'
        left='50%'
        transfrom='translate(-50%, -50%)'
        backgroundColor='white'
        boxShadow='24'
        p={4}
      >
        <Typography mb={2} variant='h6' component='h2'>
          Friends
        </Typography>
        <Grid container spacing={3} style={{ width: '400px' }}>
          {friends.map((friend) => (
            <Grid item display='flex' flexDirection='column' alignItems='center'>
              <Avatar {...(friend.photo && `src=${friend.photo}`)}>
                {!friend.photo && <PersonIcon />}
              </Avatar>
              <Typography>{friend.name}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Modal>
  );
};

export default friendListModal;
