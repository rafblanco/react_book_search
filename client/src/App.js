import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

function App(){
  return(
    <Router>
      <div>
        <Navbar />
        <Hero />
        <Wrapper>
          <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/Saved" component={Saved} />
          </Switch>
        </Wrapper>
      </div>
    </Router>
  )
}

export default App;
