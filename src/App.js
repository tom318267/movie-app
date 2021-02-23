import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import "./App.css";
import ResultInfo from "./components/ResultInfo/ResultInfo";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/:id" component={ResultInfo} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
