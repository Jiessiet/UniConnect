import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { UserContextProvider } from "./Contexts/UserContext";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider user={{ type: (window.localStorage.getItem('userType') || "unauthorized") }}>
        <App />
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
