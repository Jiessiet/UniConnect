import { useUser } from '../../../Contexts/UserContext';
import UserDashboard from './../User/dashboard';
import AdminDashboard from './../Admin/dashboard';
import { useHistory } from 'react-router-dom';

const DashboardRouter = () => {
    const history = useHistory();
    const { currentUser, setCurrentUser} = useUser()

    function dashboardRoute() {
        if(currentUser.type == "unauthorized"){
          history.push("/");
          return null
        }
        else if (currentUser.type == "admin"){
          return <AdminDashboard />
        }
        else{
          return <UserDashboard />
        }
    }

    return dashboardRoute()    
}

export default DashboardRouter;