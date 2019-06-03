import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';

import UserList from  './views/user/'
import DashBoard from './views/Dashboard/'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <nav className="nav">
              <li>
                <Link to="/">首页</Link>
              </li>
              
              <li>
                <Link to="/userList">用户列表</Link>
              </li>
            </nav>
          </div>
          
          <Route path="/" exact component={DashBoard}/>
          <Route path="/userlist" component={UserList}/>
        </div>
      </Router>
      
    );
  }
}

export default App;
