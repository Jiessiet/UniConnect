import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './Components/Header';
import Descriptions from './Components/Descriptions';
import AnimatedBg from "./Components/AnimatedBg";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundSize: 'cover',
  },
  waveBorder: {
    paddingTop: theme.spacing(0),
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Descriptions />
    </div>
  );
}


// import React, { Fragment } from "react";
// import PropTypes from "prop-types";
// import classNames from "classnames";
// import {
//   Grid,
//   Typography,
//   Card,
//   Button,
//   Hidden,
//   Box,
//   withStyles,
//   withWidth,
//   isWidthUp,
// } from "@material-ui/core";
// import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import Paper from '@mui/material/Paper';
// import { lightGreen } from '@mui/material/colors';
// import TextField from '@mui/material/TextField';
// import SearchIcon from '@mui/icons-material/Search';
// import IconButton from '@mui/material/IconButton';
// import InputBase from '@mui/material/InputBase';
// import Background from "./bg_img_simp.png"
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import { Link } from 'react-router-dom';
// import AnimatedBg from "./Components/AnimatedBg.js";



// const styles = (theme) => ({
//   palette: {
//     primary: {
//       light: '#b7b7a4',
//       main: '#a5a58d',
//     },
//     secondary: {
//       main: "#4B592D",
//     },
//   },
//   image: {
//     margin: 'auto',
//     display: 'block',
//     maxWidth: '100%',
//     maxHeight: '100%',
//     verticalAlign: "middle",
//   },
//   container:{
//     marginBottom: theme.spacing(18),
//     [theme.breakpoints.down("md")]: {
//       marginBottom: theme.spacing(9),
//     },
//   },
//   wrapper: {
//     position: "relative",
//     backgroundColor: theme.palette.secondary.main,
//     paddingBottom: theme.spacing(2),
//   },

//   animatedBg: {
//     paddingTop: theme.spacing(4),
//   },

//   card: {
//     [theme.breakpoints.up("lg")]: {
//       paddingTop: theme.spacing(6),
//       paddingBottom: theme.spacing(6),
//       paddingLeft: theme.spacing(6),
//       paddingRight: theme.spacing(6),
//     },
//   },
// });

// function Home(props) {
//   const { classes, theme, width } = props;
//     return (
//       <Fragment>
//         <div className={classNames("lg-p-top", classes.wrapper)}>
//           <div className={classNames("container-fluid", classes.container)}>

//              <Box display="flex" justifyContent="center" className="row">
//               <Card
//                 className={classes.card}
//                 data-aos-delay="200"
//                 data-aos="zoom-in"
//               >
//               <div 
//               className={classNames(classes.containerFix, "container")}>
//                 <Box justifyContent="space-between" className="row">
//                   <Grid>
//                     <Box
//                       display="flex"
//                       flexDirection="column"
//                       justifyContent="space-between"
//                       height="100%"
//                     >

//                     <Box mb={4}>
//                     <img
//                         className={classes.logoImage}
//                         src="https://cdn.discordapp.com/attachments/886450083346915328/903444358714490900/globe-removebg-preview.png"
//                         alt="logo"
//                       />
                      
//                       </Box>
//                         <div>

//                         <Stack
//                           direction="column"
//                           justifyContent="center"
//                           alignItems="center"
//                           spacing={20}

//                         >
//                           <Avatar alt="Logo" src="/images/Connected-pana.png" 
//                           sx={{ width: 400, height: 400, bgcolor: lightGreen[100]} }
//                           />
//                         </Stack>

//                         <Paper
//                           component="form"
//                           sx={{ 
//                             p: '2px 3px', 
//                             display: 'flex', 
//                             justifyContent: "center", 
//                             alignItems: 'center', 
//                             margin: 2}}
//                         >
//                           <InputBase
//                             sx={{ ml: 1, flex: 1}}
//                             placeholder="Find buddies :)"
//                             margin='none'
//                             inputProps={{ 'aria-label': 'search' }}
//                           />
//                           <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
//                           <Link to="/Event">
//                             <SearchIcon />
//                           </Link>
//                           </IconButton>
//                         </Paper>

