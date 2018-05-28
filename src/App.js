import React, { Component } from 'react';
import SoundCloudIcon from 'react-icons/lib/fa/soundcloud';
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
          for booking 
            <a href="tel:818-564-8318">
              <span role="img" aria-label="cellphone"> 📱</span> 
              818.564.8318
            </a>
            <span className="middot-divider">&nbsp;&middot;&nbsp;</span>
            
            <a className="email" href="mailto:elad@mamnoonrestaurant.com">
              💬 elad@mamnoonrestaurant.com
            </a>
        </footer>
        <a className="soundcloud">
          <SoundCloudIcon />
        </a>
      </div>
    );
  }
}

export default App;
