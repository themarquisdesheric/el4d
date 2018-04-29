import React, { Component } from 'react';
import NameChanger from './NameChanger';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <figure>
          <img src="el4d.png" alt="el4d music" />

          <figcaption>
            <h1>EL4D</h1>
            <div>
              AKA
              <NameChanger />
            </div>

          </figcaption>
        </figure>
        
        <footer>
          For booking, call
            <span>
              818.564.8318
            </span> 
            or e-mail 
            <span>
              elad@mamnoon.com
            </span>
        </footer>
      </div>
    );
  }
}

export default App;
