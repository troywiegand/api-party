import React, { Component } from 'react';
import {Route, NavLink, Switch} from 'react-router-dom'

import './App.css';
import Github from './Github'
import Homework from './Homework'
import Number from './Number'
import Pokemon from './Pokemon'

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
        <li>
            <NavLink to="/homework">Homework</NavLink>
          </li>
          <li>
            <NavLink to="/number">Misc Number Facts</NavLink>
          </li>
          <li>
            <NavLink to="/pokemon">Pokemon Info</NavLink>
          </li>
      </ul>

      <Switch>
        <Route path="/github" component={Github}/>
        <Route path="/homework" component={Homework} />
        <Route path="/number" component={Number} />
        <Route path="/pokemon" component={Pokemon} />
        <Route render={()=> <p>Click a h*ckin' link</p>}/>
        
      </Switch>
      </div>

    
    )
  }
}

export default App;
