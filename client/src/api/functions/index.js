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

export const signup = (email, password, university, username, setCurrentUser, image) => {
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
          const url = `/api/user-photo/${response.data._id}`
          login(email, password, setCurrentUser).then(response => {
            console.log(response)
            uploadPicture(url, image).then(response => {
              console.log(response)})
            })
      }).catch(function (error) {
        console.log(error);
      });
}

export const uploadPicture = (url, image) => {
  const data = new FormData()
  data.append('file', image) 
  return axios.post(url, data)
}