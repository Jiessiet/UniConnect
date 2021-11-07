import { Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useUser } from "../../../Contexts/UserContext";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { IconButton } from "@mui/material";
import { useHistory } from "react-router";

const NavbarMenu = () => {
  const { currentUser, setCurrentUser } = useUser();
  const history = useHistory();

  function logouthandler() {
    window.localStorage.setItem('userType', 'unauthorized')
    setCurrentUser((currentUser) => {return {...currentUser, type: 'unauthorized'}})
  }

  function navbarMenuRender(logouthandler) {
    if (currentUser.type == "unauthorized") {
      return (
        <Toolbar>
          <Button component={Link} to="/login" 
          // color="inherit"
          >
            Login
          </Button>
          <Button component={Link} to="/signup" 
          // color="inherit"
          >
            Signup
          </Button>
        </Toolbar>
      );
    } else {
      return (
        <Toolbar>
          <IconButton color="secondary" component="span" size="large" component={Link} to="/timeline">
            <HomeRoundedIcon />
          </IconButton>
          <IconButton color="secondary" component="span" size="large" component={Link} to="/Profile">
            <AccountCircleTwoToneIcon />
          </IconButton>
          <IconButton color="secondary" component="span" size="large" component={Link} to="/dashboard">
            <DashboardRoundedIcon />
          </IconButton>
          <IconButton color="secondary" component="span" size="large" onClick={logouthandler}>
            <LogoutRoundedIcon />
          </IconButton>
        </Toolbar>
      );
    }
  }

  return navbarMenuRender(logouthandler);
};

export default NavbarMenu;
