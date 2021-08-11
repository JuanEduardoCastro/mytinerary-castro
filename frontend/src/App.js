import React from "react";
import Home from "./pages/Home"

import {BrowserRouter, Route, Switch} from "react-router-dom"
import Cities from "./pages/Cities";

export default class App extends React.Component {
  render() {
    return ( 
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cities" component={Cities} />
        </Switch>
      </BrowserRouter>
    )
  }
}