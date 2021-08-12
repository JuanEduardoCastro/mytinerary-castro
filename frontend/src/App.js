import React from "react";
import Home from "./pages/Home";
import City from "./pages/City";
import Error404 from "./pages/Error404";
import Header from "./components/Header";
import Footer from "./components/Footer";


import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import Cities from "./pages/Cities";

export default class App extends React.Component {
  render() {
    return ( 
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cities" component={Cities} />
          <Route path="/city/:id" component={City} />
          <Route paths="/error404" component={Error404} />
          <Redirect to="/error404" />
        </Switch>
        <Footer/>
      </BrowserRouter>
    )
  }
}