//                         <Grid 
//                             container
//                             direction="row"
//                             justifyContent="space-evenly"
//                             alignItems="center"
//                             spacing={{ xs: 2, md: 2 }}
//                             columns={{ xs: 2, sm: 8, md: 12 }}>
                              
//                             <Button variant="contained" backgroundColor='#a5a58d' sx={{mt:2}} href="/login">
//                                 <Typography variant="button" component="div" gutterBottom 
//                                 sx={{ cursor: 'pointer'}}>
//                                     Login
//                                 </Typography>
//                             </Button>

//                             <Button href="/signup" variant="contained" backgroundColor='#a5a58d' sx={{mt:2}}>
//                                 <Typography variant="button" component="div" gutterBottom 
//                                 sx={{ cursor: 'pointer' }}>
//                                     Signup
//                                 </Typography>

//                             </Button>
//                           </Grid>
//                         </div>
//                       </Box>
//                     </Grid>
//                 </Box>
//               </div>
//             </Card>
//           </Box>
//         </div>
//       </div>
//       <AnimatedBg
//         upperColor={theme.palette.secondary.main}
//         lowerColor="#FFFFFF"
//         className={classes.waveBorder}
//         animationNegativeDelay={2}
//       />
//     </Fragment>
//   );
  
// }

// Home.propTypes = {
//   classes: PropTypes.object,
//   width: PropTypes.string,
//   theme: PropTypes.object,
// };

// export default withWidth()(
//   withStyles(styles, { withTheme: true })(Home)
// );




// export class Home extends React.Component {

//   render() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Grid
//         container component="main" 
//         spacing={0}
//         padding = '0px'
//         padding-left='0px'
//         container
//         direction="column"
//         justifyContent="center"
//         alignItems="center"
//         style={{ minHeight: '100vh', minWidth: '100vw'}}
//         sx={{
//             backgroundImage: `url(${Background})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center'}}
//         >
//         <AppBar position="sticky" color="transparent" elevation={0}>
//         <Toolbar sx={{
//         width: 10,
//         height: 10,
//         mt: 3}}>
//         <Avatar alt="Logo" src="images/globe-removebg-preview.png"sx={{
//         width: 200,
//         height: 100}}/>
//       </Toolbar>
//         </AppBar>

//       <Grid item xs={3}>
//       <Box component="spand" sx={{
//         width: 100,
//         height: 100,
//         backgroundImage: 'url(${Background})',
//       }}>
//         <Stack
//           direction="column"
//           justifyContent="center"
//           alignItems="center"
//           spacing={20}

//         >
//           <Avatar alt="Logo" src="/images/Connected-pana.png" 
//           sx={{ width: 400, height: 400, bgcolor: lightGreen[100]} }
//           />
//         </Stack>

//         <Paper
//           component="form"
//           sx={{ p: '2px 3px', display: 'flex', justifyContent: "center", alignItems: 'center', width: 350, margin: 2}}
//         >
//           <InputBase
//             sx={{ ml: 1, flex: 1}}
//             placeholder="Find buddies :)"
//             margin='none'
//             inputProps={{ 'aria-label': 'search' }}
//           />
//           <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
//           <Link to="/Event">
//             <SearchIcon />
//           </Link>
//           </IconButton>
//         </Paper>

//         <Grid 
//             container
//             direction="row"
//             justifyContent="space-evenly"
//             alignItems="center"
//             spacing={{ xs: 2, md: 2 }}
//             columns={{ xs: 2, sm: 8, md: 12 }}>
              
//             <Button variant="contained" backgroundColor='#a5a58d' sx={{mt:2}} href="/login">
//                 <Typography variant="button" component="div" gutterBottom 
//                 sx={{ cursor: 'pointer'}}>
//                     Login
//                 </Typography>
//             </Button>

//             <Button href="/signup" variant="contained" backgroundColor='#a5a58d' sx={{mt:2}}>
//                 <Typography variant="button" component="div" gutterBottom 
//                 sx={{ cursor: 'pointer' }}>
//                     Signup
//                 </Typography>

//             </Button>

//           </Grid>

//         </Box>
//         </Grid>   
//       </Grid> 
       
//     </ThemeProvider>
//   );

// }
// }
// export default Home;
