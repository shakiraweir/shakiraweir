import React, { Component } from 'react';
import './App.css';
import Home from '../Home/Home'
import About from '../About/About'
import Resume from '../Resume/Resume'
import { Route, Link, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
           <nav>
              <ul>
                  <li> <Link to='/' className="main-nav">Home</Link> </li>
                  <li> <Link to='/about'>About</Link> </li> 
                  {/* <li> <Link to='/profile'>Contact</Link> </li> */}
              </ul>
            </nav> 

        <Switch>
        <Route exact path='/profile' render={() => <Resume /> } />
        <Route exact path='/' render={() => <Home /> } />
        <Route exact path='/about' render={() => <About /> } />
        </Switch>
      </div>
    );
  }
}

export default App;
