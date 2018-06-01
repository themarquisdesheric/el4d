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
          <span>for booking </span>
            <a href="tel:818-564-8318">
              <span role="img" aria-label="cellphone"> 📱</span> 
              call
            </a>
            
            <a className="email" title="el4dizzle@el4d.com" href="mailto:el4dizzle@el4d.com">
              <span role="img" aria-label="email"> 💬</span> 
              email
            </a>

            <a className="soundcloud" href="https://soundcloud.com/user-120924984" targt="_blank">
              <span role="img" aria-label="soundcloud">
                <SoundCloudIcon /> listen
              </span>
            </a>
        </footer>
      </div>
    );
  }
}

export default App;
