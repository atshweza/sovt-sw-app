import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import  Home from "./pages/home";
import Details  from "./pages/details";

function App() {
  return (
  <>
    <Switch>
        <Route path="/charactor/details" component={Details} />
        <Route exact path="/" component={Home} />
    </Switch>
  </>
  );
}

export default App;
