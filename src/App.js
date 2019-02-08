import React from 'react';
import Tilt from './Tilt';
import NameChanger from './NameChanger';
import './App.css';

const App = () => (
  <div className="app">
    <iframe 
      height="20" 
      scrolling="no" 
      title="soundcloud player"
      frameBorder="no" 
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/540479166&color=%23ff5500&inverse=true&auto_play=false&show_user=true" 
    />
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
      <span>for booking&nbsp;</span>
        <a href="tel:818-564-8318">
          <span role="img" aria-label="cellphone">&nbsp;📱&nbsp;</span> 
          telephone
        </a>  
        <a className="email" title="EL4D.music@gmail.com" href="mailto:EL4D.music@gmail.com">
          <span role="img" aria-label="email">&nbsp;💬&nbsp;</span> 
          email
        </a>
    </footer>
  </div>
);

export default App;
