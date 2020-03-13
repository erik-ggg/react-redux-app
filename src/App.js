import React from 'react';
import './App.css';
import Home from './Home';
import About from './components/About';
import Header from './components/header/Header';

import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import EmployeeData from './components/employees/EmployeeData';

const history = createBrowserHistory();

const App = () => {
  return (
    <main>
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/employee/:id'>
            <EmployeeData />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </Router>
    </main>
  );
};

export default App;
