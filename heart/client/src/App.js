import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./search/Search";
import Account from "./account/Account";
import Login from "./login/Login";
import Register from "./login/Register";
import Navigation from "./navigation/Navigation";
import Footer from "./footer/Footer";
import Profile from "./profile/Profile";
import FAQ from "./faq/FAQ";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Navigation />
      <Container className="pt-5">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/profiles/:id" component={Profile} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
