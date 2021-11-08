import { useUser } from '../../../Contexts/UserContext';
import AdminProfile from '../AdminProfile/AdminProfile';
import UserProfile from '../UserProfile/UserProfile';
import { useHistory } from 'react-router-dom';

const ProfileRouter = () => {
  const history = useHistory();
  const { currentUser, setCurrentUser } = useUser()

  function porfileRoute() {
    if (currentUser.type == "unauthorized") {
      history.push("/");
      return null
    }
    else if (currentUser.type == "admin") {
      return <AdminProfile />
    }
    else {
      return <UserProfile />
    }
  }

  return porfileRoute()
}

export default ProfileRouter;