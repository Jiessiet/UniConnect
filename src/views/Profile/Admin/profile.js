import React from 'react';
import useStyles from './styles';
import {
  Grow
} from '@material-ui/core';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';
import AddFriend from '../../AddFriend/AddFriend';

const Profile = () => {
  const classes = useStyles();
  return (
    <Grow in>
      <AddFriend />
    </Grow>
  );
};

export default Profile;


//testing