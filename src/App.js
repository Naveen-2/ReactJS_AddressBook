
import './App.css';
import ContactFrom from './components/contact-form/contact-form'
import Header from "./components/header/header";
import AddressDashboard from './components/address-dashboard/dashboard';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <div className="App">
              <Switch>
                  <Route exact path="/" component={AddressDashboard}/>
                  <Route exact path="/contact-form" component={ContactFrom}/>
              </Switch>
        </div>
      </Router>
      </>
  );
}

export default App;
