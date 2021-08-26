import React, { useEffect } from "react";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import City from "./pages/City";
import Loader from "./components/Loader";
import Error404 from "./pages/Error404";
import UserSignUp from "./pages/UserSignUp";
import UserLogIn from "./pages/UserLogIn";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import usersActions from "./redux/actions/usersActions";
import { connect } from "react-redux";
  
const App = (props) => {
  
  useEffect(() => {
    if (localStorage.getItem("token")) {
      props.logInLocalStorage(localStorage.getItem("userName"))
    } 
  }, [])
  
  return ( 
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cities" component={Cities} />
        <Route path="/city/:id" component={City} />
        <Route path="/loader" component={Loader} />
        {!props.token && <Route path="/signup" component={UserSignUp} />}
        {!props.token && <Route path="/login" component={UserLogIn} />}
        <Route path="/error404" component={Error404} /> 
        <Redirect to="/error404" />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    logInUser: state.users.logInStore
  }
}

const mapDispatchToProps = {
  logInLocalStorage: usersActions.logInLocalStorage
}

export default connect(mapStateToProps, mapDispatchToProps)(App)