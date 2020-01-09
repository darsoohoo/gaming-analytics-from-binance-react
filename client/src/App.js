import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <Route exact path="/" component={Navbar} />
        </header>
        <main>
          <Route exact path="/" component={Landing} />
         </main>
      </div>
    );
  }
}

export default App;
