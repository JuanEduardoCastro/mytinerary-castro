import React from "react";
import Home from "./pages/Home";
import City from "./pages/City";
import Error404 from "./pages/Error404";
import Loader from "./components/Loader"
import Footer from "./components/Footer";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import Cities from "./pages/Cities";

export default class App extends React.Component {
  render() {
    return ( 
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cities" component={Cities} />
          <Route path="/city/:id" component={City} />
          <Route path="/loader" component={Loader} />
          <Route path="/error404" component={Error404} /> 
          <Redirect to="/error404" />
        </Switch>
        <Footer/>
      </BrowserRouter>
    )
  }
}