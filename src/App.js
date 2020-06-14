import React from 'react';
import './App.css';
import Home from './pages/Home'
import { Route, Switch, Redirect } from 'react-router-dom';
import Search from './pages/Search';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Upgrade from './pages/Upgrade';
import User from './pages/User';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/upgrade" component={Upgrade} />
        <Route exact path="/user" component={User} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
