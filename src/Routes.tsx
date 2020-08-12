import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { connect } from "react-redux";
import { IState } from "./redux/root.reducer";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

interface RoutesProps {
  loggedIn: boolean;
}

function Routes({ loggedIn }: RoutesProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={loggedIn ? Dashboard : Landing} />
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = (state: IState) => ({
  loggedIn: state.user.accessKey !== "",
});

export default connect(mapStateToProps)(Routes);
