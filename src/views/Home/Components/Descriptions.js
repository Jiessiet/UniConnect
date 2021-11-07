import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from "./ImageCard";
import useWindowPosition from '../../../hook/useWindowPosition';
import Link from '@mui/material/Link'
import uniConnect from './Online-pana.png'
import teamPic from './Team page-amico.png'
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
    backgroundColor: '#C9D991'
  },
}));

const places = [
  {
    title: 'Credits',
    description:
      "This website was created by Jiessie, Mizna, Sue and Onur. Credits to Stories by FreePik for all images seen in the website. See link below for more information:",
    link:<Link href="https://www.freepik.com/vectors/people" 
    target="_blank">
    People vector created by stories - www.freepik.com
    </Link>,
      imageUrl: teamPic,
    time: 1500,
  },
  {
    title: 'Introducing: UniConnect!',
    description:
      'Explore events, make friends and diversify your interests. There are events for everyone, just use our search engine or our interest tag selector and the perfect event for you will be found. You can even make your own!',
    imageUrl: uniConnect,
    time: 1500,
  },
];
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="place-to-visit">
      <ImageCard place={places[1]} checked={checked} />
      <ImageCard place={places[0]} checked={checked} />  
    </div>
  );
}