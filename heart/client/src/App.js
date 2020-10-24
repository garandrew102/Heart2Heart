import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./search/Search";
import Account from "./search/Account";
import Login from "./search/Login";
import Register from "./search/Register";
import Navigation from "./search/Navigation";
import Footer from "./search/Footer";
import Profile from "./search/Profile";
import FAQ from "./search/FAQ";

function App() {
  return (
    <Router>
      <Navigation />
      <Container className="pt-5">
        <Switch>
          <Route exact path="/" component={Landing} />
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
