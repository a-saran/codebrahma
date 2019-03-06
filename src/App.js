import React, { Component } from 'react';
import Nav from './components/nav';
import Lists from './components/Lists';
import Search from './components/Search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Lists} />
            <Route exact path="/search/:id" component={Search} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
