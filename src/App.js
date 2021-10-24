import "./App.css";
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
