import React from "react";
import loginImage from "./loginImage.svg";

export class login extends React.Component {

render() {
    return(  
    <div className = "base-container">
        <div className = "header"> Login </div>
        <div className = "content">
            <div className = "login-image">
                <img src = {loginImage}
                width = "200" />
            </div>
            <div className= "form"> 
                <div className ="form-content">
                    <label htmlFor ="username">Username</label>
                    <input type ="text" name ="username" placeholder="Enter Username Here"></input>
                </div>
                <div className = "form-content">
                    <label htmlFor ="password">Password</label>
                    <input type ="text" name ="password" placeholder="Enter Password Here"></input>
                </div>
            </div>
        </div>
        <div className="footer">
        <button type="button" className="button">Login</button>
        </div> 
    </div>)
    }
}

 export default login