import React from "react";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import City from "./pages/City";
import Loader from "./components/Loader";
import Error404 from "./pages/Error404";
import UserSignUp from "./pages/UserSignUp";
import UserLogIn from "./pages/UserLogIn";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"

export default class App extends React.Component {
  render() {
    return ( 
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cities" component={Cities} />
          <Route path="/city/:id" component={City} />
          <Route path="/loader" component={Loader} />
          <Route path="/signup" component={UserSignUp} />
          <Route path="/login" component={UserLogIn} />
          <Route path="/error404" component={Error404} /> 
          <Redirect to="/error404" />
        </Switch>
        <Footer/>
      </BrowserRouter>
    )
  }
}