import React, { Component } from 'react';
import Tilt from './Tilt';
import NameChanger from './NameChanger';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <figure>
          <Tilt>
            <img src="el4d.png" alt="el4d music" />
          </Tilt>
          <figcaption>
            <h1>EL4D</h1>
            <div className="aka-container">
              <span className="aka">
                AKA 
              </span>
              <NameChanger />
            </div>
          </figcaption>
        </figure>
        
        <footer>
          for booking&nbsp;
            <span className="cell">
              818.564.8318
            </span>  
            <span className="email">
              elad@mamnoon.com
            </span>
        </footer>
      </div>
    );
  }
}

export default App;
