import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import WordOfTheDay from "./components/WordOfTheDay";
import NavBar from './components/NavBar'
import Home from './components/Home'
import Words from './components/Words'

function App() {

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/word-of-the-day" component={WordOfTheDay}/>
        <Route path="/words" component={Words}/> 
      </Switch>
    </Router>
  );
}

export default App;
