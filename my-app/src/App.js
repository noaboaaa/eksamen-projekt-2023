import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MeetUs from "./components/MeetUs";
import Booking from "./components/Booking";
import Admin from "./components/Admin";

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/meet-us" component={MeetUs} />
      <Route path="/book-now" component={Booking} />
      <Route path="/admin" component={Admin} />
    </Switch>
  </Router>
);

export default App;
