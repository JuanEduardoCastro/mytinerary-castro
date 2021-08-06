import React from "react";
import Home from "../src/pages/Home"
import Cities from "../src/pages/Cities"
import {BrowserRouter, Route, Switch} from "react-router-dom"

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