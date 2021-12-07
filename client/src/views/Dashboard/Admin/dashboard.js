import React from 'react';
import axios from '../../../api';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Modal from '@mui/material/Modal'
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AddTags from '../../../components/Modals/addTagsModal'
import DeleteTags from '../../../components/Modals/deleteTagModal'
import DeleteUser from '../../../components/Modals/deleteUserModal'

import { useUser } from '../../../Contexts/UserContext';

const Dashboard = () => {
  //   classes = useStyles();
  const { currentUser } = useUser()

  const [open, setOpen] = React.useState(false);
  const [openTags, setOpenTags] = React.useState(false);
  const [openUser, setOpenUser] = React.useState(false);
  
  const handleClose = () => setOpen(false);
  const handleCloseTags = () => setOpenTags(false);
  const handleCloseUser = () => setOpenUser(false);

  const [tags, setTags] = React.useState([])
  const [users, setUsers] = React.useState([])
  const [categoryList, setCategories] = React.useState([])

  const handleOpen = () => {
    axios({
      method: 'get',
      url: '/api/tag',
    }).then(response => {
        setTags(response.data)
        setOpen(true)
    }).catch(function (error) {
      console.log(error)
    })}


  const handleOpenTags = () => {
    axios({
      method: 'get',
      url: '/api/categories',
    }).then(response => {
        const arr = []
        response.data.forEach(element => {
          arr.push(element.name) 
        })
        setCategories(arr)
        setOpenTags(true)
    }).catch(function (error) {
      console.log(error)
    })}

  const handleOpenUser = () => {
    axios({
      method: 'get',
      url: '/api/users',
    }).then(response => {
        setUsers(response.data)
        setOpenUser(true);
    }).catch(function (error) {
      console.log(error)
    })}


  return (
    <Container maxWidth='md' sx={{ mt: 12 }}>
      <Grid container justify='space-between' spacing={3} mt={0}>
        <Grid item container xs={12} sm={7} spacing={3}>
          <Grid item container spacing={3} textAlign='center'>
            <Grid item xs={12} sm={5}>
              <Paper style={{ padding: '15' }}>
                <Avatar alt='Friend' sx={{ width: 190, height: 190 }}
                src = {currentUser.profilePhoto}>
                </Avatar>
                {/* <CardMedia
                  component='img'
                  height='200'
                  image='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
                  style={{ marginBottom: 20 }}
                /> */}

                <Typography variant='h5' component='div'>
                  {currentUser.username}
                </Typography>

                <Button fullWidth variant='contained' style={{ backgroundColor: '#099441' }} size='medium'
                  href='/editUserProfile'>
                  Edit Profile
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Paper style={{ height: '100%' }}>
                <Typography variant='h5' pt={2} pb={2} color='#099441'>
                  {/* Statistics will be taken from the database and displayed. Currently, these are only placeholders. */}
                  STATS
                </Typography>
                <EqualizerIcon style={{ fontSize: 200 }} />
                <KeyboardArrowDownOutlinedIcon />
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} textAlign='center'>
            {/* <Paper style={{ height: '100%' }}> */}
            <Button fullWidth
              onClick={handleOpen}
              style={{ color: '#099441', height: '100%', backgroundColor: '#eff5eb', marginBottom: '10px' }}
              // sx={{p:'10'}} 
              variant='contained'
            >
              Add tags
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
            >
              <AddTags handleClose={handleClose} categories={categoryList}/>
            </Modal>



            <Button fullWidth
              onClick={handleOpenTags}
              style={{ color: '#099441', height: '100%', backgroundColor: '#eff5eb', marginBottom: '10px' }}
              variant='contained'
            >
              Delete Tags
            </Button>
            <Modal
              open={openTags}
              onClose={handleCloseTags}
            >
              <DeleteTags handleClose={handleCloseTags} tags={tags}/>
            </Modal>




            <Button fullWidth
              onClick={handleOpenUser}
              style={{ color: '#099441', height: '100%', backgroundColor: '#eff5eb', marginBottom: '10px' }}
              variant='contained'
            >
              Find User
            </Button>
            <Modal
              open={openUser}
              onClose={handleCloseUser}
            >
              <DeleteUser handleClose={handleCloseUser} users={users}/>
            </Modal>



            {/* </Paper> */}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={5} style={{ textAlign: 'center', alignitems: 'center' }}>
          <Paper style={{ height: '400px' }}>
            <Typography variant='h5' pt={2} color='#099441'>
              REPORT FEED
            </Typography>
            {/* these reports will be taken from the database and displayed. Currently these are hardcoded in */}
            <Card style={{ width: '90%', margin: '20px auto', backgroundColor: '#eff5eb' }}>
              <CardContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <AccountCircleIcon style={{ marginRight: '1px' }} />
                <Typography>User 1928 has been reported</Typography>
              </CardContent>
            </Card>
            <Card style={{ width: '90%', margin: '20px auto', backgroundColor: '#eff5eb' }}>
              <CardContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <AccountCircleIcon style={{ marginRight: '1px' }} />
                <Typography>User 1928 has been reported</Typography>
              </CardContent>
            </Card>
            <Card style={{ width: '90%', margin: '20px auto', backgroundColor: '#eff5eb' }}>
              <CardContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <AccountCircleIcon style={{ marginRight: '1px' }} />
                <Typography>User 1928 has been reported</Typography>
              </CardContent>
            </Card>
            <KeyboardArrowDownOutlinedIcon style={{ marginTop: 30 }} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
