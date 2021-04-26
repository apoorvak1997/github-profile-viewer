import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Userprofile from "./userprofile";
import Users from "./Users";

function AppRouter() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/searchusers/" exact component={Users} />
          <Route path="/userprofile/" exact component={Userprofile} />
          <Route component={NotFound404} />
        </Switch>
      </BrowserRouter>
    );
  }
  
  export default AppRouter;