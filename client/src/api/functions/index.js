import axios from "../index";
import { useUser } from "../../Contexts/UserContext";


export const login = (email, password, setCurrentUser) => {
    return axios({
        method: 'post',
        url: '/api/users/login',
        data: {
            email: email,
            password: password
        }
      }).then(response => {
          console.log(response)
          setCurrentUser(response.data)
      }).catch(function (error) {
        console.log(error);
      });
}

export const signup = (email, password, university, username, setCurrentUser) => {
    return axios({
        method: 'post',
        url: '/api/users',
        data: {
            email: email,
            password: password,
            username: username,
            university: university
        }
      }).then(response => {
          console.log(response)
          login(email, password, setCurrentUser)
      }).catch(function (error) {
        console.log(error);
      });
}