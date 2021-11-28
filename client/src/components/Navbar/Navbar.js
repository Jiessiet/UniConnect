import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { green } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Stack } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const [drop, setDrop] = useState(false);


  const handleDrop = (e) => {
    console.log("hello");
    setDrop(!drop);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    height: "80%",
    transform: "translate(0, 20%)",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha('#4b592d', 0.15),
    color: "#4b592d",
    "&:hover": {
      backgroundColor: alpha('#4b592d', 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#4b592d"
  }));


  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      paddingRight: `calc(1em + ${theme.spacing(4)})`,
      //transition: theme.transitions.create('width'),
      width: "40vw",
      [theme.breakpoints.up("md")]: {
        width: "40vw",
      },
    },
  }));

  const classes = useStyles();
  return (
    <AppBar elevation={0} className={classes.appbar} position="fixed">
      <Stack direction="row" spacing={1}>
        <div>
          <Link to="/">
            <img
              className={classes.logoImage}
              src="https://cdn.discordapp.com/attachments/886450083346915328/903444358714490900/globe-removebg-preview.png"
              alt="logo"
            />
          </Link>
        </div>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          {/* <DropIconWrapper>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={handleDrop}
            >
              <ArrowBackIosIcon />
            </IconButton>
          </DropIconWrapper> */}
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        {/* <Typography variant='h5' component={Link} to='/' className={classes.logo}>
          UniConnect
        </Typography> */}
      </Stack>
      <NavbarMenu />
    </AppBar>
  );
};

export default Navbar;