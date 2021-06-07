import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StricAccess from './components/StrictAccess';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

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
          <li>
            <Link to='/strict-access'>Strict Access</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/users/:id' render={(props) => <Users {...props} greetingsMessage='Good Morning' />} />
          <Route path='/about' component={ About } />
          <Route path='/strict-access' render={ () => <StricAccess user={ { username: 'joaoa', password: '1234' } } />} />
          <Route path='/' component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
