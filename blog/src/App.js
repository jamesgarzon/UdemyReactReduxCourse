import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PostIndex from './components/posts_index';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount(){
    fetch('https://aoa-rigel-api-develop.herokuapp.com');
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={PostIndex} />
      </div>
      </BrowserRouter>
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcomes to React router what da hell
      //     </h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
