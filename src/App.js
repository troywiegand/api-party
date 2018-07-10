import React, { Component } from 'react';
import {Route, NavLink, Switch} from 'react-router-dom'

import './App.css';
import Github from './Github'

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
      <h3>It's a bop and a half</h3>
        <h1> API party </h1>
        
        </header>
      <ul className="navLinks">
        <li>
          <NavLink to="/github"> GitHub API! </NavLink>
        </li>
      </ul>

      <Switch>
        <Route path="/github" component={Github}/>
        <Route render={()=> <p>Click a h*ckin' link</p>}/>
      </Switch>
      </div>

    
    )
  }
}

export default App;
