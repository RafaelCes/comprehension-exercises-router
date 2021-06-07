import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
        </ul>
        <Route path='/about' component={ About } />
        <Route path='/users/:id' render={(props) => <Users {...props} greetingsMessage='Good Morning' />} />
        <Route exact path='/' component={ Home } />
      </BrowserRouter>
    );
  }
}

export default App;
