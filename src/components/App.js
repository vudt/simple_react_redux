import React, { Component } from 'react';
import './App.css';
import UserContainer from '../containers/user-list';
import UserDetail from '../containers/user-detail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>List User:</h1>
        <UserContainer />
        <hr></hr>
        <UserDetail />
      </div>
    );
  }
}

export default App;
