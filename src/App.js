import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <div className="App" style={{margin: '0 auto'}}>
        <ul style={{textAlign: 'center', listStyle:'none', display:'flex', padding:'20px', left:'50%', border:'1px solid'}}>

        <li style={{padding:'10px', marginLeft:'45%'}}><Link to="/courses">Courses</Link></li>
        <li style={{padding:'10px'}}><Link to="/users">Users</Link></li>
        </ul>
        
           <Switch>
           
            <Route path="/users" component={Users} />
            <Route path="/courses" component={Courses} />
            <Redirect from='/all-courses' to='/courses' />
            <Route path="/" exact component={Courses} />
            <Route render={() => <h1>Not found</h1>} />
            </Switch>
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
